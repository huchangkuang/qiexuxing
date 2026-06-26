import { CallToActionSection } from "@/components/home/CallToActionSection";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { HeroSection } from "@/components/home/HeroSection";
import { LatestInsights } from "@/components/home/LatestInsights";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <FeaturedProjects />
      <LatestInsights />
      <CallToActionSection />
    </main>
  );
}
