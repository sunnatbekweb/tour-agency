"use client";
import { useState } from "react";
import "./FourthFilterSection.css";
export default function FourthFilterSection() {
  const countryData = [
    {
      id: 1,
      title: "Bishkek",
      text: `Bishkek is the capital and largest city of Kyrgyzstan. It is located near the Kyrgyz Ala-Too mountains and features wide streets, Soviet-era architecture, modern buildings, vibrant markets, green parks, cultural centers, friendly people, and serves as the political, economic, and educational heart of the country.`,
      images: "/images/bishkek.jpg",
      description: "city__images",
    },

    {
      id: 2,
      title: "Issyk-Kul",
      text: `Issyk-Kul Region is located in the northeastern part of Kyrgyzstan. It surrounds the famous Issyk-Kul Lake, one of the largest alpine lakes in the world. The region is known for its stunning natural beauty, tourism, mountains, resorts, warm climate, and friendly people.`,
      images: "/images/Issyk-Kul.jpg",
      description: "city__images",
    },
    {
      id: 3,
      title: "Osh",
      text: `Osh Region is located in the southern part of Kyrgyzstan. It is known for its rich history, diverse culture, and vibrant bazaars. The region includes the city of Osh, beautiful mountains, fertile valleys, and friendly people. Agriculture and trade play important roles in its economy.`,
      images: "/images/osh.jpg",
      description: "city__images",
    },
  ];
  const [selectedCountry, setSelectedCountry] = useState(countryData[0]);
  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
  };
  return (
    <section className="fourthFilter w-full mt-[56px] md:mt-[100px]">
      <div className="container fourthFilter__container">
        <div className="fourthFilter__top-box flex flex-row justify-start items-center gap-2 overflow-x-auto mb-[35px] px-6 md:px-9 md:gap-4 md:mb-[50px]">
          {countryData.map((item) => (
            <button
              key={item.id}
              onClick={() => handleCountrySelect(item)}
              className={`fourthFilter__top-buttons transition-all duration-500 ease-in-out flex justify-center items-center px-[22px] py-[10px] rounded-[16px] font-medium text-[16px] leading-[100%] md:text-[32px] md:px-[25px] md:py-[17px] md:rounded-[32px]
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
        <div className="fourthFilter__bottom-box w-full px-6 md:px-9">
          <div className="fourthFilter__bottom-card flex flex-col justify-center items-start shadow-xl rounded-[14px] bg-white px-3.5 pt-3.5 pb-[44px] border-[1px] border-[#E5E5E5] md:pt-6 md:px-6 md:rounded-[16px]">
            <img
              src={selectedCountry.images}
              alt={selectedCountry.description}
              className="fourthFilter__bottom-card-image w-full rounded-[14px] h-[187px] object-cover mb-3.5 md:h-[423px] md:mb-6 lg:h-[523px] lg:mb-10"
            />
            <h4 className="fourthFilter__bottom-card-title font-medium text-[27px] leading-[100%] mb-3.5 text-[#333333] md:text-[32px] md:mb-4">
              {selectedCountry.title}
            </h4>
            <p className="fourthFilter__bottom-card-text w-full font-medium text-[14px] leading-[18px] text-[#878787] md:text-[24px] md:leading-[30px]">
              {selectedCountry.text}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
