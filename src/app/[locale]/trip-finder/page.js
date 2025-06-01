"use client";

import React, { useEffect } from "react";
import TripSearch from "@/components/ui/TripSearch";
import { TourCards } from "@/components/ui/TourCards";
import { Pagination } from "@/components/ui/Pagination";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { fetchTours, setPage } from "@/features/tours/toursSlice";
import "@/styles/page_styles/trip-finder.css";

export default function TripFinder() {
  const dispatch = useAppDispatch();
  const { list, count, loading, currentPage, filters } = useAppSelector(
    (state) => state.tours
  );

  useEffect(() => {
    dispatch(fetchTours({ page: currentPage, filters }));
  }, [currentPage, filters]);

  const handlePageChange = ({ selected }) => {
    dispatch(setPage(selected + 1));
  };

  return (
    <>
      <section className="trip-finder">
        <h1>
          Best Trips to <br /> <span>Central Asia</span>
        </h1>
      </section>
      <section>
        <div className="container relative">
          <TripSearch />
        </div>
      </section>
      <section className="pt-[240px] sm:pt-[180px] lg:pt-[145px] bg-[#FFF7F3]">
        <div className="container">
          <div className="font-medium px-6 lg:px-0 uppercase md:hidden mb-12">
            <span className="text-[#A5958B]">Trip founder</span>
            <h2 className="mt-2 text-3xl text-[#323232]">
              Explore Our Exclusive Tour packages
            </h2>
          </div>
          <div
            className={`${list?.length > 0 && loading === false && "grid"} grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4`}
          >
            {loading ? (
              <p className="font-medium text-2xl text-center mt-40">
                Loading...
              </p>
            ) : list?.length > 0 ? (
              list?.map((card, index) => <TourCards props={card} key={index} />)
            ) : (
              <p className="font-medium text-2xl text-center mt-40">
                Trips not found!
              </p>
            )}
          </div>
        </div>
      </section>
      <div className="pt-[100px]">
        {count > 0 && (
          <Pagination
            count={Math.ceil(count / 6)}
            onPageChange={handlePageChange}
            forcePage={currentPage - 1}
          />
        )}
      </div>
    </>
  );
}
