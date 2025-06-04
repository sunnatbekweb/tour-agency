"use client";
import { useState } from "react";
import "./ThirdFilterSection.css";
export default function ThirdFilterSection() {
  const countryData = [
    {
      id: 1,
      title: "Dushanbe",
      text: `Dushanbe is the beautiful and vibrant capital city of Tajikistan. Surrounded by majestic mountains, it is known for its unique blend of modern architecture and traditional culture. The city features wide boulevards, green parks, historical monuments, friendly people, and a peaceful atmosphere.`,
      images: "/images/tajikistan.jpg",
      description: "city__images",
    },
    {
      id: 2,
      title: "Sughd",
      text: `Sughd Region is located in northern Tajikistan and is one of the country's most important economic and cultural areas. It includes historic cities like Khujand and Istaravshan, features fertile valleys, ancient monuments, active trade, kind people, and beautiful natural landscapes.`,
      images: "/images/sughd.png",
      description: "city__images",
    },
    {
      id: 3,
      title: "Khatlon",
      text: `Khatlon Region is located in the southern part of Tajikistan. It is known for its warm climate, agricultural richness, and friendly people. The region includes cities like Bokhtar and Kulob, and is famous for cotton fields, orchards, rivers, ancient history, and strong cultural heritage.`,
      images: "/images/khatlon.jpg",
      description: "city__images",
    },
    {
      id: 4,
      title: "Khujand",
      text: `Khujand is one of the oldest cities in Central Asia, located in northern Tajikistan. It lies on the Syr Darya River and is known for its vibrant bazaars, rich history, cultural landmarks, friendly residents, modern developments, universities, beautiful parks, and its role as a regional economic center.`,
      images: "/images/khujand.jpg",
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
              className={`thirdFilter__top-buttons w-full transition-all duration-500 ease-in-out flex justify-center items-center px-[22px] py-[10px] rounded-[16px] font-medium text-[16px] leading-[100%] md:text-[32px] md:px-[25px] md:py-[17px] md:rounded-[32px]
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
