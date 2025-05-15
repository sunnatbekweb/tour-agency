"use client";

import React from "react";
import "@/styles/page_styles/trip-finder.css";
import TripSearch from "@/components/ui/TripSearch";
import Image from "next/image";
import ReactPaginate from "react-paginate";

export default function TripFinder() {
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
      <section className="pt-20 md:pt-[200px] xl:pt-[165px] bg-[#FFF7F3]">
        <div className="container">
          <div className="font-medium px-6 lg:px-0 uppercase md:hidden mb-12">
            <span className="text-[#A5958B]">Trip founder</span>
            <h2 className="mt-2 text-3xl text-[#323232]">
              Explore Our Exclusive Tour packgages
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[...Array(9)].map((_, index) => (
              <div
                key={index}
                className="p-4 pb-6 border border-[#EBEBEB] rounded-4xl shadow-xl"
              >
                <div className="rounded-3xl">
                  <Image
                    src={"/images/hystorical__samarkand.jpg"}
                    width={300}
                    height={180}
                    className="w-full"
                    alt="Trip image"
                  />
                </div>
                <div className="pt-6 flex flex-col justify-end">
                  <div className="text-[#323232] mb-5">
                    <div className="flex items-center gap-x-4 justify-between mb-4">
                      <h4 className="font-semibold text-xl lg:text-2xl line-clamp-1">
                        Build your own destination
                      </h4>
                      <div className="flex items-center gap-x-3">
                        <Image
                          src={"/icons/star.svg"}
                          width={24}
                          height={24}
                          alt="Star"
                        />
                        <span className="font-semibold text-xl text-[#323232]">
                          5.5
                        </span>
                      </div>
                    </div>
                    <p className="font-medium text-sm md:text-base lg:text-xl line-clamp-2 mb-4">
                      Traveling privately on a custom itinerary means
                      flexibility.
                    </p>
                    <span className="font-semibold text-base lg:text-xl text-[#323232]">
                      $456.99
                    </span>
                  </div>
                  <div className="flex items-end gap-x-3">
                    <ul className="w-1/2 flex flex-col gap-y-1">
                      <li className="flex items-center gap-3">
                        <Image
                          src={"/icons/card_checkbox.svg"}
                          width={20}
                          height={20}
                          alt="checkbox icon"
                        />
                        <span className="font-medium">
                          Including Accomandation
                        </span>
                      </li>
                      <li className="flex items-center gap-3">
                        <Image
                          src={"/icons/card_checkbox.svg"}
                          width={20}
                          height={20}
                          alt="checkbox icon"
                        />
                        <span className="font-medium">
                          Including Accomandation
                        </span>
                      </li>
                      <li className="flex items-center gap-3">
                        <Image
                          src={"/icons/card_checkbox.svg"}
                          width={20}
                          height={20}
                          alt="checkbox icon"
                        />
                        <span className="font-medium">
                          Including Accomandation
                        </span>
                      </li>
                    </ul>
                    <button className="w-1/2 h-[36px] bg-[#B4A297] rounded-4xl font-medium text-white text-base mt-8 ml-auto ">
                      Booking
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="py-[100px]">
        <ReactPaginate
          nextLabel="Next"
          // onPageChange={}
          pageRangeDisplayed={3}
          marginPagesDisplayed={1}
          pageCount={10}
          breakLabel="..."
          previousLabel="Prev"
          containerClassName="pagination"
          pageClassName="page"
          activeClassName="active"
          disabledClassName="disabled"
          renderOnZeroPageCount={null}
        />
      </div>
    </>
  );
}
