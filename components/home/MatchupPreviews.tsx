type FeaturedPlayer = {
  name: string;
  stats: string;
};

type MatchupPreview = {
  when: string;
  venue: string;
  a: { name: string; tag: string };
  b: { name: string; tag: string };
  /** Optional editorial framing (primetime, matchup story, etc.) */
  why?: string;
  featured?: FeaturedPlayer[];
};

const matchups: MatchupPreview[] = [
  {
    when: "Saturday · 1:30 PM CDT",
    venue: "Court 45",
    a: { name: "Team Takeover JR 14", tag: "TAKEOVER" },
    b: { name: "Cal Storm - Team Taurasi JR 14", tag: "TAURASI" },
    why: "This matchup feels like a future Platinum bracket preview. Team Takeover brings relentless downhill pressure and athleticism, while Team Taurasi counters with spacing, pace, and confident perimeter shot-making. With multiple impact guards on the floor, this game has the potential to become one of the fastest and most entertaining battles of the day.",
    featured: [
      { name: "K. Eckman (Team Takeover)", stats: "24.5 PPG • 4.5 APG • 3.5 SPG" },
      { name: "A. Phillips (Cal Storm - Team Taurasi)", stats: "14.5 PPG • 5.5 SPG" },
    ],
  },
  {
    when: "Saturday · 1:30 PM CDT",
    venue: "Court 42",
    a: { name: "Cyfair Elite Sports JR 14", tag: "CYFAIR" },
    b: { name: "Palmetto 76ers - A’ja Wilson Elite JR 14", tag: "PALMETTO" },
    why: "Cyfair has already shown high-level defensive activity and toughness, while Palmetto enters with one of the most intriguing team identities in the field. This is the kind of matchup where rebounding, rim pressure, and defensive versatility could completely swing momentum. Expect physical possessions and high-energy stretches throughout.",
    featured: [
      { name: "R. Brown (Cyfair Elite Sports)", stats: "18.5 PPG • 6.5 RPG • 4.0 APG • 3.5 SPG" },
      { name: "A. Owalla (Palmetto 76ers - A’ja Wilson Elite)", stats: "7.5 RPG • 4.0 BPG" },
    ],
  },
  {
    when: "Saturday · 12:15 PM CDT",
    venue: "Court 42",
    a: { name: "All Iowa Attack JR 14", tag: "IOWA" },
    b: { name: "Team Redeye JR 14", tag: "REDEYE" },
    why: "All Iowa Attack continues to look like one of the premier offensive groups in New Orleans, featuring pace, floor spacing, and confident scorers across the lineup. Team Redeye presents a major test with athletic pressure and transition energy. If both teams get comfortable early, this could turn into one of the highest-level offensive showcases of Saturday pool play.",
    featured: [
      { name: "K. Croom (All Iowa Attack)", stats: "19.0 PPG • 6.0 RPG • 4.5 APG" },
      { name: "T. Eberly (All Iowa Attack)", stats: "18.5 PPG" },
    ],
  },
];

export function MatchupPreviews() {
  return (
    <section id="matchups" className="mx-auto max-w-6xl px-4 py-8 sm:px-5 sm:py-10">
      <div className="mb-4 flex items-center justify-between gap-2">
        <h2 className="font-headline text-xl tracking-[0.18em] text-ink">MATCHUPS</h2>
        <span className="text-xs font-semibold tracking-wide text-gold drop-shadow-[0_0_12px_rgba(212,180,92,0.25)]">
          SATURDAY FEATURED
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

          const featuredSection = g.featured?.length ? (
            <div className="border-t border-black/[0.06] pt-4">
              <p className="font-headline text-[10px] font-bold uppercase tracking-[0.28em] text-ink sm:text-[11px] sm:tracking-[0.3em]">
                Featured players to watch
              </p>
              <ul className="mt-3 space-y-2.5">
                {g.featured.map((player) => (
                  <li
                    key={`${g.when}-${player.name}`}
                    className="flex items-start gap-2.5"
                  >
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold ring-2 ring-gold/35"
                      aria-hidden
                    />
                    <span className="min-w-0">
                      <span className="block font-headline text-sm font-semibold tracking-tight text-ink sm:text-[0.9375rem]">
                        {player.name}
                      </span>
                      <span className="mt-0.5 block text-xs font-semibold leading-relaxed tracking-wide text-muted sm:text-[0.8125rem]">
                        {player.stats}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null;

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
