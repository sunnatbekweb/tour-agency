"use client";
import React from "react";
import HeroFourthSection from "@/components/TajikistanPage/HeroFourthSection";
import ThirdCivilizationSection from "@/components/TajikistanPage/ThirdCivilizationSection";
import TajikistanSection from "@/components/TajikistanPage/TajikistanSection";
import ThirdFilterSection from "@/components/TajikistanPage/ThirdFilterSection";
import ThirdGallerySection from "@/components/TajikistanPage/ThirdGallerySection";
import { DestinationTours } from "@/components/ui/DestinationTours";
export default function Tajikistan() {
  return (
    <>
      <HeroFourthSection />
      <ThirdCivilizationSection />
      <TajikistanSection />
      <ThirdFilterSection />
      <ThirdGallerySection />
      <DestinationTours />
    </>
  );
}
