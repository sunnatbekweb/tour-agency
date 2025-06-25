import { useTranslations } from "next-intl";
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
      link: "/destination/tajikistan",
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
      country_name: t("header.destinations.uz"),
      title: t("destinations.uzbekistan.about_country_title"),
      text1: t("destinations.uzbekistan.about_country_text1"),
      text2: t("destinations.uzbekistan.about_country_text2"),
      image1: "/images/uzbekistan__first.jpg",
      image2: "/images/uzbekistan__second.jpg",
      image3: "/images/uzbekistan__third.jpg",
    },
    {
      slug: "kazakhstan",
      country_name: t("header.destinations.kz"),
      title: t("destinations.kazakhstan.about_country_title"),
      text1: t("destinations.kazakhstan.about_country_text1"),
      text2: t("destinations.kazakhstan.about_country_text2"),
      image1: "/images/kazakhstan__first.jpg",
      image2: "/images/kazakhstan__second.jpg",
      image3: "/images/kazakhstan__third.jpg",
    },
    {
      slug: "tajikistan",
      country_name: t("header.destinations.tj"),
      title: t("destinations.tajikistan.about_country_title"),
      text1: t("destinations.tajikistan.about_country_text1"),
      text2: t("destinations.tajikistan.about_country_text2"),
      image1: "/images/tajikistan__first.jpg",
      image2: "/images/tajikistan__second.jpg",
      image3: "/images/tajikistan__third.jpg",
    },
    {
      slug: "kyrgyzstan",
      country_name: t("header.destinations.kg"),
      title: t("destinations.kyrgyzstan.about_country_title"),
      text1: t("destinations.kyrgyzstan.about_country_text1"),
      text2: t("destinations.kyrgyzstan.about_country_text2"),
      image1: "/images/tajikistan__first.jpg",
      image2: "/images/tajikistan__second.jpg",
      image3: "/images/turkmenistan__third.jpg",
    },
    {
      slug: "turkmenistan",
      country_name: t("header.destinations.tk"),
      title: t("destinations.turkmenistan.about_country_title"),
      text1: t("destinations.turkmenistan.about_country_text1"),
      text2: t("destinations.turkmenistan.about_country_text2"),
      image1: "/images/turkmenistan__first.jpg",
      image2: "/images/turkmenistan__second.jpg",
      image3: "/images/turkmenistan__third.jpg",
    },
  ];
};

export const useExpertise = () => {
  const t = useTranslations("about.expertise.data");
  return [
    {
      icon: "/icons/expertise_icon.svg",
      title: t("item.title"),
      text: t("item.text"),
    },
    {
      icon: "/icons/expertise_icon.svg",
      title: t("item1.title"),
      text: t("item1.text"),
    },
    {
      icon: "/icons/expertise_icon.svg",
      title: t("item2.title"),
      text: t("item2.text"),
    },
    {
      icon: "/icons/expertise_icon.svg",
      title: t("item3.title"),
      text: t("item3.text"),
    },
    {
      icon: "/icons/expertise_icon.svg",
      title: t("item4.title"),
      text: t("item4.text"),
    },
    {
      icon: "/icons/expertise_icon.svg",
      title: t("item5.title"),
      text: t("item5.text"),
    },
  ];
};