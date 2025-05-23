"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

export const TripSlide = ({ props }) => {
  return (
    <Swiper
      pagination={true}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="tripDetail-slide w-full md:w-[60%]"
    >
      {props?.map((item, index) => (
        <SwiperSlide key={index}>
          <Image
            src={item?.image}
            width={1100}
            height={600}
            alt="Slide image"
            className="w-full h-full object-cover object-center rounded-2xl"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
