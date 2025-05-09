import React from "react";
import { Location } from "../../../public/icons/Location";
import { Clock } from "../../../public/icons/Clock";
import { Calendar } from "../../../public/icons/Calendar";
import { Flag } from "../../../public/icons/Flag";

export default function TripSearch() {
  return (
    <div className="w-full px-8 py-10 rounded-4xl bg-[#CCB9AEE5] border border-[#989898] absolute -top-[85px]">
      <form className="p-2 rounded-[46px] bg-white border border-[#E6E6E6] grid grid-cols-5 items-center">
        <label
          htmlFor="destination"
          className="flex items-center gap-x-6 pl-10"
        >
          <Location />
          <input
            type="text"
            name="destination"
            id="destination"
            placeholder="Destination"
            className="h-[70px] focus:outline-none"
          />
        </label>
        <label htmlFor="duration" className="flex items-center gap-x-6">
          <Clock />
          <input
            type="text"
            name="duration"
            id="duration"
            placeholder="Duration"
            className="h-[70px] focus:outline-none "
          />
        </label>
        <label htmlFor="year" className="flex items-center gap-x-6">
          <Calendar />
          <input
            type="date"
            name="year"
            id="year"
            placeholder="Year"
            className="h-[70px] focus:outline-none "
          />
        </label>
        <label htmlFor="tripType" className="flex items-center gap-x-6">
          <Flag />
          <input
            type="text"
            name="tripType"
            id="tripType"
            placeholder="Trip Type"
            className="h-[70px] focus:outline-none "
          />
        </label>
        <button className="max-w-[270px] h-[70px] rounded-[40px] bg-[#A5958B] font-medium text-2xl text-white">
          Search
        </button>
      </form>
    </div>
  );
}
