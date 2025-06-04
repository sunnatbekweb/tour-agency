import React from "react";
import HeroSecondSection from "@/components/UzbekistanPage/HeroSecondSection";
import CivilizationSection from "@/components/UzbekistanPage/CivilizationSection";
import FilterSection from "@/components/UzbekistanPage/FilterSection";
import GallerySection from "@/components/UzbekistanPage/GallerySection";
import UzbekistanSection from "@/components/UzbekistanPage/UzbekistanSection";
export default function Uzbekistan() {
  return (
    <div>
      <HeroSecondSection />
      <CivilizationSection />
      <UzbekistanSection />
      <FilterSection />
      <GallerySection />
    </div>
  );
}
