"use client";
import { useState } from "react";
import "./ThirdFilterSection.css";
import { useTranslations } from "next-intl";
export default function ThirdFilterSection() {
  const t = useTranslations();
  const countryData = [
    {
      id: 1,
      title: t(
        "destinations.tajikistan.tajikistan__filter.tajikistan__filter-title1"
      ),
      text: t(
        "destinations.tajikistan.tajikistan__filter.tajikistan__filter-text1"
      ),
      images: "/images/tajikistan.jpg",
      description: "city__images",
    },
    {
      id: 2,
      title: t(
        "destinations.tajikistan.tajikistan__filter.tajikistan__filter-title2"
      ),
      text: t(
        "destinations.tajikistan.tajikistan__filter.tajikistan__filter-text2"
      ),
      images: "/images/sughd.png",
      description: "city__images",
    },
  ];
  const [selectedCountry, setSelectedCountry] = useState(countryData[0]);
  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
  };
  return (
    <section className="thirdFilter w-full mt-[56px] md:mt-[100px]">
      <div className="container thirdFilter__container">
        <div className="thirdFilter__top-box flex flex-row justify-start items-center gap-2 overflow-x-auto mb-[35px] px-6 md:px-9 md:gap-4 md:mb-[50px]">
          {countryData.map((item) => (
            <button
              key={item.id}
              onClick={() => handleCountrySelect(item)}
              className={`thirdFilter__top-buttons transition-all border-[2px] border-[#B4A297] duration-500 ease-in-out flex justify-center items-center px-[18px] py-[12px] rounded-[16px] font-medium text-[16px] leading-[100%] md:text-[22px] md:px-[25px] md:py-[17px] md:rounded-[32px]
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
        <div className="thirdFilter__bottom-box w-full px-6 md:px-9">
          <div className="thirdFilter__bottom-card flex flex-col justify-center items-start shadow-xl rounded-[14px] bg-white px-3.5 pt-3.5 pb-[44px] border-[1px] border-[#E5E5E5] md:pt-6 md:px-6 md:rounded-[16px]">
            <img
              src={selectedCountry.images}
              alt={selectedCountry.description}
              className="thirdFilter__bottom-card-image w-full rounded-[14px] h-[187px] object-cover mb-3.5 md:h-[423px] md:mb-6 lg:h-[523px] lg:mb-10"
            />
            <h4 className="thirdFilter__bottom-card-title font-medium text-[27px] leading-[100%] mb-3.5 text-[#333333] md:text-[32px] md:mb-4">
              {selectedCountry.title}
            </h4>
            <p className="thirdFilter__bottom-card-text w-full font-medium text-[14px] leading-[18px] text-[#878787] md:text-[24px] md:leading-[30px]">
              {selectedCountry.text}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
