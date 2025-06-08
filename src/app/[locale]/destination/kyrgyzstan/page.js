"use client";
import React from "react";
import CivilizationSection from "@/components/UzbekistanPage/CivilizationSection";
import HeroSecondSection from "@/components/UzbekistanPage/HeroSecondSection";
import { DestinationTours } from "@/components/ui/DestinationTours";
import { usePathname } from "next/navigation";
import { useAboutCountries } from "@/store/data";
import KyrgyzstanSection from "@/components/KyrgyzstanPage/KyrgyzstanSection";
import FourthFilterSection from "@/components/KyrgyzstanPage/FourthFilterSection";
import FourthGallerySection from "@/components/KyrgyzstanPage/FourthGallerySection";
import { useTranslations } from "next-intl";
export default function Kyrgyzstan() {
  const AboutCountries = useAboutCountries();
  const pathname = usePathname();
  const country = pathname.split("/")[3];
  const aboutCountry = AboutCountries.filter((item) => item.slug === country);
  const t = useTranslations();
  return (
    <>
      <HeroSecondSection
        image={"/images/kyrgyzstan_hero.jpg"}
        title={t("header.destinations.kg")}
        subtitle={t("destinations.kyrgyzstan.hero_title")}
      />
      <CivilizationSection props={aboutCountry[0]} />
      <KyrgyzstanSection />
      <FourthFilterSection />
      <FourthGallerySection />
      <DestinationTours
        title={t("destinations.kyrgyzstan.tours_title")}
        text={t("destinations.kyrgyzstan.tours_text")}
      />
    </>
  );
}
