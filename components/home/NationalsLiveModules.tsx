"use client";

import { useEffect, useState, type ReactNode } from "react";
import { ExposureAttribution } from "@/components/home/ExposureAttribution";
import type { HubAge, HubCircuitConfig } from "@/lib/hubConfig";
import type { HubGame, NationalsHubPayload } from "@/lib/nationalsTypes";

const REFRESH_MS = 60_000;

function useNationalsHub(circuitId: HubCircuitConfig["id"], age: HubAge) {
  const [data, setData] = useState<NationalsHubPayload | null>(null);
  const [phase, setPhase] = useState<"loading" | "ready" | "error">("loading");

  useEffect(() => {
    let cancelled = false;
    let intervalId = 0;

    async function load(isRefresh = false) {
      try {
        const res = await fetch(
          `/api/exposure/nationals?circuit=${circuitId}&age=${age}`,
          { cache: "no-store" },
        );
        if (!res.ok) throw new Error("hub fetch failed");
        const payload = (await res.json()) as NationalsHubPayload;
        if (cancelled) return;
        setData(payload);
        setPhase("ready");
      } catch {
        if (!cancelled && !isRefresh) setPhase("error");
      }
    }

    setPhase("loading");
    void load();
    intervalId = window.setInterval(() => void load(true), REFRESH_MS);

    return () => {
      cancelled = true;
      window.clearInterval(intervalId);
    };
  }, [circuitId, age]);

  return { data, phase };
}

function SectionShell({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-4 py-6 sm:px-5 sm:py-8" aria-labelledby={`${id}-heading`}>
      <p className="font-headline text-[10px] font-bold uppercase tracking-[0.42em] text-ink sm:text-[11px]">
        {eyebrow}
      </p>
      <h2
        id={`${id}-heading`}
        className="mt-1 font-headline text-2xl font-extrabold uppercase tracking-[0.08em] text-ink sm:text-3xl sm:tracking-[0.1em]"
      >
        {title}
      </h2>
      <div className="mt-4 sm:mt-5">{children}</div>
    </section>
  );
}

function GameRow({ game, showScore }: { game: HubGame; showScore?: boolean }) {
  return (
    <div className="flex flex-col gap-2 border-b border-black/[0.07] px-3 py-3 last:border-b-0 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-4">
      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between gap-2 sm:justify-start sm:gap-3">
          <span className="truncate text-sm font-semibold text-ink">{game.away.name}</span>
          {showScore && game.away.score != null ? (
            <span className="font-headline text-sm font-extrabold tabular-nums">{game.away.score}</span>
          ) : null}
        </div>
        <div className="mt-1 flex items-center justify-between gap-2 sm:justify-start sm:gap-3">
          <span className="truncate text-sm font-semibold text-ink">{game.home.name}</span>
          {showScore && game.home.score != null ? (
            <span className="font-headline text-sm font-extrabold tabular-nums">{game.home.score}</span>
          ) : null}
        </div>
      </div>
      <div className="shrink-0 text-left sm:text-right">
        <p className="font-headline text-[10px] font-bold uppercase tracking-[0.18em] text-muted">
          {game.time} · {game.court}
        </p>
        <p className="mt-0.5 text-[11px] text-muted">
          {game.date}
          {game.away.pool ? ` · Pool ${game.away.pool}` : ""}
        </p>
        {game.gameCastUrl ? (
          <a
            href={game.gameCastUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 inline-block text-[10px] font-bold uppercase tracking-[0.16em] text-ink underline decoration-gold/50 underline-offset-2"
          >
            GameCast
          </a>
        ) : null}
      </div>
    </div>
  );
}

function ScoreboardBlock({ data }: { data: NationalsHubPayload }) {
  const tips = data.games.nextTips.length ? data.games.nextTips : data.games.openingDay;
  const finals = data.games.recentFinals;

  return (
    <SectionShell id="scoreboard" eyebrow="Nike Nationals · 14U" title="Scoreboard & Next Tips">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="overflow-hidden rounded-2xl border border-black/[0.1] bg-paper shadow-liftCard">
          <div className="border-b border-black/[0.08] bg-panel/60 px-4 py-3">
            <p className="font-headline text-xs font-extrabold uppercase tracking-[0.28em] text-ink">
              Next Tips · {data.games.total} games loaded
            </p>
          </div>
          <div>
            {tips.length ? (
              tips.slice(0, 8).map((g) => <GameRow key={g.id} game={g} />)
            ) : (
              <p className="px-4 py-6 text-center text-sm text-muted">Schedule loading…</p>
            )}
          </div>
        </div>
        <div className="overflow-hidden rounded-2xl border border-black/[0.1] bg-paper shadow-liftCard">
          <div className="border-b border-black/[0.08] bg-panel/60 px-4 py-3">
            <p className="font-headline text-xs font-extrabold uppercase tracking-[0.28em] text-ink">
              Recent Finals
            </p>
          </div>
          <div>
            {finals.length ? (
              finals.map((g) => <GameRow key={g.id} game={g} showScore />)
            ) : (
              <p className="px-4 py-8 text-center text-sm text-muted">
                Finals will appear here as soon as tip-offs finish. Opening tip is Friday 9:00 AM CT.
              </p>
            )}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

function StandingsBlock({ data }: { data: NationalsHubPayload }) {
  const pools = data.standings.pools;

  return (
    <SectionShell id="standings" eyebrow="Pool Play" title="Pool Standings">
      <p className="mb-4 text-xs text-muted sm:text-sm">
        W · L · PD · 32 head-to-head pools · updates live after each game
      </p>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {pools.map((pool) => (
          <div
            key={pool.name}
            className="overflow-hidden rounded-xl border border-black/[0.1] bg-paper shadow-cardInner"
          >
            <div className="border-b border-black/[0.08] bg-ink px-2.5 py-2 text-center">
              <p className="font-headline text-[11px] font-extrabold uppercase tracking-[0.2em] text-gold-bright">
                Pool {pool.name}
              </p>
            </div>
            <ul className="divide-y divide-line/80">
              {pool.teams.map((t) => (
                <li key={t.name} className="px-2.5 py-2">
                  <p className="truncate text-[11px] font-semibold leading-tight text-ink sm:text-xs">
                    {t.name}
                  </p>
                  <p className="mt-0.5 font-headline text-[10px] font-bold tabular-nums tracking-wide text-muted">
                    {t.wins}-{t.losses}
                    {t.pd !== "-" ? ` · ${t.pd}` : ""}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}

function HotHandBlock({ data }: { data: NationalsHubPayload }) {
  const rows = data.watch.hotHand;

  return (
    <SectionShell id="hot-hand" eyebrow="Form Check" title="Daily Hot Hand">
      <div className="overflow-hidden rounded-2xl border border-black/[0.1] bg-paper shadow-liftCard">
        {rows.length ? (
          <ul className="divide-y divide-black/[0.07]">
            {rows.map((r, i) => (
              <li key={`${r.name}-${r.label}`} className="flex items-center gap-3 px-4 py-3.5 sm:px-5">
                <span className="w-6 font-headline text-xs font-extrabold text-muted">{i + 1}</span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold text-ink">{r.name}</p>
                  <p className="truncate text-[11px] text-muted">{r.team}</p>
                </div>
                <span className="font-headline text-sm font-extrabold tabular-nums text-ink">
                  {r.stat} <span className="text-[10px] text-muted">{r.label}</span>
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="px-4 py-8 text-center text-sm text-muted sm:px-6">
            Hot Hand unlocks after opening tip — tracking who is cooking today, not just event totals.
          </p>
        )}
      </div>
    </SectionShell>
  );
}

function MatchupRadarBlock({ data }: { data: NationalsHubPayload }) {
  return (
    <SectionShell id="matchups" eyebrow="Why Watch" title="Matchup Radar">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {data.watch.matchups.map(({ game, why }) => (
          <article
            key={game.id}
            className="rounded-2xl border border-black/[0.1] bg-paper p-4 shadow-liftCard ring-1 ring-black/[0.03]"
          >
            <p className="font-headline text-[10px] font-bold uppercase tracking-[0.22em] text-muted">
              {game.time} · {game.court}
            </p>
            <h3 className="mt-2 font-headline text-base font-extrabold uppercase leading-snug tracking-tight text-ink">
              {game.away.name}
              <span className="mx-1.5 text-muted">vs</span>
              {game.home.name}
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-muted">{why}</p>
            {game.gameCastUrl ? (
              <a
                href={game.gameCastUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex rounded-full bg-ink px-3 py-1.5 font-headline text-[10px] font-bold uppercase tracking-[0.18em] text-gold-bright"
              >
                Open GameCast
              </a>
            ) : null}
          </article>
        ))}
      </div>
    </SectionShell>
  );
}

function EfficiencyBlock({ data }: { data: NationalsHubPayload }) {
  const rows = data.watch.efficiency;

  return (
    <SectionShell id="efficiency" eyebrow="Beyond Counting Stats" title="Efficiency Board">
      <div className="overflow-hidden rounded-2xl border border-black/[0.1] bg-paper shadow-liftCard">
        {rows.length ? (
          <ul className="divide-y divide-black/[0.07]">
            {rows.map((r) => (
              <li key={`${r.name}-${r.label}`} className="flex items-center justify-between gap-3 px-4 py-3.5 sm:px-5">
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-ink">{r.name}</p>
                  <p className="truncate text-[11px] text-muted">{r.team}</p>
                </div>
                <span className="shrink-0 font-headline text-sm font-extrabold tabular-nums">
                  {r.value} <span className="text-[10px] text-muted">{r.label}</span>
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <div className="px-4 py-8 text-center sm:px-6">
            <p className="text-sm text-muted">
              Shooting efficiency (FG% / 3P% / FT%) will surface here when Exposure publishes those
              categories. Until then we spotlight playmaking and disruption (APG / SPG) as they
              populate.
            </p>
          </div>
        )}
      </div>
    </SectionShell>
  );
}

function StockWatchBlock({ data }: { data: NationalsHubPayload }) {
  return (
    <SectionShell id="watch-list" eyebrow="CVAI Signature" title="Watch List">
      <div className="overflow-hidden rounded-2xl border border-gold/40 bg-paper shadow-liftCard">
        <div className="border-b border-gold/30 bg-gold/15 px-4 py-3">
          <p className="font-headline text-xs font-extrabold uppercase tracking-[0.28em] text-ink">
            Rising · Names to Track
          </p>
        </div>
        <ul className="divide-y divide-black/[0.07]">
          {data.watch.stockUp.map((item) => (
            <li key={item.title} className="px-4 py-3.5 sm:px-5">
              <p className="text-sm font-semibold text-ink">{item.title}</p>
              <p className="mt-1 text-xs leading-relaxed text-muted">{item.detail}</p>
            </li>
          ))}
        </ul>
      </div>
    </SectionShell>
  );
}

function ModulesSkeleton() {
  return (
    <div className="mx-auto max-w-6xl space-y-6 px-4 py-8 sm:px-5">
      {Array.from({ length: 3 }).map((_, i) => (
        <div
          key={i}
          className="h-48 animate-pulse rounded-2xl border border-black/[0.08] bg-gradient-to-r from-stone-200/80 via-amber-50/40 to-stone-200/80"
        />
      ))}
    </div>
  );
}

export function NationalsLiveModules({
  circuitId,
  age,
}: {
  circuitId: HubCircuitConfig["id"];
  age: HubAge;
}) {
  const { data, phase } = useNationalsHub(circuitId, age);

  if (phase === "loading") return <ModulesSkeleton />;
  if (phase === "error" || !data) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-10 text-center text-sm text-muted sm:px-5">
        Nationals live modules unavailable — check Exposure API connectivity.
      </div>
    );
  }

  return (
    <>
      <ScoreboardBlock data={data} />
      <StandingsBlock data={data} />
      <HotHandBlock data={data} />
      <MatchupRadarBlock data={data} />
      <EfficiencyBlock data={data} />
      <StockWatchBlock data={data} />
      <div className="mx-auto max-w-6xl px-4 pb-2 pt-1 sm:px-5">
        <ExposureAttribution className="text-center" />
      </div>
    </>
  );
}
