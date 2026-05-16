import { ArticleGrid } from "@/components/home/ArticleGrid";
import { HeroArticle } from "@/components/home/HeroArticle";
import { LiveLeadersSection } from "@/components/home/LiveLeadersSection";
import { MatchupPreviews } from "@/components/home/MatchupPreviews";
import { ContactSection } from "@/components/home/ContactSection";
import { ReportLinks } from "@/components/home/ReportLinks";
import { SiteFooter } from "@/components/home/SiteFooter";
import { SiteHeader } from "@/components/home/SiteHeader";
import { StatsSubnav } from "@/components/home/StatsSubnav";

export default function HomePage() {
  return (
    <div className="page-shell min-w-0 overflow-x-clip pb-12 sm:pb-14">
      <div className="site-chrome sticky top-0 z-50 shadow-[0_8px_24px_-12px_rgba(0,0,0,0.35)]">
        <SiteHeader />
        <StatsSubnav />
      </div>
      <main>
        <HeroArticle />
        <MatchupPreviews />
        <ArticleGrid />
        <ReportLinks />
        <LiveLeadersSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}
