'use client'
import CarouselSection from '@/components/HomePage/CarouselSection'
import DesertSection from '@/components/HomePage/DesertSection'
import ExploreSection from '@/components/HomePage/ExploreSection'
import FeedbackSection from '@/components/HomePage/FeedbackSection'
import HeroSectoin from '@/components/HomePage/HeroSectoin'
import QuestionSection from '@/components/HomePage/QuestionSection'
import SecondCarouselSection from '@/components/HomePage/SecondCarouselSection'
import SmCountriesSection from '@/components/HomePage/SmCountriesSection'
import UniqueSection from '@/components/HomePage/UniqueSection'
import { XlCountry } from '@/components/HomePage/XlCountry'
export default function Home() {
	return (
		<div>
			<HeroSectoin />
			<ExploreSection />
			<CarouselSection />
			<XlCountry />
			<SmCountriesSection />
			<UniqueSection />
			<DesertSection />
			<SecondCarouselSection />
			<QuestionSection />
			<FeedbackSection />
		</div>
	)
}
