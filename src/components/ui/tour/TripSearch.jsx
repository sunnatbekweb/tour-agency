import React, { useEffect, useState } from "react";
import { Location } from "../../../../public/icons/Location";
import { Clock } from "../../../../public/icons/Clock";
import { Flag } from "../../../../public/icons/Flag";
import { useLocale, useTranslations } from "next-intl";
import { useDispatch } from "react-redux";
import { setFilters } from "@/features/tours/toursSlice";
import axios from "axios";

export function TripSearch() {
  const [destinations, setDestinations] = useState();
  const [tripTheme, setTripTheme] = useState();
  const [filterData, setFilterData] = useState({
    destination: "",
    duration: "",
    trip_theme: "",
    year: "",
  });
  const locale = useLocale();
  const t = useTranslations();
  const dispatch = useDispatch();

  const getTripTheme = async () => {
    try {
      await axios
        .get(`${process.env.NEXT_PUBLIC_BASE_URL}/tour/trip-theme/`)
        .then((response) => setTripTheme(response.data.results));
    } catch (error) {
      console.error(error);
    }
  };

  const getDestinations = async () => {
    try {
      await axios
        .get(`${process.env.NEXT_PUBLIC_BASE_URL}/tour/destinations/`)
        .then((response) => setDestinations(response.data.results));
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setFilterData({ ...filterData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const apiFilters = {
      destination: filterData.destination,
      duration: filterData.duration,
      trip_theme: filterData.trip_theme,
      year: filterData.year,
    };
    dispatch(setFilters(apiFilters));
  };
  useEffect(() => {
    getDestinations();
    getTripTheme();
  }, []);
  return (
    <div className="w-full px-2.5 lg:px-8 py-4 lg:py-10 rounded-2xl lg:rounded-4xl bg-[#CCB9AEE5] border border-[#989898] absolute -top-[177px] sm:-top-[113px] lg:-top-[85px]">
      <form
        onSubmit={handleSubmit}
        className="p-2 rounded-2xl md:rounded-[46px] bg-transparent lg:bg-white xl:border border-[#E6E6E6] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-center font-medium"
      >
        <label
          htmlFor="destination"
          className="flex items-center gap-x-6 xl:pl-10 bg-white rounded-3xl px-6"
        >
          <div>
            <Location />
          </div>
          <select
            type="text"
            name="destination"
            id="destination"
            value={filterData.destination}
            onChange={handleChange}
            className={`w-full h-[48px] text-sm md:text-base lg:h-[70px] focus:outline-none cursor-pointer ${filterData.destination === "" ? "text-[#BDBDBD]" : "text-[#323232]"}`}
          >
            <option value="" disabled className="text-[#BDBDBD]">
              {t("trip_finder.search.destination")}
            </option>
            {destinations?.map((destination) => (
              <option
                key={destination.id}
                value={destination?.id}
                className="text-[#323232]"
              >
                {destination?.[`name_${locale}`]}
              </option>
            ))}
          </select>
        </label>
        <label
          htmlFor="duration"
          className="flex items-center gap-x-6 bg-white rounded-3xl px-6"
        >
          <div>
            <Clock />
          </div>
          <input
            type="number"
            name="duration"
            id="duration"
            placeholder={t("trip_finder.search.duration")}
            value={filterData.duration}
            onChange={handleChange}
            className="w-full h-[48px] text-sm md:text-base lg:h-[70px] focus:outline-none"
          />
        </label>
        <label
          htmlFor="year"
          className="flex items-center gap-x-6 bg-white rounded-3xl px-6"
        >
          <div>
            <Clock />
          </div>
          <input
            type="number"
            name="year"
            id="year"
            placeholder={t("trip_finder.search.year")}
            value={filterData.year}
            onChange={handleChange}
            className="w-full h-[48px] text-sm md:text-base lg:h-[70px] focus:outline-none"
          />
        </label>
        <label
          htmlFor="trip_theme"
          className="flex items-center gap-x-6 bg-white rounded-3xl px-6"
        >
          <div>
            <Flag />
          </div>
          <select
            type="text"
            name="trip_theme"
            id="trip_theme"
            value={filterData.trip_theme}
            onChange={handleChange}
            className={`w-full h-[48px] text-sm md:text-base lg:h-[70px] focus:outline-none cursor-pointer ${filterData.trip_theme === "" ? "text-[#BDBDBD]" : "text-[#323232]"}`}
          >
            <option value="" disabled>
              {t("trip_finder.search.type")}
            </option>
            {tripTheme?.map((theme) => (
              <option
                key={theme?.id}
                value={theme?.id}
                className="text-[#323232]"
              >
                {theme?.[`name_${locale}`]}
              </option>
            ))}
          </select>
        </label>
        <button className="w-full h-[48px] md:text-base lg:h-[70px] sm:col-span-2 lg:col-span-1 rounded-[40px] bg-[#A5958B] border-4 xl:border-none border-white font-medium text-2xl text-white">
          {t("trip_finder.search.search_btn")}
        </button>
      </form>
    </div>
  );
}
