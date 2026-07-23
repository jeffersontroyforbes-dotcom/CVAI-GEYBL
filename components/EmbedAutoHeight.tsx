"use client";

import { useEffect } from "react";

const SOURCE = "cvai-geybl";

/**
 * Posts document height to the parent so Nike/Alex can size the iframe
 * without double scrollbars. Only active when data-embed is set.
 */
export function EmbedAutoHeight() {
  useEffect(() => {
    if (typeof document === "undefined") return;
    if (document.documentElement.getAttribute("data-embed") !== "true") return;
    if (window.self === window.top) return;

    let raf = 0;
    let lastHeight = 0;

    const measure = () => {
      const root = document.documentElement;
      const body = document.body;
      const height = Math.ceil(
        Math.max(
          root.scrollHeight,
          root.offsetHeight,
          body?.scrollHeight ?? 0,
          body?.offsetHeight ?? 0,
        ),
      );
      if (height > 0 && height !== lastHeight) {
        lastHeight = height;
        window.parent.postMessage({ source: SOURCE, type: "resize", height }, "*");
      }
    };

    const schedule = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(measure);
    };

    schedule();
    const interval = window.setInterval(schedule, 1000);
    window.addEventListener("load", schedule);
    window.addEventListener("resize", schedule);

    const ro =
      typeof ResizeObserver !== "undefined"
        ? new ResizeObserver(schedule)
        : null;
    if (ro) {
      ro.observe(document.documentElement);
      if (document.body) ro.observe(document.body);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.clearInterval(interval);
      window.removeEventListener("load", schedule);
      window.removeEventListener("resize", schedule);
      ro?.disconnect();
    };
  }, []);

  return null;
}
