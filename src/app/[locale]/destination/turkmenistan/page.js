"use client";
import React from "react";
import { DestinationTours } from "@/components/ui/DestinationTours";
import CivilizationSection from "@/components/UzbekistanPage/CivilizationSection";
import HeroSecondSection from "@/components/UzbekistanPage/HeroSecondSection";
import { useAboutCountries } from "@/store/data";
import { usePathname } from "next/navigation";
import TurkmenistanSection from "@/components/TurkmenistanPage/TurkmenistanSection";
import FifthFilterSection from "@/components/TurkmenistanPage/FifthFilterSection";
import FifthGallerySection from "@/components/TurkmenistanPage/FifthGallerySection";
export default function Turkmenistan() {
  const AboutCountries = useAboutCountries();
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
      <TurkmenistanSection />
      <FifthGallerySection />
      <FifthFilterSection />
      <DestinationTours />
    </>
  );
}
