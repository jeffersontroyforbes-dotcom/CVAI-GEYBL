const links = [
  { label: "Stats Hub", href: "#hub", active: true },
  { label: "Live Leaders", href: "#leaders" },
  { label: "NOLA Archive", href: "#notebook" },
  { label: "Reports", href: "#reports" },
];

export function StatsSubnav() {
  return (
    <nav
      aria-label="Stats navigation"
      className="stats-subnav relative z-40 border-b border-black/[0.07] bg-white shadow-[0_4px_14px_-8px_rgba(0,0,0,0.12)]"
    >
      <div className="mx-auto max-w-6xl min-w-0 px-4 sm:px-5">
        <div className="stats-subnav-inner scrollbar-none flex min-h-[2.85rem] w-full min-w-0 flex-nowrap items-center justify-between gap-2 overflow-x-auto overscroll-x-contain py-2.5 sm:min-h-[2.75rem] sm:justify-start sm:gap-5 sm:py-2.5">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className={`shrink-0 snap-start whitespace-nowrap font-headline text-[11px] font-bold uppercase leading-tight tracking-[0.1em] transition sm:rounded-full sm:px-5 sm:py-2.5 sm:text-xs sm:tracking-[0.16em] ${
                l.active
                  ? "rounded-full bg-ink px-4 py-2 text-paper ring-1 ring-gold/60 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_0_24px_-4px_rgba(212,175,55,0.42)] sm:px-5 sm:py-2.5"
                  : "max-sm:rounded-none px-2 py-2 text-ink hover:text-ink/70 sm:px-5 sm:py-2.5"
              }`}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
