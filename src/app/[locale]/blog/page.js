"use client";

import React from "react";
import Image from "next/image";
import ReactPaginate from "react-paginate";
import { Link } from "@/i18n/navigation";
import "@/styles/page_styles/trip.css";

export default function Blog() {
  return (
    <>
      <section className="blog_hero">
        <div className="container h-full flex flex-col items-center justify-center">
          <h1 className="w-full sm:w-1/2 lg:max-w-[860px] font-medium text-7xl lg:text-9xl text-white text-center">
            Wander. Discover. Share.
          </h1>
          <div className="absolute bottom-20">
            <button className="w-[162px] h-[48px] lg:w-[216px] lg:h-[72px] bg-white font-medium text-xl lg:text-2xl text-[#656267] rounded-4xl 2xl:hidden">
              Contact us
            </button>
          </div>
        </div>
      </section>
      <section className="py-[100px]">
        <div className="container font-medium px-5">
          <span className="text-xl text-[#A5958B] uppercase block mb-8">
            Trip Blogs
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-7xl uppercase w-full lg:w-3/4 mb-20">
            Where Cultures Converge and History Lives
          </h2>
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
                      <h4 className="font-medium text-xl lg:text-2xl line-clamp-3">
                        The Art of Turning Lookers into Bookers: Mastering the
                        Customer Journey
                      </h4>
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-x-3">
                    <span className="text-lg text-[#A7A7A7]">6 May, 2025</span>
                    <Link href={`/blog/${index}`} className="w-1/2">
                      <button className="w-full h-[48px] bg-[#B4A297] rounded-4xl font-medium text-white text-base">
                        Read more
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="pt-[100px]">
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
        </div>
      </section>
    </>
  );
}
