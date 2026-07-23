const links = [
  { label: "Hub", href: "#hub", active: true },
  { label: "Leaders", href: "#leaders" },
  { label: "Scores", href: "#scoreboard" },
  { label: "Standings", href: "#standings" },
  { label: "Matchups", href: "#matchups" },
  { label: "Watch", href: "#watch-list" },
];

export function StatsSubnav() {
  return (
    <nav
      aria-label="Stats navigation"
      className="stats-subnav relative z-40 border-b border-black/[0.07] bg-white"
    >
      <div className="mx-auto max-w-6xl min-w-0 px-1.5 sm:px-5">
        <div className="stats-subnav-inner scrollbar-none flex min-h-0 w-full min-w-0 flex-nowrap items-center justify-start gap-0.5 overflow-x-auto overscroll-x-contain py-1 sm:gap-2 sm:py-2">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`shrink-0 snap-start whitespace-nowrap font-headline font-extrabold uppercase leading-none tracking-[0.04em] transition sm:tracking-[0.12em] ${
                l.active
                  ? "rounded-full bg-ink px-2 py-1 text-[9px] text-paper ring-1 ring-gold/50 sm:px-4 sm:py-2 sm:text-[11px]"
                  : "rounded-full px-2 py-1 text-[9px] text-ink/75 hover:bg-black/[0.04] hover:text-ink sm:px-3.5 sm:py-2 sm:text-[11px]"
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
