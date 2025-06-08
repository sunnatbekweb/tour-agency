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
import { useTranslations } from "next-intl";
export default function Kazahstan() {
  const AboutCountries = useAboutCountries();
  const pathname = usePathname();
  const country = pathname.split("/")[3];
  const aboutCountry = AboutCountries.filter((item) => item.slug === country);
  const t = useTranslations();
  return (
    <>
      <HeroSecondSection
        image={"/images/kazahstan_hero.jpg"}
        title={t("header.destinations.kz")}
        subtitle={t("destinations.kazakhstan.hero_title")}
      />
      <CivilizationSection props={aboutCountry[0]} />
      <KazakhstanSection />
      <SecondFilterSection />
      <SecondsecondGallerySection />
      <DestinationTours
        title={t("destinations.kazakhstan.tours_title")}
        text={t("destinations.kazakhstan.tours_text")}
      />
    </>
  );
}
