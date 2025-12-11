import { HeroSection } from "@/components/section/hero-section";
import { ServicesSection } from "@/components/section/services-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      {/* later you can add: <ServicesSection /> <ProcessSection /> etc. */}
    </>
  );
}
