/* eslint-disable @next/next/no-img-element -- static /public assets */
export function SiteHeader() {
  return (
    <header className="relative border-b border-gold/20 bg-ink shadow-navDepth">
      <div className="mx-auto flex max-w-6xl items-center justify-center gap-2 px-2.5 py-1.5 sm:gap-4 sm:px-4 sm:py-2.5 md:gap-5">
        <a
          href="#hub"
          className="flex min-w-0 max-w-[min(100%,22rem)] shrink justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/50 focus-visible:ring-offset-2 focus-visible:ring-offset-ink sm:max-w-[32rem]"
        >
          <img
            src="/logos/cvai-logo.png"
            alt="CourtVision AI"
            width={640}
            height={140}
            decoding="async"
            fetchPriority="high"
            className="h-auto w-full max-w-full object-contain drop-shadow-[0_2px_14px_rgba(0,0,0,0.5)] max-h-7 sm:max-h-11 md:max-h-12 lg:max-h-[3.35rem]"
          />
        </a>
        <a
          href="#hub"
          className="flex shrink-0 items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/50 focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
        >
          <img
            src="/logos/eybl-logo.png"
            alt="Nike Girls EYBL"
            width={256}
            height={256}
            decoding="async"
            fetchPriority="high"
            className="h-7 w-7 object-contain drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)] sm:h-11 sm:w-11 md:h-12 md:w-12"
          />
        </a>
      </div>
    </header>
  );
}
