"use client";

import { useEffect, useState } from "react";
import {
  EXPOSURE_14U_DIVISION_NAME,
  EXPOSURE_EVENT_ID,
  EXPOSURE_EVENT_LABEL,
  type ExposureStatisticsResponse,
  type ExposureStatCategory,
} from "@/lib/exposure";

const EXPOSURE_BASE = "https://basketball.exposureevents.com";
/** Matches Exposure widget default before "Show More". */
const LEADERS_PREVIEW = 10;
const REFRESH_MS = 60_000;

export type LeaderboardMode = "daily" | "season";

type ExposureLeaderboardEmbedProps = {
  mode?: LeaderboardMode;
};

function SkeletonBar({ className }: { className?: string }) {
  return (
    <div
      className={`relative overflow-hidden rounded-md bg-gradient-to-r from-stone-300/95 via-amber-50/40 to-stone-300/95 shadow-[inset_0_1px_0_rgba(255,255,255,0.65)] ${className ?? ""}`}
    >
      <div className="absolute inset-y-0 left-0 w-[130%] animate-shimmer-slide bg-gradient-to-r from-transparent via-white/70 to-transparent" />
    </div>
  );
}

function EmbedSkeleton() {
  return (
    <div className="relative overflow-hidden rounded-xl border border-black/[0.08] bg-gradient-to-b from-paper to-panel/80 px-4 py-5 shadow-cardInner sm:px-5 sm:py-6">
      <div className="mb-5 flex items-center justify-between gap-3 sm:mb-6">
        <SkeletonBar className="h-9 w-[42%] max-w-[200px]" />
        <SkeletonBar className="h-9 w-10 shrink-0 sm:w-11" />
      </div>
      <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 xl:grid-cols-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="space-y-3 rounded-lg border border-line/80 bg-panel/50 p-3">
            <SkeletonBar className="mx-auto h-4 w-24" />
            {Array.from({ length: 5 }).map((__, j) => (
              <div key={j} className="flex items-center gap-2">
                <SkeletonBar className="h-2.5 flex-1" />
                <SkeletonBar className="h-2.5 w-10" />
              </div>
            ))}
          </div>
        ))}
      </div>
      <p className="mt-6 text-center font-headline text-[10px] font-semibold uppercase tracking-[0.3em] text-muted sm:mt-7 sm:text-[11px] sm:tracking-[0.34em]">
        Loading leaderboard
      </p>
    </div>
  );
}

function WaitingForTip() {
  return (
    <div className="rounded-xl border border-black/[0.08] bg-panel/40 px-4 py-10 text-center sm:px-6 sm:py-12">
      <p className="font-headline text-xs font-extrabold uppercase tracking-[0.28em] text-ink sm:text-sm">
        Leaders unlock after tip
      </p>
      <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted">
        Nike Nationals 14 Jr. EYBL stats will fill here live once games tip Friday at McCormick Place.
        Schedule, standings, and matchups below are already live.
      </p>
      <a
        href={`https://basketball.exposureevents.com/widgets/v1/statistics?eventid=${EXPOSURE_EVENT_ID}`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-flex rounded-full bg-gold px-4 py-2 font-headline text-[10px] font-bold uppercase tracking-[0.18em] text-ink"
      >
        Open Exposure stats
      </a>
    </div>
  );
}

function ErrorState() {
  return (
    <div className="rounded-xl border border-black/[0.08] bg-panel/40 px-4 py-8 text-center">
      <p className="text-sm font-semibold text-ink">Couldn’t reach Exposure stats</p>
      <p className="mt-2 text-xs text-muted">Check connection and try refreshing the page.</p>
    </div>
  );
}

function StatCategoryCard({
  category,
  expanded,
}: {
  category: ExposureStatCategory;
  expanded: boolean;
}) {
  const leaders = expanded ? category.Value : category.Value.slice(0, LEADERS_PREVIEW);

  return (
    <div className="flex flex-col overflow-hidden rounded-lg border border-black/[0.1] bg-paper shadow-cardInner">
      <div className="border-b border-black/[0.08] bg-panel/70 px-3 py-2.5 text-center">
        <p className="font-headline text-[11px] font-extrabold uppercase tracking-[0.14em] text-ink sm:text-xs">
          {category.Name}
        </p>
        <p className="mt-0.5 font-headline text-[9px] font-bold uppercase tracking-[0.22em] text-muted">
          {category.Abbr}
        </p>
      </div>
      <ul className="divide-y divide-line/80 px-2 py-1">
        {leaders.map((leader, index) => (
          <li key={`${category.Abbr}-${leader.Name}-${leader.Display}-${index}`}>
            <a
              href={`${EXPOSURE_BASE}${leader.PlayerUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start justify-between gap-2 px-1.5 py-2 transition hover:bg-panel/60"
            >
              <span className="min-w-0 flex-1">
                <span className="block truncate text-xs font-semibold text-ink group-hover:text-ink/80 sm:text-sm">
                  {leader.Name}
                </span>
                <span className="mt-0.5 block truncate text-[10px] text-muted sm:text-[11px]">
                  {leader.TeamName.replace(/ 14 Jr\. EYBL$/, "")}
                </span>
              </span>
              <span className="shrink-0 pt-0.5 font-headline text-xs font-extrabold tabular-nums text-ink sm:text-sm">
                {leader.Display}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function LeaderboardGrid({ data, updatedAt }: { data: ExposureStatisticsResponse; updatedAt: Date }) {
  const [expanded, setExpanded] = useState(false);

  if (!data.HasStatistics || data.StatisticSummaries.length === 0) {
    return <WaitingForTip />;
  }

  const updatedLabel = updatedAt.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
  const maxRows = Math.max(...data.StatisticSummaries.map((c) => c.Value.length), 0);
  const canShowMore = maxRows > LEADERS_PREVIEW;

  return (
    <div>
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2 border-b border-black/[0.08] pb-3 sm:mb-5">
        <p className="font-headline text-[10px] font-bold uppercase tracking-[0.28em] text-muted sm:text-[11px] sm:tracking-[0.32em]">
          {EXPOSURE_EVENT_LABEL} · Event {EXPOSURE_EVENT_ID}
        </p>
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-headline text-[9px] font-semibold uppercase tracking-[0.18em] text-muted sm:text-[10px]">
            Updated {updatedLabel}
          </span>
          <span className="inline-flex rounded-full border border-gold/45 bg-ink px-3 py-1 font-headline text-[10px] font-extrabold uppercase tracking-[0.2em] text-gold-bright sm:text-[11px]">
            {EXPOSURE_14U_DIVISION_NAME}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 xl:grid-cols-6">
        {data.StatisticSummaries.map((category) => (
          <StatCategoryCard key={category.Abbr} category={category} expanded={expanded} />
        ))}
      </div>

      {canShowMore ? (
        <div className="mt-5 flex justify-center sm:mt-6">
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="rounded-full border border-black/[0.12] bg-paper px-5 py-2.5 font-headline text-[11px] font-extrabold uppercase tracking-[0.2em] text-ink transition hover:border-gold/50 hover:bg-gold/10"
          >
            {expanded ? "Show Less" : `Show More · Top ${maxRows}`}
          </button>
        </div>
      ) : null}

      <p className="mt-5 text-center text-[10px] font-medium text-muted sm:mt-6 sm:text-[11px]">
        Official statistics via{" "}
        <a
          href="https://basketball.exposureevents.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-ink underline decoration-gold/50 underline-offset-2 hover:text-ink/80"
        >
          Exposure Basketball Events
        </a>
      </p>
    </div>
  );
}

export function ExposureLeaderboardEmbed({ mode = "season" }: ExposureLeaderboardEmbedProps) {
  void mode;
  const [phase, setPhase] = useState<"loading" | "ready" | "error">("loading");
  const [data, setData] = useState<ExposureStatisticsResponse | null>(null);
  const [updatedAt, setUpdatedAt] = useState<Date | null>(null);

  useEffect(() => {
    let cancelled = false;
    let timeoutId = 0;
    let intervalId = 0;

    async function loadLeaders(isRefresh = false) {
      try {
        const response = await fetch("/api/exposure/statistics", { cache: "no-store" });
        if (!response.ok) throw new Error("statistics fetch failed");
        const payload = (await response.json()) as ExposureStatisticsResponse;
        if (cancelled) return;
        window.clearTimeout(timeoutId);
        setData(payload);
        setUpdatedAt(new Date());
        setPhase("ready");
      } catch {
        if (!cancelled && !isRefresh) {
          window.clearTimeout(timeoutId);
          setPhase("error");
        }
      }
    }

    setPhase("loading");
    timeoutId = window.setTimeout(() => {
      if (!cancelled) setPhase((p) => (p === "loading" ? "error" : p));
    }, 12000);

    void loadLeaders();
    intervalId = window.setInterval(() => {
      void loadLeaders(true);
    }, REFRESH_MS);

    return () => {
      cancelled = true;
      window.clearTimeout(timeoutId);
      window.clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="relative min-h-[280px] w-full">
      {phase === "loading" ? (
        <div className="absolute inset-0 z-10 bg-paper/95 backdrop-blur-[2px]">
          <EmbedSkeleton />
        </div>
      ) : null}

      {phase === "error" ? <ErrorState /> : null}

      {phase === "ready" && data && updatedAt ? <LeaderboardGrid data={data} updatedAt={updatedAt} /> : null}
    </div>
  );
}
