"use client";
import React from "react";
import { DestinationTours } from "@/components/ui/DestinationTours";
import CivilizationSection from "@/components/UzbekistanPage/CivilizationSection";
import FilterSection from "@/components/UzbekistanPage/FilterSection";
import GallerySection from "@/components/UzbekistanPage/GallerySection";
import HeroSecondSection from "@/components/UzbekistanPage/HeroSecondSection";
import { AboutCountries } from "@/store/data";
import { usePathname } from "next/navigation";

export default function Turkmenistan() {
  const pathname = usePathname();
  const country = pathname.split("/")[3];
  const aboutCountry = AboutCountries.filter((item) => item.slug === country);
  return (
    <>
      <HeroSecondSection
        image={"/images/turkmenistan_hero.svg"}
        title={"Turkmenistan"}
        subtitle={
          "Where the Past Still Breathes and Oasis of Timeless Traditions"
        }
      />
      <CivilizationSection props={aboutCountry[0]} />
      <FilterSection />
      <GallerySection />
      <DestinationTours />
    </>
  );
}
