'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { TripPlacesSlide } from '@/components/ui/TripPlacesSlide';
import { TripSlide } from '@/components/ui/TripSlide';
import { AboutFAQ } from '@/components/about/AboutFAQ';
import { useParams } from 'next/navigation';
import axios from 'axios';
import { useLocale } from 'next-intl';
import { TourInfoItem } from '@/components/ui/TourInfoItem';
import { TourItineraryAccordion } from '@/components/ui/TourItineraryAccordion';
import { TripForm } from '@/components/ui/TripForm';
import { DatePriceItem } from '@/components/ui/DatePriceItem';
import '@/styles/page_styles/trip.css';

export default function TripDetail() {
  const [trip, setTrip] = useState();
  const params = useParams();
  const locale = useLocale();
  const getTrip = async () => {
    try {
      await axios
        .get(`${process.env.NEXT_PUBLIC_BASE_URL}/tour/tour-cards/${params?.id}/`)
        .then((response) => setTrip(response.data));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getTrip();
  }, []);

  return (
    <div className="bg-[#FFF7F3] flex flex-col gap-y-14 mt-[136px] md:mt-[180px] xl:mt-[150px] py-[60px]">
      <section>
        <div className="container px-6 font-medium">
          <span className="hidden text-xl text-[#A5958B] uppercase lg:block mb-8">Trip Blogs</span>
          <h2 className="text-3xl md:text-5xl lg:text-7xl w-full lg:w-1/2">
            {trip?.[`title_${locale}`]}
          </h2>
          <div className="flex items-center gap-x-4 md:gap-x-12 lg:gap-x-20 mt-12 mb-10">
            <div className="flex items-center gap-x-2 md:gap-x-3">
              <Image src={'/icons/star.svg'} width={24} height={24} alt="Star" />
              <span className="font-semibold text-sm md:text-lg lg:text-xl text-[#323232]">
                5.5
              </span>
            </div>
            <div className="flex items-center gap-x-1 md:gap-x-5 text-xs sm:text-sm md:text-lg lg:text-xl">
              <strong className="font-bold">{trip?.[`duration_${locale}`]}</strong>
              <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-[#323232]"></div>
              <p>
                From{' '}
                <strong className="font-bold">{trip?.[`from_where_to_where_${locale}`]}</strong>
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-y-16 gap-x-6 justify-between">
            <TripSlide props={trip?.tour_images} />
            <div className="p-4 md:p-6 lg:p-10 w-full md:w-[40%] h-auto flex flex-col gap-y-8 justify-between bg-white rounded-2xl border border-[#F0F0F0]">
              <div>
                <span className="text-sm md:text-lg lg:text-2xl text-[#C5C5C5]">From</span>
                <div className="flex items-end gap-x-2 lg:gap-x-4 mt-5">
                  <span className="lg:text-xl xl:text-3xl">us</span>
                  <strong className="font-medium text-3xl lg:text-5xl xl:text-7xl">
                    ${trip?.price}
                  </strong>
                </div>
              </div>
              <ul className="w-full flex flex-col gap-y-3 my-20">
                {[...Array(3)].map((_, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Image
                      src={'/icons/card_checkbox.svg'}
                      width={20}
                      height={20}
                      alt="checkbox icon"
                    />
                    <span className="font-medium text-sm md:text-base lg:text-xl line-clamp-1">
                      <span className="font-medium" title={trip?.[`text${index + 1}_${locale}`]}>
                        {trip?.[`text${index + 1}_${locale}`]}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
              <button className="w-full h-10 md:h-14 lg:h-[72px] bg-[#A5958B] rounded-lg text-xl lg:text-2xl text-white">
                Make a reservation
              </button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container px-6 font-medium text-[#323232]">
          <div className="px-4 md:px-8 py-6 md:py-10 rounded-2xl bg-white">
            <h2 className="text-2xl md:text-5xl mb-6 md:mb-12 lg:mb-24">Tour information</h2>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 lg:gap-20 justify-between">
              <TourInfoItem
                icon="/icons/navigator.svg"
                title={'Destination'}
                text={trip?.[`from_where_to_where_${locale}`]}
              />
              <TourInfoItem
                icon="/icons/navigator.svg"
                title={"Trip Theme"}
                text={trip?.trip_theme?.[`name_${locale}`]}
              />
              <TourInfoItem
                icon="/icons/navigator.svg"
                title={'Transports'}
                text={trip?.[`transports_${locale}`]}
              />
              <TourInfoItem
                icon="/icons/navigator.svg"
                title={'Destination'}
                text={trip?.destination[`name_${locale}`]}
              />
              <TourInfoItem icon="/icons/navigator.svg" title={'Ages'} text={trip?.ages} />
              <TourInfoItem
                icon="/icons/navigator.svg"
                title={'Accomendation'}
                text={trip?.[`accommodation_${locale}`]}
              />
              <TourInfoItem
                icon="/icons/navigator.svg"
                title={'Duration'}
                text={trip?.[`duration_${locale}`]}
              />
              <TourInfoItem
                icon="/icons/navigator.svg"
                title={'Group Size'}
                text={trip?.[`group_size_${locale}`]}
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container p-6 rounded-2xl bg-white border border-[#EBEBEB]">
          {trip?.map_image && (
            <Image
              src={trip?.map_image}
              width={1700}
              height={500}
              alt="Map"
              className="rounded-2xl overflow-hidden"
            />
          )}
        </div>
      </section>
      <section>
        <div className="container px-6 font-medium">
          <h2 className="text-2xl md:text-5xl text-[#323232] mb-10">Places you will see</h2>
        </div>
        <TripPlacesSlide props={trip?.tour_images} />
      </section>
      <section>
        <div className="container px-8 py-10 bg-white border border-[#EBEBEB] rounded-2xl">
          <div className="flex items-center justify-between">
            <h2 className="font-medium text-2xl md:text-5xl text-[#323232] mb-9">Tour itinerary</h2>
            <button className="hidden md:flex lg:hidden px-10 py-2.5 rounded-2xl bg-[#A5958B] font-medium text-xl text-white">
              Show all
            </button>
          </div>
          <div className="w-full lg:w-3/4 mx-auto">
            <div className="hidden lg:flex ml-auto w-fit mb-16">
              <button className="px-10 py-2.5 rounded-2xl bg-[#A5958B] font-medium text-xl text-white">
                Show all
              </button>
            </div>
            <div className="pl-10 md:pl-20">
              <div className="introduction_header">
                <h3 className="font-bold text-xl lg:text-3xl text-[#A5958B]">Introduction</h3>
                <div
                  className={`question__right-icon-box w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 rounded-full flex flex-row justify-center items-center bg-[#F0ECEA]`}
                >
                  <Image
                    src={'/icons/close__chevron.svg'}
                    width={22}
                    height={22}
                    alt="toggle icon"
                    className="question__right-icon w-3 h-3 md:w-4 md:h-4 lg:w-6 lg:h-6 object-contain -rotate-90"
                  />
                </div>
              </div>
              <ul className="introduction_list">
                {trip?.itineraries?.map((item, index) => (
                  <TourItineraryAccordion props={item} key={index} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container px-8 py-10 bg-white border border-[#EBEBEB] rounded-2xl">
          <h2 className="font-medium text-2xl md:text-5xl text-[#323232] mb-9">Dates & Prices</h2>
          <div className="w-full lg:w-3/4 mx-auto">
            <div className="hidden lg:block ml-auto w-fit mb-16">
              <button className="px-10 py-2.5 rounded-2xl bg-[#A5958B] font-medium text-xl text-white">
                Show all
              </button>
            </div>

            <ul className="data-price_list">
              {trip?.dates_and_prices?.map((item, index) => (
                <DatePriceItem props={item} key={index} />
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section>
        <div className="container px-6 font-medium text-white">
          <TripForm />
        </div>
      </section>
      <section className="question mt-[64px] md:mt-[94px] xl:mt-[100px]">
        <div className="container question__container w-full flex flex-col justify-center items-start gap-[40px] px-6 md:gap-[94px] md:px-9">
          <div className="question__top-box w-full md:w-3/4 xl:w-3/5 flex flex-col justify-center items-start gap-2 md:gap-4">
            <h2 className="question__title font-medium text-3xl md:text-5xl lg:text-7xl text-[#323232] uppercase">
              frequently asked question
            </h2>
          </div>
          <AboutFAQ />
        </div>
      </section>
    </div>
  );
}
