import { ExposureLeaderboardEmbed } from "./ExposureLeaderboardEmbed";
import type { HubAge, HubCircuitConfig } from "@/lib/hubConfig";
import { getDivision } from "@/lib/hubConfig";

type LiveLeadersSectionProps = {
  circuit: HubCircuitConfig;
  age: HubAge;
};

export function LiveLeadersSection({ circuit, age }: LiveLeadersSectionProps) {
  const division = getDivision(circuit, age);

  return (
    <section
      id="leaders"
      className="mx-auto max-w-6xl px-4 pb-8 pt-1 sm:px-5 sm:pb-10 sm:pt-2"
      aria-labelledby="live-leaders-heading"
    >
      <div className="flex flex-col gap-1">
        <p className="font-headline text-[10px] font-bold uppercase tracking-[0.42em] text-ink sm:text-[11px] sm:tracking-[0.46em]">
          {circuit.eventLabel.toUpperCase()}
        </p>
        <div className="flex flex-wrap items-end justify-between gap-3">
          <h2
            id="live-leaders-heading"
            className="font-headline text-[2.15rem] font-extrabold uppercase leading-[0.95] tracking-[0.06em] text-ink sm:text-[2.65rem] sm:tracking-[0.08em] md:text-5xl md:tracking-[0.1em]"
          >
            LIVE LEADERS
          </h2>
        </div>
      </div>

      <div className="mt-4 sm:mt-5">
        <span
          className="inline-flex rounded-full bg-gold px-5 py-2.5 font-headline text-[10px] font-bold uppercase tracking-[0.2em] text-ink shadow-[inset_0_1px_0_rgba(255,255,255,0.45),0_0_26px_-6px_rgba(255, 79, 1,0.55)] ring-1 ring-gold-bright sm:px-6 sm:py-3 sm:text-[11px] sm:tracking-[0.24em]"
          aria-label="Event leaders"
        >
          {division.label} · Event Leaders
        </span>
      </div>

      <div className="mt-5 overflow-hidden rounded-2xl border border-black/[0.14] bg-paper shadow-liftCard ring-1 ring-black/[0.06] sm:mt-6 sm:rounded-[1.25rem]">
        <div className="flex items-center justify-between gap-3 border-b border-black/[0.1] bg-gradient-to-r from-paper via-panel/60 to-paper px-4 py-4 sm:px-5 sm:py-4">
          <div className="flex min-w-0 items-center gap-3">
            <span className="relative flex h-2.5 w-2.5 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-bright/60 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-gold shadow-[0_0_0_3px_rgba(255, 79, 1,0.35),0_0_22px_rgba(255, 106, 40,0.55)]" />
            </span>
            <p className="truncate font-headline text-xs font-extrabold uppercase tracking-[0.32em] text-ink sm:text-sm sm:tracking-[0.34em]">
              CVAI LEADERBOARD
            </p>
          </div>
          <span className="inline-flex shrink-0 items-center gap-2 rounded-md border border-gold/55 bg-ink px-3 py-1.5 font-headline text-[10px] font-extrabold uppercase tracking-[0.28em] text-gold-bright shadow-[0_0_24px_-6px_rgba(255, 79, 1,0.45),inset_0_1px_0_rgba(255,255,255,0.08)] sm:px-3.5 sm:text-[11px] sm:tracking-[0.3em]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-bright/70 opacity-80" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-gold-bright shadow-[0_0_12px_rgba(255, 106, 40,0.9)]" />
            </span>
            LIVE
          </span>
        </div>

        <div className="p-3 sm:p-5">
          <ExposureLeaderboardEmbed
            circuitId={circuit.id}
            age={age}
            eventLabel={circuit.eventLabel}
            eventId={circuit.eventId}
            divisionName={division.divisionName}
          />
        </div>
      </div>
    </section>
  );
}
