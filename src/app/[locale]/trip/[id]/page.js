"use client";

import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "@/styles/page_styles/blog.css";
// import required modules
import { Pagination } from "swiper/modules";

export default function TripDetail() {
  return (
    <div className="bg-[#FFF7F3]">
      <section className="mt-[136px] md:mt-[180px] xl:mt-[150px]">
        <div className="container px-6 font-medium">
          <span className="text-xl text-[#A5958B] uppercase block mb-8">
            Trip Blogs
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-7xl w-full lg:w-1/2">
            Trip to Registan
          </h2>
          <div className="flex items-center gap-x-20 mt-12 mb-10">
            <div className="flex items-center gap-x-3">
              <Image
                src={"/icons/star.svg"}
                width={24}
                height={24}
                alt="Star"
              />
              <span className="font-semibold text-xl text-[#323232]">5.5</span>
            </div>
            <div className="flex items-center gap-x-5 text-xl">
              <strong className="font-bold">7 days </strong>
              <div className="w-1.5 h-1.5 bg-[#323232]"></div>
              <p>
                From <strong className="font-bold">Samarkand</strong> to{" "}
                <strong className="font-bold">Registan</strong>
              </p>
            </div>
          </div>
          <div className="flex gap-x-6 justify-between">
            <Swiper
              pagination={true}
              modules={[Pagination]}
              className="blog_detail-slide"
            >
             {[...Array(5)]}
            </Swiper>
            <div className="p-10 w-[40%] h-auto flex flex-col justify-between bg-white rounded-2xl border border-[#F0F0F0]">
              <div>
                <span className="text-2xl text-[#C5C5C5]">From</span>
                <div className="flex items-end gap-x-4 mt-5">
                  <span className="text-3xl">us</span>
                  <strong className="font-medium text-7xl">$2,300</strong>
                </div>
              </div>
              <ul className="w-1/2 flex flex-col gap-y-3 my-20">
                {[...Array(3)].map((_, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Image
                      src={"/icons/card_checkbox.svg"}
                      width={20}
                      height={20}
                      alt="checkbox icon"
                    />
                    <span className="font-medium">Including Accomandation</span>
                  </li>
                ))}
              </ul>
              <button className="w-full h-[72px] bg-[#A5958B] rounded-lg text-2xl text-white">
                Make a reservation
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
