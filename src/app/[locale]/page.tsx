import AboutMeSection from "@/components/sections/home/AboutMeSection";
import HeroSection from "@/components/sections/home/HeroSection";
import QuoteSection from "@/components/sections/home/QuoteSection";
import ServicesSection from "@/components/sections/home/ServicesSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutMeSection />
      <QuoteSection />
      <ServicesSection />
    </>
  );
}
