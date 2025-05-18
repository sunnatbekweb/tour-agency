import React from "react";
import Link from "next/link";

export const TripForm = () => {
  return (
    <form className="py-6 px-4 rounded-2xl bg-[#B4A297]">
      <h2 className="text-2xl md:text-4xl lg:text-5xl w-full xl:w-[55%] mb-10 md:mb-14">
        Your journey starts with a message, Get in Touch 👋
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-4 lg:gap-x-6">
        <label htmlFor="fullName" className="flex flex-col gap-y-2 md:gap-y-4">
          <span className="pl-2 md:pl-4 lg:text-xl">Full name</span>
          <input
            type="text"
            name="fullName"
            id="fullName"
            placeholder="Enter you full name"
            className="px-4 lg:px-6 py-2 lg:py-3 rounded-lg bg-[#FFFFFF1A] focus:bg-[#FFFFFF33] focus:outline-white border border-[#CBCBCB]"
          />
        </label>
        <label htmlFor="email" className="flex flex-col gap-y-2 md:gap-y-4">
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
          <span className="pl-2 md:pl-4 lg:text-xl">Your Destination</span>
          <input
            type="text"
            name="destination"
            id="destination"
            placeholder="Enter your destination"
            className="px-4 lg:px-6 py-2 lg:py-3 rounded-lg bg-[#FFFFFF1A] focus:bg-[#FFFFFF33] focus:outline-white border border-[#CBCBCB]"
          />
        </label>
        <label htmlFor="tripTour" className="flex flex-col gap-y-2 md:gap-y-4">
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
        <div className="opacity-50 text-right hidden lg:flex flex-col">
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
  );
};
