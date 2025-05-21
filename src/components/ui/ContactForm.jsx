"use client";

import axios from "axios";
import { useLocale } from "next-intl";
import React, { useEffect, useState } from "react";

export const ContactForm = () => {
  const [destinations, setDestinations] = useState();
  const locale = useLocale();
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
    alert("Successfully sended!");
    setFormData({
      full_name: "",
      email: "",
      destination: "",
      trip_tour: "",
    });
  };

  useEffect(() => {
    getDestinations();
  }, []);

  return (
    <form onSubmit={handleSubmit} className="px-8 py-10 bg-white rounded-2xl">
      <h4 className="font-medium text-[28px] lg:text-[36px] mb-6 md:mb-10 lg:mb-[60px]">
        Let’s Get in Touch
      </h4>
      <label
        htmlFor="full_name"
        className="flex flex-col gap-y-2 font-medium text-sm md:text-base lg:text-lg mb-6"
      >
        <span className="text-[#878787]">Full name</span>
        <input
          type="text"
          id="full_name"
          name="full_name"
          placeholder="Enter your name"
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
        <span className="text-[#878787]">Email</span>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          required
          onChange={handleChange}
          value={formData.email}
          className="bg-[#B4A2971A] border border-[#D9D9D9] placeholder:text-[#BDBDBD] px-6 py-3 rounded-lg focus:outline-[#A5958B]"
        />
      </label>
      <label
        htmlFor="destination"
        className="flex flex-col gap-y-2 font-medium text-sm md:text-base lg:text-lg mb-6"
      >
        <span className="text-[#878787]">Your Destination</span>
        <select
          name="destination"
          id="destination"
          required
          value={formData.destination}
          onChange={handleChange}
          className="bg-[#B4A2971A] border border-[#D9D9D9] text-[#BDBDBD] px-6 py-3 rounded-lg focus:outline-[#A5958B]"
        >
          <option value="">Select destination</option>
          {destinations?.map((destination) => (
            <option
              key={destination.id}
              value={destination?.[`name_${locale}`]}
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
        <span className="text-[#878787]">Trip Tour</span>
        <select
          name="trip_tour"
          id="trip_tour"
          required
          value={formData.trip_tour}
          onChange={handleChange}
          className="bg-[#B4A2971A] border border-[#D9D9D9] text-[#BDBDBD] px-6 py-3 rounded-lg focus:outline-[#A5958B]"
        >
          <option value="">Select Trip Tour</option>
          <option value="For one person">For one person</option>
          <option value="Group tour">Group tour</option>
        </select>
      </label>
      <button className="w-full sm:w-[300px] h-12 lg:h-14 grid place-content-center text-white bg-[#A5958B] hover:opacity-75 active:opacity-100 mx-auto rounded-lg md:rounded-4xl font-medium text-base lg:text-xl mt-8 lg:mt-[60px] duration-300">
        Send a message
      </button>
    </form>
  );
};
