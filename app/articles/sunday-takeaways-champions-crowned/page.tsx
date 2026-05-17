import Link from "next/link";
import type { Metadata } from "next";
import { SiteFooter } from "@/components/home/SiteFooter";
import { SiteHeader } from "@/components/home/SiteHeader";
import { StatsSubnav } from "@/components/home/StatsSubnav";

export const metadata: Metadata = {
  title: "Sunday Takeaways · CVAI × GEYBL",
  description:
    "Champions crowned, performances that mattered, and bracket Sunday takeaways from Nike Girls EYBL 14U New Orleans Session 2.",
};

const intro = [
  "Bracket Sunday brought a completely different energy to New Orleans. The pace increased, the shotmaking jumped another level, and several programs separated themselves with elite efficiency and execution under pressure.",
  "From explosive offensive performances to late-game defensive stands, Sunday felt like true championship basketball across the 14U division.",
];

const sections = [
  {
    title: "Team PRIME Nation Continues Offensive Surge",
    paragraphs: [
      "Team PRIME Nation closed another strong weekend performance with a 68-60 win behind one of the most balanced offensive attacks of the day.",
      "Kendall Croom controlled tempo throughout the game, finishing with 26 points while attacking downhill and creating offense in transition. Daisy Borchert added 22 points and knocked down six threes as PRIME shot 51.1% from the field and finished with 15 assists as a team.",
      "The spacing, pace, and ball movement continue to make Team PRIME Nation one of the most dangerous offensive groups in the building.",
    ],
    stats: ["Kendall Croom: 26 PTS, 6 TO", "Daisy Borchert: 22 PTS, 6-9 3PT", "Team PRIME Nation: 51.1% FG, 15 AST"],
  },
  {
    title: "Cal Storm - Team Taurasi Wins Instant Classic",
    paragraphs: [
      "One of the best games of the entire weekend came on Court 41 as Cal Storm - Team Taurasi edged Proformance Athletics 63-62 in a back-and-forth offensive battle.",
      "Both teams shot above 52% from the floor in a game filled with shotmaking, pace, and lead changes deep into the second half.",
      "Aleka Putz-Garcia delivered one of Sunday’s top individual performances, finishing with 23 points on 10-14 shooting while controlling the paint and finishing through contact.",
      "Proformance Athletics answered with elite perimeter shooting, knocking down eight threes behind Reisha Mitchell’s 17-point performance.",
    ],
    stats: ["Aleka Putz-Garcia: 23 PTS, 10-14 FG", "Reisha Mitchell: 17 PTS, 3-4 3PT", "Combined FG%: 52.5%"],
  },
  {
    title: "4C Sports Academy Puts On Offensive Clinic",
    paragraphs: [
      "4C Sports Academy may have delivered the cleanest offensive performance of the entire day.",
      "Addison Brown orchestrated everything offensively with 11 assists while Reese Brown poured in 21 points. The combination of spacing, transition offense, and unselfish ball movement created one of the most analytically efficient team performances of the weekend.",
      "Cal Sparks SS24 answered with nine made threes of their own, but 4C’s offensive pace never slowed.",
    ],
    bullets: ["68 points", "17 assists", "9 made threes", "51.9% shooting"],
    stats: ["Reese Brown: 21 PTS", "Addison Brown: 13 PTS, 11 AST", "4C Sports Academy: 9 3PM, 17 AST"],
  },
  {
    title: "AEBL Locks In Defensively",
    paragraphs: [
      "AEBL delivered one of the strongest defensive halves of the weekend, holding Team Elite to just seven second-half points after a competitive opening half.",
      "Makenzie Kinard led the way with 15 points while AEBL shot over 51% from the field and completely controlled the pace late.",
    ],
    stats: ["Makenzie Kinard: 15 PTS", "AEBL Second Half Defense: 7 PTS Allowed", "AEBL FG%: 51.5%"],
  },
  {
    title: "Palmetto 76ers - A’ja Wilson Elite Sends Statement",
    paragraphs: [
      "One of the loudest performances of Sunday belonged to Palmetto 76ers - A’ja Wilson Elite, who exploded offensively behind elite ball movement and perimeter shooting.",
      "Jaelyn Rowan buried six threes and finished with 26 points as the team piled up 20 assists and 15 steals in a dominant showing.",
      "The pace, spacing, and defensive pressure made this one of the most complete team performances of bracket play.",
    ],
    stats: ["Jaelyn Rowan: 26 PTS, 6 3PM", "Team Assists: 20", "Team Steals: 15"],
  },
];

const byTheNumbers = [
  "Multiple teams shot above 50% FG",
  "Offensive pace reached its highest level of the weekend",
  "Ball movement and spacing became defining factors",
  "Transition offense separated top programs",
  "Championship bracket intensity elevated execution across the board",
];

export default function SundayTakeawaysPage() {
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
                src="/sunday-takeaways-new-orleans-session-2.png"
                alt="Sunday Takeaways — Nike Girls EYBL 14U New Orleans Session 2"
                className="absolute inset-0 h-full w-full object-cover object-center"
                width={1024}
                height={1024}
                decoding="async"
                fetchPriority="high"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/10" aria-hidden />
            </div>

            <div className="mt-6 min-w-0 sm:mt-7">
              <p className="inline-flex rounded-md border border-gold/45 bg-white/[0.04] px-3 py-1.5 font-headline text-[10px] font-bold uppercase tracking-[0.34em] text-gold-bright shadow-[0_0_24px_-8px_rgba(212,175,55,0.35)] sm:text-[11px] sm:tracking-[0.38em]">
                14U Notebook
              </p>
              <h1 className="mt-5 font-headline text-[2rem] font-extrabold uppercase leading-[1.02] tracking-[0.04em] text-paper sm:text-5xl sm:tracking-[0.05em]">
                Sunday Takeaways
              </h1>
              <p className="mt-4 max-w-2xl font-sans text-[0.98rem] font-medium leading-relaxed text-white/[0.82] sm:mt-5 sm:text-lg sm:leading-[1.65]">
                Champions crowned. Performances that mattered.
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
                    <div className="mt-5 rounded-2xl border border-black/[0.08] bg-matte p-4 shadow-[0_6px_20px_-10px_rgba(0,0,0,0.12)] ring-1 ring-black/[0.03]">
                      <h3 className="font-headline text-[13px] font-bold uppercase tracking-[0.18em] text-gold-deep">
                        Featured Stats
                      </h3>
                      <ul className="mt-3 space-y-2">
                        {section.stats.map((stat) => (
                          <li key={stat} className="font-sans text-sm font-medium leading-relaxed text-muted">
                            {stat}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </section>
                ))}
              </div>

              <section className="mt-12 sm:mt-14">
                <div className="mb-8 h-px w-full bg-gradient-to-r from-transparent via-gold/45 to-transparent sm:mb-10" />
                <h2 className="font-headline text-lg font-extrabold uppercase tracking-[0.14em] text-ink sm:text-xl sm:tracking-[0.16em]">
                  Sunday By The Numbers
                </h2>
                <ul className="mt-5 space-y-2.5">
                  {byTheNumbers.map((item) => (
                    <li key={item} className="flex gap-3 font-headline text-sm font-semibold tracking-tight text-ink sm:text-[0.9375rem]">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold ring-2 ring-gold/35" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-8 font-sans text-[1.02rem] font-normal leading-[1.8] text-ink/[0.88] sm:text-[1.06rem] sm:leading-[1.84]">
                  Sunday wasn’t just about advancing. It was about identities forming.
                </p>
              </section>
            </div>
          </div>
        </div>

        <footer className="border-t border-black/[0.08] bg-gradient-to-b from-matte to-panel/25">
          <div className="mx-auto max-w-[40rem] px-4 py-8 text-center sm:px-5 sm:py-10">
            <p className="font-headline text-[10px] font-bold uppercase tracking-[0.4em] text-muted">
              <span className="text-gold">Sunday takeaways</span>
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
