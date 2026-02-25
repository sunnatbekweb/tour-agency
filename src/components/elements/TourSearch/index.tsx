import { Location } from '@/assets/icons/Location'
import { Clock, Flag } from 'lucide-react'

export function TripSearch() {
	return (
		<div className="w-full px-2.5 lg:px-8 py-4 lg:py-10 rounded-2xl lg:rounded-4xl bg-[#CCB9AEE5] border border-[#989898] absolute -top-44.25 sm:-top-28.25 lg:-top-21.25">
			<form className="p-2 rounded-2xl md:rounded-[46px] bg-transparent lg:bg-white xl:border border-[#E6E6E6] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-center font-medium">
				<label
					htmlFor="destination"
					className="flex items-center gap-x-6 xl:pl-10 bg-white rounded-3xl px-6"
				>
					<div>
						<Location />
					</div>
					<select
						name="destination"
						id="destination"
						className={`w-full h-12 text-sm md:text-base lg:h-17.5 focus:outline-none cursor-pointer`}
					>
						<option
							value=""
							disabled
							className="text-[#BDBDBD]"
						>
							Destination
						</option>
						{[]?.map((_, index) => (
							<option
								key={index}
								className="text-text"
							>
								Uzbekistan
							</option>
						))}
					</select>
				</label>
				<label
					htmlFor="duration"
					className="flex items-center gap-x-6 bg-white rounded-3xl px-6"
				>
					<div>
						<Clock />
					</div>
					<input
						type="number"
						name="duration"
						id="duration"
						placeholder={'Duration'}
						className="w-full h-12 text-sm md:text-base lg:h-17.5 focus:outline-none"
					/>
				</label>
				<label
					htmlFor="year"
					className="flex items-center gap-x-6 bg-white rounded-3xl px-6"
				>
					<div>
						<Clock />
					</div>
					<input
						type="number"
						name="year"
						id="year"
						placeholder={'Year'}
						className="w-full h-12 text-sm md:text-base lg:h-17.5 focus:outline-none"
					/>
				</label>
				<label
					htmlFor="trip_theme"
					className="flex items-center gap-x-6 bg-white rounded-3xl px-6"
				>
					<div>
						<Flag />
					</div>
					<select
						name="trip_theme"
						id="trip_theme"
						className={`w-full h-12 text-sm md:text-base lg:h-17.5 focus:outline-none cursor-pointer`}
					>
						<option
							value=""
							disabled
						>
							Type
						</option>
						{[]?.map((_, i) => (
							<option
								key={i}
								className="text-text"
							>
								Two person
							</option>
						))}
					</select>
				</label>
				<button className="w-full h-12 md:text-base lg:h-17.5 sm:col-span-2 lg:col-span-1 rounded-[40px] bg-[#A5958B] border-4 xl:border-none border-white font-medium text-2xl text-white">
					Search
				</button>
			</form>
		</div>
	)
}
