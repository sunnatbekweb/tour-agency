"use client";
import { useState } from "react";
import "./FifthFilterSection.css";
import { useTranslations } from "next-intl";
export default function FifthFilterSection() {
  const t = useTranslations();
  const countryData = [
    {
      id: 1,
      title: t(
        "destinations.turkmenistan.turkmenistan__map.turkmenistan__map-title1"
      ),
      text: t(
        "destinations.turkmenistan.turkmenistan__map.turkmenistan__map-text1"
      ),
      images: "/images/ashgabat.jpg",
      description: "city__images",
    },
    {
      id: 2,
      title: t(
        "destinations.turkmenistan.turkmenistan__map.turkmenistan__map-title2"
      ),
      text: t(
        "destinations.turkmenistan.turkmenistan__map.turkmenistan__map-text2"
      ),
      images: "/images/balkan.webp",
      description: "city__images",
    },
    {
      id: 3,
      title: t(
        "destinations.turkmenistan.turkmenistan__map.turkmenistan__map-title3"
      ),
      text: t(
        "destinations.turkmenistan.turkmenistan__map.turkmenistan__map-text3"
      ),
      images: "/images/dashoguz.jpg",
      description: "city__images",
    },
    {
      id: 4,
      title: t(
        "destinations.turkmenistan.turkmenistan__map.turkmenistan__map-title4"
      ),
      text: t(
        "destinations.turkmenistan.turkmenistan__map.turkmenistan__map-text4"
      ),
      images: "/images/lebap.jpg",
      description: "city__images",
    },
    {
      id: 5,
      title: t(
        "destinations.turkmenistan.turkmenistan__map.turkmenistan__map-title5"
      ),
      text: t(
        "destinations.turkmenistan.turkmenistan__map.turkmenistan__map-text5"
      ),
      images: "/images/mary.jpg",
      description: "city__images",
    },
  ];
  const [selectedCountry, setSelectedCountry] = useState(countryData[0]);
  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
  };
  return (
    <section className="fifthFilter w-full mt-[56px] md:mt-[100px]">
      <div className="container fifthFilter__container">
        <div className="fifthFilter__top-box flex flex-row justify-start items-center gap-2 overflow-x-auto mb-[35px] px-6 md:px-9 md:gap-4 md:mb-[50px]">
          {countryData.map((item) => (
            <button
              key={item.id}
              onClick={() => handleCountrySelect(item)}
              className={`fifthFilter__top-buttons transition-all border-[2px] border-[#B4A297] duration-500 ease-in-out flex justify-center items-center px-[18px] py-[12px] rounded-[16px] font-medium text-[16px] leading-[100%] md:text-[22px] md:px-[25px] md:py-[17px] md:rounded-[32px]
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
        <div className="fifthFilter__bottom-box w-full px-6 md:px-9">
          <div className="fifthFilter__bottom-card flex flex-col justify-center items-start shadow-xl rounded-[14px] bg-white px-3.5 pt-3.5 pb-[44px] border-[1px] border-[#E5E5E5] md:pt-6 md:px-6 md:rounded-[16px]">
            <img
              src={selectedCountry.images}
              alt={selectedCountry.description}
              className="fifthFilter__bottom-card-image w-full rounded-[14px] h-[187px] object-cover mb-3.5 md:h-[423px] md:mb-6 lg:h-[523px] lg:mb-10"
            />
            <h4 className="fifthFilter__bottom-card-title font-medium text-[27px] leading-[100%] mb-3.5 text-[#333333] md:text-[32px] md:mb-4">
              {selectedCountry.title}
            </h4>
            <p className="fifthFilter__bottom-card-text w-full font-medium text-[14px] leading-[18px] text-[#878787] md:text-[24px] md:leading-[30px]">
              {selectedCountry.text}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
