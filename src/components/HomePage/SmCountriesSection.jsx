"use client";
import { useState } from "react";
import { Link } from "@/i18n/navigation";
import { useCountryData } from "@/store/data";
import "./SmCountriesSection.css";

export default function SmCountriesSection() {
  const countryData = useCountryData();
  const [selectedCountry, setSelectedCountry] = useState(countryData[0]);
  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
  };
  return (
    <div>
      <section className="countries w-full py-[80px] md:py-[100px]">
        <div className="container countries__container">
          <div className="countries__top-box flex flex-row justify-start items-center gap-2 overflow-x-auto px-6 mb-8 md:mb-[56px] md:gap-4 md:px-9">
            {countryData.map((item) => (
              <button
                className={`countries__top-buttons transition-all duration-500 ease-in-out flex justify-center items-center px-[18px] py-[12px] rounded-[16px] font-medium text-[16px] leading-[100%] md:text-[32px] md:px-[25px] md:py-[17px] md:rounded-[32px] ${
                  selectedCountry.id === item.id
                    ? "bg-[#B4A297] text-white"
                    : "bg-[#F5F5F5] text-[#323232]"
                }`}
                onClick={() => handleCountrySelect(item)}
                key={item.id}
              >
                {item.title}
              </button>
            ))}
          </div>
          <div className="countries__bottom-box w-full px-6 md:px-9">
            <div className="countries__top-info transition-all duration-500 ease-in-out w-full bg-[#E9DED8] rounded-[10px] px-[22px] pt-[14px] pb-[14px] md:px-[48px] md:pt-[32px] md:pb-[32px] md:rounded-[24px]">
              <div className="countries__mini-top-info w-full cursor-pointer mb-8 flex flex-row justify-between items-center transition-all duration-500 ease-in-out">
                <h3 className="countries__top-info-title font-medium text-[22px] md:text-[40px] md:leading-[60px] transition-all duration-500 ease-in-out">
                  {selectedCountry.title}
                </h3>
                <Link href={selectedCountry.link}>
                  <div
                    className={`countries__top-info-icon-box transition-all duration-500 ease-in-out w-[36px] h-[36px] rounded-full flex justify-center items-center md:w-[64px] md:h-[64px] bg-[#A38E82]`}
                  >
                    <img
                      className="countries__top-info-icon w-[12px] h-[12px] transition-transform duration-500 md:w-[23px] md:h-[23px]"
                      src={"/icons/open__chevron.svg"}
                      alt="toggle icon"
                    />
                  </div>
                </Link>
              </div>
              <p className="countries__top-info-text w-full text-[#878787] font-medium text-[12px] leading-[16px] overflow-hidden transition-all duration-500 ease-in-out md:text-[24px] md:leading-[32px]">
                {selectedCountry.text}
              </p>
            </div>
            <div className="countries__bottom-info mt-4">
              {selectedCountry.images.length >= 3 && (
                <div className="flex flex-row justify-center items-center gap-4">
                  <img
                    className="countries__bottom-left-image w-[50%] h-[243px] object-cover rounded-[10px] md:h-[583px] md:rounded-[24px]"
                    src={selectedCountry.images[0]}
                    alt={`${selectedCountry.title} image 1`}
                  />
                  <div className="countries__bottom-right-image-box w-[50%]  flex flex-col justify-center items-center gap-2">
                    <img
                      className="countries__bottom-right-image w-full h-[117px] object-cover rounded-[10px] md:h-[283px] md:rounded-[24px]"
                      src={selectedCountry.images[1]}
                      alt={`${selectedCountry.title} image 2`}
                    />
                    <img
                      className="countries__bottom-right-image w-full h-[117px] object-cover rounded-[10px] md:h-[283px] md:rounded-[24px]"
                      src={selectedCountry.images[2]}
                      alt={`${selectedCountry.title} image 3`}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
