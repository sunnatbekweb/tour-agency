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
import { TripPlacesSlide } from "@/components/ui/TripPlacesSlide";

export default function TripDetail() {
  return (
    <div className="bg-[#FFF7F3] flex flex-col gap-y-14">
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
              {[...Array(5)].map((_, index) => (
                <SwiperSlide>
                  <Image
                    src={"/images/hystorical__samarkand.jpg"}
                    width={1100}
                    height={600}
                    alt="Slide image"
                  />
                </SwiperSlide>
              ))}
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
      <section>
        <div className="container px-6 font-medium text-[#323232]">
          <div className="px-8 py-10 rounded-2xl bg-white">
            <h2 className="text-5xl mb-24">Tour information</h2>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-20 justify-between">
              {[...Array(3)].map((_, index) => (
                <>
                  <div className="flex gap-x-4" key={index}>
                    <div className="w-8 h-8 rounded-full bg-[#A5958B] grid place-content-center">
                      <Image
                        src={"/icons/navigator.svg"}
                        width={16}
                        height={16}
                        alt="icon"
                      />
                    </div>
                    <div className="flex flex-col gap-y-3">
                      <h3 className="font-bold text-2xl">Destination</h3>
                      <p className="flex items-center gap-x-3 text-2xl">
                        <span>Samarkand</span>
                        <div className="line"></div>
                        <span>Registan</span>
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-x-4">
                    <div className="w-8 h-8 rounded-full bg-[#A5958B] grid place-content-center">
                      <Image
                        src={"/icons/navigator.svg"}
                        width={16}
                        height={16}
                        alt="icon"
                      />
                    </div>
                    <div className="flex flex-col gap-y-3">
                      <h3 className="font-bold text-2xl">Trip Theme</h3>
                      <p className="flex items-center gap-x-3 text-2xl">
                        Scheduled Group Tours
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-x-4">
                    <div className="w-8 h-8 rounded-full bg-[#A5958B] grid place-content-center">
                      <Image
                        src={"/icons/navigator.svg"}
                        width={16}
                        height={16}
                        alt="icon"
                      />
                    </div>
                    <div className="flex flex-col gap-y-3">
                      <h3 className="font-bold text-2xl">Transports</h3>
                      <p className="flex items-center gap-x-3 text-2xl">
                        Privet Vehicle
                      </p>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container p-6 rounded-2xl bg-white border border-[#EBEBEB]">
          <Image src={"/images/map.png"} width={1700} height={500} alt="Map" />
        </div>
      </section>
      <section>
        <div className="container px-6 font-medium">
          <h2 className="text-5xl text-[#323232] mb-10">Places you will see</h2>
        </div>
        <TripPlacesSlide />
      </section>
    </div>
  );
}
