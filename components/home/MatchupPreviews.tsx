type FeaturedPlayer = {
  name: string;
  stats: string;
};

type MatchupPreview = {
  when: string;
  stage: string;
  venue: string;
  a: { name: string; tag: string };
  b: { name: string; tag: string };
  /** Optional editorial framing (primetime, matchup story, etc.) */
  why?: string;
  featured?: FeaturedPlayer[];
};

const matchups: MatchupPreview[] = [
  {
    when: "Sunday · 9:45 AM CDT",
    stage: "Platinum Bracket",
    venue: "Court 40",
    a: { name: "AL Southern Starz", tag: "STARZ" },
    b: { name: "MOKAN", tag: "MOKAN" },
    why: "Two of the hottest offensive teams entering Sunday collide early in one of the strongest matchups of bracket play. AL Southern Starz continues to generate elite scoring production behind dynamic shot creation and transition pace, while MOKAN has consistently answered with perimeter shooting and offensive balance throughout the weekend. High-level guard play, multiple breakout scorers, and major offensive firepower could make this one of the highest-scoring Platinum games Sunday.",
    featured: [
      { name: "KennaD Buie (AL Southern Starz)", stats: "34 PTS • 10 REB • 6 AST" },
      { name: "Mikaela Tran (MOKAN)", stats: "20 PTS • 6 3PT FG" },
      { name: "Lilia Freeman (MOKAN)", stats: "12 PTS • 11 REB" },
    ],
  },
  {
    when: "Sunday · 12:15 PM CDT",
    stage: "Platinum Bracket",
    venue: "Court 40",
    a: { name: "North Tartan", tag: "TARTAN" },
    b: { name: "All Iowa Attack", tag: "IOWA" },
    why: "All Iowa Attack has quietly looked like one of the most complete offensive teams in New Orleans, and Sunday’s matchup against North Tartan should provide another major test. North Tartan’s physicality and rebounding presence create an interesting contrast against Iowa’s spacing and pace. Elite offensive efficiency meets physical halfcourt basketball, with North Tartan’s rebounding capable of dictating tempo.",
    featured: [
      { name: "Tatum Eberly (Indiana One / Iowa circuit standout)", stats: "14 PTS • 4 AST" },
      { name: "Mara Segerstrom (North Tartan)", stats: "8 PTS • 6 REB • 3 BLK" },
      { name: "Amelia Truty (North Tartan)", stats: "11 PTS • 3-5 3PT" },
    ],
  },
  {
    when: "Sunday · 2:45 PM CDT",
    stage: "Gold Bracket",
    venue: "Court 41",
    a: { name: "Sports Academy Swish", tag: "SWISH" },
    b: { name: "Cyfair Elite Sports", tag: "CYFAIR" },
    why: "No team has played faster or generated more offensive chaos this weekend than Sports Academy Swish, making this late matchup against Cyfair Elite Sports one of Sunday’s most intriguing games. Cyfair brings size, athleticism, and offensive balance into the matchup, while Swish continues to push tempo relentlessly in transition. Transition-heavy styles, Swish pressure, and Cyfair’s offensive balance could make this one of Sunday’s most entertaining games.",
    featured: [
      { name: "Louisa Varawa (Sports Academy Swish)", stats: "22 PTS • 8 REB" },
      { name: "Audrey Walker (Cyfair Elite Sports)", stats: "17 PTS" },
      { name: "Addison Collins (Cyfair Elite Sports)", stats: "12 PTS • 4 AST" },
    ],
  },
];

export function MatchupPreviews() {
  return (
    <section id="matchups" className="mx-auto max-w-6xl px-4 py-8 sm:px-5 sm:py-10">
      <div className="mb-4 flex items-center justify-between gap-2">
        <h2 className="font-headline text-xl tracking-[0.18em] text-ink">MATCHUPS</h2>
        <span className="text-xs font-semibold tracking-wide text-gold drop-shadow-[0_0_12px_rgba(255, 79, 1,0.25)]">
          SUNDAY TO WATCH
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
                <span className="text-[11px] font-medium tracking-wide text-muted">
                  {g.stage} • {g.venue}
                </span>
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
