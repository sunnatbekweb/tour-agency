import Image from "next/image";
import React from "react";
import { TripPlacesSlide } from "@/components/ui/TripPlacesSlide";
import { TripSlide } from "@/components/ui/TripSlide";
import "@/styles/page_styles/blog.css";

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
                From <strong className="font-bold">Samarkand</strong> to
                <strong className="font-bold">Registan</strong>
              </p>
            </div>
          </div>
          <div className="flex gap-x-6 justify-between">
            <TripSlide />
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
              {[...Array(6)].map((_, index) => (
                // <div className="flex gap-x-4" key={index}>
                //   <div className="w-8 h-8 rounded-full bg-[#A5958B] grid place-content-center">
                //     <Image
                //       src={"/icons/navigator.svg"}
                //       width={16}
                //       height={16}
                //       alt="icon"
                //     />
                //   </div>
                //   <div className="flex flex-col gap-y-3">
                //     <h3 className="font-bold text-2xl">Destination</h3>
                //     <p className="flex items-center gap-x-3 text-2xl">
                //       <span>Samarkand</span>
                //       <div className="line"></div>
                //       <span>Registan</span>
                //     </p>
                //   </div>
                // </div>
                <div key={index} className="flex gap-x-4 w-fit">
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
      <section>
        <div className="container px-8 py-10 bg-white border border-[#EBEBEB] rounded-2xl">
          <h2 className="font-medium text-5xl text-[#323232] mb-9">
            Tour itinerary
          </h2>
          <div className="w-3/4 mx-auto">
            <div className="ml-auto w-fit mb-16">
              <button className="px-10 py-2.5 rounded-2xl bg-[#A5958B] font-medium text-xl text-white">
                Show all
              </button>
            </div>
            <div className="pl-[80px]">
              <div className="introduction_header">
                <h3 className="font-bold text-3xl text-[#A5958B]">
                  Introduction
                </h3>
                <div
                  className={`question__right-icon-box w-[64px] h-[64px] rounded-full flex flex-row justify-center items-center bg-[#F0ECEA]`}
                >
                  <Image
                    src={"/icons/close__chevron.svg"}
                    width={22}
                    height={22}
                    alt="toggle icon"
                    className="question__right-icon object-contain -rotate-90"
                  />
                </div>
              </div>
              <ul className="introduction_list">
                {[...Array(7)].map((_, index) => (
                  <li key={index} className="introduction_list-item">
                    <div class="accordion">
                      <details class="accordion__details" name="introdution">
                        <summary>
                          <h3 class="accordion__title">
                            <strong className="font-bold text-[#A5958B]">
                              Day {index + 1}
                            </strong>
                            <span>Introduce Samarkand</span>
                          </h3>
                          <span class="accordion-icon">
                            <div
                              className={`question__right-icon-box w-[64px] h-[64px] rounded-full flex flex-row justify-center items-center bg-[#F0ECEA]`}
                            >
                              <Image
                                src={"/icons/close__chevron.svg"}
                                width={22}
                                height={22}
                                alt="toggle icon"
                                className="question__right-icon object-contain -rotate-90"
                              />
                            </div>
                          </span>
                        </summary>
                      </details>
                      <div class="accordion__content">
                        <div class="accordion__content-body">
                          <p>
                            Kazakhstan is the world's ninth-largest country by
                            land area and the largest landlocked country. Hilly
                            plateaus and plains account for nearly half its vast
                            territory, with lowlands composing another third;
                            its southern and eastern frontiers are composed of
                            low mountainous regions. Kazakhstan has a population
                            of 20 million and one of the lowest population
                            densities in the world
                          </p>
                          <Image
                            src={"/images/hystorical__samarkand.jpg"}
                            width={250}
                            height={220}
                            alt="Accordion image"
                          />
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
