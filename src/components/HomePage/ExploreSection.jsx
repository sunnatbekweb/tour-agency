'use client'
import { useTranslations } from 'use-intl'
import './ExploreSection.css'
export default function ExploreSection() {
	const t = useTranslations()
	return (
		<div>
			<section className="explore mt-10 md:mt-16 lg:mt-25">
				<div className="container explore__container w-full flex flex-col justify-center items-start gap-2 px-6 md:gap-4 md:px-9">
					<p className="explore__text font-medium text-[16px] leading-[100%] text-[#A5958B] uppercase md:text-[24px]">
						{t('home_explore.home_explore-text')}
					</p>
					<div className="explore__bottom-box w-full flex flex-col justify-center items-start gap-6 md:gap-9 xl:w-full xl:flex xl:flex-row xl:justify-between xl:items-start xl:gap-0">
						<h2 className="explore__bottom-title w-full font-medium text-[22px] leading-7.5 text-[#323232] uppercase md:w-155 md:text-[36px] md:leading-10 lg:w-160.5 xl:text-[40px] xl:leading-11.5">
							{t('home_explore.home_explore-title')}
						</h2>
						<p className="explore__bottom-text w-full font-medium text-[12px] leading-4 text-[#323232] md:text-[20px] md:leading-7 lg:w-125">
							{t('home_explore.home_explore-second-text')}
						</p>
					</div>
				</div>
			</section>
		</div>
	)
}
