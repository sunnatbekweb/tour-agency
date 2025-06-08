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
import { useTranslations } from "next-intl";
export default function Turkmenistan() {
  const AboutCountries = useAboutCountries();
  const pathname = usePathname();
  const country = pathname.split("/")[3];
  const aboutCountry = AboutCountries.filter((item) => item.slug === country);
  const t = useTranslations();
  return (
    <>
      <HeroSecondSection
        image={"/images/turkmenistan_hero.svg"}
        title={t("header.destinations.tk")}
        subtitle={t("destinations.turkmenistan.hero_title")}
      />
      <CivilizationSection props={aboutCountry[0]} />
      <TurkmenistanSection />
      <FifthFilterSection />
      <FifthGallerySection />
      <DestinationTours
        title={t("destinations.turkmenistan.tours_title")}
        text={t("destinations.turkmenistan.tours_text")}
      />
    </>
  );
}
