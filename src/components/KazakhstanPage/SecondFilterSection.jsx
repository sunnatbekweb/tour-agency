"use client";
import { useState } from "react";
import "./SecondFilterSection.css";
export default function SecondFilterSection() {
  const countryData = [
    {
      id: 1,
      title: "Karaganda",
      text: `Karaganda, located in the heart of Kazakhstan, was once the coal capital of the country. Today, it stands as a symbol of resilience and culture. Its broad avenues, monuments, and museums quietly tell stories of endurance, sacrifice, and the unbreakable spirit of the Kazakh heartland.`,
      images: "/images/karaganda__city.jpg",
      description: "city__images",
    },
    {
      id: 2,
      title: "Abai",
      text: `Abai is a land of wisdom, poetry, and deep cultural roots. Named after Abai Qunanbaiuly, it reflects Kazakhstan’s literary soul. Vast steppes, thoughtful silence, and historical pride define this region—where every word carries weight, and tradition flows like timeless verses through the spirit of the people.`,
      images: "/images/abai__city.jpg",
      description: "city__images",
    },
    {
      id: 3,
      title: "Akmola",
      text: `Akmola bridges Kazakhstan’s past and future. Once a modest outpost, it has grown into a region of resilience and progress. Sweeping steppes, quiet strength, and cultural pride define its landscape. Akmola tells a story of transition—rooted in heritage, moving steadily toward modern promise and national unity.`,
      images: "/images/akmola__city.jpg",
      description: "city__images",
    },
    {
      id: 4,
      title: "Aktobe",
      text: `Aktobe rises from the western steppes with strength and ambition. Rich in minerals and history, it blends industrial growth with deep cultural roots. The city’s wide skies and bustling streets reflect resilience, pride, and progress—where every path leads forward, shaped by determination and Kazakhstan’s enduring spirit.`,
      images: "/images/aktobe__city.jpg",
      description: "city__images",
    },
    {
      id: 5,
      title: "Atyrau",
      text: `Atyrau lies where Europe and Asia meet, along the quiet flow of the Ural River. Shaped by oil, wind, and water, it balances tradition with industry. This crossroads city reflects Kazakhstan’s diverse spirit—where cultures blend, and resilience grows beneath vast skies and shifting river currents.`,
      images: "/images/atyrau__city.jpg",
      description: "city__images",
    },
    {
      id: 6,
      title: "East Kazakhstan",
      text: `East Kazakhstan is a large region located in the northeastern part of Kazakhstan. It is known for its beautiful natural landscapes, including mountains, forests, and rivers. The area is rich in minerals and natural resources, supporting industries such as mining and metallurgy. The region has a diverse population and vibrant cultural traditions.`,
      images: "/images/east-kazakhstan__city.jpg",
      description: "city__images",
    },
    {
      id: 7,
      title: "Jetisu",
      text: `Jetisu, also known as Zhetysu or Semirechye, is a historical and geographical region in southeastern Kazakhstan. The name means "Seven Rivers," referring to the seven rivers flowing through the area. Jetisu is known for its beautiful mountains, lakes, and rich cultural heritage, with a strong history in agriculture and nomadic traditions.`,
      images: "/images/jetisu__city.jpg",
      description: "city__images",
    },
    {
      id: 8,
      title: "Kostanay",
      text: `Kostanay is a region in northern Kazakhstan known for its vast steppe landscapes and agricultural importance. It has fertile soil, making it one of the country’s main grain-producing areas. The region also has industries like mining and manufacturing, with a mix of cultural influences from various ethnic groups living there.`,
      images: "/images/kostanay__city.jpg",
      description: "city__images",
    },
    {
      id: 9,
      title: "Kyzylorda",
      text: `Kyzylorda is a region in southern Kazakhstan located along the Syr Darya River. It is known for its arid climate and vast deserts, including parts of the Kyzylkum Desert. The region is important for agriculture, especially rice and cotton farming, and has a rich cultural history connected to ancient Silk Road routes.`,
      images: "/images/kyzylorda__city.jpg",
      description: "city__images",
    },
    {
      id: 10,
      title: "Mangystau",
      text: `Mangystau is a region in southwestern Kazakhstan, located along the Caspian Sea coast. It is famous for its unique desert landscapes, ancient petroglyphs, and rich oil and natural gas reserves. Mangystau has important ports and industries related to energy, and it plays a key role in Kazakhstan’s economy.`,
      images: "/images/mangystau__city.jpg",
      description: "city__images",
    },
    {
      id: 11,
      title: "North Kazakhstan",
      text: `North Kazakhstan is a region in the northern part of Kazakhstan, known for its vast flat steppes and agricultural land. It is a major producer of grain and livestock. The region has a diverse population and is important for farming, mining, and industry, with a mix of Kazakh and Russian cultural influences.`,
      images: "/images/north-kazakhstan__city.jpg",
      description: "city__images",
    },
    {
      id: 12,
      title: "Pavlodar",
      text: `Pavlodar is a region in northeastern Kazakhstan, located along the Irtysh River. It is an important industrial and agricultural center, known for its large factories, including petrochemical and metallurgical plants. The region has rich natural resources and a diverse cultural heritage, with both Kazakh and Russian communities.`,
      images: "/images/pavlodar__city.jpg",
      description: "city__images",
    },
    {
      id: 13,
      title: "Turkistan",
      text: `Turkistan is a historic city and region in southern Kazakhstan, known as a cultural and spiritual center of Central Asia. It is famous for the Mausoleum of Khoja Ahmed Yasawi, a UNESCO World Heritage site. The area has a rich history linked to the Silk Road and is important for agriculture and trade.`,
      images: "/images/turkistan__city.jpg",
      description: "city__images",
    },
    {
      id: 14,
      title: "Ulytau",
      text: `Ulytau is a region in central Kazakhstan known for its mountainous landscapes and rich history. It is considered a spiritual and cultural heartland, with many ancient monuments and burial mounds. Ulytau is famous for its connection to Kazakh heritage and traditional nomadic culture.`,
      images: "/images/ulytau__city.jpg",
      description: "city__images",
    },
    {
      id: 15,
      title: "West Kazakhstan",
      text: `West Kazakhstan is a region located in the western part of Kazakhstan, bordering the Caspian Sea and Russia. It is known for its oil and natural gas industries, as well as agriculture and fishing. The region features diverse landscapes, including steppes, deserts, and river valleys, and has a mix of ethnic groups contributing to its cultural richness.`,
      images: "/images/west-kazakhstan__city.jpg",
      description: "city__images",
    },
    {
      id: 16,
      title: "Zhambyl",
      text: `Zhambyl is a region in southern Kazakhstan, named after the famous Kazakh poet Zhambyl Zhabayev. It features diverse landscapes, including steppes, mountains, and rivers. The region is known for agriculture, especially grain and livestock farming, and has a rich cultural heritage with historical sites and traditional Kazakh customs.`,
      images: "/images/zhambyl__city.jpg",
      description: "city__images",
    },
    {
      id: 17,
      title: "Astana",
      text: `Astana, now officially called Nur-Sultan, is the capital city of Kazakhstan. It is located in the northern part of the country and is known for its modern architecture and rapid development. As the political and cultural center, it hosts government institutions, businesses, and cultural events, symbolizing Kazakhstan’s progress and future.`,
      images: "/images/astana__city.jpg",
      description: "city__images",
    },
    {
      id: 18,
      title: "Shymkent",
      text: `Shymkent is a major city in southern Kazakhstan and one of the country’s largest urban centers. It is an important industrial, cultural, and economic hub with a diverse population. Shymkent is known for its warm climate, vibrant markets, and historical sites, blending traditional Kazakh culture with modern development.`,
      images: "/images/shymkent__city.jpg",
      description: "city__images",
    },
    {
      id: 19,
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
        <div className="secondFilter__bottom-box px-6 md:px-9">
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
