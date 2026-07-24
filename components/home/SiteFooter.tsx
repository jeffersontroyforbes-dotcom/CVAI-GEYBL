/* eslint-disable @next/next/no-img-element -- static /public assets */
import { ExposureAttribution } from "@/components/home/ExposureAttribution";

export function SiteFooter() {
  return (
    <footer className="mt-8 border-t border-white/[0.08] bg-ink shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:flex-row sm:items-start sm:justify-between sm:px-5">
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-6 gap-y-4">
            <img
              src="/logos/cvai-logo.png"
              alt="CourtVision AI"
              width={640}
              height={140}
              decoding="async"
              loading="lazy"
              className="h-10 w-auto max-w-full object-contain drop-shadow-[0_2px_16px_rgba(0,0,0,0.5)] sm:h-12"
            />
            <img
              src="/logos/eybl-logo.png"
              alt="Nike Girls EYBL"
              width={256}
              height={256}
              decoding="async"
              loading="lazy"
              className="h-9 w-9 shrink-0 object-contain drop-shadow-[0_2px_14px_rgba(0,0,0,0.45)] sm:h-10 sm:w-10"
            />
          </div>
          <p className="mt-4 max-w-md text-xs font-medium leading-relaxed text-white/[0.72]">
            CourtVision AI delivers live analytics, leaderboards, scouting insights, and editorial coverage for the next
            generation of basketball.
          </p>
        </div>
        <div className="shrink-0 text-sm font-medium text-white/[0.78] sm:text-right">
          <span className="text-gold-bright drop-shadow-[0_0_14px_rgba(255, 138, 77,0.28)]">
            Powered by CourtVision AI
          </span>
          <span className="mx-2 text-white/25">|</span>
          <span className="text-white/80">© {new Date().getFullYear()} CVAI</span>
          <ExposureAttribution tone="dark" className="mt-3 text-center sm:text-right" />
        </div>
      </div>
    </footer>
  );
}
