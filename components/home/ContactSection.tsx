const CONTACT_EMAIL = "jeffersontroyforbes@gmail.com";
const mailtoHref = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("CVAI × GEYBL inquiry")}`;

export function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 pb-10 pt-2 sm:px-5 sm:pb-12 sm:pt-4">
      <div className="overflow-hidden rounded-2xl border border-gold/35 bg-ink shadow-heroGoldRing ring-1 ring-gold/25 sm:rounded-[1.35rem]">
        <div className="border-b border-white/[0.08] bg-gradient-to-r from-white/[0.04] to-transparent px-5 py-4 sm:px-8 sm:py-5">
          <p className="text-center font-headline text-[10px] font-bold uppercase tracking-[0.38em] text-gold-bright sm:text-[11px] sm:tracking-[0.42em]">
            Questions · Partnerships · Coverage
          </p>
        </div>
        <div className="px-4 py-8 sm:px-8 sm:py-10 md:py-12">
          <p className="mx-auto max-w-xl text-center font-sans text-sm font-medium leading-relaxed text-white/[0.78] sm:text-base">
            Reach the CourtVision AI team about GEYBL coverage, data integrations, or editorial requests.
          </p>
          <div className="mt-8 flex justify-center sm:mt-10">
            <a
              href={mailtoHref}
              className="inline-flex min-h-[3.75rem] w-full max-w-xl items-center justify-center rounded-xl border border-gold/45 bg-gold px-6 py-5 font-headline text-xl font-extrabold uppercase tracking-[0.14em] text-ink shadow-[inset_0_1px_0_rgba(255,255,255,0.45),0_0_40px_-8px_rgba(255, 79, 1,0.55)] ring-2 ring-gold-bright/50 transition duration-200 hover:border-gold-bright hover:brightness-[1.03] active:scale-[0.99] sm:min-h-[4.25rem] sm:rounded-2xl sm:py-6 sm:text-2xl sm:tracking-[0.16em] md:text-3xl md:tracking-[0.18em]"
              aria-label={`Contact us via email at ${CONTACT_EMAIL}`}
            >
              CONTACT US
            </a>
          </div>
          <p className="mt-6 text-center font-sans text-xs font-medium text-white/[0.45] sm:mt-7 sm:text-sm">
            {CONTACT_EMAIL}
          </p>
        </div>
      </div>
    </section>
  );
}
