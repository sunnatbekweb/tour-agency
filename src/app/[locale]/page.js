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
  return (
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
  );
}
