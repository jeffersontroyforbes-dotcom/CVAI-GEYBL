/* eslint-disable @next/next/no-img-element -- static /public assets */
import Link from "next/link";
import { notebookItems, type NotebookItem } from "./notebookItems";

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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255, 79, 1,0.45),transparent_55%)] opacity-90 transition duration-300 group-hover:opacity-100" />
      <span className="relative font-headline text-[9px] font-bold uppercase tracking-[0.2em] text-gold-bright/90">
        14U
      </span>
    </div>
  );
}

export function ArticleGrid() {
  return (
    <section id="notebook" className="mx-auto max-w-6xl px-4 py-8 sm:px-5 sm:py-10">
      <div className="mb-4 flex flex-wrap items-end justify-between gap-2">
        <div>
          <h2 className="font-headline text-xl tracking-[0.18em] text-ink">ARCHIVE</h2>
          <p className="mt-1 text-xs font-medium text-muted">NOLA Session 2 · Vegas Session 3</p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4">
        {notebookItems.map((it) => (
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
