/* eslint-disable @next/next/no-img-element -- static /public assets; avoids next/image + optimizer edge cases */
export function HeroArticle() {
  return (
    <article id="hub" className="mx-auto max-w-6xl px-4 pb-2 pt-5 sm:px-5 sm:pb-2.5 sm:pt-6">
      <div className="relative z-10 aspect-[9/16] w-full overflow-hidden rounded-2xl border border-gold/35 bg-ink shadow-heroGoldRing ring-1 ring-gold/25 sm:rounded-[1.35rem]">
        <img
          src="/cvai-vegas-hero.png"
          alt="EYBL Vegas — CourtVision AI Coverage 2026"
          width={576}
          height={1024}
          decoding="async"
          fetchPriority="high"
          className="pointer-events-none h-full w-full object-cover align-middle"
        />
      </div>
    </article>
  );
}
