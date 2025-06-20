"use client";
import React from "react";
import HeroSixthSection from "@/components/TurkmenistanPage/HeroSixthSection";
import FifthCivilizationSection from "@/components/TurkmenistanPage/FifthCivilizationSection";
import TurkmenistanSection from "@/components/TurkmenistanPage/TurkmenistanSection";
import FifthFilterSection from "@/components/TurkmenistanPage/FifthFilterSection";
import FifthGallerySection from "@/components/TurkmenistanPage/FifthGallerySection";
import { DestinationTours } from "@/components/ui/DestinationTours";
export default function Turkmenistan() {
  return (
    <>
      <HeroSixthSection />
      <FifthCivilizationSection />
      <TurkmenistanSection />
      <FifthFilterSection />
      <FifthGallerySection />
      <DestinationTours />
    </>
  );
}
