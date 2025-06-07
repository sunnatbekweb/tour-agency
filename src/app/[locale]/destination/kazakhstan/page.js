"use client";
import React from "react";
import CivilizationSection from "@/components/UzbekistanPage/CivilizationSection";
import HeroSecondSection from "@/components/UzbekistanPage/HeroSecondSection";
import { DestinationTours } from "@/components/ui/DestinationTours";
import { usePathname } from "next/navigation";
import { useAboutCountries } from "@/store/data";
import KazakhstanSection from "@/components/KazakhstanPage/KazakhstanSection";
import SecondFilterSection from "@/components/KazakhstanPage/SecondFilterSection";
import SecondsecondGallerySection from "@/components/KazakhstanPage/SecondGallerySection";
export default function Kazahstan() {
  const AboutCountries = useAboutCountries();
  const pathname = usePathname();
  const country = pathname.split("/")[3];
  const aboutCountry = AboutCountries.filter((item) => item.slug === country);
  return (
    <>
      <HeroSecondSection
        image={"/images/kazahstan_hero.jpg"}
        title={"Kazahstan"}
        subtitle={"Land of Endless Horizons and Land of the Great Steppe"}
      />
      <CivilizationSection props={aboutCountry[0]} />
      <SecondsecondGallerySection />
      <KazakhstanSection />
      <SecondFilterSection />
      <DestinationTours />
    </>
  );
}
