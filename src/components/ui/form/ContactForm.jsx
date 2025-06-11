"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocale, useTranslations } from "next-intl";
import "./ContactForm.css";
import { toast } from "react-toastify";
export const ContactForm = () => {
  const [destinations, setDestinations] = useState();
  const [tripThemes, setTripThemes] = useState();
  const locale = useLocale();
  const t = useTranslations("contact.form");
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    destination: "",
    trip_tour: "",
  });
  const getDestinations = async () => {
    try {
      await axios
        .get(`${process.env.NEXT_PUBLIC_BASE_URL}/tour/destinations/`)
        .then((response) => setDestinations(response.data.results));
    } catch (error) {
      console.error(error);
    }
  };
  const getTripThemes = async () => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/tour/trip-theme/`
      );
      setTripThemes(res.data.results);
    } catch (error) {
      console.error(error);
    }
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(`${process.env.NEXT_PUBLIC_BASE_URL}/blog/contact/`, formData)
        .then((response) => console.log(response.data));
    } catch (error) {
      console.error(error);
    }
    toast.success("Successfully sended!");
    setFormData({
      full_name: "",
      email: "",
      destination: "",
      trip_tour: "",
    });
  };
  useEffect(() => {
    getDestinations();
    getTripThemes();
  }, []);
  return (
    <>
      <form onSubmit={handleSubmit} className="px-8 py-10 bg-white rounded-2xl">
        <h4 className="font-medium text-[28px] lg:text-[36px] mb-6 md:mb-10 lg:mb-[60px]">
          {t("title")}
        </h4>
        <label
          htmlFor="full_name"
          className="flex flex-col gap-y-2 font-medium text-sm md:text-base lg:text-lg mb-6"
        >
          <span className="text-[#878787]">{t("full_name")}</span>
          <input
            type="text"
            id="full_name"
            name="full_name"
            placeholder={t("full_name-placeholder")}
            required
            onChange={handleChange}
            value={formData.full_name}
            className="bg-[#B4A2971A] border border-[#D9D9D9] placeholder:text-[#BDBDBD] px-6 py-3 rounded-lg focus:outline-[#A5958B]"
          />
        </label>
        <label
          htmlFor="email"
          className="flex flex-col gap-y-2 font-medium text-sm md:text-base lg:text-lg mb-6"
        >
          <span className="text-[#878787]">{t("email")}</span>
          <input
            type="email"
            id="email"
            name="email"
            required
            onChange={handleChange}
            placeholder={t("email-placeholder")}
            value={formData.email}
            className="w-full bg-[#B4A2971A] border border-[#D9D9D9] placeholder:text-[#BDBDBD] px-6 py-3 rounded-lg focus:outline-[#A5958B]"
          />
        </label>
        <label
          htmlFor="destination"
          className="flex flex-col gap-y-2 font-medium text-sm md:text-base lg:text-lg mb-6"
        >
          <span className="text-[#878787]">{t("destination")}</span>
          <select
            name="destination"
            id="destination"
            required
            value={formData.destination}
            onChange={handleChange}
            className={`bg-[#B4A2971A] border border-[#D9D9D9] ${formData.destination === "" ? "text-[#BDBDBD]" : "text-[#323232]"} px-6 py-3 rounded-lg focus:outline-[#A5958B] cursor-pointer`}
          >
            <option value="" disabled>
              {t("destination-placeholder")}
            </option>
            {destinations?.map((destination) => (
              <option
                key={destination.id}
                value={destination?.[`name_${locale}`]}
                className="text-[#323232]"
              >
                {destination?.[`name_${locale}`]}
              </option>
            ))}
          </select>
        </label>
        <label
          htmlFor="trip_tour"
          className="flex flex-col gap-y-2 font-medium text-sm md:text-base lg:text-lg mb-6"
        >
          <span className="text-[#878787]">{t("trip_tour")}</span>
          <select
            name="trip_tour"
            id="trip_tour"
            required
            value={formData.trip_tour}
            onChange={handleChange}
            className={`bg-[#B4A2971A] border border-[#D9D9D9] ${formData.trip_tour === "" ? "text-[#BDBDBD]" : "text-[#323232]"} px-6 py-3 rounded-lg focus:outline-[#A5958B] cursor-pointer`}
          >
            <option value="" disabled>
              {t("trip_tour-placeholder")}
            </option>
            {tripThemes?.map((theme) => (
              <option
                key={theme.id}
                value={theme?.[`name_${locale}`]}
                className="text-[#323232]"
              >
                {theme?.[`name_${locale}`]}
              </option>
            ))}
          </select>
        </label>
        <button className="w-full sm:w-[300px] h-12 lg:h-14 grid place-content-center text-white bg-[#A5958B] hover:opacity-75 active:opacity-100 mx-auto rounded-lg md:rounded-4xl font-medium text-base lg:text-xl mt-8 lg:mt-[60px] duration-300">
          {t("send")}
        </button>
      </form>
    </>
  );
};
