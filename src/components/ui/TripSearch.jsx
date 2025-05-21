import React from "react";
import { Location } from "../../../public/icons/Location";
import { Calendar } from "../../../public/icons/Calendar";
import { Clock } from "../../../public/icons/Clock";
import { Flag } from "../../../public/icons/Flag";
import Image from "next/image";

export default function TripSearch() {
  return (
    <div className="w-full px-2.5 lg:px-8 py-4 lg:py-10 rounded-2xl lg:rounded-4xl bg-[#CCB9AEE5] border border-[#989898] absolute -top-[42px] md:-top-[146px] xl:-top-[85px]">
      <form className="hidden p-2 rounded-2xl md:rounded-[46px] bg-transparent xl:bg-white xl:border border-[#E6E6E6] md:grid grid-cols-2 xl:grid-cols-5 gap-4 items-center">
        <label
          htmlFor="destination"
          className="flex items-center gap-x-6 xl:pl-10 bg-white rounded-3xl px-6"
        >
          <div>
            <Location />
          </div>
          <input
            type="text"
            name="destination"
            id="destination"
            placeholder="Destination"
            className="h-[70px] focus:outline-none"
          />
        </label>
        <label
          htmlFor="duration"
          className="flex items-center gap-x-6 bg-white rounded-3xl px-6"
        >
          <div>
            <Clock />
          </div>
          <input
            type="text"
            name="duration"
            id="duration"
            placeholder="Duration"
            className="h-[70px] focus:outline-none "
          />
        </label>
        <label
          htmlFor="year"
          className="flex items-center gap-x-6 bg-white rounded-3xl px-6"
        >
          <div>
            <Calendar />
          </div>
          <input
            type="date"
            name="year"
            id="year"
            placeholder="Year"
            className="h-[70px] focus:outline-none "
          />
        </label>
        <label
          htmlFor="tripType"
          className="flex items-center gap-x-6 bg-white rounded-3xl px-6"
        >
          <div>
            <Flag />
          </div>
          <input
            type="text"
            name="tripType"
            id="tripType"
            placeholder="Trip Type"
            className="h-[70px] focus:outline-none "
          />
        </label>
        <button className="w-full xl:max-w-[270px] h-[70px] col-span-2 xl:col-span-1 rounded-[40px] bg-[#A5958B] border-4 xl:border-none border-white font-medium text-2xl text-white">
          Search
        </button>
      </form>
      <form className="p-1.5 bg-white rounded-4xl flex md:hidden items-center">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search your destinations..."
          className="w-full ps-3 focus:outline-none"
        />
        <button className="px-3 py-2 rounded-3xl bg-[#A5958B]">
          <Image
            src={"/icons/search_icon.svg"}
            width={24}
            height={24}
            alt="Search"
          />
        </button>
      </form>
    </div>
  );
}
