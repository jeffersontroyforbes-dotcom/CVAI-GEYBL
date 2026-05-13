"use client";

import { useEffect, useMemo, useState } from "react";

const SCRIPT_ID = "exp.widgets";
const SCRIPT_SRC = "https://basketball.exposureevents.com/scripts/exposure.widgets.min.js";

export type LeaderboardMode = "daily" | "season";

type WidgetConfig = {
  containerId: string;
  dataHref: string;
  dataHeight: string;
};

/**
 * Exposure statistics widget. Both modes use the same event embed until a distinct daily URL is confirmed.
 */
function getExposureWidget(mode: LeaderboardMode): WidgetConfig {
  void mode;
  return {
    containerId: "exp-statistics-268314",
    dataHref: "https://basketball.exposureevents.com/widgets/v1/statistics?eventid=268314",
    dataHeight: "500px",
  };
}

function loadExposureScript(): Promise<void> {
  return new Promise((resolve, reject) => {
    const existing = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null;
    if (existing) {
      if (existing.dataset.loaded === "1") {
        resolve();
        return;
      }
      existing.addEventListener("load", () => resolve(), { once: true });
      existing.addEventListener(
        "error",
        () => reject(new Error("Exposure script failed")),
        { once: true },
      );
      return;
    }

    const js = document.createElement("script");
    js.id = SCRIPT_ID;
    js.async = true;
    js.src = SCRIPT_SRC;
    js.addEventListener("load", () => {
      js.dataset.loaded = "1";
      resolve();
    });
    js.addEventListener("error", () => reject(new Error("Exposure script failed")));
    document.body.appendChild(js);
  });
}

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
      <div className="space-y-3.5 sm:space-y-4">
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} className="flex items-center gap-3 sm:gap-4">
            <SkeletonBar className="h-2.5 w-7 shrink-0 sm:w-8" />
            <SkeletonBar className="h-2.5 flex-1" />
            <SkeletonBar className="h-2.5 w-12 shrink-0 sm:w-14" />
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

type ExposureLeaderboardEmbedProps = {
  mode?: LeaderboardMode;
};

export function ExposureLeaderboardEmbed({ mode = "season" }: ExposureLeaderboardEmbedProps) {
  const cfg = useMemo(() => getExposureWidget(mode), [mode]);
  const [phase, setPhase] = useState<"loading" | "ready" | "fallback">("loading");

  useEffect(() => {
    let cancelled = false;
    let timeoutId = 0;

    const invalid =
      !cfg.dataHref.includes("eventid=") || cfg.dataHref.toUpperCase().includes("REPLACE_ME");

    if (invalid) {
      setPhase("fallback");
      return;
    }

    setPhase("loading");

    timeoutId = window.setTimeout(() => {
      if (!cancelled) setPhase((p) => (p === "loading" ? "fallback" : p));
    }, 12000);

    void (async () => {
      try {
        await loadExposureScript();
        if (cancelled) return;
        await new Promise((r) => setTimeout(r, 50));
        if (cancelled) return;
        window.clearTimeout(timeoutId);
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
  }, [cfg.containerId, cfg.dataHref]);

  const showEmbed = phase !== "fallback";

  return (
    <div className="relative min-h-[500px] w-full">
      {phase === "loading" ? (
        <div className="absolute inset-0 z-10 bg-paper/95 backdrop-blur-[2px]">
          <EmbedSkeleton />
        </div>
      ) : null}

      {phase === "fallback" ? <FallbackTable /> : null}

      {showEmbed ? (
        <div
          key={cfg.dataHref}
          id={cfg.containerId}
          data-href={cfg.dataHref}
          data-responsive="true"
          data-width="100%"
          data-height={cfg.dataHeight}
          className="min-h-[500px] w-full"
        />
      ) : null}
    </div>
  );
}
