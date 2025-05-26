"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import TripSearch from "@/components/ui/TripSearch";
import { TourCards } from "@/components/ui/TourCards";
import { Pagination } from "@/components/ui/Pagination";
import "@/styles/page_styles/trip-finder.css";

export default function TripFinder() {
  const [tourCards, setTourCards] = useState();
  const [currentPage, setCurrentPage] = useState(1);

  const getTourCards = async (page = 1) => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/tour/tour-cards/?page=${page}`
      );
      setTourCards(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getTourCards(currentPage);
  }, [currentPage]);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected + 1);
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
            {tourCards?.results?.map((card, index) => (
              <TourCards props={card} key={index} />
            ))}
          </div>
        </div>
      </section>
      <div className="pt-[100px]">
        {tourCards?.count && (
          <Pagination
            count={Math.ceil(tourCards.count / 6)}
            onPageChange={handlePageChange}
            forcePage={currentPage - 1}
          />
        )}
      </div>
    </>
  );
}
