"use client";
import { useEffect, useRef, useState } from "react";
import "./SmCountriesSection.css";
export default function SmCountriesSection() {
  const countryData = [
    {
      title: "Kazakhstan",
      text: `Welcome to Kazakhstan — a land where golden steppes stretch beyond the horizon, where futuristic cities rise beside ancient traditions. 
      As the world’s largest landlocked country, Kazakhstan offers boundless space to breathe, roam, and rediscover freedom. 
      From the shimmering heights of Baiterek Tower to the otherworldly beauty of Charyn Canyon, every step here tells a story.`,
      id: 1,
      iconOpen: "icons/open__chevron.svg",
      iconClose: "icons/close__chevron.svg",
      images: [
        "/images/kazakhstan__first.jpg",
        "/images/kazakhstan__second.jpg",
        "/images/kazakhstan__third.jpg",
      ],
    },
    {
      title: "Uzbekistan",
      text: `Welcome to Uzbekistan — where the Silk Road lives on through vibrant bazaars, majestic madrasas, and timeless architecture. 
      This ancient land is a crossroads of cultures, where history whispers from every turquoise dome and intricately carved gate. 
      From the glowing sands of the Kyzylkum Desert to the poetic beauty of Samarkand and Bukhara, Uzbekistan invites you to walk in the footsteps of empires and dreamers alike.`,
      id: 2,
      iconOpen: "icons/open__chevron.svg",
      iconClose: "icons/close__chevron.svg",
      images: [
        "/images/uzbekistan__first.jpg",
        "/images/uzbekistan__second.jpg",
        "/images/uzbekistan__third.jpg",
      ],
    },
    {
      title: "Tajikistan",
      text: `Welcome to Tajikistan — a land of soaring mountains, ancient fortresses, and untouched natural beauty. 
      Nestled in the heart of Central Asia, this hidden gem offers breathtaking alpine landscapes and warm-hearted hospitality. 
      From the towering peaks of the Pamir Mountains to the crystal-clear waters of Iskanderkul Lake, every path in Tajikistan leads to adventure, reflection, and awe.`,
      id: 3,
      iconOpen: "icons/open__chevron.svg",
      iconClose: "icons/close__chevron.svg",
      images: [
        "/images/tajikistan__first.jpg",
        "/images/tajikistan__second.jpg",
        "/images/tajikistan__third.jpg",
      ],
    },
    {
      title: "Kyrgyzstan",
      text: `Welcome to Kyrgyzstan — where snow-capped peaks cradle nomadic traditions and turquoise lakes reflect the sky’s vastness. 
      This rugged and soulful land is a paradise for explorers, where yurts dot alpine meadows and horses roam free. 
      From the serene beauty of Lake Issyk-Kul to the dramatic trails of the Tien Shan Mountains, Kyrgyzstan invites you to reconnect with nature and a way of life rooted in harmony and freedom.`,
      id: 4,
      iconOpen: "icons/open__chevron.svg",
      iconClose: "icons/close__chevron.svg",
      images: [
        "/images/kyrgyzstan__first.jpg",
        "/images/kyrgyzstan__second.jpg",
        "/images/kyrgyzstan__third.jpg",
      ],
    },
    {
      title: "Turkmenistan",
      text: `Welcome to Turkmenistan — a land of desert mysteries, marble cities, and ancient legacies hidden beneath the sands. 
      From the blazing heart of the Karakum Desert rises the Darvaza Gas Crater — the “Door to Hell” — a symbol of the country’s raw and powerful beauty. 
      Wander through the silent ruins of Merv, once a jewel of the Silk Road, and marvel at Ashgabat’s gleaming white architecture. Turkmenistan is where history and surreal modernity meet in mesmerizing contrast.`,
      id: 5,
      iconOpen: "icons/open__chevron.svg",
      iconClose: "icons/close__chevron.svg",
      images: [
        "/images/turkmenistan__first.jpg",
        "/images/turkmenistan__second.jpg",
        "/images/turkmenistan__third.jpg",
      ],
    },
  ];
  const [selectedCountry, setSelectedCountry] = useState(countryData[0]);
  const [activeId, setActiveId] = useState(null);
  const contentRef = useRef(null);
  useEffect(() => {
    if (contentRef.current) {
      if (activeId === selectedCountry.id) {
        contentRef.current.style.maxHeight =
          contentRef.current.scrollHeight + "px";
        const width = window.innerWidth;

        if (width < 768) {
          contentRef.current.style.marginTop = "20px";
        } else if (width < 1024) {
          contentRef.current.style.marginTop = "35px";
        } else {
          contentRef.current.style.marginTop = "41px";
        }
      } else {
        contentRef.current.style.maxHeight = "0px";
        contentRef.current.style.marginTop = "0px";
      }
    }
  }, [activeId, selectedCountry]);
  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setActiveId(null);
  };
  const toggleAccordion = (id) => {
    setActiveId((prev) => (prev === id ? null : id));
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
              <div
                className="countries__mini-top-info w-full cursor-pointer flex flex-row justify-between items-center transition-all duration-500 ease-in-out"
                onClick={() => toggleAccordion(selectedCountry.id)}
              >
                <h3 className="countries__top-info-title font-medium text-[22px] md:text-[40px] md:leading-[60px] transition-all duration-500 ease-in-out">
                  {selectedCountry.title}
                </h3>
                <div
                  className={`countries__top-info-icon-box transition-all duration-500 ease-in-out w-[36px] h-[36px] rounded-full flex justify-center items-center md:w-[64px] md:h-[64px] ${
                    activeId === selectedCountry.id
                      ? "bg-[#A38E82]"
                      : "bg-[#F0ECEA]"
                  }`}
                >
                  <img
                    className="countries__top-info-icon w-[12px] h-[12px] transition-transform duration-500 md:w-[23px] md:h-[23px]"
                    src={
                      activeId === selectedCountry.id
                        ? selectedCountry.iconOpen
                        : selectedCountry.iconClose
                    }
                    alt="toggle icon"
                  />
                </div>
              </div>
              <p
                className="countries__top-info-text w-full text-[#878787] font-medium text-[12px] leading-[16px] overflow-hidden transition-all duration-500 ease-in-out md:text-[24px] md:leading-[32px]"
                ref={contentRef}
              >
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
