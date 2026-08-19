import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { ClientStrip } from "@/components/sections/ClientStrip";
import { ShowreelSection } from "@/components/sections/ShowreelSection";
import { AgencyIntro } from "@/components/sections/AgencyIntro";
import { HorizontalProjectReel } from "@/components/sections/HorizontalProjectReel";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { ApproachSection } from "@/components/sections/ApproachSection";
import { ImpactSection } from "@/components/sections/ImpactSection";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { AISection } from "@/components/sections/AISection";
import { InsightsSection } from "@/components/sections/InsightsSection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/layout/Footer";
import { VersionSwitcher } from "@/components/ui/VersionSwitcher";

export default function Home() {
  return (
    <SmoothScroll>
      <main className="min-h-screen relative overflow-hidden bg-[var(--bg-main)]">
        <Header />
        <HeroSection />
        <ClientStrip />
        <div id="showreel">
          <ShowreelSection />
        </div>
        <AgencyIntro />
        <HorizontalProjectReel />
        <ServicesSection />
        <SelectedWork />
        <ApproachSection />
        <ImpactSection />
        <IndustriesSection />
        <AISection />
        <InsightsSection />
        <FinalCTA />
        <Footer />
        <VersionSwitcher />
      </main>
    </SmoothScroll>
  );
}
