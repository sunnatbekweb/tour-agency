import { TourCard } from "@/components/elements/TourCard"
import { Pagination } from "@/components/ui/Pagination"
import { Title } from "@/components/ui/Title"
import { TopTitle } from "@/components/ui/TopTitle"

export const Tours = () => {
	return (
		<section className="py-12.5">
			<div className="container">
				<TopTitle text="Trip Blogs" />
				<div className="flex flex-col lg:flex-row items-center justify-between mt-6">
					<div className="lg:w-[55%] mb-10">
						<Title text="Explore Uzbekistan with Our Signature Tours" />
					</div>
					<p className="lg:w-[40%] text-xl">
						From the blue domes of Samarkand to the ancient streets of Khiva —
						our Uzbekistan tour packages are crafted for culture lovers, history
						seekers, and adventurous souls. Whether it’s a weekend escape or a
						multi-day immersion, your journey begins here.
					</p>
				</div>
				<div className="flex items-center gap-x-5 w-full overflow-x-auto my-12">
					<button className="w-62 h-14 rounded-4xl bg-[#EDEDED] text-xl text-primary">
						All tours
					</button>
				</div>
				<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
					{[...Array(6)].map((_, index) => (
						<TourCard key={index} />
					))}
				</div>
				<div className="mt-20">
					<Pagination count={10} />
				</div>
			</div>
		</section>
	)
}
