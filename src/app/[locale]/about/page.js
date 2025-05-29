"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { AboutFAQ } from "@/components/about/AboutFAQ";
import axios from "axios";
import { useLocale } from "next-intl";
import "@/styles/page_styles/about.css";

export default function About() {
  const [tripLeaders, setTripLeaders] = useState();
  const [statistics, setStatistics] = useState();
  const locale = useLocale();
  const getTripLeaders = async () => {
    try {
      await axios
        .get(`${process.env.NEXT_PUBLIC_BASE_URL}/blog/team-info/`)
        .then((response) => setTripLeaders(response.data));
    } catch (error) {
      console.error(error);
    }
  };
  const getStatistics = async () => {
    try {
      await axios
        .get(`${process.env.NEXT_PUBLIC_BASE_URL}/blog/statistics/`)
        .then((response) => setStatistics(response.data.results[0]));
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getTripLeaders();
    getStatistics();
  }, []);
  return (
    <>
      <section className="about relative">
        <div className="container h-full flex flex-col items-center 2xl:items-start justify-center">
          <h1 className="2xl:ml-[10%] w-full flex flex-col items-center 2xl:items-start justify-center font-medium text-3xl sm:text-5xl md:text-7xl xl:text-9xl text-white">
            <span>Not Just Tours</span>
            <span className=" ml-[20%] 2xl:ml-[30%]">We Tell Stories</span>
          </h1>
          <div className="absolute bottom-20">
            <button className="w-[162px] h-[48px] lg:w-[216px] lg:h-[72px] bg-white font-medium text-xl lg:text-2xl text-[#656267] rounded-4xl 2xl:hidden">
              Contact us
            </button>
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container px-6">
          <span className="font-medium text-xl text-[#A5958B] uppercase block mb-8">
            Trip Blogs
          </span>
          <div className="flex flex-col gap-y-8 lg:flex-row gap-x-5 items-center font-medium text-[#323232] uppercase">
            <h2 className="text-3xl md:text-5xl lg:text-7xl w-full lg:w-1/2">
              Where Cultures Converge and History Lives
            </h2>
            <p className="text-xs md:text-lg lg:text-2xl w-full lg:w-1/2">
              Silk Road Wonders is more than just a travel company — it’s your gateway to the
              legendary Silk Road. We craft immersive journeys that connect the past with the
              present, guiding you through ancient caravan routes, vibrant cultures, and the
              enduring spirit of trade that once linked civilizations.Each journey with us is a step
              into history, reimagined for the modern explorer.
            </p>
          </div>
        </div>
      </section>
      <Image src={'/images/about_page_img.png'} width={1920} height={800} alt="Page image" />
      <section className="py-20">
        <div className="container px-6">
          <span className="font-medium text-xl text-[#A5958B] uppercase block mb-8">
            Trip Blogs
          </span>
          <div className="flex flex-col gap-y-12 lg:flex-row gap-x-5 font-medium text-[#323232]">
            <h3 className="text-3xl md:text-5xl lg:text-7xl w-full lg:w-1/2 uppercase">
              Explore Our Exclusive Tour
            </h3>
            <div className="w-full lg:w-1/2">
              <p className="text-xs md:text-lg lg:text-2xl uppercase">
                Our crew is always getting bigger, but we all work toward one goal: to make sales
                success not only possible but inevitable for teams everywhere.
              </p>
              <p className="text-xs md:text-lg lg:text-2xl mt-8 lg:mt-[100px] mb-8 lg:mb-[72px]">
                In 2022, at vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias
                excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
                officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est
                eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere
                possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem
                quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et
                voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic
                tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias
                consequatur aut perferendis doloribus asperiores repellat.
              </p>
              <h4 className="text-xl md:text-3xl lg:text-5xl uppercase">
                “Our goal is to build software that gives customer-facing teams at SMBs the ability
                to create fruitful and enduring relationships with customers.”
              </h4>
            </div>
          </div>
        </div>
      </section>
      <div className="container px-6">
        <hr />
      </div>
      <section className="pt-14 pb-20">
        <div className="container px-6 grid grid-cols-1 lg:grid-cols-3 gap-y-12 gap-x-[120px]">
          <div className="font-medium flex flex-col items-center lg:block">
            <h5
              title={statistics?.[`first_text_${locale}`]}
              className="text-sm md:text-lg xl:text-2xl text-center lg:text-left line-clamp-3 mb-2"
            >
              {statistics?.[`first_text_${locale}`]}
            </h5>
            <span className="text-5xl md:text-7xl xl:text-9xl">
              {statistics?.first_number}
            </span>
          </div>
          <div className="font-medium flex flex-col items-center lg:block">
            <h5
              title={statistics?.[`second_text_${locale}`]}
              className="text-sm md:text-lg xl:text-2xl text-center lg:text-left line-clamp-3 mb-2"
            >
              {statistics?.[`second_text_${locale}`]}
            </h5>
            <span className="text-5xl md:text-7xl xl:text-9xl">
              {statistics?.second_number}
            </span>
          </div>
          <div className="font-medium flex flex-col items-center lg:block">
            <h5
              title={statistics?.[`third_text_${locale}`]}
              className="text-sm md:text-lg xl:text-2xl text-center lg:text-left line-clamp-3 mb-2"
            >
              {statistics?.[`third_text_${locale}`]}
            </h5>
            <span className="text-5xl md:text-7xl xl:text-9xl">
              {statistics?.third_number}
            </span>
          </div>
        </div>
      </section>
      <section className="bg-[#F0E6E0] pt-20 pb-[120px]">
        <div className="container px-6">
          <span className="font-medium text-xl text-[#A5958B] uppercase block mb-8">
            Trip Blogs
          </span>
          <h3 className="font-medium text-3xl md:text-5xl lg:text-7xl w-full lg:w-1/2 uppercase mb-[72px]">
            Meet our amazing tour leaders
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10">
            {tripLeaders?.results?.map((leader) => (
              <div key={leader?.id}>
                <Image
                  src={leader?.image}
                  width={440}
                  height={480}
                  alt="Tour leader"
                />
                <div className="pt-6 px-2 font-medium">
                  <h5
                    className="text-xl md:text-2xl lg:text-3xl mb-1 line-clamp-1"
                    title={leader?.[`username_${locale}`]}
                  >
                    {leader?.[`username_${locale}`]}
                  </h5>
                  <p
                    className="text-xs md:text-lg lg:text-xl line-clamp-1"
                    title={leader?.[`occupation_${locale}`]}
                  >
                    {leader?.[`occupation_${locale}`]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-[80px]">
        <div className="container px-6">
          <div className="flex flex-col gap-y-8 lg:flex-row items-center mb-[60px]">
            <h3 className="font-medium text-3xl md:text-5xl lg:text-7xl w-full lg:w-1/2 uppercase">
              our Expertise
            </h3>
            <p className="font-medium md:text-2xl w-full lg:w-[30%] ml-auto">
              At Silk Road Adventures, we pride ourselves on delivering exceptional travel
              experiences. Here’s what sets us apart:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="flex flex-col items-center md:block px-6 md:px-12 py-8 bg-white border border-[#EBEBEB] rounded-2xl font-medium text-[#323232]"
              >
                <div className="w-fit bg-[#B4A297] rounded-full p-4 mb-8">
                  <Image src={'/icons/expertise_icon.svg'} width={40} height={400} alt="Icon" />
                </div>
                <h4 className="text-lg md:text-2xl mb-4">Cultural Knowledge</h4>
                <p className="text-sm lg:text-lg text-center md:text-left">
                  Deep understanding of Central Asia and Silk Road traditions, history, and local
                  customs.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="question my-[64px] md:my-[94px] xl:my-[100px]">
        <div className="container question__container w-full flex flex-col justify-center items-start gap-[40px] px-6 md:gap-[94px] md:px-9">
          <div className="question__top-box w-full lg:w-1/2 flex flex-col justify-center items-start gap-2 md:gap-4">
            <p className="question__text text-[#A5958B] font-medium text-xl uppercase">
              Trip founder
            </p>
            <h2 className="question__title font-medium text-3xl md:text-5xl lg:text-7xl text-[#323232] uppercase">
              frequently asked question
            </h2>
          </div>
          <AboutFAQ />
        </div>
      </section>
    </>
  );
}
