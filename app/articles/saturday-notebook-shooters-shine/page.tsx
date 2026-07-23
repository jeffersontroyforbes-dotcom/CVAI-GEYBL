import Link from "next/link";
import type { Metadata } from "next";
import { SiteFooter } from "@/components/home/SiteFooter";
import { SiteHeader } from "@/components/home/SiteHeader";
import { StatsSubnav } from "@/components/home/StatsSubnav";

export const metadata: Metadata = {
  title: "Saturday Notebook: Shooters Shine Across Jr. EYBL Opening Day · CVAI × GEYBL",
  description:
    "Day Two standouts, key matchups, and impact numbers from Nike Girls EYBL 14U New Orleans Session 2.",
};

const intro = [
  "NEW ORLEANS - Saturday at Nike Jr. EYBL Session II quickly evolved into an offensive showcase, as elite guard play, pace, and perimeter shooting defined the day across the New Orleans Convention Center.",
  "From explosive transition teams to near-flawless shooting performances, multiple programs delivered statement outings while several individual prospects continued building serious momentum heading into Sunday play.",
  "The biggest theme of the day? Offensive skill level across the 14U division continues to rise.",
  "Teams consistently spaced the floor, created advantages off the dribble, and punished defensive mistakes with confidence. Several games featured shooting percentages rarely seen in youth basketball, while high-level guard play controlled tempo throughout the afternoon and evening slate.",
];

const sections = [
  {
    title: "Proformance Athletics Elite Catches Fire",
    paragraphs: [
      "No offensive performance on Saturday was more efficient than Proformance Athletics Elite's stunning shooting display against Exodus.",
      "The ball movement and shot quality stood out immediately, with nearly every offensive possession generating clean looks at the rim or open perimeter opportunities.",
      "Anna Chair led the way with 16 points while knocking down all four of her three-point attempts. Saryah Yazzie added 12 points on 5-for-7 shooting, continuing the offensive avalanche throughout the evening session.",
      "Perhaps most impressive was the composure. Proformance never forced offense, consistently making the extra pass and capitalizing on defensive rotations.",
      "It was one of the cleanest offensive performances of the weekend.",
    ],
    bullets: ["72.4% from the field", "85.7% from three", "100% from the free throw line"],
  },
  {
    title: "Makenzie Kinard Delivers a Statement Performance",
    paragraphs: [
      "AEBL's victory over Cyfair Elite SELECT produced one of the top individual performances of the day, as Makenzie Kinard erupted for 29 points in dominant fashion.",
      "Kinard shot an incredible 12-for-15 from the floor while consistently attacking gaps in transition and finishing through contact. She also added five rebounds while anchoring an offense that became nearly unstoppable during the second half.",
      "The efficiency was overwhelming.",
      "Eva Lopes added 10 points and five rebounds, while Kyleigh Morgan contributed five assists and controlled tempo throughout key stretches.",
      "The performance reinforced what has become increasingly clear throughout the weekend: AEBL's offensive upside is among the best in the field.",
    ],
    bullets: ["65.8% overall from the field", "83.3% in the second half"],
  },
  {
    title: "Sports Academy Swish Continues to Push the Pace",
    paragraphs: [
      "Few teams played with more speed and confidence Saturday than Sports Academy Swish.",
      "After earlier posting one of the highest-scoring performances of the event, Swish returned Saturday night with another impressive offensive showing, defeating iD3NTiTY ELiTE behind balanced production and relentless tempo.",
      "Louisa Varawa continued her outstanding weekend with 22 points and eight rebounds, establishing herself as one of the event's most productive forwards. Kennedy Terry added six points while contributing on both ends, and Swish consistently created transition opportunities off defensive pressure.",
      "The combination of pace, spacing, and ball movement makes Swish one of the most entertaining teams to watch in New Orleans.",
    ],
    bullets: ["89 points", "26 assists", "11 made three-pointers", "15 steals"],
  },
  {
    title: "Cal Sparks SS24 Plays Nearly Flawless Basketball",
    paragraphs: [
      "Cal Sparks SS24 quietly authored one of the most fundamentally impressive performances of the entire day.",
      "At any level of basketball, that combination is elite.",
      "Journey Murff delivered a perfect shooting performance, finishing 6-for-6 from the floor and 3-for-3 from beyond the arc on her way to 16 points. Vida Perez added 17 points while converting all nine of her free throws, and Karissa Ferrel chipped in 12 points with efficient perimeter shooting.",
      "The offensive execution stood out throughout the game, particularly in halfcourt situations where SS24 consistently created quality looks without forcing possessions.",
    ],
    bullets: ["61.9% from the field", "50% from three", "Only two turnovers"],
  },
  {
    title: "All Iowa Attack Continues to Impress",
    paragraphs: [
      "All Iowa Attack remained one of the most polished offensive groups in the building during a strong showing against Kia Nurse Elite.",
      "The team finished with 64 points while continuing to showcase advanced spacing, quick ball movement, and efficient shot selection.",
      "Kia Nurse Elite answered with impressive offensive stretches of its own, shooting over 56% from the field as Alexandra Pytka poured in 13 points and Madeline Geggie added eight points with strong perimeter play.",
      "But All Iowa's depth and pace eventually created separation late.",
      "The group continues to look like one of the most complete offensive teams at the event.",
    ],
  },
];

const quickHitters = [
  {
    title: "Reese Brown | 4C Sports Academy",
    body: "Brown stuffed the stat sheet with 18 points, 5 assists, and 7 steals in one of the strongest all-around guard performances of the day.",
  },
  {
    title: "KennaD Buie | Team PRIME Nation",
    body: "Buie continued her huge weekend with another strong scoring performance, attacking the paint aggressively and impacting multiple phases offensively.",
  },
  {
    title: "Louisa Varawa | Sports Academy Swish",
    body: "Varawa's consistency continues to stand out. Her rebounding, interior finishing, and transition activity helped fuel another Swish win.",
  },
  {
    title: "Tatum Eberly | Indiana One",
    body: "Eberly finished with 14 points and four assists while helping Indiana One shoot over 53% from the field against Carolina Flames.",
  },
  {
    title: "Addison Brown | 4C Sports Academy",
    body: "Brown controlled pace throughout the game with 15 points and six assists while creating offense both on and off the ball.",
  },
];

export default function SaturdayNotebookPage() {
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
                src="/saturday-takeaways-new-orleans-session-2.png"
                alt="Saturday Takeaways — Nike Girls EYBL 14U New Orleans Session 2"
                className="absolute inset-0 h-full w-full object-cover object-center"
                width={1024}
                height={1024}
                decoding="async"
                fetchPriority="high"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/10" aria-hidden />
            </div>

            <div className="mt-6 min-w-0 sm:mt-7">
              <p className="inline-flex rounded-md border border-gold/45 bg-white/[0.04] px-3 py-1.5 font-headline text-[10px] font-bold uppercase tracking-[0.34em] text-gold-bright shadow-[0_0_24px_-8px_rgba(255, 79, 1,0.35)] sm:text-[11px] sm:tracking-[0.38em]">
                14U Notebook
              </p>
              <h1 className="mt-5 font-headline text-[2rem] font-extrabold uppercase leading-[1.02] tracking-[0.04em] text-paper sm:text-5xl sm:tracking-[0.05em]">
                Saturday Notebook: Shooters Shine Across Jr. EYBL Opening Day
              </h1>
              <p className="mt-4 max-w-2xl font-sans text-[0.98rem] font-medium leading-relaxed text-white/[0.82] sm:mt-5 sm:text-lg sm:leading-[1.65]">
                Day Two standouts, key matchups, impact numbers, and offensive momentum from New Orleans.
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
                  Quick Hitters
                </h2>
                <div className="mt-5 grid gap-4">
                  {quickHitters.map((item) => (
                    <div key={item.title} className="rounded-2xl border border-black/[0.08] bg-matte p-4 shadow-[0_6px_20px_-10px_rgba(0,0,0,0.12)] ring-1 ring-black/[0.03]">
                      <h3 className="font-headline text-[13px] font-bold uppercase tracking-[0.18em] text-gold-deep">
                        {item.title}
                      </h3>
                      <p className="mt-2 font-sans text-sm font-medium leading-relaxed text-muted">{item.body}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mt-12 sm:mt-14">
                <div className="mb-8 h-px w-full bg-gradient-to-r from-transparent via-gold/45 to-transparent sm:mb-10" />
                <h2 className="font-headline text-lg font-extrabold uppercase tracking-[0.14em] text-ink sm:text-xl sm:tracking-[0.16em]">
                  Sunday Outlook
                </h2>
                <div className="mt-4 space-y-5 sm:mt-5">
                  <p className="font-sans text-[1.02rem] font-normal leading-[1.8] text-ink/[0.88] sm:text-[1.06rem] sm:leading-[1.84]">
                    If Saturday was any indication, Sunday's bracket play should continue producing high-level offensive basketball across the Jr. EYBL circuit.
                  </p>
                  <p className="font-sans text-[1.02rem] font-normal leading-[1.8] text-ink/[0.88] sm:text-[1.06rem] sm:leading-[1.84]">
                    Several teams are beginning to separate themselves through offensive efficiency and guard depth, while multiple breakout performers continue elevating their stock with every session.
                  </p>
                  <p className="font-sans text-[1.02rem] font-normal leading-[1.8] text-ink/[0.88] sm:text-[1.06rem] sm:leading-[1.84]">
                    And as the pace rises deeper into the weekend, the skill level across the 14U division continues to demand attention.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>

        <footer className="border-t border-black/[0.08] bg-gradient-to-b from-matte to-panel/25">
          <div className="mx-auto max-w-[40rem] px-4 py-8 text-center sm:px-5 sm:py-10">
            <p className="font-headline text-[10px] font-bold uppercase tracking-[0.4em] text-muted">
              <span className="text-gold">Saturday notebook</span>
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
