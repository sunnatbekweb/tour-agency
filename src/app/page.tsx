import { MoveRight } from "lucide-react"
import Link from "next/link"

export default function Home() {
	return (
		<section className="h-screen hero">
			<div className="container h-full">
				<div className="w-[65%] h-full mx-auto flex flex-col my-auto items-center justify-center">
					<span className="text-4xl">
						From Ancient Steppes to Timeless Cities
					</span>
					<h1 className="text-8xl text-center mt-4 mb-10">
						Welcome to the Heart of the Silk Road
					</h1>
					<span className="text-4xl">
						Your Central Asian Adventure Begins Here
					</span>
				</div>
			</div>
			<ul className="destination__list">
				<li className="destination__list--item">
					<Link href={""} className="destination__list--item-link">
						<span>Uzbekistan</span>
						<div className="icon">
							<MoveRight size={36} />
							<svg
								width="37"
								height="37"
								viewBox="0 0 37 37"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								className="circle"
							>
								<circle
									cx="18.5"
									cy="18.5"
									r="18"
									fill="#D9D9D9"
									fill-opacity="0.4"
									stroke="#DEDEDE"
								/>
							</svg>
						</div>
					</Link>
				</li>
				<li className="destination__list--item">
					<Link href={""} className="destination__list--item-link">
						<span>Kazakhstan</span>
						<div className="icon">
							<MoveRight size={36} />
							<svg
								width="37"
								height="37"
								viewBox="0 0 37 37"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								className="circle"
							>
								<circle
									cx="18.5"
									cy="18.5"
									r="18"
									fill="#D9D9D9"
									fill-opacity="0.4"
									stroke="#DEDEDE"
								/>
							</svg>
						</div>
					</Link>
				</li>
				<li className="destination__list--item">
					<Link href={""} className="destination__list--item-link">
						<span>Tajikistan</span>
						<div className="icon">
							<MoveRight size={36} />
							<svg
								width="37"
								height="37"
								viewBox="0 0 37 37"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								className="circle"
							>
								<circle
									cx="18.5"
									cy="18.5"
									r="18"
									fill="#D9D9D9"
									fill-opacity="0.4"
									stroke="#DEDEDE"
								/>
							</svg>
						</div>
					</Link>
				</li>
				<li className="destination__list--item">
					<Link href={""} className="destination__list--item-link">
						<span>Kyrgyzstan</span>
						<div className="icon">
							<MoveRight size={36} />
							<svg
								width="37"
								height="37"
								viewBox="0 0 37 37"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								className="circle"
							>
								<circle
									cx="18.5"
									cy="18.5"
									r="18"
									fill="#D9D9D9"
									fill-opacity="0.4"
									stroke="#DEDEDE"
								/>
							</svg>
						</div>
					</Link>
				</li>
				<li className="destination__list--item">
					<Link href={""} className="destination__list--item-link">
						<span>Turkmenistan</span>
						<div className="icon">
							<MoveRight size={36} />
							<svg
								width="37"
								height="37"
								viewBox="0 0 37 37"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								className="circle"
							>
								<circle
									cx="18.5"
									cy="18.5"
									r="18"
									fill="#D9D9D9"
									fill-opacity="0.4"
									stroke="#DEDEDE"
								/>
							</svg>
						</div>
					</Link>
				</li>
			</ul>
		</section>
	)
}
