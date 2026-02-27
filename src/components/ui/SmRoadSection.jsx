import { Link } from '@/i18n/navigation'
import { useLocale, useTranslations } from 'next-intl'
import RightChevron from '../../assets/icons/RightChevron'
import './SmRoadSection.css'
export default function SmRoadSection() {
	const t = useTranslations()
	const locale = useLocale()
	return (
		<div>
			<section className="smRoad md:hidden">
				<div className="container smRoad__container flex flex-col justify-center items-center px-6">
					<Link
						className="smRoad-logo-link"
						href={'/'}
					>
						<img
							className="smRoad__logo-image inline-block w-20 h-11 mb-10"
							src={'/icons/gold__logo.svg'}
							alt="logo"
						/>
					</Link>
					<div className="smRoad__text-boxes flex flex-col justify-center items-center mb-20">
						<h3 className="smRoad__first-title text-center block font-medium text-[24px] leading-[100%] tracking-tighter-[-2%] uppercase text-[#323232]">
							{locale === 'en'
								? 'Explore and find'
								: locale === 'uz'
									? "Ipak yo'li sayohatida"
									: 'Исследуйте и найдите'}
						</h3>
						<h3 className="smRoad__second-title text-center block font-medium text-[24px] leading-[100%] tracking-tighter-[-2%] uppercase text-[#323232]">
							{locale === 'en'
								? 'yourself In Silk'
								: locale === 'uz'
									? "o'zingizni kashf"
									: 'себя в путешествии по'}
						</h3>
						<h3 className="smRoad__third-title text-center block font-medium text-[24px] leading-[100%] tracking-tighter-[-2%] uppercase text-[#323232]">
							{locale === 'en'
								? 'road Journey'
								: locale === 'uz'
									? 'qiling va toping'
									: ' Шелковому пути'}
						</h3>
					</div>
					<Link href={'/contact'}>
						<button className="smRoad__button flex flex-row justify-center items-center gap-3.5 active:opacity-50">
							{t('home_unique.home_unique-button')}
							<RightChevron />
						</button>
					</Link>
				</div>
			</section>
		</div>
	)
}
