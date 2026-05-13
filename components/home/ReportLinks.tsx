const reports = [
  { title: "NOLA Friday Recap" },
  { title: "NOLA Saturday Recap" },
  { title: "NOLA Sunday Recap" },
];

export function ReportLinks() {
  return (
    <section id="reports" className="mx-auto max-w-6xl px-4 py-8 sm:px-5 sm:py-10">
      <h2 className="mb-3 font-headline text-xl tracking-[0.18em] text-ink">REPORTS & DOWNLOADS</h2>
      <div className="divide-y divide-black/[0.07] overflow-hidden rounded-2xl border border-black/[0.1] bg-paper shadow-[0_10px_32px_-12px_rgba(0,0,0,0.12)] ring-1 ring-black/[0.04]">
        {reports.map((r) => (
          <div
            key={r.title}
            className="flex min-h-[3.25rem] items-center justify-between gap-3 px-4 py-3.5 sm:px-5"
          >
            <span className="min-w-0 flex-1 text-sm font-semibold leading-snug text-ink">{r.title}</span>
            <span
              className="shrink-0 font-headline text-xs font-bold tabular-nums text-muted/50"
              aria-hidden
            >
              —
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
