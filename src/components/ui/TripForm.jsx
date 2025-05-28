import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { useLocale } from 'next-intl';

export const TripForm = () => {
  const [destinations, setDestinations] = useState();
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    destination: '',
    trip_tour: '',
    message: '',
  });
  const locale = useLocale();
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
        .post(`${process.env.NEXT_PUBLIC_BASE_URL}/blog/tour-contact/`, formData)
        .then((response) => console.log(response.data));
    } catch (error) {
      console.error(error);
    }
    alert('Successfully sended!');
    setFormData({
      full_name: '',
      email: '',
      destination: '',
      trip_tour: '',
      message: '',
    });
  };

  useEffect(() => {
    getDestinations();
  }, []);

  return (
    <form onSubmit={handleSubmit} className="py-6 px-4 rounded-2xl bg-[#B4A297]">
      <h2 className="text-2xl md:text-4xl lg:text-5xl w-full xl:w-[55%] mb-10 md:mb-14">
        Your journey starts with a message, Get in Touch 👋
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-4 lg:gap-x-6">
        <label htmlFor="full_name" className="flex flex-col gap-y-2 md:gap-y-4">
          <span className="pl-2 md:pl-4 lg:text-xl">Full name</span>
          <input
            type="text"
            name="full_name"
            id="full_name"
            placeholder="Enter you full name"
            onChange={handleChange}
            value={formData.full_name}
            required
            className="px-4 lg:px-6 py-2 lg:py-3 rounded-lg bg-[#FFFFFF1A] focus:bg-[#FFFFFF33] focus:outline-white border border-[#CBCBCB]"
          />
        </label>
        <label htmlFor="email" className="flex flex-col gap-y-2 md:gap-y-4">
          <span className="pl-2 md:pl-4 lg:text-xl">Your email</span>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            onChange={handleChange}
            value={formData.email}
            required
            className="px-4 lg:px-6 py-2 lg:py-3 rounded-lg bg-[#FFFFFF1A] focus:bg-[#FFFFFF33] focus:outline-white border border-[#CBCBCB]"
          />
        </label>
        <label htmlFor="destination" className="flex flex-col gap-y-2 font-medium lg:text-lg">
          <span className="pl-2 md:pl-4 lg:text-xl">Your Destination</span>
          <select
            name="destination"
            id="destination"
            required
            value={formData.destination}
            onChange={handleChange}
            className="px-4 lg:px-6 py-2 lg:py-3 rounded-lg bg-[#FFFFFF1A] focus:bg-[#FFFFFF33] focus:outline-white border border-[#CBCBCB]"
          >
            <option value="">Select destination</option>
            {destinations?.map((destination) => (
              <option key={destination.id} value={destination?.[`name_${locale}`]}>
                {destination?.[`name_${locale}`]}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="trip_tour" className="flex flex-col gap-y-2 font-medium lg:text-lg mb-6">
          <span className="pl-2 md:pl-4 lg:text-xl">Trip Tour</span>
          <select
            name="trip_tour"
            id="trip_tour"
            required
            value={formData.trip_tour}
            onChange={handleChange}
            className="px-4 lg:px-6 py-2 lg:py-3 rounded-lg bg-[#FFFFFF1A] focus:bg-[#FFFFFF33] focus:outline-white border border-[#CBCBCB]"
          >
            <option value="">Select Trip Tour</option>
            <option value="For one person">For one person</option>
            <option value="Group tour">Group tour</option>
          </select>
        </label>
      </div>
      <label htmlFor="message" className="flex flex-col gap-y-2 md:gap-y-4 mt-4">
        <span className="pl-2 md:pl-4 lg:text-xl">Trip message</span>
        <textarea
          type="text"
          name="message"
          id="message"
          placeholder="Enter your message"
          onChange={handleChange}
          value={formData.message}
          required
          className="px-4 lg:px-6 py-2 lg:py-3 h-[210px] md:h-[200px] lg:h-[160px] rounded-lg bg-[#FFFFFF1A] focus:bg-[#FFFFFF33] focus:outline-white border border-[#CBCBCB]"
        ></textarea>
      </label>
      <div className="mt-6 md:mt-8 flex items-center justify-between">
        <button className="w-full md:w-[180px] lg:w-[320px] py-4 rounded-lg md:rounded-4xl bg-white font-semibold md:text-lg lg:text-xl text-[#656267]">
          Contact us
        </button>
        <div className="opacity-50 text-right hidden lg:flex flex-col">
          <p>
            Company contacts:{' '}
            <Link href={'mailto:silroadwondres@gmail.com'}>silroadwondres@gmail.com</Link>
          </p>
          <p>
            <Link href={'tel:+998(90)1234567'}>998 (90) 123 45 67</Link>
                
            <Link href={'tel:+998(90)1234567'}>998 (90) 123 45 67</Link>
          </p>
        </div>
      </div>
    </form>
  );
};
