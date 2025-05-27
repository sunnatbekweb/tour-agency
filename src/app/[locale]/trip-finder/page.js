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
  const { list, count, loading, currentPage } = useAppSelector(
    (state) => state.tours
  );

  useEffect(() => {
    dispatch(fetchTours(currentPage));
  }, [currentPage]);

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
      <section className="pt-20 md:pt-[240px] xl:pt-[145px] bg-[#FFF7F3]">
        <div className="container">
          <div className="font-medium px-6 lg:px-0 uppercase md:hidden mb-12">
            <span className="text-[#A5958B]">Trip founder</span>
            <h2 className="mt-2 text-3xl text-[#323232]">
              Explore Our Exclusive Tour packages
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {loading ? (
              <p>Loading...</p>
            ) : (
              list?.map((card, index) => <TourCards props={card} key={index} />)
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
