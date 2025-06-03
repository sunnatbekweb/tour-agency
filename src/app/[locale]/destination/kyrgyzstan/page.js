"use client";
import React from "react";
import CivilizationSection from "@/components/UzbekistanPage/CivilizationSection";
import FilterSection from "@/components/UzbekistanPage/FilterSection";
import GallerySection from "@/components/UzbekistanPage/GallerySection";
import HeroSecondSection from "@/components/UzbekistanPage/HeroSecondSection";
import { DestinationTours } from "@/components/ui/DestinationTours";
import { usePathname } from "next/navigation";
import { AboutCountries } from "@/store/data";

export default function Kyrgyzstan() {
  const pathname = usePathname();
  const country = pathname.split("/")[3];
  const aboutCountry = AboutCountries.filter((item) => item.slug === country);
  return (
    <>
      <HeroSecondSection
        image={"/images/kyrgyzstan_hero.jpg"}
        title={"Kyrgyzstan"}
        subtitle={"Where Mountains Whisper Ancient Tales"}
      />
      <CivilizationSection props={aboutCountry[0]} />
      <FilterSection />
      <GallerySection />
      <DestinationTours />
    </>
  );
}
