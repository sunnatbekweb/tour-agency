'use client'
import RightChevron from '@/assets/icons/RightChevron.jsx'
import { Link } from '@/i18n/navigation'
import { useTranslations } from 'use-intl'
import './UniqueSection.css'
export default function UniqueSection() {
	const t = useTranslations()
	return (
		<div>
			<section className="unique">
				<div className="container unique__container flex flex-col justify-center items-center min-h-screen">
					<Link>
						<img
							className="unique__logo-image inline-block mb-[123px] w-[80px] h-[44px] md:w-[140px] md:h-[77px] md:mb-[140px] xl:mb-[114px]"
							src="/icons/logo.svg"
							alt="logo__image"
						/>
					</Link>
					<div className="w-full flex flex-col justify-center items-center sm:w-[80%] md:w-full xl:w-3/4">
						<p className="unique__text font-medium text-[24px] leading-[24px] text-white mb-2 md:text-[40px] md:leading-[60px] text-center">
							{t('home_unique.home_unique-text')}
						</p>
						<h3 className="unique__title font-medium text-[40px] text-white text-center mb-[100px] md:w-[696px] md:text-6xl lg:text-[72px] md:mb-[120px] xl:mb-[80px]">
							{t('home_unique.home_unique-title')}
						</h3>
					</div>
					<Link href={'/contact'}>
						<button className="unique__button flex flex-row justify-center items-center gap-3.5 active:opacity-50">
							{t('home_unique.home_unique-button')}
							<RightChevron />
						</button>
					</Link>
				</div>
			</section>
		</div>
	)
}
