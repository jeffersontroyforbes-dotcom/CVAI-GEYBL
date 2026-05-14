type FeaturedPlayer = string;

type MatchupPreview = {
  when: string;
  venue: string;
  a: { name: string; tag: string };
  b: { name: string; tag: string };
  /** Optional editorial framing (primetime, matchup story, etc.) */
  why?: string;
  featured: FeaturedPlayer[];
};

const matchups: MatchupPreview[] = [
  {
    when: "Friday · 4:00 PM CDT",
    venue: "Court 41",
    a: { name: "Philadelphia Rise JR 14", tag: "RISE" },
    b: { name: "All Ohio Red JR 14", tag: "OH RED" },
    why: "Philadelphia Rise and All Ohio Red bring one of the most talent-rich guard matchups of the opening slate. Ayla Cromedy headlines a Rise group built on pace, pressure, and transition scoring, while Nylah Quattlebaum and Mia Lawson give All Ohio Red multiple creators capable of controlling tempo late in possessions. Reign Harris adds another high-motor presence expected to impact both ends of the floor.",
    featured: ["Ayla Cromedy", "Nylah Quattlebaum", "Mia Lawson", "Reign Harris"],
  },
  {
    when: "Friday · 6:30 PM CDT",
    venue: "Court 41",
    a: { name: "North Tartan JR 14", tag: "TARTAN" },
    b: { name: "4C Sports Academy JR 14", tag: "4C" },
    why: 'Ridiculous size matchup, multiple notable frontcourt prospects, and the easiest "future stars" framing on the floor. Visually compelling in the paint, and the night slot gives it real showcase energy - very "future national names" oriented.',
    featured: [
      "Sophie Schoenrock (6-4)",
      "Shea Watkins",
      "Georgia Watkins",
      "Kylee Campbell (2031)",
    ],
  },
  {
    when: "Friday · 9:00 PM CDT",
    venue: "Court 40",
    a: { name: "Michigan Crossover Jr 14", tag: "MI XO" },
    b: { name: "Team Takeover JR 14", tag: "TAKEOVER" },
    why: "Late primetime slot, two strong brands, and multiple watch-list names. Expect an athletic, high-upside game with closing showcase energy - the kind of matchup that can swing momentum for the weekend narrative.",
    featured: ["Brooklyn Penick", "Aurelea Cerny", "Princess Kennedy"],
  },
];

export function MatchupPreviews() {
  return (
    <section id="matchups" className="mx-auto max-w-6xl px-4 py-8 sm:px-5 sm:py-10">
      <div className="mb-4 flex items-center justify-between gap-2">
        <h2 className="font-headline text-xl tracking-[0.18em] text-ink">MATCHUPS</h2>
        <span className="text-xs font-semibold tracking-wide text-gold drop-shadow-[0_0_12px_rgba(212,180,92,0.25)]">
          14U SLATE
        </span>
      </div>
      <div className="flex flex-col gap-5">
        {matchups.map((g) => {
          const whySection = g.why ? (
            <div className="border-t border-black/[0.06] pt-4">
              <p className="font-headline text-[10px] font-bold uppercase tracking-[0.28em] text-gold-deep sm:text-[11px] sm:tracking-[0.3em]">
                Why we&apos;re watching
              </p>
              <p className="mt-2 text-sm font-medium leading-relaxed text-muted sm:text-[0.95rem]">{g.why}</p>
            </div>
          ) : null;

          const featuredSection = (
            <div className="border-t border-black/[0.06] pt-4">
              <p className="font-headline text-[10px] font-bold uppercase tracking-[0.28em] text-ink sm:text-[11px] sm:tracking-[0.3em]">
                Featured players
              </p>
              <ul className="mt-3 space-y-2.5">
                {g.featured.map((name) => (
                  <li
                    key={`${g.when}-${name}`}
                    className="flex items-start gap-2.5 font-headline text-sm font-semibold tracking-tight text-ink sm:text-[0.9375rem]"
                  >
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold ring-2 ring-gold/35"
                      aria-hidden
                    />
                    <span>{name}</span>
                  </li>
                ))}
              </ul>
            </div>
          );

          return (
            <article
              key={`${g.when}-${g.a.name}`}
              className="overflow-hidden rounded-2xl border border-black/[0.1] bg-paper shadow-lift ring-1 ring-black/[0.04]"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-black/[0.07] bg-gradient-to-r from-panel to-paper px-4 py-3 text-xs text-muted sm:px-5">
                <span className="font-semibold tracking-wide text-ink">{g.when}</span>
                <span className="text-[11px] font-medium tracking-wide text-muted">{g.venue}</span>
              </div>
              <div className="grid gap-4 p-4 sm:gap-5 sm:p-5">
                <div className="flex flex-col items-stretch justify-between gap-4 sm:flex-row sm:items-center sm:gap-3">
                  <div className="min-w-0 flex-1 text-center sm:text-left">
                    <p className="text-[10px] font-semibold tracking-[0.25em] text-dim">{g.a.tag}</p>
                    <p className="break-words font-headline text-base font-bold leading-snug tracking-tight text-ink sm:text-lg">
                      {g.a.name}
                    </p>
                  </div>
                  <span className="mx-auto flex shrink-0 items-center justify-center rounded-full border border-gold/30 bg-ink px-3 py-1.5 text-[10px] font-headline tracking-[0.2em] text-gold-bright shadow-glowGoldSoft sm:mx-0">
                    VS
                  </span>
                  <div className="min-w-0 flex-1 text-center sm:text-right">
                    <p className="text-[10px] font-semibold tracking-[0.25em] text-dim">{g.b.tag}</p>
                    <p className="break-words font-headline text-base font-bold leading-snug tracking-tight text-ink sm:text-lg">
                      {g.b.name}
                    </p>
                  </div>
                </div>

                {whySection}
                {featuredSection}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
