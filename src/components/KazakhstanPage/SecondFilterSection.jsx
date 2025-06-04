"use client";
import { useState } from "react";
import "./SecondFilterSection.css";
export default function SecondFilterSection() {
  const countryData = [
    {
      id: 1,
      title: "Turkistan",
      text: `Turkistan is a historic city and region in southern Kazakhstan, known as a cultural and spiritual center of Central Asia. It is famous for the Mausoleum of Khoja Ahmed Yasawi, a UNESCO World Heritage site. The area has a rich history linked to the Silk Road and is important for agriculture and trade.`,
      images: "/images/turkistan__city.jpg",
      description: "city__images",
    },

    {
      id: 2,
      title: "Astana",
      text: `Astana, now officially called Nur-Sultan, is the capital city of Kazakhstan. It is located in the northern part of the country and is known for its modern architecture and rapid development. As the political and cultural center, it hosts government institutions, businesses, and cultural events, symbolizing Kazakhstan’s progress and future.`,
      images: "/images/astana__city.jpg",
      description: "city__images",
    },
    {
      id: 3,
      title: "Shymkent",
      text: `Shymkent is a major city in southern Kazakhstan and one of the country’s largest urban centers. It is an important industrial, cultural, and economic hub with a diverse population. Shymkent is known for its warm climate, vibrant markets, and historical sites, blending traditional Kazakh culture with modern development.`,
      images: "/images/shymkent__city.jpg",
      description: "city__images",
    },
    {
      id: 4,
      title: "Almaty",
      text: `Almaty is the largest city in Kazakhstan, located in the southeastern part of the country near the foothills of the Trans-Ili Alatau mountains. It is a major cultural, financial, and educational center, famous for its beautiful parks, vibrant arts scene, and diverse cuisine. Almaty was the former capital and remains an important hub for business and tourism.`,
      images: "/images/almaty__city.jpg",
      description: "city__images",
    },
  ];
  const [selectedCountry, setSelectedCountry] = useState(countryData[0]);
  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
  };
  return (
    <section className="secondFilter w-full mt-[56px] md:mt-[100px]">
      <div className="container secondFilter__container">
        <div className="secondFilter__top-box flex flex-row justify-start items-center gap-2 overflow-x-auto mb-[35px] px-6 md:px-9 md:gap-4 md:mb-[50px]">
          {countryData.map((item) => (
            <button
              key={item.id}
              onClick={() => handleCountrySelect(item)}
              className={`secondFilter__top-buttons w-full transition-all duration-500 ease-in-out flex justify-center items-center px-[22px] py-[10px] rounded-[16px] font-medium text-[16px] leading-[100%] md:text-[32px] md:px-[25px] md:py-[17px] md:rounded-[32px]
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
        <div className="secondFilter__bottom-box w-full px-6 md:px-9">
          <div className="secondFilter__bottom-card flex flex-col justify-center items-start shadow-xl rounded-[14px] bg-white px-3.5 pt-3.5 pb-[44px] border-[1px] border-[#E5E5E5] md:pt-6 md:px-6 md:rounded-[16px]">
            <img
              src={selectedCountry.images}
              alt={selectedCountry.description}
              className="secondFilter__bottom-card-image w-full rounded-[14px] h-[187px] object-cover mb-3.5 md:h-[423px] md:mb-6 lg:h-[523px] lg:mb-10"
            />
            <h4 className="secondFilter__bottom-card-title font-medium text-[27px] leading-[100%] mb-3.5 text-[#333333] md:text-[32px] md:mb-4">
              {selectedCountry.title}
            </h4>
            <p className="secondFilter__bottom-card-text w-full font-medium text-[14px] leading-[18px] text-[#878787] md:text-[24px] md:leading-[30px]">
              {selectedCountry.text}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
