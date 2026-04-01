import HeroSlider from "@/components/sections/HeroSlider";
import QuiSection from "@/components/sections/QuiSection";
import SpecialitesSection from "@/components/sections/SpecialitesSection";
import ServicesSection from "@/components/sections/ServicesSection";
import HorairesSection from "@/components/sections/HorairesSection";

export const metadata = {
  title: "Accueil",
  description:
    "Restaurant, Fast-Food, Pâtisserie, Dibiterie et Glacier à Grand Mbao, Dakar. Ouvert 7j/7.",
};

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <QuiSection />
      <SpecialitesSection />
      <ServicesSection />
      <HorairesSection />
    </>
  );
}
