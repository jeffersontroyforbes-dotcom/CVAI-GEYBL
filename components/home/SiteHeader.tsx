/* eslint-disable @next/next/no-img-element -- static /public assets */
export function SiteHeader() {
  return (
    <header className="relative border-b border-gold/20 bg-ink shadow-navDepth">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-2.5 py-1 sm:gap-3 sm:px-3 sm:py-1.5 md:gap-4 md:px-4">
        <button
          type="button"
          className="inline-flex h-12 w-12 shrink-0 flex-col items-center justify-center gap-1 rounded-lg border border-white/[0.1] bg-white/[0.04] text-white transition hover:border-gold/35 hover:bg-white/[0.08] active:bg-white/10 sm:h-[3.25rem] sm:w-[3.25rem]"
          aria-label="Open menu"
        >
          <span className="block h-[2px] w-[1.4rem] rounded-full bg-white sm:w-[1.5rem]" />
          <span className="block h-[2px] w-[1.4rem] rounded-full bg-white sm:w-[1.5rem]" />
          <span className="block h-[2px] w-[1.4rem] rounded-full bg-white sm:w-[1.5rem]" />
        </button>

        <div className="flex min-h-0 min-w-0 flex-1 justify-center px-0.5 sm:px-1">
          <a
            href="#hub"
            className="flex min-h-0 w-full max-w-[min(86vw,calc(100vw-7.75rem))] justify-center sm:max-w-[min(78vw,640px)] md:max-w-[min(74vw,720px)] lg:max-w-[min(70vw,780px)]"
          >
            <img
              src="/logos/cvai-logo.png"
              alt="CourtVision AI"
              width={640}
              height={140}
              decoding="async"
              fetchPriority="high"
              className="h-auto w-full max-w-full object-contain drop-shadow-[0_3px_20px_rgba(0,0,0,0.55)] max-h-[5.75rem] sm:max-h-[7rem] md:max-h-[8.25rem] lg:max-h-[9rem]"
            />
          </a>
        </div>

        <a
          href="#hub"
          className="flex shrink-0 items-center justify-center p-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/50 focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
        >
          <img
            src="/logos/eybl-logo.png"
            alt="Nike Girls EYBL"
            width={256}
            height={256}
            decoding="async"
            fetchPriority="high"
            className="h-[5.75rem] w-[5.75rem] object-contain drop-shadow-[0_3px_18px_rgba(0,0,0,0.5)] sm:h-[7rem] sm:w-[7rem] md:h-[8.25rem] md:w-[8.25rem] lg:h-[9rem] lg:w-[9rem]"
          />
        </a>
      </div>
    </header>
  );
}
