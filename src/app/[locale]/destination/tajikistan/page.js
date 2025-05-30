import React from "react";
import HeroSecondSection from "@/components/UzbekistanPage/HeroSecondSection";
import CivilizationSection from "@/components/UzbekistanPage/CivilizationSection";
import FilterSection from "@/components/UzbekistanPage/FilterSection";
import GallerySection from "@/components/UzbekistanPage/GallerySection";
import { DestinationTours } from "@/components/ui/DestinationTours";

export default function Tajikistan() {
  return (
    <>
      <HeroSecondSection
        image={"/images/tadjikistan_hero.jpg"}
        title={"Tadjikistan"}
        subtitle={"Land of Endless Horizons and Land of the Great Steppe"}
      />
      <CivilizationSection />
      <FilterSection />
      <GallerySection />
      <DestinationTours />
    </>
  );
}
