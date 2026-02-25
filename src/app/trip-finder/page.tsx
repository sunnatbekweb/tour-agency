import { TourCard } from '@/components/elements/TourCard'
import { TripSearch } from '@/components/elements/TourSearch'
import { Pagination } from '@/components/ui/Pagination'

export default function TripFinder() {
	const loading = false
	const locale = 'en'
	// const handlePageChange = ({ selected }) => {
	//   dispatch(setPage(selected + 1));
	// };

	return (
		<>
			<section className="trip-finder">
				<h1>
					{locale === 'en' ? (
						<>
							Best Trips to <br /> <span>Central Asia</span>
						</>
					) : locale === 'ru' ? (
						<>
							Лучшие путешествия в <br /> <span>Центральную Азию</span>
						</>
					) : (
						<>
							Markaziy Osiyoga <br /> <span>Eng Zo&apos;r Sayohatlar</span>
						</>
					)}
				</h1>
			</section>
			<section>
				<div className="container relative">
					<TripSearch />
				</div>
			</section>
			<section className="pt-60 sm:pt-45 lg:pt-36.25 bg-[#FFF7F3]">
				<div className="container">
					<div className="font-medium px-6 lg:px-0 uppercase md:hidden mb-12">
						<span className="text-[#A5958B]">Search tours</span>
						<h2 className="mt-2 text-3xl text-text">search</h2>
					</div>
					<div
						className={`${[1]?.length > 0 && loading === false && 'grid'} grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4`}
					>
						{loading ? (
							<p className="font-medium text-2xl text-center mt-40">
								Loading...
							</p>
						) : [1]?.length > 0 ? (
							[...Array(6)].map((_, index) => <TourCard key={index} />)
						) : (
							<p className="font-medium text-2xl text-center mt-40">
								Trips not found
							</p>
						)}
					</div>
				</div>
			</section>
			<div className="pt-25">{1 > 0 && <Pagination count={6} />}</div>
		</>
	)
}
