"use client";

import { useEffect, useState } from "react";
import { ExposureAttribution } from "@/components/home/ExposureAttribution";
import type { HubAge, HubCircuitConfig } from "@/lib/hubConfig";
import { stripDivisionSuffix } from "@/lib/hubConfig";
import type { ExposureStatisticsResponse, ExposureStatCategory } from "@/lib/exposure";

const EXPOSURE_BASE = "https://basketball.exposureevents.com";
const LEADERS_PREVIEW = 10;
const REFRESH_MS = 60_000;

type ExposureLeaderboardEmbedProps = {
  circuitId: HubCircuitConfig["id"];
  age: HubAge;
  eventLabel: string;
  eventId: number;
  divisionName: string;
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

function WaitingForTip({ eventId }: { eventId: number }) {
  return (
    <div className="rounded-xl border border-black/[0.08] bg-panel/40 px-4 py-5 text-center sm:px-5 sm:py-6">
      <p className="font-headline text-xs font-extrabold uppercase tracking-[0.28em] text-ink sm:text-sm">
        Leaders unlock after tip
      </p>
      <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-muted">
        Stats fill live once games tip. Schedule &amp; standings below are already live.
      </p>
      <a
        href={`https://basketball.exposureevents.com/widgets/v1/statistics?eventid=${eventId}`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex rounded-full bg-gold px-4 py-2 font-headline text-[10px] font-bold uppercase tracking-[0.18em] text-ink"
      >
        Open Exposure stats
      </a>
    </div>
  );
}

function ErrorState() {
  return (
    <div className="rounded-xl border border-black/[0.08] bg-panel/40 px-4 py-8 text-center">
      <p className="text-sm font-semibold text-ink">Couldn&apos;t reach Exposure stats</p>
      <p className="mt-2 text-xs text-muted">Check connection and try refreshing the page.</p>
    </div>
  );
}

function StatCategoryCard({
  category,
  expanded,
  divisionName,
}: {
  category: ExposureStatCategory;
  expanded: boolean;
  divisionName: string;
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
                  {stripDivisionSuffix(leader.TeamName, divisionName)}
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

function LeaderboardGrid({
  data,
  updatedAt,
  eventLabel,
  eventId,
  divisionName,
}: {
  data: ExposureStatisticsResponse;
  updatedAt: Date;
  eventLabel: string;
  eventId: number;
  divisionName: string;
}) {
  const [expanded, setExpanded] = useState(false);

  if (!data.HasStatistics || data.StatisticSummaries.length === 0) {
    return <WaitingForTip eventId={eventId} />;
  }

  const updatedLabel = updatedAt.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
  const maxRows = Math.max(...data.StatisticSummaries.map((c) => c.Value.length), 0);
  const canShowMore = maxRows > LEADERS_PREVIEW;

  return (
    <div>
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2 border-b border-black/[0.08] pb-3 sm:mb-5">
        <p className="font-headline text-[10px] font-bold uppercase tracking-[0.28em] text-muted sm:text-[11px] sm:tracking-[0.32em]">
          {eventLabel} · Event {eventId}
        </p>
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-headline text-[9px] font-semibold uppercase tracking-[0.18em] text-muted sm:text-[10px]">
            Updated {updatedLabel}
          </span>
          <span className="inline-flex rounded-full border border-gold/45 bg-ink px-3 py-1 font-headline text-[10px] font-extrabold uppercase tracking-[0.2em] text-gold-bright sm:text-[11px]">
            {divisionName}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 xl:grid-cols-6">
        {data.StatisticSummaries.map((category) => (
          <StatCategoryCard
            key={category.Abbr}
            category={category}
            expanded={expanded}
            divisionName={divisionName}
          />
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

      <ExposureAttribution className="mt-5 text-center sm:mt-6" />
    </div>
  );
}

export function ExposureLeaderboardEmbed({
  circuitId,
  age,
  eventLabel,
  eventId,
  divisionName,
}: ExposureLeaderboardEmbedProps) {
  const [phase, setPhase] = useState<"loading" | "ready" | "error">("loading");
  const [data, setData] = useState<ExposureStatisticsResponse | null>(null);
  const [updatedAt, setUpdatedAt] = useState<Date | null>(null);

  useEffect(() => {
    let cancelled = false;
    let timeoutId = 0;
    let intervalId = 0;

    async function loadLeaders(isRefresh = false) {
      try {
        const response = await fetch(
          `/api/exposure/statistics?circuit=${circuitId}&age=${age}`,
          { cache: "no-store" },
        );
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
  }, [circuitId, age]);

  return (
    <div className="relative min-h-[280px] w-full">
      {phase === "loading" ? (
        <div className="absolute inset-0 z-10 bg-paper/95 backdrop-blur-[2px]">
          <EmbedSkeleton />
        </div>
      ) : null}

      {phase === "error" ? <ErrorState /> : null}

      {phase === "ready" && data && updatedAt ? (
        <LeaderboardGrid
          data={data}
          updatedAt={updatedAt}
          eventLabel={eventLabel}
          eventId={eventId}
          divisionName={divisionName}
        />
      ) : null}
    </div>
  );
}
