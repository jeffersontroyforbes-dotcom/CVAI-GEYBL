"use client";

import { useEffect, useState } from "react";
import {
  EXPOSURE_14U_DIVISION_NAME,
  EXPOSURE_VEGAS_EVENT_ID,
  type ExposureStatisticsResponse,
  type ExposureStatCategory,
} from "@/lib/exposure";

const EXPOSURE_BASE = "https://basketball.exposureevents.com";
const LEADERS_PER_CATEGORY = 5;

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

function FallbackTable() {
  const rows = [
    { rank: "1", left: "—", right: "—" },
    { rank: "2", left: "—", right: "—" },
    { rank: "3", left: "—", right: "—" },
    { rank: "4", left: "—", right: "—" },
    { rank: "5", left: "—", right: "—" },
  ];

  return (
    <div className="p-3">
      <p className="mb-3 text-center text-xs font-semibold tracking-wide text-muted">
        Leaderboard unavailable — verify embed URL or connectivity.
      </p>
      <div className="divide-y divide-line rounded-xl border border-line bg-panel/40">
        {rows.map((r) => (
          <div key={r.rank} className="flex items-center gap-3 px-3 py-3 text-sm">
            <span className="w-6 text-xs font-semibold text-dim">{r.rank}</span>
            <span className="flex-1 truncate text-muted">{r.left}</span>
            <span className="tabular-nums text-xs font-semibold text-muted">{r.right}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function StatCategoryCard({ category }: { category: ExposureStatCategory }) {
  const leaders = category.Value.slice(0, LEADERS_PER_CATEGORY);

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
        {leaders.map((leader) => (
          <li key={`${category.Abbr}-${leader.Name}-${leader.Display}`}>
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

function LeaderboardGrid({ data }: { data: ExposureStatisticsResponse }) {
  if (!data.HasStatistics || data.StatisticSummaries.length === 0) {
    return <FallbackTable />;
  }

  return (
    <div>
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2 border-b border-black/[0.08] pb-3 sm:mb-5">
        <p className="font-headline text-[10px] font-bold uppercase tracking-[0.28em] text-muted sm:text-[11px] sm:tracking-[0.32em]">
          Vegas Session 3 · Event {EXPOSURE_VEGAS_EVENT_ID}
        </p>
        <span className="inline-flex rounded-full border border-gold/45 bg-ink px-3 py-1 font-headline text-[10px] font-extrabold uppercase tracking-[0.2em] text-gold-bright sm:text-[11px]">
          {EXPOSURE_14U_DIVISION_NAME}
        </span>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 xl:grid-cols-6">
        {data.StatisticSummaries.map((category) => (
          <StatCategoryCard key={category.Abbr} category={category} />
        ))}
      </div>

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
  const [phase, setPhase] = useState<"loading" | "ready" | "fallback">("loading");
  const [data, setData] = useState<ExposureStatisticsResponse | null>(null);

  useEffect(() => {
    let cancelled = false;
    const timeoutId = window.setTimeout(() => {
      if (!cancelled) setPhase((p) => (p === "loading" ? "fallback" : p));
    }, 12000);

    void (async () => {
      try {
        const response = await fetch("/api/exposure/statistics");
        if (!response.ok) throw new Error("statistics fetch failed");
        const payload = (await response.json()) as ExposureStatisticsResponse;
        if (cancelled) return;
        window.clearTimeout(timeoutId);
        setData(payload);
        setPhase("ready");
      } catch {
        if (!cancelled) {
          window.clearTimeout(timeoutId);
          setPhase("fallback");
        }
      }
    })();

    return () => {
      cancelled = true;
      window.clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="relative min-h-[500px] w-full">
      {phase === "loading" ? (
        <div className="absolute inset-0 z-10 bg-paper/95 backdrop-blur-[2px]">
          <EmbedSkeleton />
        </div>
      ) : null}

      {phase === "fallback" ? <FallbackTable /> : null}

      {phase === "ready" && data ? <LeaderboardGrid data={data} /> : null}
    </div>
  );
}
