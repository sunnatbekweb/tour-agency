import HeroSectoin from "@/components/HomePage/HeroSectoin";
import ExploreSection from "@/components/HomePage/ExploreSection";
import CarouselSection from "@/components/HomePage/CarouselSection";
import UniqueSection from "@/components/HomePage/UniqueSection";
import QuestionSection from "@/components/HomePage/QuestionSection";
export default function Home() {
  return (
    <div>
      <HeroSectoin />
      <ExploreSection />
      <CarouselSection />
      <UniqueSection />
      <QuestionSection />
    </div>
  );
}