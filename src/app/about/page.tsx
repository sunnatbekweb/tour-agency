import { FAQ } from '@/components/elements/FAQ'
import Image from 'next/image'

export default function About() {
	const locale = 'ru'

	return (
		<>
			<section className="about relative">
				<div className="container h-full flex flex-col items-center justify-center">
					<h1
						className={`w-full flex flex-col items-center font-medium text-white ${locale === 'ru' ? 'text-xl sm:text-3xl md:text-5xl xl:text-7xl' : ' text-2xl sm:text-3xl md:text-5xl xl:text-7xl'}`}
					>
						<span>Not Just Tours</span>
						<span className={`${locale === 'ru' ? '' : 'ml-[15%]'}`}>
							We Tell Stories
						</span>
					</h1>
					<div className="absolute bottom-20">
						<button className="w-40.5 h-12 lg:w-54 lg:h-18 bg-white font-medium` text-xl `lg:text-2xl text-[#656267] rounded-4xl 2xl:hidden">
							Contact us
						</button>
					</div>
				</div>
			</section>
			<section className="py-20">
				<div className="container px-6">
					<span className="font-medium text-xl text-[#A5958B] uppercase block mb-8">
						About
					</span>
					<div className="flex flex-col gap-y-8 lg:flex-row gap-x-5 font-medium text-text uppercase">
						<h2 className="text-xl md:text-3xl lg:text-5xl w-full lg:w-1/2">
							Where cultures converge and history lives
						</h2>
						<p className="text-xs lg:text-xl w-full lg:w-1/2">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam
							ipsa sed odit nisi ipsum adipisci libero quam obcaecati? Modi
							necessitatibus sed, voluptatibus ex sunt enim!
						</p>
					</div>
				</div>
			</section>
			<Image
				src={'/images/about_page_img.png'}
				width={1920}
				height={800}
				alt="Page image"
			/>
			<section className="py-20">
				<div className="container px-6">
					<span className="font-medium text-xl text-[#A5958B] uppercase block mb-8">
						About
					</span>
					<div className="flex flex-col gap-y-12 lg:flex-row gap-x-5 font-medium text-text">
						<h3 className="text-xl md:text-3xl lg:text-5xl w-full lg:w-1/2 uppercase">
							Explore our exclusive tour
						</h3>
						<div className="w-full lg:w-1/2">
							<p className="text-xs md:text-lg lg:text-xl uppercase">
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi
								aliquam quae aut officiis. Laboriosam rem sed laborum?
								Laboriosam, dignissimos odit.
							</p>
							<p className="text-xs md:text-lg lg:text-xl mt-8 lg:mt-[100px] mb-8 lg:mb-[72px]">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
								consequatur quod ab cum facilis deleniti similique, est,
								reiciendis animi at praesentium minima illo ratione obcaecati
								quaerat, pariatur nulla incidunt quidem laudantium autem.
								Aspernatur necessitatibus aperiam et. Eveniet est velit
								deleniti?
							</p>
							<h4 className="text-xl md:text-2xl lg:text-4xl uppercase">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Accusamus animi vero, doloribus rerum eveniet fugit facere
								expedita ad! Atque corporis recusandae repellendus molestiae,
								aut nobis laboriosam esse repellat odit! Repudiandae maiores
								voluptates quasi asperiores quia est deleniti qui, laudantium,
								rem saepe fugit quaerat aliquid cum.
							</h4>
						</div>
					</div>
				</div>
			</section>
			<div className="container px-6">
				<hr />
			</div>
			<section className="pt-14 pb-20">
				<div className="container px-6 grid grid-cols-1 lg:grid-cols-3 gap-y-12 gap-x-30">
					<div className="font-medium flex flex-col items-center lg:block">
						<h5 className="text-sm md:text-lg xl:text-2xl text-center lg:text-left line-clamp-3 mb-2">
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum,
							temporibus!
						</h5>
						<span className="text-5xl md:text-7xl xl:text-9xl">1023</span>
					</div>
					<div className="font-medium flex flex-col items-center lg:block">
						<h5 className="text-sm md:text-lg xl:text-2xl text-center lg:text-left line-clamp-3 mb-2">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
							commodi itaque molestiae!
						</h5>
						<span className="text-5xl md:text-7xl xl:text-9xl">98</span>
					</div>
					<div className="font-medium flex flex-col items-center lg:block">
						<h5 className="text-sm md:text-lg xl:text-2xl text-center lg:text-left line-clamp-3 mb-2">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Reiciendis est vitae labore.
						</h5>
						<span className="text-5xl md:text-7xl xl:text-9xl">9</span>
					</div>
				</div>
			</section>
			<section className="bg-[#F0E6E0] pt-20 pb-30">
				<div className="container px-6">
					<span className="font-medium text-xl text-[#A5958B] uppercase block mb-8">
						About
					</span>
					<h3 className="font-medium text-xl md:text-3xl lg:text-5xl w-full lg:w-1/2 uppercase mb-[72px]">
						Tour leaders
					</h3>
					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10">
						{[...Array(6)].map((_, i) => (
							<div key={i}>
								<div className="w-full h-60 sm:h-85 xl:h-105">
									<Image
										src={'/images/exclusive_image0.png'}
										width={440}
										height={480}
										alt="Tour leader"
										className="w-full h-full object-cover"
									/>
								</div>
								<div className="pt-6 px-2 font-medium">
									<h5 className="text-xl md:text-2xl lg:text-3xl mb-1 line-clamp-1">
										Mr. Eshmat Toshmat
									</h5>
									<p className="text-xs md:text-lg lg:text-xl line-clamp-1">
										Frontend developer
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
			<section className="py-20">
				<div className="container px-6">
					<div className="flex flex-col gap-y-8 lg:flex-row items-center mb-15">
						<h3 className="font-medium text-xl md:text-3xl lg:text-5xl w-full lg:w-1/2 uppercase">
							Our expertise
						</h3>
						<p className="font-medium md:text-2xl w-full lg:w-[30%] ml-auto">
							Lorem ipsum dolor, sit amet consectetur adipisicing elit.
							Explicabo, nobis!
						</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
						{[...Array(6)].map((_, index) => (
							<div
								key={index}
								className="flex flex-col items-center md:block px-6 md:px-12 py-8 bg-white border border-[#EBEBEB] rounded-2xl font-medium text-text"
							>
								<div className="w-fit bg-[#B4A297] rounded-full p-4 mb-8">
									{/* <Image
										src={_.icon}
										width={40}
										height={400}
										alt="Icon"
									/> */}
								</div>
								<h4 className="text-lg md:text-2xl mb-4">
									Lorem, ipsum dolor.
								</h4>
								<p className="text-sm lg:text-lg text-center md:text-left">
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
									deleniti.
								</p>
							</div>
						))}
					</div>
				</div>
			</section>
			<section className="question my-[64px] md:my-[94px] xl:my-[100px]">
				<div className="container question__container w-full flex flex-col justify-center items-start gap-[40px] px-6 md:gap-[94px] md:px-9">
					<div className="question__top-box w-full lg:w-1/2 flex flex-col justify-center items-start gap-2 md:gap-4">
						<p className="question__text text-[#A5958B] font-medium text-xl uppercase">
							About
						</p>
						<h2 className="question__title font-medium text-xl md:text-3xl lg:text-5xl text-text uppercase">
							Frequently asked questions
						</h2>
					</div>
					<FAQ />
				</div>
			</section>
		</>
	)
}
