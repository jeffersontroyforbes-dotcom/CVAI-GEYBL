/* eslint-disable @next/next/no-img-element -- static /public assets; avoids next/image + optimizer edge cases */
type HeroArticleProps = {
  imageSrc?: string;
  imageAlt?: string;
  title?: string;
  subtitle?: string;
  league?: string;
  year?: string;
};

export function HeroArticle({
  imageSrc,
  imageAlt = "CourtVision AI coverage",
  title,
  subtitle,
  league,
  year,
}: HeroArticleProps) {
  if (!imageSrc) {
    return (
      <article id="hub" className="hub-hero mx-auto max-w-6xl px-3 pb-1.5 pt-3 sm:px-5 sm:pb-2.5 sm:pt-6">
        <div className="hub-hero-frame relative z-10 overflow-hidden rounded-2xl border border-gold/35 bg-ink px-5 py-10 text-center shadow-heroGoldRing ring-1 ring-gold/25 sm:rounded-[1.35rem] sm:px-8 sm:py-14">
          {title ? (
            <p className="font-headline text-5xl font-extrabold uppercase tracking-[0.08em] text-paper sm:text-6xl md:text-7xl">
              {title}
            </p>
          ) : null}
          {subtitle ? (
            <p className="mt-2 font-headline text-3xl font-extrabold uppercase tracking-[0.12em] text-gold sm:text-4xl">
              {subtitle}
            </p>
          ) : null}
          {league ? (
            <p className="mt-4 font-headline text-[10px] font-bold uppercase tracking-[0.28em] text-white/70 sm:text-[11px]">
              {league}
            </p>
          ) : null}
          {year ? (
            <p className="mt-3 font-headline text-sm font-extrabold uppercase tracking-[0.35em] text-gold-bright">
              {year}
            </p>
          ) : null}
        </div>
      </article>
    );
  }

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
          className="pointer-events-none h-full w-full object-cover object-center align-middle sm:object-top"
        />
      </div>
    </article>
  );
}
