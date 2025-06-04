import { useTranslations } from "use-intl";

export const useCountryData = () => {
  const t = useTranslations("");

  return [
    {
      id: 1,
      title: t("header.destinations.uz"),
      text: t("home_map.country_info.infoUz"),
      iconOpen: "icons/open__chevron.svg",
      iconClose: "icons/close__chevron.svg",
      link: "/destination/uzbekistan",
      images: [
        "/images/uzbekistan__first.jpg",
        "/images/uzbekistan__second.jpg",
        "/images/uzbekistan__third.jpg",
      ],
    },
    {
      id: 2,
      title: t("header.destinations.kz"),
      text: t("home_map.country_info.infoKz"),
      iconOpen: "icons/open__chevron.svg",
      iconClose: "icons/close__chevron.svg",
      link: "/destination/kazakhstan",
      images: [
        "/images/kazakhstan__first.jpg",
        "/images/kazakhstan__second.jpg",
        "/images/kazakhstan__third.jpg",
      ],
    },
    {
      id: 3,
      title: t("header.destinations.kg"),
      text: t("home_map.country_info.infoKg"),
      iconOpen: "icons/open__chevron.svg",
      iconClose: "icons/close__chevron.svg",
      link: "/destination/kygyzystan",
      images: [
        "/images/kyrgyzstan__first.jpg",
        "/images/kyrgyzstan__second.jpg",
        "/images/kyrgyzstan__third.jpg",
      ],
    },
    {
      id: 4,
      title: t("header.destinations.tj"),
      text: t("home_map.country_info.infoTj"),
      iconOpen: "icons/open__chevron.svg",
      iconClose: "icons/close__chevron.svg",
      link: "/destination/tadjikistan",
      images: [
        "/images/tajikistan__third.jpg",
        "/images/tajikistan__first.jpg",
        "/images/tajikistan__second.jpg",
      ],
    },
    {
      id: 5,
      title: t("header.destinations.tk"),
      text: t("home_map.country_info.infoTk"),
      iconOpen: "icons/open__chevron.svg",
      iconClose: "icons/close__chevron.svg",
      link: "/destination/turkmenistan",
      images: [
        "/images/turkmenistan__first.jpg",
        "/images/turkmenistan__second.jpg",
        "/images/turkmenistan__third.jpg",
      ],
    },
  ];
};
export const useAboutCountries = () => {
  const t = useTranslations();

  return [
    {
      slug: "uzbekistan",
      title: "Uzbekistan: Crossroads of Civilizations",
      text1:
        "Uzbekistan is the beating heart of Central Asia — a country where history lives in every mosaic and hospitality greets you at every corner. From the towering minarets of Khiva to the majestic Registan of Samarkand, Uzbekistan offers a cultural journey unlike any other. It’s where science once thrived, trade flourished, and traditions were born that still color the land today. Let the Silk Road guide your footsteps through this timeless land.",
      text2:
        "Uzbekistan’s charm lies not only in its architectural wonders but in the warmth of its people and the richness of its living traditions. In bustling bazaars, the scent of spices mingles with the sound of craftsmen at work. Music, storytelling, and intricate artistry remain part of daily life — a true blend of ancient legacy and vibrant culture. Whether you're wandering through historic caravanserais or sharing a meal with locals, Uzbekistan welcomes you with open arms and timeless soul.",
      image1: "/images/uzbekistan__first.jpg",
      image2: "/images/uzbekistan__second.jpg",
      image3: "/images/uzbekistan__third.jpg",
    },
    {
      slug: "kazakhstan",
      title: "Kazakhstan: Land of Wide Horizons and Bold Spirits",
      text1:
        "Kazakhstan’s true magic lies not only in its vastness, but in its contrasts — where silence meets strength, and ancient traditions meet modern ambition. Venture beyond the urban skylines of Astana and Almaty, and you’ll discover a world sculpted by wind, time, and nomadic pride. The boundless steppe isn’t just a landscape — it’s a symbol of freedom that has shaped generations of resilient, welcoming people.",
      text2:
        "In every village, you'll find stories passed down around the fire. In every traditional yurt, a connection to the past. The Kazakh way of life is deeply rooted in respect for nature, hospitality, and courage — whether you're sharing fermented kumis with a herder or climbing snow-covered peaks in the Tien Shan. This is a land for wanderers, dreamers, and anyone yearning to reconnect with something pure, powerful, and timeless.",
      image1: "/images/kazakhstan__first.jpg",
      image2: "/images/kazakhstan__second.jpg",
      image3: "/images/kazakhstan__third.jpg",
    },
    {
      slug: "tadjikistan",
      title: "Tajikistan: Roof of Central Asia",
      text1:
        "Tajikistan is a land of staggering mountains and deep-rooted history — a place where the Pamir Mountains scrape the sky and ancient caravan routes still echo with stories of travelers long gone. Here, rugged beauty and raw nature create a backdrop like no other in Central Asia. With over 90% of the country covered in mountains, this is where trekkers, dreamers, and seekers of solitude find their path.",
      text2:
        "But Tajikistan is not only wilderness — it is warmth. In remote villages, hospitality is a way of life. Chai is shared, stories are offered, and traditions are kept alive in dances, fabrics, and festivals. Whether you’re tracing the Wakhan Corridor or wandering the vibrant markets of Dushanbe, every step here connects you with something ancient, soulful, and utterly unforgettable.",
      image1: "/images/tajikistan__first.jpg",
      image2: "/images/tajikistan__second.jpg",
      image3: "/images/tajikistan__third.jpg",
    },
    {
      slug: "kyrgyzstan",
      title: "Kyrgyzstan: Land of Peaks, Lakes & Nomads",
      text1:
        "But Kyrgyzstan is more than scenery — it's a living legacy of the nomadic soul. In the vast jailoo (summer pastures), families still herd their animals as they have for generations. Travelers are not strangers here — they are guests, welcomed with a bowl of warm kumis and heartfelt hospitality that knows no boundaries. Sharing stories under the stars, listening to the music of komuz, and tasting bread baked in clay tandyrs — this is everyday life, as rich as the land itself.",
      text2:
        "But Kyrgyzstan is more than scenery — it's a living culture. In the high pastures (jailoo), families still herd livestock and welcome travelers with open arms and warm kumis. Festivals celebrate eagle hunters, felt artisans, and horse games that date back millennia. Every visit becomes a soulful journey into a world untouched by time, yet alive with tradition.",
      image1: "/images/tajikistan__first.jpg",
      image2: "/images/tajikistan__second.jpg",
      image3: "/images/turkmenistan__third.jpg",
    },
    {
      slug: "turkmenistan",
      title: "Turkmenistan: The Hidden Jewel of the Silk Road",
      text1:
        "Turkmenistan is a land of deep silence and timeless secrets — where golden sands hide ancient cities, and marble cities rise in the desert. Once home to mighty empires like Parthia and Khwarezm, this country holds the ruins of Merv and Nisa, whispering stories of traders, scholars, and civilizations that shaped the Silk Road.",
      text2:
        "But beyond the history lies a living culture: proud, resilient, and welcoming. In traditional villages, carpets are still handwoven with centuries-old symbolism; in the vast Karakum Desert, yurts still dot the horizon. The blazing Darvaza Gas Crater — “The Door to Hell” — lights up the night like a torch from the underworld. Hospitality here is sacred — tea is shared, stories are offered, and visitors are treated as honored guests. Turkmenistan isn’t just a destination — it’s a revelation waiting to unfold, for the curious and the courageous.",
      image1: "/images/turkmenistan__first.jpg",
      image2: "/images/turkmenistan__second.jpg",
      image3: "/images/turkmenistan__third.jpg",
    },
  ];
};
