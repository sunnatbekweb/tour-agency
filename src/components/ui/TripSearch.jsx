import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Location } from "../../../public/icons/Location";
import { Clock } from "../../../public/icons/Clock";
import { Flag } from "../../../public/icons/Flag";
import { useLocale } from "next-intl";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setFilters } from "@/features/tours/toursSlice";

export default function TripSearch() {
  const [destinations, setDestinations] = useState();
  const [tripTheme, setTripTheme] = useState();
  const [filterData, setFilterData] = useState({
    destination: "",
    duration: "",
    trip_type: "",
  });
  const locale = useLocale();
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
      trip_type: filterData.trip_type,
    };
    dispatch(setFilters(apiFilters));
  };
  useEffect(() => {
    getDestinations();
    getTripTheme();
  }, []);
  return (
    <div className="w-full px-2.5 lg:px-8 py-4 lg:py-10 rounded-2xl lg:rounded-4xl bg-[#CCB9AEE5] border border-[#989898] absolute -top-[42px] md:-top-[146px] xl:-top-[85px]">
      <form
        onSubmit={handleSubmit}
        className="hidden p-2 rounded-2xl md:rounded-[46px] bg-transparent xl:bg-white xl:border border-[#E6E6E6] md:grid grid-cols-2 xl:grid-cols-4 gap-4 items-center font-medium"
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
            placeholder="Destination"
            value={filterData.destination}
            onChange={handleChange}
            className="w-full h-[70px] focus:outline-none cursor-pointer"
          >
            <option value="" disabled>
              Destination
            </option>
            {destinations?.map((destination) => (
              <option key={destination.id} value={destination?.id}>
                {destination?.[`name_${locale}`]}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="duration" className="flex items-center gap-x-6 bg-white rounded-3xl px-6">
          <div>
            <Clock />
          </div>
          <input
            type="number"
            name="duration"
            id="duration"
            placeholder="Duration"
            value={filterData.duration}
            onChange={handleChange}
            className="w-full h-[70px] focus:outline-none"
          />
        </label>
        <label
          htmlFor="trip_type"
          className="flex items-center gap-x-6 bg-white rounded-3xl px-6"
        >
          <div>
            <Flag />
          </div>
          <select
            type="text"
            name="trip_type"
            id="trip_type"
            value={filterData.trip_type}
            onChange={handleChange}
            className="w-full h-[70px] focus:outline-none cursor-pointer"
          >
            <option value="" disabled>
              Trip Type
            </option>
            {tripTheme?.map((theme) => (
              <option key={theme?.id} value={theme?.id}>
                {theme?.[`name_${locale}`]}
              </option>
            ))}
          </select>
        </label>
        <button className="w-full h-[70px] col-span-2 xl:col-span-1 rounded-[40px] bg-[#A5958B] border-4 xl:border-none border-white font-medium text-2xl text-white">
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
          <Image src={'/icons/search_icon.svg'} width={24} height={24} alt="Search" />
        </button>
      </form>
    </div>
  );
}
