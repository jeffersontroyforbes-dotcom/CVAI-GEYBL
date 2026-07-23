/* eslint-disable @next/next/no-img-element -- static /public assets; avoids next/image + optimizer edge cases */
type HeroArticleProps = {
  imageSrc?: string;
  imageAlt?: string;
};

export function HeroArticle({
  imageSrc = "/cvai-chicago-hero.png",
  imageAlt = "EYBL Chicago — CourtVision AI Coverage 2026 Nike Nationals",
}: HeroArticleProps) {
  return (
    <article id="hub" className="hub-hero mx-auto max-w-6xl px-3 pb-1.5 pt-3 sm:px-5 sm:pb-2.5 sm:pt-6">
      <div className="hub-hero-frame relative z-10 aspect-[9/16] w-full overflow-hidden rounded-2xl border border-gold/35 bg-ink shadow-heroGoldRing ring-1 ring-gold/25 sm:rounded-[1.35rem]">
        <img
          src={imageSrc}
          alt={imageAlt}
          width={576}
          height={1024}
          decoding="async"
          fetchPriority="high"
          className="pointer-events-none h-full w-full object-cover object-top align-middle"
        />
      </div>
    </article>
  );
}
