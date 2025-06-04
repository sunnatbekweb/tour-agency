"use client";
import React from "react";
import HeroSecondSection from "@/components/UzbekistanPage/HeroSecondSection";
import CivilizationSection from "@/components/UzbekistanPage/CivilizationSection";
import FilterSection from "@/components/UzbekistanPage/FilterSection";
import GallerySection from "@/components/UzbekistanPage/GallerySection";
import { DestinationTours } from "@/components/ui/DestinationTours";
import { usePathname } from "next/navigation";
import { useAboutCountries } from "@/store/data";
import UzbekistanSection from "@/components/UzbekistanPage/UzbekistanSection";
export default function Uzbekistan() {
  const AboutCountries = useAboutCountries();
  const pathname = usePathname();
  const country = pathname.split("/")[3];
  const aboutCountry = AboutCountries.filter((item) => item.slug === country);
  return (
    <div>
      <HeroSecondSection
        image={"/images/uzbekistan__xl.jpg"}
        title={"Uzbekistan"}
        subtitle={"Land of Great Scholars and Crossroads of Cultures"}
      />
      <CivilizationSection props={aboutCountry[0]} />
      <UzbekistanSection />
      <GallerySection />
      <FilterSection />
      <DestinationTours />
    </div>
  );
}
