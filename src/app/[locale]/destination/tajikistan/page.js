"use client";
import React from "react";
import HeroSecondSection from "@/components/UzbekistanPage/HeroSecondSection";
import CivilizationSection from "@/components/UzbekistanPage/CivilizationSection";
import ThirdFilterSection from "@/components/TajikistanPage/ThirdFilterSection";
import ThirdGallerySection from "@/components/TajikistanPage/ThirdGallerySection";
import { DestinationTours } from "@/components/ui/DestinationTours";
import TajikistanSection from "@/components/TajikistanPage/TajikistanSection";
import { usePathname } from "next/navigation";
import { useAboutCountries } from "@/store/data";
import { useTranslations } from "next-intl";

export default function Tajikistan() {
  const AboutCountries = useAboutCountries();
  const pathname = usePathname();
  const country = pathname.split("/")[3];
  const aboutCountry = AboutCountries.filter((item) => item.slug === country);
  const t = useTranslations();
  return (
    <>
      <HeroSecondSection
        image={"/images/tadjikistan_hero.jpg"}
        title={t("header.destinations.tj")}
        subtitle={t("destinations.tajikistan.hero_title")}
      />
      <CivilizationSection props={aboutCountry[0]} />
      <TajikistanSection />
      <ThirdFilterSection />
      <ThirdGallerySection />
      <DestinationTours
        title={t("destinations.tajikistan.tours_title")}
        text={t("destinations.tajikistan.tours_text")}
      />
    </>
  );
}
