import Link from "next/link";
import type { Metadata } from "next";
import { SiteFooter } from "@/components/home/SiteFooter";
import { SiteHeader } from "@/components/home/SiteHeader";
import { StatsSubnav } from "@/components/home/StatsSubnav";

export const metadata: Metadata = {
  title: "The Future of 14U Basketball Has Arrived · CVAI × GEYBL",
  description:
    "Nike Girls EYBL and CourtVision AI bring professional-level stats, live leaderboards, matchup coverage, and analytics storytelling to 14U for the first time.",
};

const sections = [
  "For years, elite grassroots basketball coverage has largely focused on older divisions. In 2026, that changes. Nike Girls EYBL and CourtVision AI are expanding full event statistics and analytics coverage to the 14U division for the first time ever.",
  "The new experience brings live leaderboards, advanced stat tracking, matchup previews, team reports, player reports, and editorial storytelling to one of the fastest-growing levels in grassroots basketball.",
  "CourtVision AI founder Jeff Forbes brings a unique background to the project, combining Kansas basketball roots, experience with Synergy Sports Technology, and seven years of operational and statistics experience with GEYBL events. The goal is to create a more professional and connected experience for athletes, coaches, families, and fans throughout the GEYBL ecosystem.",
  "The launch also introduces a new media-focused presentation layer inspired by professional basketball platforms, combining live Exposure data with premium editorial coverage, performance insights, and modern mobile-first design.",
  "Additional features including matchup previews, event recaps, player spotlights, team reports, and expanded analytics tools will continue rolling out throughout the season.",
];

export default function FutureOf14UArticlePage() {
  return (
    <div className="pb-12 sm:pb-14">
      <div className="sticky top-0 z-50 shadow-[0_8px_24px_-12px_rgba(0,0,0,0.35)]">
        <SiteHeader />
        <StatsSubnav />
      </div>

      <article className="bg-matte">
        <header className="bg-ink">
          <div className="relative w-full">
            <div className="relative aspect-[4/3] min-h-[min(52vh,520px)] w-full overflow-hidden sm:aspect-[16/9] sm:min-h-[min(56vh,580px)] md:min-h-[min(60vh,640px)]">
              {/* eslint-disable-next-line @next/next/no-img-element -- reliable full-bleed hero with `images.unoptimized` */}
              <img
                src="/hero-cvai-14u.png"
                alt="CVAI × 14U GEYBL — court-level coverage and analytics"
                className="absolute inset-0 h-full w-full object-cover object-[center_35%]"
                width={705}
                height={612}
                decoding="async"
                fetchPriority="high"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/25 sm:via-black/45"
                aria-hidden
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/90 to-transparent sm:h-40" aria-hidden />
            </div>

            <div className="absolute inset-x-0 bottom-0 z-10 mx-auto w-full max-w-3xl px-4 pb-8 pt-16 sm:px-5 sm:pb-10 sm:pt-20 md:max-w-4xl md:pb-12">
              <p className="font-headline text-[10px] font-bold uppercase tracking-[0.38em] text-gold-bright sm:text-[11px] sm:tracking-[0.42em]">
                CVAI × 14U GEYBL
              </p>
              <h1 className="mt-3 font-headline text-[1.65rem] font-extrabold uppercase leading-[1.05] tracking-[0.04em] text-paper sm:mt-4 sm:text-4xl sm:tracking-[0.05em] md:text-5xl md:tracking-[0.06em]">
                The Future of 14U Basketball Has Arrived
              </h1>
              <p className="mt-4 max-w-2xl font-sans text-[0.95rem] font-medium leading-relaxed text-white/[0.88] sm:mt-5 sm:text-lg sm:leading-[1.65]">
                For the first time, Nike Girls EYBL is bringing professional-level stats, live leaderboards, matchup
                coverage, and analytics storytelling to the 14U division, powered by CourtVision AI.
              </p>
            </div>
          </div>
        </header>

        <div className="border-t border-gold/25 bg-gradient-to-b from-ink to-ink">
          <div className="mx-auto h-px max-w-6xl bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
        </div>

        <div className="mx-auto max-w-[40rem] px-4 py-10 sm:px-5 sm:py-14 md:py-16">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-headline text-[10px] font-bold uppercase tracking-[0.28em] text-muted transition hover:text-ink active:text-ink/80"
          >
            <span aria-hidden className="text-gold">
              ←
            </span>
            Back to Stats Hub
          </Link>

          <div className="mt-10 space-y-10 sm:mt-12 sm:space-y-12">
            {sections.map((body, i) => (
              <section key={i} className="relative">
                <div
                  className="absolute -left-4 top-1 hidden h-[calc(100%-0.25rem)] w-px bg-gradient-to-b from-gold/50 via-gold/25 to-transparent sm:-left-5 sm:block"
                  aria-hidden
                />
                <p className="font-sans text-[1.05rem] font-normal leading-[1.8] text-ink/[0.88] sm:text-[1.125rem] sm:leading-[1.82]">
                  {body}
                </p>
                {i < sections.length - 1 ? (
                  <div className="mt-10 h-px w-full bg-gradient-to-r from-black/[0.12] via-black/[0.08] to-transparent sm:mt-12" />
                ) : null}
              </section>
            ))}
          </div>
        </div>

        <footer className="border-t border-black/[0.08] bg-gradient-to-b from-matte to-panel/30">
          <div className="mx-auto max-w-[40rem] px-4 py-10 text-center sm:px-5 sm:py-12">
            <p className="font-headline text-[10px] font-bold uppercase tracking-[0.42em] text-muted sm:text-[11px] sm:tracking-[0.46em]">
              <span className="text-gold">Powered by</span>{" "}
              <span className="text-ink/80">CourtVision AI</span>
            </p>
            <p className="mt-3 font-sans text-xs leading-relaxed text-muted">
              Official statistics and event data provided through Exposure. Editorial presentation by CourtVision AI.
            </p>
          </div>
        </footer>
      </article>

      <SiteFooter />
    </div>
  );
}
