"use client";
import React from "react";
import HeroSecondSection from "@/components/UzbekistanPage/HeroSecondSection";
import CivilizationSection from "@/components/UzbekistanPage/CivilizationSection";
import UzbekistanSection from "@/components/UzbekistanPage/UzbekistanSection";
import FilterSection from "@/components/UzbekistanPage/FilterSection";
import GallerySection from "@/components/UzbekistanPage/GallerySection";
import { DestinationTours } from "@/components/ui/DestinationTours";
export default function Uzbekistan() {
  return (
    <div>
      <HeroSecondSection />
      <CivilizationSection />
      <UzbekistanSection />
      <FilterSection />
      <GallerySection />
      <DestinationTours />
    </div>
  );
}
