'use client';

import React, { useEffect, useState } from 'react';
import TripSearch from '@/components/ui/TripSearch';
import Image from 'next/image';
import axios from 'axios';
import { TourCards } from '@/components/ui/TourCards';
import '@/styles/page_styles/trip-finder.css';
import { Pagination } from '@/components/ui/Pagination';

export default function TripFinder() {
  const [tour_cards, setTour_cards] = useState();
  const getTourCards = async () => {
    try {
      await axios
        .get(`${process.env.NEXT_PUBLIC_BASE_URL}/tour/tour-cards/`)
        .then((response) => setTour_cards(response.data));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getTourCards();
  }, []);

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
            <h2 className="mt-2 text-3xl text-[#323232]">Explore Our Exclusive Tour packgages</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {tour_cards?.results?.map((card, index) => (
              <TourCards props={card} key={index} />
            ))}
          </div>
        </div>
      </section>
      <div className="py-[100px]">
        <Pagination count={tour_cards?.count} />
      </div>
    </>
  );
}
