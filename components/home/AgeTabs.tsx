"use client";

import type { HubAge, HubCircuitConfig } from "@/lib/hubConfig";

type AgeTabsProps = {
  circuit: HubCircuitConfig;
  age: HubAge;
  onChange: (age: HubAge) => void;
};

export function AgeTabs({ circuit, age, onChange }: AgeTabsProps) {
  if (circuit.ages.length <= 1) return null;

  return (
    <div className="age-tabs sticky top-[2.75rem] z-40 border-b border-black/[0.08] bg-matte/95 px-3 py-3 backdrop-blur-md sm:static sm:border-0 sm:bg-transparent sm:px-5 sm:py-5 sm:backdrop-blur-none">
      <div className="mx-auto max-w-6xl">
        <p className="mb-2.5 text-center font-headline text-[11px] font-extrabold uppercase tracking-[0.28em] text-ink sm:mb-3 sm:text-left sm:text-xs sm:tracking-[0.32em]">
          Select Age Group
        </p>
        <div
          className="grid gap-2"
          style={{ gridTemplateColumns: `repeat(${circuit.ages.length}, minmax(0, 1fr))` }}
          role="tablist"
          aria-label="Age group"
        >
          {circuit.ages.map((a) => {
            const active = a.age === age;
            return (
              <button
                key={a.age}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => onChange(a.age)}
                className={`min-h-[3.25rem] rounded-xl font-headline text-lg font-extrabold uppercase tracking-[0.12em] transition active:scale-[0.98] sm:min-h-[3.75rem] sm:rounded-2xl sm:text-2xl sm:tracking-[0.14em] ${
                  active
                    ? "bg-gold text-ink shadow-[0_0_28px_-6px_rgba(255,79,1,0.55)] ring-2 ring-gold-bright"
                    : "border-2 border-ink/15 bg-paper text-ink/55 hover:border-gold/50 hover:text-ink"
                }`}
              >
                {a.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
