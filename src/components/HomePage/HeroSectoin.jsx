'use client'
import { Link } from '@/i18n/navigation'
import Image from 'next/image'
import 'swiper/css'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useTranslations } from 'use-intl'
import SecondContactButton from '../ui/SecondContactButton'
import './HeroSectoin.css'
const images = [
	{
		image: '/images/hero__background-image.jpg',
		description: 'first__background'
	},
	{
		image: '/images/hero__second-background-image.jpg',
		description: 'second__background'
	},
	{
		image: '/images/hero__third-background-image.jpg',
		description: 'third__background'
	}
]
export default function HeroSectoin() {
	const t = useTranslations()
	const link = [
		{
			icon: 'icons/right__arrow.svg',
			path: '/destination/uzbekistan',
			label: t('header.destinations.uz')
		},
		{
			icon: 'icons/right__arrow.svg',
			path: '/destination/kazakhstan',
			label: t('header.destinations.kz')
		},
		{
			icon: 'icons/right__arrow.svg',
			path: '/destination/tajikistan',
			label: t('header.destinations.tj')
		},
		{
			icon: 'icons/right__arrow.svg',
			path: '/destination/kyrgizistain',
			label: t('header.destinations.kg')
		},
		{
			icon: 'icons/right__arrow.svg',
			path: '/destination/turkmanistan',
			label: t('header.destinations.tk')
		}
	]
	return (
		<div>
			<Swiper
				className="mySwiper2 top-0 relative"
				autoplay={{
					delay: 5000,
					disableOnInteraction: false
				}}
				speed={2500}
				loop={true}
				modules={[Autoplay]}
			>
				{images.map((image, id) => (
					<SwiperSlide key={id}>
						<Image
							className="w-full object-cover h-screen xl:h-[140vh]"
							width={1920}
							height={1080}
							src={image.image}
							alt={image.description}
              loading='lazy'
						/>
					</SwiperSlide>
				))}
				<section className="hero absolute z-10 top-0 left-0 right-0">
					<div className="container hero__container flex flex-col justify-center items-center min-h-screen gap-y-22.25 px-6 md:px-9 xl:pt-72.5">
						<div className="hero__top-box flex flex-col justify-center items-center">
							<p className="hero__top-text text-center w-full font-medium text-[16px] tracking-tighter-[-2%] text-white mb-6 md:text-[32px] md:mb-8 lg:text-[40px] lg:mb-4">
								{t('home_hero.home_hero-subtitle1')}
							</p>
							<h2 className="hero__top-title text-center w-full font-medium text-[28px] leading-normal uppercase text-white mb-6 md:text-[62px] md:mb-14 lg:mb-4 xl:w-212.5 2xl:mb-10 2xl:w-275">
								{t('home_hero.home_hero-title')}
							</h2>
							<p className="hero__top-second-text text-center w-40.5 font-medium text-[16px] tracking-tighter-[-2%] text-white md:text-[32px] md:w-full">
								{t('home_hero.home_hero-subtitle2')}
							</p>
						</div>
						<div className="hero__bottom-box flex flex-col justify-center items-center">
							<div className="hero__contuct-button 2xl:hidden">
								<SecondContactButton>
									{t('home_hero.home_hero-contact')}
								</SecondContactButton>
							</div>
						</div>
					</div>
				</section>
			</Swiper>
			<nav className="hero__nav absolute top-96.25 bottom-0 left-0 z-40">
				<ul className="hero__list">
					{link.map((item, index) => (
						<li
							className="hero__lists w-full"
							key={index}
						>
							<hr className="w-full bg-white/20 h-px border-none outline-none" />
							<Link
								className="hero__links"
								href={item.path}
							>
								<p className="hero__link-texts font-medium text-[24px] uppercase text-white">
									{item.label}
								</p>
								<img
									className="hero__link-icons"
									src={item.icon}
									alt="icons"
								/>
							</Link>
							<hr className="w-full bg-white/20 h-px border-none outline-none" />
						</li>
					))}
				</ul>
			</nav>
		</div>
	)
}
