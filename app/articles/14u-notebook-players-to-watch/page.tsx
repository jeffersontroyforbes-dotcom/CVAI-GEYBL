import Link from "next/link";
import type { Metadata } from "next";
import { SiteFooter } from "@/components/home/SiteFooter";
import { SiteHeader } from "@/components/home/SiteHeader";
import { StatsSubnav } from "@/components/home/StatsSubnav";

export const metadata: Metadata = {
  title: "Players To Watch · 14U Notebook · CVAI × GEYBL",
  description:
    "Standout names, emerging prospects, size, skill, and long-term upside entering the 14U GEYBL season — CourtVision AI scouting notebook.",
};

type PlayerLine = {
  name: string;
  height: string;
  classYear: string;
  jersey: string;
};

type TeamSection = {
  team: string;
  players: PlayerLine[];
};

const teamSections: TeamSection[] = [
  {
    team: "Philly Rise",
    players: [
      { name: "Ayla Cromedy", height: "5-7", classYear: "2030", jersey: "10" },
      { name: "Nylah Quattlebaum", height: "6-0", classYear: "2030", jersey: "23" },
      { name: "Mia Lawson", height: "5-3", classYear: "2030", jersey: "1" },
    ],
  },
  {
    team: "North Tartan",
    players: [
      { name: "Georgia Watkins", height: "5-11", classYear: "2030", jersey: "23" },
      { name: "Shea Watkins", height: "6-0", classYear: "2030", jersey: "21" },
      { name: "Sophie Schoenrock", height: "6-4", classYear: "2030", jersey: "32" },
    ],
  },
  {
    team: "Proformance Athletics",
    players: [{ name: "Ainsley Kopp", height: "6-1", classYear: "2030", jersey: "15" }],
  },
  {
    team: "MI Crossover",
    players: [{ name: "Brooklyn Penick", height: "6-2", classYear: "2030", jersey: "30" }],
  },
  {
    team: "All Iowa Attack",
    players: [
      { name: "Audra Meyer", height: "5-11", classYear: "2030", jersey: "21" },
      { name: "Lauren Harkins", height: "5-10", classYear: "2030", jersey: "13" },
    ],
  },
  {
    team: "Boo Williams",
    players: [
      { name: "Kalyn Brown", height: "5-5", classYear: "2030", jersey: "1" },
      { name: "Dream Fields", height: "5-7", classYear: "2030", jersey: "11" },
      { name: "La'ziyah Lewis", height: "5-8", classYear: "2030", jersey: "10" },
    ],
  },
  {
    team: "VK Basketball",
    players: [
      { name: "Mila Cairns", height: "6-2", classYear: "2029", jersey: "19" },
      { name: "Mila Gauer", height: "5-9", classYear: "2029", jersey: "4" },
    ],
  },
  {
    team: "Performance Athletics Elite",
    players: [{ name: "Saryah Yazzie", height: "5-5", classYear: "2030", jersey: "2" }],
  },
  {
    team: "Takeover",
    players: [
      { name: "Aurelea Cerny", height: "6-0", classYear: "2030", jersey: "12" },
      { name: "Princess Kennedy", height: "5-4", classYear: "2030", jersey: "2" },
    ],
  },
  {
    team: "Team Durant",
    players: [{ name: "Lah'Mirah Canty-Melvin", height: "6-2", classYear: "2030", jersey: "7" }],
  },
  {
    team: "Kia Nurse",
    players: [{ name: "Maliyah Sidhu", height: "5-7", classYear: "2030", jersey: "1" }],
  },
  {
    team: "Cy Fair Red",
    players: [{ name: "Marley Smith", height: "5-11", classYear: "2030", jersey: "32" }],
  },
  {
    team: "Cy Fair Black",
    players: [
      { name: "Jayden Goff", height: "5-11", classYear: "2030", jersey: "15" },
      { name: "E'Myrie Warren", height: "6-0", classYear: "2030", jersey: "11" },
    ],
  },
  {
    team: "ProSkills",
    players: [{ name: "Emma O'Dell", height: "6-2", classYear: "2030", jersey: "34" }],
  },
  {
    team: "Mokan",
    players: [{ name: "Nora Yeldell", height: "6-3", classYear: "2030", jersey: "40" }],
  },
  {
    team: "HER Elite",
    players: [{ name: "Haiden Hill", height: "6-1", classYear: "2030", jersey: "34" }],
  },
  {
    team: "4C Sports Academy",
    players: [{ name: "Kylee Campbell", height: "6-2", classYear: "2031", jersey: "43" }],
  },
  {
    team: "All Ohio Red",
    players: [{ name: "Reign Harris", height: "5-6", classYear: "2030", jersey: "21" }],
  },
];

export default function PlayersToWatchNotebookPage() {
  return (
    <div className="page-shell min-w-0 overflow-x-clip pb-12 sm:pb-14">
      <div className="site-chrome sticky top-0 z-50 shadow-[0_8px_24px_-12px_rgba(0,0,0,0.35)]">
        <SiteHeader />
        <StatsSubnav />
      </div>

      <article className="bg-matte">
        <header className="border-b border-gold/25 bg-ink pb-10 pt-8 sm:pb-12 sm:pt-10">
          <div className="mx-auto max-w-[40rem] px-4 sm:px-5">
            <p className="inline-flex rounded-md border border-gold/45 bg-white/[0.04] px-3 py-1.5 font-headline text-[10px] font-bold uppercase tracking-[0.34em] text-gold-bright shadow-[0_0_24px_-8px_rgba(255, 79, 1,0.35)] sm:text-[11px] sm:tracking-[0.38em]">
              14U Notebook
            </p>

            <div className="relative mt-5 aspect-[653/265] w-full overflow-hidden rounded-xl ring-1 ring-gold/35 shadow-[0_0_40px_-12px_rgba(255, 79, 1,0.35)] sm:mt-6 sm:rounded-[1.05rem]">
              {/* eslint-disable-next-line @next/next/no-img-element -- stable banner with `images.unoptimized` */}
              <img
                src="/hero-players-to-watch.png"
                alt="Next up — catch all the action"
                className="absolute inset-0 h-full w-full object-cover object-center"
                width={653}
                height={265}
                decoding="async"
                fetchPriority="high"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20"
                aria-hidden
              />
            </div>

            <h1 className="mt-6 font-headline text-[1.85rem] font-extrabold uppercase leading-[1.05] tracking-[0.04em] text-paper sm:mt-7 sm:text-4xl sm:tracking-[0.05em] md:text-[2.35rem]">
              Players To Watch
            </h1>
            <p className="mt-4 font-sans text-[0.98rem] font-medium leading-relaxed text-white/[0.82] sm:mt-5 sm:text-lg sm:leading-[1.65]">
              A first look at some of the standout names, emerging prospects, size, skill, and long-term upside entering
              the 14U GEYBL season.
            </p>
          </div>
        </header>

        <div className="mx-auto max-w-[40rem] px-4 py-10 sm:px-5 sm:py-12 md:py-14">
          <Link
            href="/#notebook"
            className="inline-flex items-center gap-2 font-headline text-[10px] font-bold uppercase tracking-[0.28em] text-muted transition duration-200 hover:text-ink active:text-ink/75"
          >
            <span aria-hidden className="text-gold">
              ←
            </span>
            Back to Notebook
          </Link>

          <p className="mt-8 font-sans text-[1.05rem] font-normal leading-[1.82] text-ink/[0.9] sm:mt-10 sm:text-[1.08rem] sm:leading-[1.85]">
            The 14U GEYBL division enters a new era this season with expanded national visibility, live statistics,
            matchup coverage, and editorial reporting powered by CourtVision AI. Ahead of opening session play, here are
            some of the early names to watch across the country entering the 2026 season.
          </p>
        </div>

        <div className="mx-auto max-w-[40rem] px-4 pb-12 sm:px-5 sm:pb-14 md:pb-16">
          {teamSections.map((block, i) => (
            <section key={block.team} className={i > 0 ? "mt-10 sm:mt-12" : "mt-8 sm:mt-10"}>
              {i > 0 ? (
                <div className="mb-8 h-px w-full bg-gradient-to-r from-transparent via-gold/45 to-transparent sm:mb-10" />
              ) : null}
              <h2 className="font-headline text-lg font-extrabold uppercase tracking-[0.14em] text-ink sm:text-xl sm:tracking-[0.16em]">
                {block.team}
              </h2>
              <ul className="mt-4 space-y-0 sm:mt-5">
                {block.players.map((p) => (
                  <li
                    key={`${block.team}-${p.name}`}
                    className="border-b border-black/[0.06] py-3.5 transition duration-200 first:pt-0 hover:bg-black/[0.03] sm:py-4"
                  >
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                      <span className="font-headline text-[15px] font-semibold tracking-tight text-ink sm:text-base">
                        {p.name}
                      </span>
                      <span className="shrink-0 font-sans text-[13px] font-medium tabular-nums tracking-wide text-muted sm:text-sm">
                        <span>{p.height}</span>
                        <span className="mx-2 text-gold/50" aria-hidden>
                          |
                        </span>
                        <span>{p.classYear}</span>
                        <span className="mx-2 text-gold/50" aria-hidden>
                          |
                        </span>
                        <span className="font-headline text-gold-deep">#{p.jersey}</span>
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <footer className="border-t border-black/[0.08] bg-gradient-to-b from-matte to-panel/25">
          <div className="mx-auto max-w-[40rem] px-4 py-8 text-center sm:px-5 sm:py-10">
            <p className="font-headline text-[10px] font-bold uppercase tracking-[0.4em] text-muted">
              <span className="text-gold">Scouting notebook</span>
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
