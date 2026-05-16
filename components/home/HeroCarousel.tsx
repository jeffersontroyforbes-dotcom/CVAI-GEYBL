"use client";

/* eslint-disable @next/next/no-img-element -- static /public assets; avoids next/image + optimizer edge cases */
import { useEffect, useState } from "react";
import Link from "next/link";
import type { NotebookItem } from "./notebookItems";

type HeroCarouselProps = {
  items: NotebookItem[];
};

export function HeroCarousel({ items }: HeroCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion || items.length <= 1) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % items.length);
    }, 8000);

    return () => window.clearInterval(interval);
  }, [items.length]);

  const activeItem = items[activeIndex] ?? items[0];

  return (
    <Link
      href={activeItem.href}
      className="hero-carousel group relative z-10 block aspect-square w-full overflow-hidden rounded-2xl border border-gold/35 bg-ink shadow-heroGoldRing ring-1 ring-gold/25 transition duration-300 ease-out will-change-transform hover:border-gold/55 hover:shadow-[0_0_0_1px_rgba(212,175,55,0.45),0_0_52px_-6px_rgba(212,175,55,0.5),0_24px_56px_-12px_rgba(0,0,0,0.5)] active:scale-[0.985] sm:rounded-[1.35rem] sm:active:scale-[0.992] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-bright focus-visible:ring-offset-2 focus-visible:ring-offset-matte"
      aria-label={`Read notebook: ${activeItem.title}`}
    >
      {items.map((item, index) => (
        <img
          key={item.href}
          src={item.imageSrc}
          alt={item.imageAlt}
          width={1024}
          height={1024}
          decoding="async"
          fetchPriority={index === 0 ? "high" : "auto"}
          className={`pointer-events-none absolute inset-0 h-full w-full object-cover align-middle transition duration-1000 ease-in-out group-hover:scale-[1.02] group-hover:brightness-[1.04] ${
            index === activeIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </Link>
  );
}
