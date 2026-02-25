'use client'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/navigation'
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useTranslations } from 'use-intl'
import BookingButton from '../ui/BookingButton'
import './CarouselSection.css'
export default function CarouselSection() {
	const t = useTranslations()
	const data = [
		{
			locationIcon: 'icons/location__icon.svg',
			locationText: t('home_carousel.home_carousel-text'),
			locationImage: 'images/hystorical__samarkand.jpg',
			locationDescription: 'samarkand__image',
			locationTitle: t('home_carousel.home_carousel-title'),
			locationPrice: '$456.99',
			locationTickIcon: 'icons/tick__icon.svg',
			locationDetails: [
				t(
					'home_carousel.home_carousel-detail-first.home_carousel-detail-first-1'
				),
				t(
					'home_carousel.home_carousel-detail-first.home_carousel-detail-first-2'
				),
				t(
					'home_carousel.home_carousel-detail-first.home_carousel-detail-first-3'
				)
			]
		},
		{
			locationIcon: 'icons/location__icon.svg',
			locationText: t('home_carousel.home_carousel-second-text'),
			locationImage: 'images/hystorical__samarkand.jpg',
			locationDescription: 'samarkand__image',
			locationTitle: t('home_carousel.home_carousel-second-title'),
			locationPrice: '$456.99',
			locationTickIcon: 'icons/tick__icon.svg',
			locationDetails: [
				t(
					'home_carousel.home_carousel-detail-second.home_carousel-detail-second-1'
				),
				t(
					'home_carousel.home_carousel-detail-second.home_carousel-detail-second-2'
				),
				t(
					'home_carousel.home_carousel-detail-second.home_carousel-detail-second-3'
				)
			]
		},
		{
			locationIcon: 'icons/location__icon.svg',
			locationText: t('home_carousel.home_carousel-third-text'),
			locationImage: 'images/hystorical__samarkand.jpg',
			locationDescription: 'samarkand__image',
			locationTitle: t('home_carousel.home_carousel-third-title'),
			locationPrice: '$456.99',
			locationTickIcon: 'icons/tick__icon.svg',
			locationDetails: [
				t(
					'home_carousel.home_carousel-detail-third.home_carousel-detail-third-1'
				),
				t(
					'home_carousel.home_carousel-detail-third.home_carousel-detail-third-2'
				),
				t(
					'home_carousel.home_carousel-detail-third.home_carousel-detail-third-3'
				)
			]
		},
		{
			locationIcon: 'icons/location__icon.svg',
			locationText: t('home_carousel.home_carousel-fourth-text'),
			locationImage: 'images/hystorical__samarkand.jpg',
			locationDescription: 'samarkand__image',
			locationTitle: t('home_carousel.home_carousel-fourth-title'),
			locationPrice: '$456.99',
			locationTickIcon: 'icons/tick__icon.svg',
			locationDetails: [
				t(
					'home_carousel.home_carousel-detail-fourth.home_carousel-detail-fourth-1'
				),
				t(
					'home_carousel.home_carousel-detail-fourth.home_carousel-detail-fourth-2'
				),
				t(
					'home_carousel.home_carousel-detail-fourth.home_carousel-detail-fourth-3'
				)
			]
		},
		{
			locationIcon: 'icons/location__icon.svg',
			locationText: t('home_carousel.home_carousel-fifth-text'),
			locationImage: 'images/hystorical__samarkand.jpg',
			locationDescription: 'samarkand__image',
			locationTitle: t('home_carousel.home_carousel-fifth-title'),
			locationPrice: '$456.99',
			locationTickIcon: 'icons/tick__icon.svg',
			locationDetails: [
				t(
					'home_carousel.home_carousel-detail-fifth.home_carousel-detail-fifth-1'
				),
				t(
					'home_carousel.home_carousel-detail-fifth.home_carousel-detail-fifth-2'
				),
				t(
					'home_carousel.home_carousel-detail-fifth.home_carousel-detail-fifth-3'
				)
			]
		},
		{
			locationIcon: 'icons/location__icon.svg',
			locationText: t('home_carousel.home_carousel-sixth-text'),
			locationImage: 'images/hystorical__samarkand.jpg',
			locationDescription: 'samarkand__image',
			locationTitle: t('home_carousel.home_carousel-sixth-title'),
			locationPrice: '$456.99',
			locationTickIcon: 'icons/tick__icon.svg',
			locationDetails: [
				t(
					'home_carousel.home_carousel-detail-sixth.home_carousel-detail-sixth-1'
				),
				t(
					'home_carousel.home_carousel-detail-sixth.home_carousel-detail-sixth-2'
				),
				t(
					'home_carousel.home_carousel-detail-sixth.home_carousel-detail-sixth-3'
				)
			]
		}
	]
	return (
		<section className="carousel w-full mt-8 md:mt-22 xl:mt-25.5">
			<div className="container carousel__container relative w-full flex flex-row justify-between items-center px-6 md:px-9">
				<div className="swiper-button-left"></div>
				<div className="swiper-button-right"></div>
			</div>
			<Swiper
				className="carousel__swiper-box flex flex-row justify-center items-center cursor-grab"
				navigation={{
					prevEl: '.swiper-button-left',
					nextEl: '.swiper-button-right'
				}}
				autoplay={{
					delay: 3000,
					disableOnInteraction: false
				}}
				speed={1800}
				loop={true}
				modules={[Navigation, Autoplay]}
				slidesPerView={'auto'}
				spaceBetween={24}
				centeredSlides={true}
			>
				{data.map((item, index) => (
					<SwiperSlide
						className="carousel__swiperSlide flex flex-row justify-center items-center py-2 md:py-5 lg:py-2"
						key={index}
					>
						<div className="carousel__box flex flex-col justify-center items-start pt-[11.5px] pb-[21.94px] px-[11.53px] border-2 border-[#EBEBEB] bg-white rounded-4 md:px-5.75 md:pt-5.5 md:pb-5.5 md:rounded-[40px]">
							<div className="carousel__top-box">
								<img
									className="carousel__image relative rounded-[11.78px] object-cover md:rounded-3xl"
									src={item.locationImage}
									alt={item.locationDescription}
								/>
								<div className="carousel__image-info-box absolute top-[30.33px] left-[27.25px] flex flex-row justify-center items-center gap-1 bg-white/40 border-2 border-[#B6B6B6] rounded-[24.55px] px-2.5 py-2 md:rounded-[50px] md:left-12.5 md:top-15 md:px-2.5">
									<img
										className="carousel__location-icon object-contain w-[12.56px] h-[12.56px] md:w-4 md:h-4"
										src={item.locationIcon}
										alt="location__icon"
									/>
									<p className="carousel__location-text text-white font-medium text-[10.48px] tracking-tighter-[-2%] md:text-[14px] md:tracking-tighter-[-2%]">
										{item.locationText}
									</p>
								</div>
							</div>
							<div className="carousel__bottom-box w-full flex flex-col justify-center items-start">
								<h4 className="carousel__location-title font-medium text-[18.87px] text-[#323232] mt-[6.2px] mb-[11.28px] md:text-[22px] md:mt-5">
									{item.locationTitle}
								</h4>
								<p className="carousel__price-text font-semibold text-[14.67px] text-[#323232] md:text-[22px]">
									{item.locationPrice}
								</p>
								<div className="carousel__lists-main-box w-full flex flex-row justify-between items-end mt-[21.26px]">
									<div className="carousel__lists-box flex flex-col justify-center items-start gap-[5.95px] md:gap-4">
										{item.locationDetails.map((detail, idx) => (
											<div
												className="carousel__lists-mini-boxes flex flex-row justify-center items-center gap-2"
												key={idx}
											>
												<img
													className="carousel__list-icons object-contain w-[14.67px] h-[14.67px] md:w-6 md:h-6"
													src={item.locationTickIcon}
													alt="tick__icon"
												/>
												<p className="carousel__texts font-normal text-[12.58px] tracking-tighter-[2%] text-[#323232] md:text-[18px]">
													{detail}
												</p>
											</div>
										))}
									</div>
								</div>

								<div className="w-full mt-6">
									<BookingButton>
										{t('home_carousel.home_carousel-button')}
									</BookingButton>
								</div>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	)
}
