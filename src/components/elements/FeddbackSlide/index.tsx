import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './style.scss'

import { Navigation, Pagination } from 'swiper/modules'

export const FeedbackSlide = () => {
	return (
		<div className="relative px-5 lg:px-20">
			<Swiper
				pagination={{ clickable: true }}
				modules={[Navigation, Pagination]}
				className={'feedbackSlide'}
				slidesPerView={1}
				spaceBetween={24}
				breakpoints={{
					1024: {
						navigation: true
					}
				}}
				centeredSlides
			>
				{[...Array(4)].map((_, index) => (
					<SwiperSlide key={index}>
						<div className="grid grid-cols-1 lg:grid-cols-5 gap-x-12">
							<div className="rounded-2xl px-12 py-6 bg-[#f3f3f3] col-span-3">
								<Image
									src={'/icons/vector.svg'}
									width={72}
									height={72}
									alt="Icon"
								/>
								<p className="w-3/4 text-lg xl:text-2xl mt-6 mb-12">
									Working with this team was a pleasure. They understood our
									vision and helped us find a property that exceeded our
									expectations. We couldn’t have done it without them!
								</p>
								<div className="flex flex-col">
									<span className="text-xl">Asadulloh Zabikhullayev</span>
									<span>UX/UI designer</span>
								</div>
							</div>
							<Image
								src={'/images/feedback_image.png'}
								width={670}
								height={690}
								alt="Card image"
								className="hidden lg:block w-full h-full object-cover rounded-2xl col-span-2"
							/>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}
