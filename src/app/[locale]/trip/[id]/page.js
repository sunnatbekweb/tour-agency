import Image from "next/image";
import React from "react";
import { TripPlacesSlide } from "@/components/ui/TripPlacesSlide";
import { TripSlide } from "@/components/ui/TripSlide";
import { Link } from "@/i18n/navigation";
import { AboutFAQ } from "@/components/about/AboutFAQ";
import "@/styles/page_styles/blog.css";

export default function TripDetail() {
  return (
    <div className="bg-[#FFF7F3] flex flex-col gap-y-14">
      <section className="mt-[216px] md:mt-[240px] xl:mt-[210px]">
        <div className="container px-6 font-medium">
          <span className="hidden text-xl text-[#A5958B] uppercase lg:block mb-8">
            Trip Blogs
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-7xl w-full lg:w-1/2">
            Trip to Registan
          </h2>
          <div className="flex items-center gap-x-4 md:gap-x-12 lg:gap-x-20 mt-12 mb-10">
            <div className="flex items-center gap-x-2 md:gap-x-3">
              <Image
                src={"/icons/star.svg"}
                width={24}
                height={24}
                alt="Star"
              />
              <span className="font-semibold text-sm md:text-lg lg:text-xl text-[#323232]">
                5.5
              </span>
            </div>
            <div className="flex items-center gap-x-1 md:gap-x-5 text-xs sm:text-sm md:text-lg lg:text-xl">
              <strong className="font-bold">7 days </strong>
              <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-[#323232]"></div>
              <p>
                From <strong className="font-bold">Samarkand</strong> to 
                <strong className="font-bold">Registan</strong>
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-y-16 gap-x-6 justify-between">
            <TripSlide />
            <div className="p-4 md:p-6 lg:p-10 w-full md:w-[40%] h-auto flex flex-col gap-y-8 justify-between bg-white rounded-2xl border border-[#F0F0F0]">
              <div>
                <span className="text-sm md:text-lg lg:text-2xl text-[#C5C5C5]">
                  From
                </span>
                <div className="flex items-end gap-x-2 lg:gap-x-4 mt-5">
                  <span className="lg:text-xl xl:text-3xl">us</span>
                  <strong className="font-medium text-3xl lg:text-5xl xl:text-7xl">
                    $2,300
                  </strong>
                </div>
              </div>
              <ul className="w-full flex flex-col gap-y-3 my-20">
                {[...Array(3)].map((_, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Image
                      src={"/icons/card_checkbox.svg"}
                      width={20}
                      height={20}
                      alt="checkbox icon"
                    />
                    <span className="font-medium text-sm md:text-base lg:text-2xl">
                      Including Accomandation
                    </span>
                  </li>
                ))}
              </ul>
              <button className="w-full h-10 md:h-14 lg:h-[72px] bg-[#A5958B] rounded-lg text-xl lg:text-2xl text-white">
                Make a reservation
              </button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container px-6 font-medium text-[#323232]">
          <div className="px-4 md:px-8 py-6 md:py-10 rounded-2xl bg-white">
            <h2 className="text-2xl md:text-5xl mb-6 md:mb-12 lg:mb-24">
              Tour information
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 lg:gap-20 justify-between">
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
                  <div className="min-w-4 md:min-w-8 h-4 md:h-8 rounded-full bg-[#A5958B] grid place-content-center">
                    <Image
                      src={"/icons/navigator.svg"}
                      width={16}
                      height={16}
                      className="w-2 h-2 md:h-4 md:w-4"
                      alt="icon"
                    />
                  </div>
                  <div className="flex flex-col gap-y-3">
                    <h3 className="font-bold text-xs md:text-lg lg:text-2xl">
                      Trip Theme
                    </h3>
                    <p className="flex items-center gap-x-3 text-xs md:text-lg lg:text-2xl">
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
          <h2 className="text-2xl md:text-5xl text-[#323232] mb-10">
            Places you will see
          </h2>
        </div>
        <TripPlacesSlide />
      </section>
      <section>
        <div className="container px-8 py-10 bg-white border border-[#EBEBEB] rounded-2xl">
          <div className="flex items-center justify-between">
            <h2 className="font-medium text-2xl md:text-5xl text-[#323232] mb-9">
              Tour information
            </h2>
            <button className="hidden md:flex lg:hidden px-10 py-2.5 rounded-2xl bg-[#A5958B] font-medium text-xl text-white">
              Show all
            </button>
          </div>
          <div className="w-full lg:w-3/4 mx-auto">
            <div className="hidden lg:flex ml-auto w-fit mb-16">
              <button className="px-10 py-2.5 rounded-2xl bg-[#A5958B] font-medium text-xl text-white">
                Show all
              </button>
            </div>
            <div className="pl-10 md:pl-20">
              <div className="introduction_header">
                <h3 className="font-bold text-xl lg:text-3xl text-[#A5958B]">
                  Introduction
                </h3>
                <div
                  className={`question__right-icon-box w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 rounded-full flex flex-row justify-center items-center bg-[#F0ECEA]`}
                >
                  <Image
                    src={"/icons/close__chevron.svg"}
                    width={22}
                    height={22}
                    alt="toggle icon"
                    className="question__right-icon w-3 h-3 md:w-4 md:h-4 lg:w-6 lg:h-6 object-contain -rotate-90"
                  />
                </div>
              </div>
              <ul className="introduction_list">
                {[...Array(7)].map((_, index) => (
                  <li key={index} className="introduction_list-item">
                    <div className="accordion">
                      <details
                        className="accordion__details"
                        name="introdution"
                      >
                        <summary>
                          <h3 className="accordion__title">
                            <strong className="font-bold text-[#A5958B]">
                              Day {index + 1}{" "}
                            </strong>
                            <span>Introduce Samarkand</span>
                          </h3>
                          <span className="accordion-icon">
                            <div
                              className={`question__right-icon-box w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 rounded-full flex flex-row justify-center items-center bg-[#F0ECEA]`}
                            >
                              <Image
                                src={"/icons/close__chevron.svg"}
                                width={22}
                                height={22}
                                alt="toggle icon"
                                className="question__right-icon w-3 h-3 md:w-4 md:h-4 lg:w-6 lg:h-6 object-contain -rotate-90"
                              />
                            </div>
                          </span>
                        </summary>
                      </details>
                      <div className="accordion__content">
                        <div className="accordion__content-body">
                          <p className="text-xs md:text-base">
                            Kazakhstan is the world&apos;s ninth-largest country by
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
                            className="hidden lg:block"
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
      <section>
        <div className="container px-8 py-10 bg-white border border-[#EBEBEB] rounded-2xl">
          <h2 className="font-medium text-2xl md:text-5xl text-[#323232] mb-9">
            Dates & Prices
          </h2>
          <div className="w-full lg:w-3/4 mx-auto">
            <div className="hidden lg:block ml-auto w-fit mb-16">
              <button className="px-10 py-2.5 rounded-2xl bg-[#A5958B] font-medium text-xl text-white">
                Show all
              </button>
            </div>

            <ul className="data-price_list">
              {[...Array(2)].map((_, index) => (
                <li key={index} className="data-price_list-item">
                  <div className="accordion">
                    <details className="accordion__details" name="introdution">
                      <summary>
                        <h3 className="accordion__title">
                          Silk Road Wonders 2025
                        </h3>
                        <span className="accordion-icon">
                          <div
                            className={`question__right-icon-box w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 rounded-full flex flex-row justify-center items-center bg-[#F0ECEA]`}
                          >
                            <Image
                              src={"/icons/close__chevron.svg"}
                              width={22}
                              height={22}
                              alt="toggle icon"
                              className="question__right-icon w-3 h-3 md:w-4 md:h-4 lg:w-6 lg:h-6 object-contain -rotate-90"
                            />
                          </div>
                        </span>
                      </summary>
                    </details>
                    <div className="accordion__content font-medium">
                      <div className="accordion__content-body">
                        <div className="accordion__content-body-item flex flex-col gap-y-6 md:gap-y-8">
                          <div className="flex flex-col gap-y-2 md:gap-y-4">
                            <div className="flex items-center justify-between">
                              <h4 className="md:text-2xl text-[#878787]">
                                Apr 5 - 26
                              </h4>
                              <button className="w-[85px] md:w-[150px] py-2 rounded-2xl bg-[#A5958B] font-bold text-xs md:text-lg text-white">
                                Sold out
                              </button>
                            </div>
                            <div className="flex items-center justify-between">
                              <h4 className="md:text-2xl text-[#878787]">
                                Apr 5 - 26
                              </h4>
                              <button className="w-[85px] md:w-[150px] py-2 rounded-2xl bg-[#F0ECEA] font-medium text-xs md:text-lg text-[#A5958B]">
                                Available
                              </button>
                            </div>
                          </div>
                          <div className="flex flex-col gap-y-1">
                            {[...Array(3)].map((_, index) => (
                              <div
                                key={index}
                                className="flex items-center justify-between text-[#878787]"
                              >
                                <h5 className="text-sm md:text-lg">
                                  Tour double occupancy
                                </h5>
                                <span className="text-lg md:text-2xl">
                                  $2,300
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section>
        <div className="container px-6 font-medium text-white">
          <form className="py-6 px-4 rounded-2xl bg-[#B4A297]">
            <h2 className="text-2xl md:text-4xl lg:text-5xl w-full xl:w-[55%] mb-10 md:mb-14">
              Your journey starts with a message, Get in Touch 👋
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-4 lg:gap-x-6">
              <label
                htmlFor="fullName"
                className="flex flex-col gap-y-2 md:gap-y-4"
              >
                <span className="pl-2 md:pl-4 lg:text-xl">Full name</span>
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  placeholder="Enter you full name"
                  className="px-4 lg:px-6 py-2 lg:py-3 rounded-lg bg-[#FFFFFF1A] focus:bg-[#FFFFFF33] focus:outline-white border border-[#CBCBCB]"
                />
              </label>
              <label
                htmlFor="email"
                className="flex flex-col gap-y-2 md:gap-y-4"
              >
                <span className="pl-2 md:pl-4 lg:text-xl">Your email</span>
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  className="px-4 lg:px-6 py-2 lg:py-3 rounded-lg bg-[#FFFFFF1A] focus:bg-[#FFFFFF33] focus:outline-white border border-[#CBCBCB]"
                />
              </label>
              <label
                htmlFor="destination"
                className="flex flex-col gap-y-2 md:gap-y-4"
              >
                <span className="pl-2 md:pl-4 lg:text-xl">
                  Your Destination
                </span>
                <input
                  type="text"
                  name="destination"
                  id="destination"
                  placeholder="Enter your destination"
                  className="px-4 lg:px-6 py-2 lg:py-3 rounded-lg bg-[#FFFFFF1A] focus:bg-[#FFFFFF33] focus:outline-white border border-[#CBCBCB]"
                />
              </label>
              <label
                htmlFor="tripTour"
                className="flex flex-col gap-y-2 md:gap-y-4"
              >
                <span className="pl-2 md:pl-4 lg:text-xl">Trip Tour</span>
                <input
                  type="text"
                  name="tripTour"
                  id="tripTour"
                  placeholder="Enter Trip Tour"
                  className="px-4 lg:px-6 py-2 lg:py-3 rounded-lg bg-[#FFFFFF1A] focus:bg-[#FFFFFF33] focus:outline-white border border-[#CBCBCB]"
                />
              </label>
            </div>
            <label
              htmlFor="tripTour"
              className="flex flex-col gap-y-2 md:gap-y-4 mt-4"
            >
              <span className="pl-2 md:pl-4 lg:text-xl">Trip message</span>
              <textarea
                type="text"
                name="tripTour"
                id="tripTour"
                placeholder="Enter your message"
                className="px-4 lg:px-6 py-2 lg:py-3 h-[210px] md:h-[200px] lg:h-[160px] rounded-lg bg-[#FFFFFF1A] focus:bg-[#FFFFFF33] focus:outline-white border border-[#CBCBCB]"
              ></textarea>
            </label>
            <div className="mt-6 md:mt-8 flex items-center justify-between">
              <button className="w-full md:w-[180px] lg:w-[320px] py-4 rounded-lg md:rounded-4xl bg-white font-semibold md:text-lg lg:text-xl text-[#656267]">
                Contact us
              </button>
              <div className="opacity-50 text-right hidden lg:flex">
                <p>
                  Company contacts:{" "}
                  <Link href={"mailto:silroadwondres@gmail.com"}>
                    silroadwondres@gmail.com
                  </Link>
                </p>
                <p>
                  <Link href={"tel:+998(90)1234567"}>998 (90) 123 45 67</Link>
                      
                  <Link href={"tel:+998(90)1234567"}>998 (90) 123 45 67</Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </section>
      <section className="question mt-[64px] md:mt-[94px] xl:mt-[100px]">
        <div className="container question__container w-full flex flex-col justify-center items-start gap-[40px] px-6 md:gap-[94px] md:px-9">
          <div className="question__top-box w-full lg:w-1/2 flex flex-col justify-center items-start gap-2 md:gap-4">
            <h2 className="question__title font-medium text-3xl md:text-5xl lg:text-7xl text-[#323232] uppercase">
              frequently asked question
            </h2>
          </div>
          <AboutFAQ />
        </div>
      </section>
    </div>
  );
}
