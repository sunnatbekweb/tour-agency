"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

export const TripSlide = () => {
  return (
    <Swiper
      pagination={true}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="tripDetail-slide w-full md:w-[60%]"
    >
      {[...Array(5)].map((_, index) => (
        <SwiperSlide key={index}>
          <Image
            src={"/images/hystorical__samarkand.jpg"}
            width={1100}
            height={600}
            alt="Slide image"
            className="w-full h-full object-cover rounded-2xl"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
