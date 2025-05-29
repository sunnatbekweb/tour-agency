import React from "react";
import { DestinationTours } from "@/components/ui/DestinationTours";
import CivilizationSection from "@/components/UzbekistanPage/CivilizationSection";
import FilterSection from "@/components/UzbekistanPage/FilterSection";
import GallerySection from "@/components/UzbekistanPage/GallerySection";
import HeroSecondSection from "@/components/UzbekistanPage/HeroSecondSection";

export default function Kyrgyzstan() {
  return (
    <>
      <HeroSecondSection
        image={"/images/kyrgyzstan_hero.jpg"}
        title={"Kyrgyzstan"}
        subtitle={"Land of Endless Horizons and Land of the Great Steppe"}
      />
      <CivilizationSection />
      <FilterSection />
      <GallerySection />
      <DestinationTours />
    </>
  );
}
