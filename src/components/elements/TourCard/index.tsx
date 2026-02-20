import { Check, Star } from "lucide-react"
import Image from "next/image"

export const TourCard = () => {
	return (
		<div className="w-full p-3 md:p-5 bg-white border border-[#EBEBEB] shadow rounded-4xl">
			<div className="rounded-3xl overflow-hidden">
				<Image
					src={"/images/home_slide_card-image.jpg"}
					width={600}
					height={420}
					alt="Card image"
				/>
			</div>
			<div className="pt-5">
				<div className="flex items-center justify-between">
					<h4 className="text-lg md:text-2xl">Hystorical Samarkand City</h4>
					<div className="flex items-center gap-3 md:text-2xl">
						<Star fill="#FFCA28" stroke="#FFCA28" />
						<span>5.5</span>
					</div>
				</div>
				<p className="text-lg md:text-3xl mt-3 md:mt-6 mb-5 md:mb-8">$456.99</p>
				<div className="flex flex-col">
					<div className="flex flex-col gap-2">
						<div className="flex items-center gap-4">
							<div className="min-w-6 h-6 border-[3px] border-primary rounded-full grid place-content-center">
								<Check size={16} stroke="#a5958b" strokeWidth={3} />
							</div>
							<span className="text-xs md:text-base">
								Including Accomandation
							</span>
						</div>
						<div className="flex items-center gap-4">
							<div className="min-w-6 h-6 border-[3px] border-primary rounded-full grid place-content-center">
								<Check size={16} stroke="#a5958b" strokeWidth={3} />
							</div>
							<span className="text-xs md:text-base">
								Including Accomandation
							</span>
						</div>
						<div className="flex items-center gap-4">
							<div className="min-w-6 h-6 border-[3px] border-primary rounded-full grid place-content-center">
								<Check size={16} stroke="#a5958b" strokeWidth={3} />
							</div>
							<span className="text-xs md:text-base">
								Including Accomandation
							</span>
						</div>
					</div>
					<button className="w-full py-2 rounded-4xl bg-primary text-white text-xs md:text-lg mt-4">
						Booking
					</button>
				</div>
			</div>
		</div>
	)
}
