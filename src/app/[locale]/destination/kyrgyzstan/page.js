"use client";
import React from "react";
import HeroFifthSection from "@/components/KyrgyzstanPage/HeroFifthSection";
import FourthCivilizationSection from "@/components/KyrgyzstanPage/FourthCivilizationSection";
import KyrgyzstanSection from "@/components/KyrgyzstanPage/KyrgyzstanSection";
import FourthFilterSection from "@/components/KyrgyzstanPage/FourthFilterSection";
import FourthGallerySection from "@/components/KyrgyzstanPage/FourthGallerySection";
import { DestinationTours } from "@/components/ui/DestinationTours";
export default function Kyrgyzstan() {
  return (
    <>
      <HeroFifthSection />
      <FourthCivilizationSection />
      <KyrgyzstanSection />
      <FourthFilterSection />
      <FourthGallerySection />
      <DestinationTours />
    </>
  );
}
