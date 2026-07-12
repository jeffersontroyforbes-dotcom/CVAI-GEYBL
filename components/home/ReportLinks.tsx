const reports = [
  {
    title: "NOLA Friday Recap",
    href: "/CVAI_Friday_Recap_Scouting_Report.pdf",
    download: "CVAI_Friday_Recap_Scouting_Report.pdf",
  },
  {
    title: "NOLA Saturday Recap",
    href: "/CVAI_Saturday_Notebook_Scouting_Report.pdf",
    download: "CVAI_Saturday_Notebook_Scouting_Report.pdf",
  },
  {
    title: "NOLA Sunday Recap",
    href: "/CVAI_Sunday_Takeaways_Report.pdf",
    download: "CVAI_Sunday_Takeaways_Report.pdf",
  },
];

export function ReportLinks() {
  return (
    <section id="reports" className="mx-auto max-w-6xl px-4 py-8 sm:px-5 sm:py-10">
      <div className="mb-3">
        <h2 className="font-headline text-xl tracking-[0.18em] text-ink">NOLA SESSION 2 REPORTS</h2>
        <p className="mt-1 text-xs font-medium text-muted">Downloadable recaps from New Orleans</p>
      </div>
      <div className="divide-y divide-black/[0.07] overflow-hidden rounded-2xl border border-black/[0.1] bg-paper shadow-[0_10px_32px_-12px_rgba(0,0,0,0.12)] ring-1 ring-black/[0.04]">
        {reports.map((r) => (
          r.href ? (
            <a
              key={r.title}
              href={r.href}
              download={r.download}
              className="group flex min-h-[3.25rem] items-center justify-between gap-3 px-4 py-3.5 transition duration-200 hover:bg-gold/10 active:bg-gold/15 sm:px-5"
            >
              <span className="min-w-0 flex-1 text-sm font-semibold leading-snug text-ink">{r.title}</span>
              <span className="shrink-0 rounded-full bg-ink px-3 py-1.5 font-headline text-[10px] font-bold uppercase tracking-[0.18em] text-gold-bright ring-1 ring-gold/45 transition duration-200 group-hover:bg-gold group-hover:text-ink">
                Download
              </span>
            </a>
          ) : (
            <div
              key={r.title}
              className="flex min-h-[3.25rem] items-center justify-between gap-3 px-4 py-3.5 sm:px-5"
            >
              <span className="min-w-0 flex-1 text-sm font-semibold leading-snug text-ink">{r.title}</span>
              <span className="shrink-0 font-headline text-xs font-bold tabular-nums text-muted/50" aria-hidden>
                —
              </span>
            </div>
          )
        ))}
      </div>
    </section>
  );
}
