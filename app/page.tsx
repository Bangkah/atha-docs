import SeoJsonLd from "@/components/docs/SeoJsonLd";
import Sidebar from "@/components/docs/Sidebar";
import SiteFooter from "@/components/docs/SiteFooter";
import ScrollDepthTracker from "@/components/docs/ScrollDepthTracker";
import StickyInstallCta from "@/components/docs/StickyInstallCta";
import BeforeAfterFlowSection from "@/components/docs/sections/BeforeAfterFlowSection";
import BrandGuideSection from "@/components/docs/sections/BrandGuideSection";
import BuilderStorySection from "@/components/docs/sections/BuilderStorySection";
import CommandsSection from "@/components/docs/sections/CommandsSection";
import DocsIndexSection from "@/components/docs/sections/DocsIndexSection";
import FaqSection from "@/components/docs/sections/FaqSection";
import FeatureComparisonSection from "@/components/docs/sections/FeatureComparisonSection";
import HeroSection from "@/components/docs/sections/HeroSection";
import InstallationSection from "@/components/docs/sections/InstallationSection";
import OperationalNotesSection from "@/components/docs/sections/OperationalNotesSection";
import PathsSection from "@/components/docs/sections/PathsSection";
import PillarsSection from "@/components/docs/sections/PillarsSection";
import ProjectLinksSection from "@/components/docs/sections/ProjectLinksSection";
import QuickExampleSection from "@/components/docs/sections/QuickExampleSection";
import QuickStartSection from "@/components/docs/sections/QuickStartSection";
import SocialProofSection from "@/components/docs/sections/SocialProofSection";
import TroubleshootingSection from "@/components/docs/sections/TroubleshootingSection";
import UseCasesSection from "@/components/docs/sections/UseCasesSection";
import WhySection from "@/components/docs/sections/WhySection";
import WhySwitchSection from "@/components/docs/sections/WhySwitchSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 lg:grid lg:grid-cols-[300px_minmax(0,1fr)]">
      <SeoJsonLd />
      <ScrollDepthTracker />
      <Sidebar />

      <main className="space-y-4 p-4 md:p-6">
        <HeroSection />
        <WhySection />
        <UseCasesSection />
        <WhySwitchSection />
        <BeforeAfterFlowSection />
        <SocialProofSection />
        <FaqSection />
        <QuickExampleSection />
        <PillarsSection />
        <FeatureComparisonSection />
        <QuickStartSection />
        <BuilderStorySection />
        <BrandGuideSection />
        <InstallationSection />
        <CommandsSection />
        <OperationalNotesSection />
        <PathsSection />
        <TroubleshootingSection />
        <DocsIndexSection />
        <ProjectLinksSection />
        <SiteFooter />
      </main>
      <StickyInstallCta />
    </div>
  );
}
