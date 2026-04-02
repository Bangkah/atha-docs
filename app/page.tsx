import SeoJsonLd from "@/components/docs/SeoJsonLd";
import Sidebar from "@/components/docs/Sidebar";
import SiteFooter from "@/components/docs/SiteFooter";
import BuilderStorySection from "@/components/docs/sections/BuilderStorySection";
import CommandsSection from "@/components/docs/sections/CommandsSection";
import DocsIndexSection from "@/components/docs/sections/DocsIndexSection";
import FeatureComparisonSection from "@/components/docs/sections/FeatureComparisonSection";
import HeroSection from "@/components/docs/sections/HeroSection";
import InstallationSection from "@/components/docs/sections/InstallationSection";
import OperationalNotesSection from "@/components/docs/sections/OperationalNotesSection";
import PathsSection from "@/components/docs/sections/PathsSection";
import PillarsSection from "@/components/docs/sections/PillarsSection";
import ProjectLinksSection from "@/components/docs/sections/ProjectLinksSection";
import QuickExampleSection from "@/components/docs/sections/QuickExampleSection";
import QuickStartSection from "@/components/docs/sections/QuickStartSection";
import TroubleshootingSection from "@/components/docs/sections/TroubleshootingSection";
import WhySection from "@/components/docs/sections/WhySection";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 lg:grid lg:grid-cols-[300px_minmax(0,1fr)]">
      <SeoJsonLd />
      <Sidebar />

      <main className="space-y-4 p-4 md:p-6">
        <HeroSection />
        <WhySection />
        <QuickExampleSection />
        <PillarsSection />
        <FeatureComparisonSection />
        <QuickStartSection />
        <BuilderStorySection />
        <InstallationSection />
        <CommandsSection />
        <OperationalNotesSection />
        <PathsSection />
        <TroubleshootingSection />
        <DocsIndexSection />
        <ProjectLinksSection />
        <SiteFooter />
      </main>
    </div>
  );
}
