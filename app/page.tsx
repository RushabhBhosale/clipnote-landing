import { DemoSection } from "@/components/demo-section";
import { Hero } from "@/components/hero";
import {
  BetaSection,
  FeaturesSection,
  InstallSection,
  PrivacySection,
  ShortcutsSection,
  SiteFooter,
  WorkflowSection,
} from "@/components/sections";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0c] text-zinc-100 antialiased">
      <SiteHeader />
      <main>
        <Hero />
        <DemoSection />
        <WorkflowSection />
        <PrivacySection />
        <FeaturesSection />
        <ShortcutsSection />
        <InstallSection />
        <BetaSection />
      </main>
      <SiteFooter />
    </div>
  );
}