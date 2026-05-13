"use client";

import { useEffect } from "react";

type Props = {
  /** DOM fragment without `#` (e.g. `notebook` → `/#notebook`). */
  section: string;
};

/**
 * Single-page sections live on `/` with hash targets (e.g. `/#notebook`).
 * This avoids 404/500 when users or browsers hit `/notebook` as a path.
 */
export function HashRedirectToSection({ section }: Props) {
  useEffect(() => {
    const id = section.startsWith("#") ? section.slice(1) : section;
    window.location.replace(`/#${id}`);
  }, [section]);

  return (
    <div className="flex min-h-dvh items-center justify-center bg-matte px-6 text-center font-sans text-ink">
      <p className="text-sm font-medium text-muted">Opening section…</p>
    </div>
  );
}
