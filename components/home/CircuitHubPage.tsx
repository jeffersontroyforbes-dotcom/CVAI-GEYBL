"use client";

import { useState } from "react";
import { EmbedAutoHeight } from "@/components/EmbedAutoHeight";
import { AgeTabs } from "@/components/home/AgeTabs";
import { ContactSection } from "@/components/home/ContactSection";
import { HeroArticle } from "@/components/home/HeroArticle";
import { LiveLeadersSection } from "@/components/home/LiveLeadersSection";
import { NationalsLiveModules } from "@/components/home/NationalsLiveModules";
import { SiteFooter } from "@/components/home/SiteFooter";
import { SiteHeader } from "@/components/home/SiteHeader";
import { StatsSubnav } from "@/components/home/StatsSubnav";
import { HUB_CIRCUITS, type HubAge, type HubCircuitConfig } from "@/lib/hubConfig";

type CircuitHubPageProps = {
  circuitId: HubCircuitConfig["id"];
};

export function CircuitHubPage({ circuitId }: CircuitHubPageProps) {
  const circuit = HUB_CIRCUITS[circuitId];
  const [age, setAge] = useState<HubAge>(circuit.defaultAge);

  return (
    <div className="page-shell min-w-0 overflow-x-clip pb-12 sm:pb-14">
      <EmbedAutoHeight />
      <div className="site-chrome sticky top-0 z-50 shadow-[0_8px_24px_-12px_rgba(0,0,0,0.35)]">
        <SiteHeader />
        <StatsSubnav />
      </div>
      <main>
        <HeroArticle imageSrc={circuit.heroSrc} imageAlt={circuit.heroAlt} />
        <AgeTabs circuit={circuit} age={age} onChange={setAge} />
        <LiveLeadersSection circuit={circuit} age={age} />
        <NationalsLiveModules circuitId={circuitId} age={age} />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}
