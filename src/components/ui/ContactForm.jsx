"use client";

import React, { useState } from "react";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    destination: "",
    tripTour: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Successfully sended!");

    setFormData({
      fullName: "",
      email: "",
      destination: "",
      tripTour: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="px-8 py-10 bg-white rounded-2xl">
      <h4 className="font-medium text-[28px] lg:text-[36px] mb-6 md:mb-10 lg:mb-[60px]">
        Let’s Get in Touch
      </h4>
      <label
        htmlFor="fullName"
        className="flex flex-col gap-y-2 font-medium text-sm md:text-base lg:text-lg mb-6"
      >
        <span className="text-[#878787]">Full name</span>
        <input
          type="text"
          id="fullName"
          name="fullName"
          placeholder="Enter your name"
          required
          onChange={handleChange}
          value={formData.fullName}
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
        <input
          type="text"
          id="destination"
          name="destination"
          placeholder="Select destination"
          required
          onChange={handleChange}
          value={formData.destination}
          className="bg-[#B4A2971A] border border-[#D9D9D9] placeholder:text-[#BDBDBD] px-6 py-3 rounded-lg focus:outline-[#A5958B]"
        />
      </label>
      <label
        htmlFor="tripTour"
        className="flex flex-col gap-y-2 font-medium text-sm md:text-base lg:text-lg mb-6"
      >
        <span className="text-[#878787]">Trip Tour</span>
        <input
          type="text"
          id="tripTour"
          name="tripTour"
          placeholder="Select Trip Tour"
          required
          onChange={handleChange}
          value={formData.tripTour}
          className="bg-[#B4A2971A] border border-[#D9D9D9] placeholder:text-[#BDBDBD] px-6 py-3 rounded-lg focus:outline-[#A5958B]"
        />
      </label>
      <button className="w-full sm:w-[300px] h-12 lg:h-14 grid place-content-center text-white bg-[#A5958B] mx-auto rounded-lg md:rounded-4xl font-medium text-base lg:text-xl mt-8 lg:mt-[60px]">
        Send a message
      </button>
    </form>
  );
};
