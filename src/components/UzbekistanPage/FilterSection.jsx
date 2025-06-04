"use client";
import { useState } from "react";
import "./FilterSection.css";
export default function FilterSection() {
  const countryData = [
    {
      id: 1,
      title: "Samarkand",
      text: `Step into a city where history breathes through turquoise domes and timeless architecture. Once the crown jewel of the Silk Road, Samarkand dazzles with its monumental madrasahs, ancient mosques, and the majestic Registan Square. A place where every stone tells a story, and every corner whispers centuries of wisdom.`,
      images: "/images/samarkand__city.jpg",
      description: "city__images",
    },
    {
      id: 2,
      title: "Tashkent",
      text: `Step into Tashkent – a dynamic metropolis where ancient history blends with modern vitality. As Uzbekistan’s capital and cultural hub, the city radiates life through its broad boulevards, elegant metro stations, lively neighborhoods, and a spirit that captures both timeless tradition and contemporary charm.`,
      images: "/images/tashkent__city.jpg",
      description: "city__images",
    },
    {
      id: 3,
      title: "Fergana",
      text: `Step into Fergana — a vibrant gem in the fertile Fergana Valley. Famed for its rich culture, bustling bazaars, and warm people, Fergana is a city where tradition and modern life blend seamlessly, creating an atmosphere both timeless and alive with energy.`,
      images: "/images/fergana__city.jpg",
      description: "city__images",
    },
    {
      id: 4,
      title: "Andijan",
      text: `Step into Andijan — the vibrant heart of the Fergana Valley, where deep history and living traditions meet. With fragrant orchards, lively bazaars, and heartfelt hospitality, Andijan is a city that radiates resilience, culture, and a spirit rooted in heritage.`,
      images: "/images/andijan__city.jpg",
      description: "city__images",
    },
    {
      id: 5,
      title: "Kashkadarya",
      text: `Discover Qashqadaryo – where towering mountains meet deep-rooted culture, and every valley holds centuries of untold stories. From the majestic Gissar peaks to Karshi’s fertile plains, this region embraces history, nature, and the spirit of Uzbekistan.`,
      images: "/images/kashkadarya__city.jpg",
      description: "city__images",
    },
    {
      id: 6,
      title: "Surkhandarya",
      text: `Venture into Surkhandarya – a region of dramatic contrasts and timeless soul. Between sun-kissed plains and majestic mountains, Surkhandarya reveals ancient secrets, vibrant culture, and resilient spirit passed through generations in Uzbekistan’s southern heart.`,
      images: "/images/surkhandarya__city.jpg",
      description: "city__images",
    },
    {
      id: 7,
      title: "Bukhara",
      text: `Step into Bukhara – a timeless city carved by centuries, where every breeze carries whispers of history and every brick holds stories of ancient wisdom. The city’s enchanting bazaars, majestic mosques, and rich culture invite visitors to explore a world shaped by time and tradition.`,
      images: "/images/bukhara__city.jpg",
      description: "city__images",
    },
    {
      id: 8,
      title: "Navoi",
      text: `Discover Navoi – a unique land where the golden desert sands meet the bright promise of progress and innovation. Named after the great poet Alisher Navoi, this region beautifully blends creative spirit, cultural heritage, and strong industrial growth to shape its dynamic future.`,
      images: "/images/navoi__city.jpg",
      description: "city__images",
    },
    {
      id: 9,
      title: "Khorezm",
      text: `Step into Khorezm – a cradle of ancient civilizations where the sands of time gently preserve the timeless stories of kings, scholars, and merchants. This historic land holds echoes of the past, rich culture, and enduring legacies that continue to inspire.`,
      images: "/images/khorezm__city.jpg",
      description: "city__images",
    },
    {
      id: 10,
      title: "Nukus",
      text: `Discover Nukus – a city of quiet strength and deep culture, nestled in Karakalpakstan’s heart. Surrounded by vast deserts and plateaus, Nukus is more than a remote outpost; it is a true sanctuary of art, history, and enduring identity.`,
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
              className={`filter__top-buttons transition-all duration-500 ease-in-out flex justify-center items-center px-[22px] py-[10px] rounded-[16px] font-medium text-[16px] leading-[100%] md:text-[32px] md:px-[25px] md:py-[17px] md:rounded-[32px]
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
