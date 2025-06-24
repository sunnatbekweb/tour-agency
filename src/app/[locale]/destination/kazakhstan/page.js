"use client";
import React from "react";
import HeroThirdSection from "@/components/KazakhstanPage/HeroThirdSection";
import SecondCivilizationSection from "@/components/KazakhstanPage/SecondCivilizationSection";
import KazakhstanSection from "@/components/KazakhstanPage/KazakhstanSection";
import SecondFilterSection from "@/components/KazakhstanPage/SecondFilterSection";
import SecondGallerySection from "@/components/KazakhstanPage/SecondGallerySection";
import { DestinationTours } from "@/components/ui/DestinationTours";
export default function Kazahstan() {
  return (
    <>
      <HeroThirdSection />
      <SecondCivilizationSection />
      <KazakhstanSection />
      <SecondFilterSection />
      <SecondGallerySection />
      <DestinationTours />
    </>
  );
}
