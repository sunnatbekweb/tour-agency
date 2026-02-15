"use client"

import Image from "next/image"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/navigation"
import "./style.scss"

import { Navigation } from "swiper/modules"

export const HighlightSlide = () => {
	return (
		<Swiper
			navigation={true}
			modules={[Navigation]}
			className={"homeSlide"}
			slidesPerView={"auto"}
			spaceBetween={24}
			centeredSlides
			loop
		>
			{[...Array(8)].map((_, index) => (
				<SwiperSlide key={index}>
					<div className="relative rounded-3xl overflow-hidden">
						<Image
							src={"/images/highlights_card.png"}
							width={670}
							height={690}
							alt="Card image"
						/>
						<h4 className="absolute left-6 md:left-10 bottom-6 md:bottom-10 text-4xl text-white">
							Splendor of Ancient Khiva
						</h4>
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	)
}
