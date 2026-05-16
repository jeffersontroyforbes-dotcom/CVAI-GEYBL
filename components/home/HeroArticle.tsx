import { HeroCarousel } from "./HeroCarousel";
import { notebookItems } from "./notebookItems";

export function HeroArticle() {
  return (
    <article id="hub" className="mx-auto max-w-6xl px-4 pb-2 pt-5 sm:px-5 sm:pb-2.5 sm:pt-6">
      <HeroCarousel items={notebookItems} />
    </article>
  );
}
