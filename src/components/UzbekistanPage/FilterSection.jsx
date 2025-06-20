"use client";
import { useState } from "react";
import "./FilterSection.css";
import { useTranslations } from "use-intl";
export default function FilterSection() {
  const t = useTranslations();
  const countryData = [
    {
      id: 1,
      title: t(
        "destinations.uzbekistan.uzbekistan__filter.uzbekistan__filter-title1"
      ),
      text: t(
        "destinations.uzbekistan.uzbekistan__filter.uzbekistan__filter-text1"
      ),
      images: "/images/samarkand__city.jpg",
      description: "city__images",
    },
    {
      id: 2,
      title: t(
        "destinations.uzbekistan.uzbekistan__filter.uzbekistan__filter-title2"
      ),
      text: t(
        "destinations.uzbekistan.uzbekistan__filter.uzbekistan__filter-text2"
      ),
      images: "/images/tashkent__city.jpg",
      description: "city__images",
    },
    {
      id: 3,
      title: t(
        "destinations.uzbekistan.uzbekistan__filter.uzbekistan__filter-title3"
      ),
      text: t(
        "destinations.uzbekistan.uzbekistan__filter.uzbekistan__filter-text3"
      ),
      images: "/images/fergana__city.jpg",
      description: "city__images",
    },
    {
      id: 4,
      title: t(
        "destinations.uzbekistan.uzbekistan__filter.uzbekistan__filter-title4"
      ),
      text: t(
        "destinations.uzbekistan.uzbekistan__filter.uzbekistan__filter-text4"
      ),
      images: "/images/andijan__city.jpg",
      description: "city__images",
    },
    {
      id: 5,
      title: t(
        "destinations.uzbekistan.uzbekistan__filter.uzbekistan__filter-title5"
      ),
      text: t(
        "destinations.uzbekistan.uzbekistan__filter.uzbekistan__filter-text5"
      ),
      images: "/images/kashkadarya__city.jpg",
      description: "city__images",
    },
    {
      id: 6,
      title: t(
        "destinations.uzbekistan.uzbekistan__filter.uzbekistan__filter-title6"
      ),
      text: t(
        "destinations.uzbekistan.uzbekistan__filter.uzbekistan__filter-text6"
      ),
      images: "/images/surkhandarya__city.jpg",
      description: "city__images",
    },
    {
      id: 7,
      title: t(
        "destinations.uzbekistan.uzbekistan__filter.uzbekistan__filter-title7"
      ),
      text: t(
        "destinations.uzbekistan.uzbekistan__filter.uzbekistan__filter-text7"
      ),
      images: "/images/bukhara__city.jpg",
      description: "city__images",
    },
    {
      id: 8,
      title: t(
        "destinations.uzbekistan.uzbekistan__filter.uzbekistan__filter-title8"
      ),
      text: t(
        "destinations.uzbekistan.uzbekistan__filter.uzbekistan__filter-text8"
      ),
      images: "/images/navoi__city.jpg",
      description: "city__images",
    },
    {
      id: 9,
      title: t(
        "destinations.uzbekistan.uzbekistan__filter.uzbekistan__filter-title9"
      ),
      text: t(
        "destinations.uzbekistan.uzbekistan__filter.uzbekistan__filter-text9"
      ),
      images: "/images/khorezm__city.jpg",
      description: "city__images",
    },
    {
      id: 10,
      title: t(
        "destinations.uzbekistan.uzbekistan__filter.uzbekistan__filter-title10"
      ),
      text: t(
        "destinations.uzbekistan.uzbekistan__filter.uzbekistan__filter-text10"
      ),
      images: "/images/nukus__city.jpg",
      description: "city__images",
    },
  ];
  const [selectedCountry, setSelectedCountry] = useState(countryData[0]);
  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
  };
  return (
    <section className="filter w-full mt-[56px] md:mt-[100px]">
      <div className="container filter__container">
        <div className="filter__top-box flex flex-row justify-start items-center gap-2 overflow-x-auto mb-[35px] px-6 md:px-9 md:gap-4 md:mb-[50px]">
          {countryData.map((item) => (
            <button
              key={item.id}
              onClick={() => handleCountrySelect(item)}
              className={`filter__top-buttons transition-all border-[2px] border-[#B4A297] duration-500 ease-in-out flex justify-center items-center px-[18px] py-[12px] rounded-[16px] font-medium text-[16px] leading-[100%] md:text-[22px] md:px-[25px] md:py-[17px] md:rounded-[32px]
              ${
                selectedCountry.id === item.id
                  ? "bg-[#B4A297] text-white"
                  : "bg-[#F5F5F5] text-[#323232]"
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>
        <div className="filter__bottom-box w-full px-6 md:px-9">
          <div className="filter__bottom-card flex flex-col justify-center items-start shadow-xl rounded-[14px] bg-white px-3.5 pt-3.5 pb-[44px] border-[1px] border-[#E5E5E5] md:pt-6 md:px-6 md:rounded-[16px]">
            <img
              src={selectedCountry.images}
              alt={selectedCountry.description}
              className="filter__bottom-card-image w-full rounded-[14px] h-[187px] object-cover mb-3.5 md:h-[423px] md:mb-6 lg:h-[523px] lg:mb-10"
            />
            <h4 className="filter__bottom-card-title font-medium text-[27px] leading-[100%] mb-3.5 text-[#333333] md:text-[32px] md:mb-4">
              {selectedCountry.title}
            </h4>
            <p className="filter__bottom-card-text w-full font-medium text-[14px] leading-[18px] text-[#878787] md:text-[24px] md:leading-[30px]">
              {selectedCountry.text}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
