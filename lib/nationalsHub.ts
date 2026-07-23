import { stripDivisionSuffix } from "./hubConfig";
import type { ExposureStatisticsResponse } from "./exposure";
import { exposureApiGet, mapOfficialStatistics } from "./exposureServer";
import type { HubGame, HubPool, NationalsHubPayload } from "./nationalsTypes";

export type { HubGame, NationalsHubPayload } from "./nationalsTypes";

export type HubBuildOptions = {
  eventId: number;
  divisionId: number;
  divisionName: string;
};

type RawGame = {
  Id: number;
  Date?: string;
  Time?: string;
  Round?: number;
  GameCastUrl?: string;
  VenueCourt?: {
    Court?: { Name?: string; Abbr?: string };
    Venue?: { Name?: string; Abbr?: string };
  };
  AwayTeam?: {
    Name?: string;
    Pool?: string;
    PoolName?: string;
    Score?: number | null;
    TeamId?: number;
  };
  HomeTeam?: {
    Name?: string;
    Pool?: string;
    PoolName?: string;
    Score?: number | null;
    TeamId?: number;
  };
};

function parseGameSortKey(date: string, time: string): number {
  const parsed = Date.parse(`${date} ${time} GMT-5`);
  return Number.isNaN(parsed) ? 0 : parsed;
}

function mapGame(raw: RawGame): HubGame {
  const awayScore = raw.AwayTeam?.Score;
  const homeScore = raw.HomeTeam?.Score;
  const hasScores = awayScore != null && homeScore != null;
  const date = raw.Date ?? "";
  const time = raw.Time ?? "";

  return {
    id: raw.Id,
    date,
    time,
    court: raw.VenueCourt?.Court?.Name || raw.VenueCourt?.Court?.Abbr || "TBD",
    venue: raw.VenueCourt?.Venue?.Abbr || raw.VenueCourt?.Venue?.Name || "MCP",
    round: raw.Round ?? null,
    gameCastUrl: raw.GameCastUrl ?? null,
    away: {
      name: raw.AwayTeam?.Name ?? "TBD",
      pool: raw.AwayTeam?.PoolName || raw.AwayTeam?.Pool || "",
      score: awayScore ?? null,
      teamId: raw.AwayTeam?.TeamId ?? null,
    },
    home: {
      name: raw.HomeTeam?.Name ?? "TBD",
      pool: raw.HomeTeam?.PoolName || raw.HomeTeam?.Pool || "",
      score: homeScore ?? null,
      teamId: raw.HomeTeam?.TeamId ?? null,
    },
    status: hasScores ? "final" : "scheduled",
    sortKey: parseGameSortKey(date, time),
  };
}

async function fetchAllGames(eventId: number, divisionId: number): Promise<HubGame[]> {
  const games: HubGame[] = [];
  let page = 1;
  let total = Infinity;

  while (games.length < total && page <= 10) {
    const payload = await exposureApiGet(
      "/api/v1/games",
      `?eventid=${eventId}&divisionid=${divisionId}&pagesize=50&page=${page}`,
    );
    if (!payload) break;

    const results = (payload.Games?.Results ?? []) as RawGame[];
    total = Number(payload.Games?.Total ?? results.length);
    games.push(...results.map(mapGame));
    if (!results.length) break;
    page += 1;
  }

  return games.sort((a, b) => a.sortKey - b.sortKey);
}

async function fetchStandings(
  eventId: number,
  divisionId: number,
): Promise<NationalsHubPayload["standings"]> {
  const payload = await exposureApiGet(
    "/api/v1/standings",
    `?eventid=${eventId}&divisionid=${divisionId}&display=Pool`,
  );

  if (!payload) {
    return { columns: [], pools: [] };
  }

  const columns = ((payload.Columns ?? []) as Array<{ Name?: string; Abbr?: string }>).map((c) => ({
    name: c.Name ?? "",
    abbr: c.Abbr ?? "",
  }));

  const pools: HubPool[] = ((payload.Groups?.[0]?.List ?? []) as Array<{
    Name?: string;
    Participants?: Array<{
      Name?: string;
      Number?: string;
      Columns?: string[];
    }>;
  }>).map((pool) => ({
    name: pool.Name ?? "",
    teams: (pool.Participants ?? []).map((t) => ({
      name: t.Name ?? "—",
      seed: t.Number ?? "",
      wins: t.Columns?.[0] ?? "—",
      losses: t.Columns?.[1] ?? "—",
      pd: t.Columns?.[2] ?? "—",
    })),
  }));

  return { columns, pools };
}

async function fetchLeaders(
  eventId: number,
  divisionId: number,
): Promise<ExposureStatisticsResponse> {
  const payload = await exposureApiGet(
    "/api/v1/statistics",
    `?eventid=${eventId}&divisionid=${divisionId}&pagesize=50&categories=ppg,rpg,apg,spg,bpg,tpg`,
  );
  if (!payload) {
    return { HasStatistics: false, StatisticSummaries: [] };
  }
  return mapOfficialStatistics(payload, eventId);
}

function buildWatch(
  games: HubGame[],
  leaders: ExposureStatisticsResponse,
  divisionName: string,
): NationalsHubPayload["watch"] {
  const next = games.filter((g) => g.status === "scheduled").slice(0, 8);
  const opening = games.filter((g) => g.date.includes("7/24")).slice(0, 6);

  const matchups = (next.length ? next : opening).slice(0, 6).map((game) => ({
    game,
    why:
      game.away.pool && game.away.pool === game.home.pool
        ? `Pool ${game.away.pool} opener — early seeding implications on ${game.court}.`
        : `Cross-pool look at ${game.time} on ${game.court}.`,
  }));

  const ppg = leaders.StatisticSummaries.find((c) => c.Abbr === "PPG")?.Value ?? [];
  const apg = leaders.StatisticSummaries.find((c) => c.Abbr === "APG")?.Value ?? [];
  const spg = leaders.StatisticSummaries.find((c) => c.Abbr === "SPG")?.Value ?? [];

  const hotHand = ppg.slice(0, 5).map((p) => ({
    name: p.Name,
    team: stripDivisionSuffix(p.TeamName, divisionName),
    stat: p.Display,
    label: "PPG",
  }));

  const stockUp =
    ppg.length > 0
      ? ppg.slice(0, 3).map((p) => ({
          title: p.Name,
          detail: `${p.Display} PPG · ${stripDivisionSuffix(p.TeamName, divisionName)} — early scoring form.`,
        }))
      : opening.slice(0, 3).map((g) => ({
          title: `${g.home.name} vs ${g.away.name}`,
          detail: `Opening tip ${g.time} · Pool ${g.home.pool || g.away.pool || "—"} · ${g.court}`,
        }));

  const efficiency =
    apg.length || spg.length
      ? [
          ...apg.slice(0, 2).map((p) => ({
            name: p.Name,
            team: stripDivisionSuffix(p.TeamName, divisionName),
            value: p.Display,
            label: "APG",
          })),
          ...spg.slice(0, 2).map((p) => ({
            name: p.Name,
            team: stripDivisionSuffix(p.TeamName, divisionName),
            value: p.Display,
            label: "SPG",
          })),
        ]
      : [];

  return { matchups, stockUp, hotHand, efficiency };
}

export async function buildNationalsHub(
  options: HubBuildOptions,
): Promise<NationalsHubPayload> {
  const { eventId, divisionId, divisionName } = options;

  const [games, standings, leaders] = await Promise.all([
    fetchAllGames(eventId, divisionId),
    fetchStandings(eventId, divisionId),
    fetchLeaders(eventId, divisionId),
  ]);

  const now = Date.now();
  const scheduled = games.filter((g) => g.status === "scheduled");
  const finals = games.filter((g) => g.status === "final");

  const nextTips = scheduled.filter((g) => g.sortKey >= now - 30 * 60 * 1000).slice(0, 12);
  const fallbackTips = nextTips.length ? nextTips : scheduled.slice(0, 12);

  return {
    updatedAt: new Date().toISOString(),
    eventId,
    divisionId,
    games: {
      nextTips: fallbackTips,
      recentFinals: finals.slice(-8).reverse(),
      openingDay: games.filter((g) => g.date.includes("7/24")).slice(0, 12),
      total: games.length,
    },
    standings,
    leaders,
    watch: buildWatch(games, leaders, divisionName),
  };
}
