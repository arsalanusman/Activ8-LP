import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { ClientStrip } from "@/components/sections/ClientStrip";
import { AgencyIntro } from "@/components/sections/AgencyIntro";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ApproachSection } from "@/components/sections/ApproachSection";
import { ImpactSection } from "@/components/sections/ImpactSection";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { InsightsSection } from "@/components/sections/InsightsSection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/layout/Footer";
import { VersionSwitcher } from "@/components/ui/VersionSwitcher";

export default function Version2Page() {
  return (
    <SmoothScroll>
      <main className="min-h-screen relative overflow-hidden bg-[var(--bg-main)]">
        <Header />
        <HeroSection />
        <ClientStrip />
        <AgencyIntro />
        <SelectedWork />
        <ServicesSection />
        <ApproachSection />
        <ImpactSection />
        <IndustriesSection />
        <InsightsSection />
        <FinalCTA />
        <Footer />
        <VersionSwitcher />
      </main>
    </SmoothScroll>
  );
}
