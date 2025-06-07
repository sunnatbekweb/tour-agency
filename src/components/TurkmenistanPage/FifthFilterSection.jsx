"use client";
import { useState } from "react";
import "./FifthFilterSection.css";
export default function FifthFilterSection() {
  const countryData = [
    {
      id: 1,
      title: "Ashgabat",
      text: `Ashgabat is the capital and largest city of Turkmenistan. Known for its white marble buildings, it features grand monuments and wide boulevards. The city is a political, cultural, and economic center, hosting government offices, museums, and universities. It lies near the Kopet Dag mountains.`,
      images: "/images/ashgabat.jpg",
      description: "city__images",
    },
    {
      id: 2,
      title: "Balkan",
      text: `Balkan Region is located in the western part of Turkmenistan, bordering the Caspian Sea. It is known for its oil and gas reserves, making it a major energy-producing area. The region features deserts, the Balkan Mountains, and important ports like Türkmenbaşy. It plays a key role in Turkmenistan’s economy and trade.`,
      images: "/images/balkan.webp",
      description: "city__images",
    },
    {
      id: 3,
      title: "Dashoguz",
      text: `Dashoguz Region is located in northern Turkmenistan, bordering Uzbekistan. It is known for its vast deserts and steppe landscapes. The region has a strong agricultural sector, especially cotton and grain farming. Dashoguz also contains several historical sites, including ancient ruins like those at Konye-Urgench, a UNESCO World Heritage Site.`,
      images: "/images/dashoguz.jpg",
      description: "city__images",
    },
    {
      id: 4,
      title: "Lebap",
      text: `Lebap Region is located in eastern Turkmenistan, along the border with Uzbekistan and Afghanistan. It is known for its fertile lands thanks to the Amu Darya River, supporting agriculture like cotton and wheat. The region is also rich in natural gas and oil resources. Lebap has important cities such as Türkmenabat and several cultural and historical sites.`,
      images: "/images/lebap.jpg",
      description: "city__images",
    },
    {
      id: 5,
      title: "Mary",
      text: `Mary Region is located in southeastern Turkmenistan. It is an important agricultural and industrial area, known especially for cotton and grain production. The region is rich in natural gas and oil resources. Mary city, the regional capital, is a key cultural and economic center. The ancient archaeological site of Merv, a UNESCO World Heritage Site, is also located here.`,
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
              className={`fifthFilter__top-buttons transition-all duration-500 ease-in-out flex justify-center items-center px-[22px] py-[10px] rounded-[16px] font-medium text-[16px] leading-[100%] md:text-[32px] md:px-[25px] md:py-[17px] md:rounded-[32px]
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
