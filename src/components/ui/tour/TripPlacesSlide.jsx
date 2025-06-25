"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import { useLocale } from "next-intl";

export const TripPlacesSlide = ({ props }) => {
  const locale = useLocale();
  return (
    <div>
      <div className="hidden container px-6 lg:flex items-center justify-between">
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
        {props?.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-full bg-black/60 absolute top-0 left-0"></div>
            <Image
              src={item?.image}
              width={520}
              height={540}
              className="w-[270px] h-[280px] lg:w-[520px] lg:h-[540px]"
              alt="Slide image"
            />
            <h3 className="text-2xl lg:text-5xl font-medium text-white absolute left-4 bottom-6 lg:left-10 lg:bottom-10 w-3/4">
              {item?.[`text_${locale}`]}
            </h3>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
