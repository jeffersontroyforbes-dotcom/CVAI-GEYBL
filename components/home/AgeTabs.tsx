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
    <div className="age-tabs mx-auto max-w-6xl px-3 pt-2 sm:px-5 sm:pt-4">
      <p className="mb-1.5 font-headline text-[9px] font-bold uppercase tracking-[0.28em] text-muted sm:mb-2 sm:text-[10px] sm:tracking-[0.34em]">
        Age Group
      </p>
      <div className="flex flex-nowrap gap-1.5 overflow-x-auto scrollbar-none sm:gap-2">
        {circuit.ages.map((a) => {
          const active = a.age === age;
          return (
            <button
              key={a.age}
              type="button"
              onClick={() => onChange(a.age)}
              className={`shrink-0 rounded-full px-3.5 py-1.5 font-headline text-[10px] font-extrabold uppercase tracking-[0.14em] transition sm:px-5 sm:py-2.5 sm:text-xs sm:tracking-[0.2em] ${
                active
                  ? "bg-gold text-ink ring-1 ring-gold-bright"
                  : "border border-black/[0.12] bg-paper text-ink hover:border-gold/45"
              }`}
            >
              {a.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
