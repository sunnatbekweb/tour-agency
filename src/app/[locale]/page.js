"use client";
import { useEffect, useState } from "react";
import HeroSectoin from "@/components/HomePage/HeroSectoin";
import ExploreSection from "@/components/HomePage/ExploreSection";
import CarouselSection from "@/components/HomePage/CarouselSection";
import SmCountriesSection from "@/components/HomePage/SmCountriesSection";
import UniqueSection from "@/components/HomePage/UniqueSection";
import DesertSection from "@/components/HomePage/DesertSection";
import SecondCarouselSection from "@/components/HomePage/SecondCarouselSection";
import QuestionSection from "@/components/HomePage/QuestionSection";
import FeedbackSection from "@/components/HomePage/FeedbackSection";
import { XlCountry } from "@/components/HomePage/XlCountry";
export default function Home() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  useEffect(() => {
    const timer1 = setTimeout(() => setFadeOut(true), 2200);
    const timer2 = setTimeout(() => setLoading(false), 3200);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);
  return (
    <>
      {loading && (
        <div
          className={`fixed top-0 left-0 right-0 w-full h-screen flex items-center justify-center bg-[#A5958B] z-[9999] transition-all duration-700 ease-in-out ${
            fadeOut
              ? "opacity-0 cursor-auto"
              : "opacity-100 scale-100 cursor-none"
          }`}
        >
          <span className="loader" />
        </div>
      )}
      <div>
        <HeroSectoin />
        <ExploreSection />
        <CarouselSection />
        <XlCountry/>
        <SmCountriesSection />
        <UniqueSection />
        <DesertSection />
        <SecondCarouselSection />
        <QuestionSection />
        <FeedbackSection />
      </div>
    </>
  );
}
