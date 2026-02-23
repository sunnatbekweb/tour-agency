"use client"

import { Tours } from "@/components/containers/Tours"
import { DestinationHero } from "@/components/elements/DestinationHero"
import { EndSection } from "@/components/elements/EndSection"
import { FeedbackSlide } from "@/components/elements/FeddbackSlide"
import { Title } from "@/components/ui/Title"
import { TopTitle } from "@/components/ui/TopTitle"
import Image from "next/image"
import { useParams } from "next/navigation"
import styles from "./style.module.scss"

const COUNTRIES = ["uzbekistan", "kazakhstan", "kyrgyzstan"]

export default function Uzbekistan() {
	const params = useParams()
	const country = COUNTRIES.find(country => country === params.country)

	return (
		<>
			<DestinationHero
				image="/images/destination_uzbekistan.jpg"
				title={country || "Uzbekistan"}
				subtitle="Land of Great Scholars and Crossroads of Cultures"
			/>
			<section className="py-12.5">
				<div className="container">
					<TopTitle text="About country" />
					<div className="md:w-[55%] mb-10">
						<Title text="Uzbekistan: Crossroads of Civilizations" />
					</div>
					<div className="px-4 py-6 md:p-8 rounded-3xl bg-[#E9DED8] grid grid-cols-1 lg:grid-cols-2 gap-10">
						<div>
							<h3 className="text-2xl md:text-5xl mb-3 md:mb-7">About {country}</h3>
							<p className="text-sm md:text-xl text-[#878787]">
								Uzbekistan is the beating heart of Central Asia — a country
								where history lives in every mosaic and hospitality greets you
								at every corner. From the towering minarets of Khiva to the
								majestic Registan of Samarkand, Uzbekistan offers a cultural
								journey unlike any other. It’s where science once thrived, trade
								flourished, and traditions were born that still color the land
								today. Let the Silk Road guide your footsteps through this
								timeless land. <br />
								<br />
								Uzbekistan’s charm lies not only in its architectural wonders
								but in the warmth of its people and the richness of its living
								traditions. In bustling bazaars, the scent of spices mingles
								with the sound of craftsmen at work. Music, storytelling, and
								intricate artistry remain part of daily life — a true blend of
								ancient legacy and vibrant culture. Whether you&#39;re wandering
								through historic caravanserais or sharing a meal with locals,
								Uzbekistan welcomes you with open arms and timeless soul.
							</p>
						</div>
						<div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6">
							<Image
								src={"/images/home_country-img.jpg"}
								width={460}
								height={520}
								alt="Image"
								className="row-span-2 w-full h-full object-cover rounded-2xl"
							/>
							<Image
								src={"/images/home_country-img1.jpg"}
								width={310}
								height={250}
								alt="Image"
								className="w-full h-full object-cover rounded-2xl"
							/>
							<Image
								src={"/images/home_country-img2.jpg"}
								width={310}
								height={250}
								alt="Image"
								className="w-full h-full object-cover rounded-2xl"
							/>
						</div>
					</div>
				</div>
			</section>
			<section className={styles.exclusivePhotos}>
				<div className={`container ${styles.exclusivePhotos__container}`}>
					<div className="mb-10">
						<Title text="Exclusive photos" />
					</div>
					<div className={styles.wrapper}>
						{[...Array(8)].map((_, index) => (
							<Image
								key={index}
								src={`/images/exclusive_image${index}.png`}
								width={340}
								height={340}
								alt={`Image ${index}`}
								className={`${styles.image}`}
							/>
						))}
					</div>
				</div>
			</section>
			<section className="py-12.5">
				<div className="container">
					<TopTitle text="About country" />
					<div className="md:w-[55%] mb-10">
						<Title text="Uzbekistan: Crossroads of Civilizations" />
					</div>
					<FeedbackSlide />
				</div>
			</section>
			<Tours />
			<EndSection />
		</>
	)
}
