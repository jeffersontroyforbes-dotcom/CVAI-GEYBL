import type { ExposureStatisticsResponse } from "./exposure";

export type HubGameTeam = {
  name: string;
  pool: string;
  score: number | null;
  teamId: number | null;
};

export type HubGame = {
  id: number;
  date: string;
  time: string;
  court: string;
  venue: string;
  round: number | null;
  gameCastUrl: string | null;
  away: HubGameTeam;
  home: HubGameTeam;
  status: "scheduled" | "final" | "live";
  sortKey: number;
};

export type HubStandingTeam = {
  name: string;
  seed: string;
  wins: string;
  losses: string;
  pd: string;
};

export type HubPool = {
  name: string;
  teams: HubStandingTeam[];
};

export type NationalsHubPayload = {
  updatedAt: string;
  eventId: number;
  divisionId: number;
  games: {
    nextTips: HubGame[];
    recentFinals: HubGame[];
    openingDay: HubGame[];
    total: number;
  };
  standings: {
    columns: Array<{ name: string; abbr: string }>;
    pools: HubPool[];
  };
  leaders: ExposureStatisticsResponse;
  watch: {
    matchups: Array<{
      game: HubGame;
      why: string;
    }>;
    stockUp: Array<{ title: string; detail: string }>;
    stockDown: Array<{ title: string; detail: string }>;
    hotHand: Array<{ name: string; team: string; stat: string; label: string }>;
    efficiency: Array<{ name: string; team: string; value: string; label: string }>;
  };
};
