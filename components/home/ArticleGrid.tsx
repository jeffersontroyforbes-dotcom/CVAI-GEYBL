/* eslint-disable @next/next/no-img-element -- static /public assets */
import Link from "next/link";

type NotebookItem = {
  title: string;
  meta: string;
  href: string;
  /** When set, shows image thumbnail; otherwise placeholder tile. */
  imageSrc?: string;
  imageAlt?: string;
};

const items: NotebookItem[] = [
  {
    title: "The Future of 14U Basketball Has Arrived",
    meta: "Feature · 8 min read",
    href: "/articles/future-of-14u",
    imageSrc: "/hero-cvai-14u.png",
    imageAlt: "CVAI × 14U GEYBL — feature art",
  },
  {
    title: "Players To Watch",
    meta: "Notebook · Scouting",
    href: "/articles/14u-notebook-players-to-watch",
    imageSrc: "/hero-players-to-watch.png",
    imageAlt: "Players to watch — Next up, catch all the action",
  },
];

function ArticleThumb({ imageSrc, imageAlt }: Pick<NotebookItem, "imageSrc" | "imageAlt">) {
  if (imageSrc) {
    return (
      <div className="pointer-events-none relative h-20 w-24 shrink-0 overflow-hidden rounded-xl ring-1 ring-black/10">
        <img
          src={imageSrc}
          alt={imageAlt ?? ""}
          width={96}
          height={80}
          decoding="async"
          className="h-full w-full object-cover transition duration-300 ease-out group-hover:scale-105 group-active:scale-100"
        />
      </div>
    );
  }

  return (
    <div className="pointer-events-none relative flex h-20 w-24 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-[#050505] via-zinc-900 to-zinc-800 ring-1 ring-white/12 shadow-inner">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(212,180,92,0.45),transparent_55%)] opacity-90 transition duration-300 group-hover:opacity-100" />
      <span className="relative font-headline text-[9px] font-bold uppercase tracking-[0.2em] text-gold-bright/90">
        14U
      </span>
    </div>
  );
}

export function ArticleGrid() {
  return (
    <section id="notebook" className="mx-auto max-w-6xl px-4 py-8 sm:px-5 sm:py-10">
      <div className="mb-4 flex items-end justify-between gap-2">
        <h2 className="font-headline text-xl tracking-[0.18em] text-ink">NOTEBOOK</h2>
        <a
          href="/#notebook"
          className="text-xs font-semibold tracking-wide text-gold drop-shadow-[0_0_10px_rgba(212,180,92,0.22)] transition hover:text-gold-bright"
        >
          SEE ALL
        </a>
      </div>
      <div className="grid grid-cols-1 gap-4">
        {items.map((it) => (
          <Link
            key={it.title}
            href={it.href}
            className="group flex gap-3 overflow-hidden rounded-2xl border border-black/[0.1] bg-paper p-3 shadow-[0_6px_20px_-8px_rgba(0,0,0,0.1)] ring-1 ring-black/[0.03] transition duration-200 ease-out hover:-translate-y-0.5 hover:border-black/[0.14] hover:shadow-lift active:translate-y-0 active:scale-[0.99] sm:gap-4 sm:p-4"
          >
            <ArticleThumb imageSrc={it.imageSrc} imageAlt={it.imageAlt} />
            <div className="min-w-0 flex-1">
              <h3 className="font-headline text-base leading-snug tracking-tight text-ink transition duration-200 group-hover:text-gold-deep sm:text-lg">
                {it.title}
              </h3>
              <p className="mt-1 text-xs font-medium text-muted">{it.meta}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
