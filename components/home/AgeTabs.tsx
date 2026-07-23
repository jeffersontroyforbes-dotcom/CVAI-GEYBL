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
    <div className="age-tabs mx-auto max-w-6xl px-4 pt-3 sm:px-5 sm:pt-4">
      <p className="mb-2 font-headline text-[10px] font-bold uppercase tracking-[0.34em] text-muted">
        Age Group
      </p>
      <div className="flex flex-wrap gap-2">
        {circuit.ages.map((a) => {
          const active = a.age === age;
          return (
            <button
              key={a.age}
              type="button"
              onClick={() => onChange(a.age)}
              className={`rounded-full px-5 py-2.5 font-headline text-[11px] font-extrabold uppercase tracking-[0.2em] transition sm:text-xs ${
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
