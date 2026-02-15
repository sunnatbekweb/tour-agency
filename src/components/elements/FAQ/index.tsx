import { ArrowDownRight, MapPin } from "lucide-react"
import Image from "next/image"
import styles from "./style.module.scss"

export const FAQ = () => {
	return (
		<section className="py-10">
			<div className="container">
				<span className="md:text-xl text-primary uppercase">
					FREQUENTLY ASKED QUESTION
				</span>
				<h2 className="w-[65%] text-3xl md:text-4xl lg:text-6xl uppercase mt-8">
					Need Help Before You Go? We&#39;ve Got Answers
				</h2>
				<div className="grid grid-cols-2 gap-10 mt-25">
					<div className="relative w-full h-full rounded-3xl overflow-hidden">
						<div className="absolute left-12 top-12 flex items-center gap-4 p-4 rounded-4xl bg-[#D9D9D966] border border-[#B6B6B6] text-white">
							<MapPin />
							<span>Uzbekistan, Samarkand</span>
						</div>
						<Image
							src={"/images/faq_image.png"}
							width={865}
							height={690}
							alt="Faq image"
							className="w-full h-full object-cover"
						/>
						<p className="absolute left-12 bottom-12 w-[85%] text-lg text-[#F2F2F2]">
							Kazakhstan is the world&#39;s ninth-largest country by land area
							and the largest landlocked country. Hilly plateaus and plains
							account for nearly half its vast territory, with lowlands
							composing another third; Kazakhstan has a population of 20 million
							and one of the lowest population densities in the world
						</p>
					</div>
					<div>
						{[...Array(5)].map((_, index) => (
							<div key={index} className={styles.accordion}>
								<details open className={styles.accordion__details} name="faq">
									<summary className={styles.accordion__summary}>
										<span
											className={styles.accordion__title}
											role="term"
											aria-details={`faq-${index}`}
										>
											{index + 1} How do I booking trip with your agency?
										</span>
										<div className={styles.accordion__icon}>
											<ArrowDownRight size={32} color="#A38E82" />
										</div>
									</summary>
								</details>
								<div
									className={styles.accordion__content}
									id={`faq-${index}`}
									role="definition"
								>
									<div className={styles["accordion__content-body"]}>
										<p>
											Kazakhstan is the world&#39;s ninth-largest country by
											land area and the largest landlocked country. Hilly
											plateaus and plains account for nearly half its vast
											territory, with lowlands composing another third;
										</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}
