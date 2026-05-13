/* eslint-disable @next/next/no-img-element -- static /public assets; avoids next/image + optimizer edge cases */
import Link from "next/link";

/** Matches `public/hero-cvai-14u.png` intrinsic size for layout with `images.unoptimized`. */
export function HeroArticle() {
  return (
    <article id="hub" className="mx-auto max-w-6xl px-4 pb-2 pt-5 sm:px-5 sm:pb-2.5 sm:pt-6">
      <Link
        href="/articles/future-of-14u"
        className="group relative z-10 block w-full overflow-hidden rounded-2xl border border-gold/35 bg-ink shadow-heroGoldRing ring-1 ring-gold/25 transition duration-300 ease-out will-change-transform hover:border-gold/55 hover:shadow-[0_0_0_1px_rgba(212,175,55,0.45),0_0_52px_-6px_rgba(212,175,55,0.5),0_24px_56px_-12px_rgba(0,0,0,0.5)] active:scale-[0.985] sm:rounded-[1.35rem] sm:active:scale-[0.992] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-bright focus-visible:ring-offset-2 focus-visible:ring-offset-matte"
        aria-label="Read feature: The Future of 14U Basketball Has Arrived"
      >
        <img
          src="/hero-cvai-14u.png"
          alt="CVAI x 14U GEYBL — The Future of 14U Basketball Has Arrived. Nike Girls EYBL professional stats and analytics, powered by CourtVision AI."
          width={705}
          height={612}
          decoding="async"
          fetchPriority="high"
          className="pointer-events-none h-auto w-full object-contain align-middle transition duration-500 ease-out group-hover:scale-[1.02] group-hover:brightness-[1.04]"
        />
      </Link>
    </article>
  );
}
