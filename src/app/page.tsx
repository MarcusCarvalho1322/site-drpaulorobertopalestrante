import { HeroSection } from "@/components/home/hero-section";
import { AboutSection } from "@/components/home/about-section";
import { TalksSection } from "@/components/home/talks-section";
import { SocialProofSection } from "@/components/home/social-proof-section";
import { ContactSection } from "@/components/home/contact-section";
import { RoiCalculator } from "@/components/home/roi-calculator";
import { StatsSection } from "@/components/home/stats-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <TalksSection />
      <SocialProofSection />
      <RoiCalculator />
      <ContactSection />
    </main>
  );
}
