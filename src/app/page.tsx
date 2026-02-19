import { Circle } from "@/assets/icons/Circle"
import { EndSection } from "@/components/elements/EndSection"
import { FAQ } from "@/components/elements/FAQ"
import { HighlightSlide } from "@/components/elements/Home/HighlightSlide"
import Slider from "@/components/elements/Home/Slider"
import { Logo } from "@/components/ui/Logo"
import { Title } from "@/components/ui/Title"
import { TopTitle } from "@/components/ui/TopTitle"
import { destinations } from "@/data/destination.data"
import { ArrowUpRight, MoveRight, Search } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
	return (
		<>
			<section className="h-screen hero">
				<div className="container h-full">
					<div className="w-full lg:w-[65%] h-full mx-auto flex flex-col my-auto items-center justify-center">
						<span className="text-base md:text-2xl lg:text-4xl text-center">
							From Ancient Steppes to Timeless Cities
						</span>
						<h1 className="text-4xl md:text-6xl lg:text-8xl text-center my-6 md:mt-4 md:mb-10">
							Welcome to the Heart of the Silk Road
						</h1>
						<span className="text-base md:text-2xl lg:text-4xl text-center">
							Your Central Asian Adventure Begins Here
						</span>
						<form className="w-full flex items-center px-4 h-14 lg:h-16 rounded-4xl bg-white text-black mt-20">
							<input
								type="search"
								placeholder="Search your destinations..."
								className="w-full placeholder:text-[#C3C3C3] ps-5 font-medium lg:text-2xl focus:outline-none"
							/>
							<button className="w-14 lg:w-24 h-10 lg:h-12 rounded-4xl bg-primary">
								<Search className="mx-auto text-white w-5 lg:w-10" />
							</button>
						</form>
					</div>
				</div>
				<ul className="destination__list">
					{destinations.map((destination, index) => (
						<li key={index} className="destination__list--item">
							<Link
								href={`/destination/${destination.url}`}
								className="destination__list--item-link"
							>
								<span>{destination.name}</span>
								<div className="icon">
									<MoveRight size={36} />
									<Circle />
								</div>
							</Link>
						</li>
					))}
				</ul>
			</section>
			<section className="py-10 font-medium">
				<div className="container">
					<div className="flex flex-col xl:flex-row items-end gap-6">
						<div className="xl:w-3/5">
							<TopTitle text="destination preview" />
							<Title text="Explore Central Asia Like Never Before" />
						</div>
						<p className="xl:w-2/5 sm:text-xl text-text">
							At SRW (Silk Road Wonders), we craft unforgettable journeys across
							Uzbekistan, Kazakhstan, Kyrgyzstan, Turkmenistan and Tajikistan.
							Whether you`re drawn by majestic architecture, ancient bazaars, or
							serene nature — your perfect adventure awaits.
						</p>
					</div>
				</div>
				<Slider />
			</section>
			<section className="country__info">
				<div className="container">
					<TopTitle text="See Your Own Adventure" />
					<div className="md:w-1/2">
						<Title text="Unveil Central Asia’s Hidden Wonders" />
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 mt-16">
						<div className="flex flex-col gap-10">
							<div className="p-6 rounded-3xl bg-[#E9DED8]">
								<div className="flex items-center justify-between mb-5">
									<strong className="font-medium text-2xl sm:text-4xl">
										Kazakhistan
									</strong>
									<button className="min-w-10 sm:min-w-12 aspect-square rounded-full bg-primary grid place-content-center">
										<ArrowUpRight size={32} color="#ffffff" />
									</button>
								</div>
								<p className="text-[#878787] sm:text-lg">
									Welcome to Kazakhstan — a land where golden steppes stretch
									beyond the horizon, where futuristic cities rise beside
									ancient traditions. As the world’s largest landlocked country,
									Kazakhstan offers boundless space to breathe, roam, and
									rediscover freedom. From the shimmering heights of Baiterek
									Tower to the otherworldly beauty of Charyn Canyon, every step
									here tells a story.
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
						<div></div>
					</div>
				</div>
			</section>
			<section className="craft__adventure h-screen">
				<div className="container h-full lg:h-fit flex flex-col items-center justify-evenly">
					<div className="my-[10%]">
						<Logo />
					</div>
					<div className="w-full sm:w-[75%] lg:w-[60%] mb-20">
						<h3 className="text-2xl md:text-4xl text-center mb-2">
							Craft Your Own Adventure{" "}
						</h3>
						<h2 className="text-5xl md:text-7xl text-center">
							Unique, Personal, Unforgettable
						</h2>
					</div>
					<button className="w-60 py-3 rounded-4xl bg-white text-2xl text-[#656267] flex items-center justify-center gap-2.5">
						Let’s travel <ArrowUpRight size={28} />
					</button>
				</div>
			</section>
			<section className="py-10">
				<div className="container">
					<span className="md:text-xl text-primary uppercase">
						Cultural Highlights
					</span>
					<div className="flex flex-col gap-y-6 md:flex-row justify-between mt-8">
						<div className="md:w-[60%]">
							<Title text="From Desert Fortresses to Mountain Festivals — Central Asia is Calling" />
						</div>
						<p className=" md:w-[30%] text-base md:text-xl">
							At Silk Road Wonders, we don&#39;t just offer tours — we open
							doors to ancient civilizations, vibrant traditions, and
							breathtaking landscapes. Whether you&#39;re drawn to architectural
							marvels or the rhythms of rural life, there&#39;s a story here
							waiting just for you.
						</p>
					</div>
				</div>
				<HighlightSlide />
			</section>
			<FAQ />
			<EndSection />
		</>
	)
}
