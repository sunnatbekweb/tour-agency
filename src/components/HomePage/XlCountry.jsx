"use client";
import React, { useState } from "react";
import { Map } from "../ui/Map";

export const XlCountry = () => {
  const [selectedCountry, setSelectedCountry] = useState(2);
  const countryData = [
    {
      title: "Kazakhstan",
      text: `Welcome to Kazakhstan — a land where golden steppes stretch beyond the horizon, where futuristic cities rise beside ancient traditions. 
      As the world’s largest landlocked country, Kazakhstan offers boundless space to breathe, roam, and rediscover freedom. 
      From the shimmering heights of Baiterek Tower to the otherworldly beauty of Charyn Canyon, every step here tells a story.`,
      id: 2,
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
      id: 1,
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
      id: 4,
      iconOpen: "icons/open__chevron.svg",
      iconClose: "icons/close__chevron.svg",
      images: [
        "/images/tajikistan__third.jpg",
        "/images/tajikistan__first.jpg",
        "/images/tajikistan__second.jpg",
      ],
    },
    {
      title: "Kyrgyzstan",
      text: `Welcome to Kyrgyzstan — where snow-capped peaks cradle nomadic traditions and turquoise lakes reflect the sky’s vastness. 
      This rugged and soulful land is a paradise for explorers, where yurts dot alpine meadows and horses roam free. 
      From the serene beauty of Lake Issyk-Kul to the dramatic trails of the Tien Shan Mountains, Kyrgyzstan invites you to reconnect with nature and a way of life rooted in harmony and freedom.`,
      id: 3,
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
  return (
    <section className="py-[120px] font-medium hidden lg:block">
      <div className="container px-6 2xl:hidden">
        <div className="w-3/4 xl:w-3/5">
          <span className="text-xl text-[#A5958B] uppercase">
            see your own adventure
          </span>
          <h2 className="mt-8 mb-12 text-6xl text-[#323232] uppercase">
            Unveil Central Asia’s Hidden Wonders
          </h2>
        </div>
      </div>
      <div className="container flex flex-col-reverse 2xl:flex-row items-center gap-x-12 px-6">
        <div className="2xl:w-1/2">
          <div className="hidden 2xl:block">
            <span className="text-xl text-[#A5958B] uppercase">
              see your own adventure
            </span>
            <h2 className="mt-8 mb-12 text-6xl text-[#323232] uppercase">
              Unveil Central Asia’s Hidden Wonders
            </h2>
          </div>
          {countryData
            .filter((country) => country.id === selectedCountry)
            .map((country) => (
              <div key={country.id} className="flex 2xl:flex-col gap-x-6">
                <div className="transition-all duration-500 ease-in-out w-full bg-[#E9DED8] rounded-[10px] px-[22px] pt-[14px] pb-[14px] md:px-[48px] md:pt-[32px] md:pb-[32px] md:rounded-[24px]">
                  <div className="w-full cursor-pointer flex flex-row justify-between items-center mb-5 transition-all duration-500 ease-in-out">
                    <h3 className="font-medium text-[22px] md:text-[40px] md:leading-[60px] transition-all duration-500 ease-in-out">
                      {country.title}
                    </h3>
                    <div
                      className={`transition-all duration-500 ease-in-out bg-[#A5958B] w-[48px] h-[48px] rounded-full flex justify-center items-center`}
                    >
                      <img
                        className="w-[20px] h-[20px] transition-transform duration-500"
                        src={"/icons/open__chevron.svg"}
                        alt="toggle icon"
                      />
                    </div>
                  </div>
                  <p className="w-full text-[#878787] font-medium text-lg overflow-hidden transition-all duration-500 ease-in-out">
                    {country.text}
                  </p>
                </div>
                <div className="2xl:mt-4">
                  <div className="h-[360px] 2xl:h-[460px] flex flex-row justify-center items-center gap-4">
                    <img
                      className="countries__bottom-left-image w-[50%] h-full object-cover rounded-[10px] md:rounded-[24px]"
                      src={country.images[0]}
                      alt={`image 1`}
                    />
                    <div className="2xl:w-[50%] h-full flex flex-col justify-center items-center gap-2">
                      <div className="w-full h-[calc(50%-4px)]">
                        <img
                          className="w-full h-full object-cover rounded-[10px] md:rounded-[24px]"
                          src={country.images[1]}
                          alt={`image 2`}
                        />
                      </div>
                      <div className="w-full h-[calc(50%-4px)]">
                        <img
                          className="w-full h-full object-cover rounded-[10px] md:rounded-[24px]"
                          src={country.images[2]}
                          alt={`image 3`}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className="w-1/2">
          <Map
            onSelectCountry={setSelectedCountry}
            selectedCountry={selectedCountry}
          />
        </div>
      </div>
    </section>
  );
};
