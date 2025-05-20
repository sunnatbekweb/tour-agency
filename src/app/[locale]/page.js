import HeroSectoin from "@/components/HomePage/HeroSectoin";
import ExploreSection from "@/components/HomePage/ExploreSection";
import CarouselSection from "@/components/HomePage/CarouselSection";
import UniqueSection from "@/components/HomePage/UniqueSection";
import DesertSection from "@/components/HomePage/DesertSection";
import SecondCarouselSection from "@/components/HomePage/SecondCarouselSection";
import QuestionSection from "@/components/HomePage/QuestionSection";
export default function Home() {
  return (
    <div>
      <HeroSectoin />
      <ExploreSection />
      <CarouselSection />
      <UniqueSection />
      <DesertSection />
      <SecondCarouselSection />
      <QuestionSection />
    </div>
  );
}
