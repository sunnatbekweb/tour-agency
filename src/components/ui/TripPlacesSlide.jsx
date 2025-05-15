"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Image from "next/image";

export const TripPlacesSlide = () => {
  return (
    <div>
      <div className="container px-6 flex items-center justify-between">
        <button className="slide_button slide_button-prev">
          <span className="arrow"></span>
        </button>
        <button className="slide_button slide_button-next">
          <span className="arrow"></span>
        </button>
      </div>
      <Swiper
        navigation={{
          prevEl: ".slide_button-prev",
          nextEl: ".slide_button-next",
        }}
        modules={[Navigation]}
        slidesPerView={"auto"}
        spaceBetween={16}
        breakpoints={{
          1024: {
            spaceBetween: 24,
          },
        }}
        className="tripPlacesSlide mt-10"
        loop={true}
        centeredSlides={true}
      >
        {[...Array(6)].map((_, index) => (
          <SwiperSlide key={index}>
            <Image
              src={"/images/hystorical__samarkand.jpg"}
              width={520}
              height={540}
              className="w-[270px] h-[280px] lg:w-[520px] lg:h-[540px]"
              alt="Slide image"
            />
            <h3 className="text-5xl text-white absolute left-10 bottom-10 w-3/4">
              Splendor of Ancient Khiva
            </h3>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
