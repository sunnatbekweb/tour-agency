"use client";
import React from "react";
import HeroSecondSection from "@/components/UzbekistanPage/HeroSecondSection";
import CivilizationSection from "@/components/UzbekistanPage/CivilizationSection";
import FilterSection from "@/components/UzbekistanPage/FilterSection";
import GallerySection from "@/components/UzbekistanPage/GallerySection";
import { DestinationTours } from "@/components/ui/DestinationTours";
import { usePathname } from "next/navigation";
import { AboutCountries } from "@/store/data";

export default function Tadjikistan() {
  const pathname = usePathname();
  const country = pathname.split("/")[3];
  const aboutCountry = AboutCountries.filter((item) => item.slug === country);
  return (
    <>
      <HeroSecondSection
        image={"/images/tadjikistan_hero.jpg"}
        title={"Tadjikistan"}
        subtitle={"Land of Mountains and Glaciers and Ancient Cultures"}
      />
      <CivilizationSection props={aboutCountry[0]} />
      <FilterSection />
      <GallerySection />
      <DestinationTours />
    </>
  );
}
