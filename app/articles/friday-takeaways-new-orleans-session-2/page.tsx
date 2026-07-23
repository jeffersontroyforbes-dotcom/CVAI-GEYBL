import Link from "next/link";
import type { Metadata } from "next";
import { SiteFooter } from "@/components/home/SiteFooter";
import { SiteHeader } from "@/components/home/SiteHeader";
import { StatsSubnav } from "@/components/home/StatsSubnav";

export const metadata: Metadata = {
  title: "Friday Takeaways: New Orleans Session 2 · CVAI × GEYBL",
  description:
    "Day One standouts, key matchups, and impact numbers from Nike Girls EYBL 14U New Orleans Session 2.",
};

const intro = [
  "The first full day of Nike Girls EYBL 14U action in New Orleans delivered exactly what the division has quickly become known for: pace, skill, shot-making, and emerging stars announcing themselves on a national stage.",
  "From explosive scoring performances to elite guard play and high-efficiency team offenses, Friday made one thing clear: the future of girls basketball is already here.",
];

const sections = [
  {
    title: "Khloey Eckman Sets The Tone",
    paragraphs: [
      "If there was one player who immediately grabbed attention Friday, it was AB Elite guard Khloey Eckman.",
      "She controlled tempo throughout AB Elite's 75-56 win over Essence while impacting the game on both ends of the floor. Her ability to score efficiently while creating for teammates stood out immediately in one of the strongest all-around guard performances of the day.",
      "AB Elite as a team looked sharp offensively from the opening tip. The ball movement, spacing, and perimeter confidence were among the best offensive stretches seen Friday.",
    ],
    bullets: ["24 points", "6 assists", "4 steals", "61.4% FG", "58.3% from three", "16 assists"],
  },
  {
    title: "All Iowa Attack Delivers A Statement Performance",
    paragraphs: [
      "Few teams were more dominant statistically than All Iowa Attack.",
      "In a commanding win over Cal Sparks, All Iowa Attack put together one of the most efficient offensive performances of the session.",
      "Audra Meyer led the charge with 21 points while knocking down four triples, continuing what has already become one of the top scoring starts of the weekend.",
      "Lauren Harkins added 13 points on 6-of-7 shooting in limited minutes, while the overall offensive execution showed why All Iowa Attack remains one of the most dangerous offensive groups in the field.",
    ],
    bullets: ["84.4% shooting from the field", "55.6% from three", "63 total points"],
  },
  {
    title: "Kendall Croom And Team PRIME Nation Find Ways To Win",
    paragraphs: [
      "Some teams overwhelm opponents with shooting. Others win with toughness, versatility, and composure.",
      "Team PRIME Nation showcased all three Friday night.",
      "Despite struggling from beyond the arc, PRIME Nation earned a strong win over Palmetto 76ers behind another complete performance from Kendall Croom.",
      "Croom continues to emerge as one of the division's most versatile backcourt players, impacting nearly every statistical category while helping stabilize the offense in key stretches.",
    ],
    bullets: ["21 points", "6 rebounds", "4 assists"],
  },
  {
    title: "Cal Storm Team Taurasi Shows Offensive Depth",
    paragraphs: [
      "Cal Storm Team Taurasi also turned heads Friday night with a balanced and highly efficient offensive performance in a 65-38 victory over Carolina Hornets.",
      "Ella Phillips and Aleka Putz-Garcia each scored 18 points, with Putz-Garcia shooting an impressive 9-of-10 from the field.",
      "The team finished above 61% shooting overall while consistently generating quality looks around the basket and in transition.",
    ],
  },
];

const statGroups = [
  {
    title: "Points Per Game Leaders",
    leaders: ["Khloey Eckman - 24.5 PPG", "M. Morris - 23.0 PPG", "B. Kennedy - 19.0 PPG", "Kendall Croom - 19.0 PPG", "J. Pickens - 18.5 PPG"],
  },
  {
    title: "Rebounding Leaders",
    leaders: ["J. Combs - 10.5 RPG", "D. Ruffin - 9.5 RPG", "E. Dmowski - 9.0 RPG", "L. Durrett - 9.0 RPG"],
  },
  {
    title: "Assist Leaders",
    leaders: ["J. Townsend - 6.0 APG", "S. Heward - 5.0 APG", "Kendall Croom - 4.5 APG", "Khloey Eckman - 4.5 APG"],
  },
  {
    title: "Defensive Standouts",
    leaders: ["A. Phillips - 5.5 SPG", "A. Commings - 5.0 SPG", "A. Owalla - 4.0 BPG"],
  },
];

export default function FridayTakeawaysPage() {
  return (
    <div className="page-shell min-w-0 overflow-x-clip pb-12 sm:pb-14">
      <div className="site-chrome sticky top-0 z-50 shadow-[0_8px_24px_-12px_rgba(0,0,0,0.35)]">
        <SiteHeader />
        <StatsSubnav />
      </div>

      <article className="bg-matte">
        <header className="border-b border-gold/20 bg-ink px-4 py-5 sm:px-5 sm:py-7">
          <div className="mx-auto max-w-[46rem]">
            <div className="relative aspect-square w-full overflow-hidden rounded-2xl ring-1 ring-gold/35 shadow-heroGoldRing sm:rounded-[1.35rem]">
              {/* eslint-disable-next-line @next/next/no-img-element -- stable editorial art from /public */}
              <img
                src="/friday-takeaways-new-orleans-session-2.png"
                alt="Friday Takeaways — Nike Girls EYBL 14U New Orleans Session 2"
                className="absolute inset-0 h-full w-full object-cover object-center"
                width={1024}
                height={1024}
                decoding="async"
                fetchPriority="high"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" aria-hidden />
            </div>

            <div className="mt-6 min-w-0 sm:mt-7">
              <p className="inline-flex rounded-md border border-gold/45 bg-white/[0.04] px-3 py-1.5 font-headline text-[10px] font-bold uppercase tracking-[0.34em] text-gold-bright shadow-[0_0_24px_-8px_rgba(255, 79, 1,0.35)] sm:text-[11px] sm:tracking-[0.38em]">
                14U Notebook
              </p>
              <h1 className="mt-5 font-headline text-[2rem] font-extrabold uppercase leading-[1.02] tracking-[0.04em] text-paper sm:text-5xl sm:tracking-[0.05em]">
                Friday Takeaways: New Orleans Session 2
              </h1>
              <p className="mt-4 max-w-2xl font-sans text-[0.98rem] font-medium leading-relaxed text-white/[0.82] sm:mt-5 sm:text-lg sm:leading-[1.65]">
                Day One standouts, key matchups, impact numbers, and early momentum from the 14U GEYBL floor.
              </p>
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-[46rem] px-4 py-6 sm:px-5 sm:py-8 md:py-10">
          <Link
            href="/#notebook"
            className="inline-flex items-center gap-2 font-headline text-[10px] font-bold uppercase tracking-[0.28em] text-muted transition duration-200 hover:text-ink active:text-ink/75"
          >
            <span aria-hidden className="text-gold">
              ←
            </span>
            Back to Notebook
          </Link>

          <div className="mt-5 overflow-hidden rounded-2xl border border-black/[0.08] bg-paper shadow-liftCard ring-1 ring-black/[0.04] sm:mt-6 sm:rounded-[1.35rem]">
            <div className="px-4 py-6 sm:px-7 sm:py-8 md:px-9 md:py-10">
              <div className="space-y-6">
                {intro.map((paragraph) => (
                  <p key={paragraph} className="font-sans text-[1.05rem] font-normal leading-[1.82] text-ink/[0.9] sm:text-[1.08rem] sm:leading-[1.85]">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-10 space-y-12 sm:mt-12 sm:space-y-14">
                {sections.map((section) => (
                  <section key={section.title}>
                    <div className="mb-8 h-px w-full bg-gradient-to-r from-transparent via-gold/45 to-transparent sm:mb-10" />
                    <h2 className="font-headline text-lg font-extrabold uppercase tracking-[0.14em] text-ink sm:text-xl sm:tracking-[0.16em]">
                      {section.title}
                    </h2>
                    <div className="mt-4 space-y-5 sm:mt-5">
                      {section.paragraphs.map((paragraph) => (
                        <p key={paragraph} className="font-sans text-[1.02rem] font-normal leading-[1.8] text-ink/[0.88] sm:text-[1.06rem] sm:leading-[1.84]">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                    {section.bullets ? (
                      <ul className="mt-5 space-y-2.5">
                        {section.bullets.map((item) => (
                          <li key={item} className="flex gap-3 font-headline text-sm font-semibold tracking-tight text-ink sm:text-[0.9375rem]">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold ring-2 ring-gold/35" aria-hidden />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </section>
                ))}
              </div>

              <section className="mt-12 sm:mt-14">
                <div className="mb-8 h-px w-full bg-gradient-to-r from-transparent via-gold/45 to-transparent sm:mb-10" />
                <h2 className="font-headline text-lg font-extrabold uppercase tracking-[0.14em] text-ink sm:text-xl sm:tracking-[0.16em]">
                  Friday Statistical Leaders
                </h2>
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  {statGroups.map((group) => (
                    <div key={group.title} className="rounded-2xl border border-black/[0.08] bg-matte p-4 shadow-[0_6px_20px_-10px_rgba(0,0,0,0.12)] ring-1 ring-black/[0.03]">
                      <h3 className="font-headline text-[13px] font-bold uppercase tracking-[0.18em] text-gold-deep">
                        {group.title}
                      </h3>
                      <ul className="mt-3 space-y-2">
                        {group.leaders.map((leader) => (
                          <li key={leader} className="font-sans text-sm font-medium leading-relaxed text-muted">
                            {leader}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mt-12 sm:mt-14">
                <div className="mb-8 h-px w-full bg-gradient-to-r from-transparent via-gold/45 to-transparent sm:mb-10" />
                <h2 className="font-headline text-lg font-extrabold uppercase tracking-[0.14em] text-ink sm:text-xl sm:tracking-[0.16em]">
                  Looking Ahead To Saturday
                </h2>
                <div className="mt-4 space-y-5 sm:mt-5">
                  <p className="font-sans text-[1.02rem] font-normal leading-[1.8] text-ink/[0.88] sm:text-[1.06rem] sm:leading-[1.84]">
                    If Friday was any indication, the level of competition in New Orleans is only going to rise.
                  </p>
                  <p className="font-sans text-[1.02rem] font-normal leading-[1.8] text-ink/[0.88] sm:text-[1.06rem] sm:leading-[1.84]">
                    Several teams established themselves early, multiple guards emerged as breakout performers, and the offensive talent across the 14U division continues to expand rapidly.
                  </p>
                  <p className="font-sans text-[1.02rem] font-normal leading-[1.8] text-ink/[0.88] sm:text-[1.06rem] sm:leading-[1.84]">
                    Saturday now becomes about consistency, adjustments, and momentum as teams continue their push toward Chicago. The future is arriving fast.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>

        <footer className="border-t border-black/[0.08] bg-gradient-to-b from-matte to-panel/25">
          <div className="mx-auto max-w-[40rem] px-4 py-8 text-center sm:px-5 sm:py-10">
            <p className="font-headline text-[10px] font-bold uppercase tracking-[0.4em] text-muted">
              <span className="text-gold">Friday takeaways</span>
              <span className="text-ink/35"> · </span>
              <span className="text-ink/75">CourtVision AI</span>
            </p>
          </div>
        </footer>
      </article>

      <SiteFooter />
    </div>
  );
}
