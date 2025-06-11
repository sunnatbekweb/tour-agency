"use client";
import { useState } from "react";
import { Link } from "@/i18n/navigation";
import "./SmCountriesSection.css";
import { useTranslations } from "use-intl";
export default function SmCountriesSection() {
  const t = useTranslations();
  const countryData = [
    {
      id: 1,
      button: t("home_countries.home_countries-button-text1"),
      link: "/destination/kazakhstan",
      countryTitle: t("home_countries.home_countries-title1"),
      countryText: t("home_countries.home_countries-text1"),
      images: [
        "/images/kazakhstan__first.jpg",
        "/images/kazakhstan__second.jpg",
        "/images/kazakhstan__third.jpg",
      ],
    },
    {
      id: 2,
      button: t("home_countries.home_countries-button-text2"),
      link: "/destination/uzbekistan",
      countryTitle: t("home_countries.home_countries-title2"),
      countryText: t("home_countries.home_countries-text2"),
      images: [
        "/images/uzbekistan__first.jpg",
        "/images/uzbekistan__second.jpg",
        "/images/uzbekistan__third.jpg",
      ],
    },
    {
      id: 3,
      button: t("home_countries.home_countries-button-text3"),
      link: "/destination/kyrgyzstan",
      countryTitle: t("home_countries.home_countries-title3"),
      countryText: t("home_countries.home_countries-text3"),
      images: [
        "/images/kyrgyzstan__first.jpg",
        "/images/kyrgyzstan__second.jpg",
        "/images/kyrgyzstan__third.jpg",
      ],
    },
    {
      id: 4,
      button: t("home_countries.home_countries-button-text4"),
      link: "/destination/tajikistan",
      countryTitle: t("home_countries.home_countries-title4"),
      countryText: t("home_countries.home_countries-text4"),
      images: [
        "/images/tajikistan__first.jpg",
        "/images/tajikistan__second.jpg",
        "/images/tajikistan__third.jpg",
      ],
    },
    {
      id: 5,
      button: t("home_countries.home_countries-button-text5"),
      link: "/destination/turkmenistan",
      countryTitle: t("home_countries.home_countries-title5"),
      countryText: t("home_countries.home_countries-text5"),
      images: [
        "/images/turkmenistan__first.jpg",
        "/images/turkmenistan__second.jpg",
        "/images/turkmenistan__third.jpg",
      ],
    },
  ];
  const [selectedCountry, setSelectedCountry] = useState(countryData[0]);
  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
  };
  return (
    <div>
      <section className="countries w-full py-[80px] md:py-[100px] 2xl:hidden">
        <div className="container countries__container px-6 md:px-9">
          <div className="countries__top-box mb-[48px] flex flex-col justify-center items-start gap-4 md:mb-[80px] xl:mb-[100px]">
            <p className="countries__top-text text-[16px] leading-[100%] text-[#A5958B] uppercase md:text-[24px]">
              see your own adventure
            </p>
            <h2 className="countries__top-title w-full font-medium text-[32px] leading-[40px] text-[#323232] uppercase md:text-[56px] md:leading-[60px] lg:w-[642px]">
              Unveil Central Asia’s Hidden Wonders
            </h2>
          </div>
          <div className="countries__top-box w-full flex flex-row justify-start items-start gap-2 overflow-x-auto px-6 mb-8 md:mb-[56px] md:gap-4 md:px-9">
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
                {item.button}
              </button>
            ))}
          </div>
          <div className="countries__bottom-box w-full">
            <div className="countries__top-info transition-all duration-500 ease-in-out w-full bg-[#E9DED8] rounded-[10px] px-[22px] pt-[14px] pb-[14px] md:px-[48px] md:pt-[32px] md:pb-[32px] md:rounded-[24px]">
              <div className="countries__mini-top-info w-full cursor-pointer mb-8 flex flex-row justify-between items-center transition-all duration-500 ease-in-out">
                <h3 className="countries__top-info-title font-medium text-[22px] md:text-[40px] md:leading-[60px] transition-all duration-500 ease-in-out">
                  {selectedCountry.countryTitle}
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
                {selectedCountry.countryText}
              </p>
            </div>
            <div className="countries__bottom-info mt-4">
              {selectedCountry.images.length >= 3 && (
                <div className="flex flex-row justify-center items-center gap-4">
                  <img
                    className="countries__bottom-left-image w-[50%] h-[243px] object-cover rounded-[10px] md:h-[583px] md:rounded-[24px]"
                    src={selectedCountry.images[0]}
                    alt={`${selectedCountry.countryTitle} image 1`}
                  />
                  <div className="countries__bottom-right-image-box w-[50%]  flex flex-col justify-center items-center gap-2">
                    <img
                      className="countries__bottom-right-image w-full h-[117px] object-cover rounded-[10px] md:h-[283px] md:rounded-[24px]"
                      src={selectedCountry.images[1]}
                      alt={`${selectedCountry.countryTitle} image 2`}
                    />
                    <img
                      className="countries__bottom-right-image w-full h-[117px] object-cover rounded-[10px] md:h-[283px] md:rounded-[24px]"
                      src={selectedCountry.images[2]}
                      alt={`${selectedCountry.countryTitle} image 3`}
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
