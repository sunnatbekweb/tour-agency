"use client";
import { useState, useRef, useEffect } from "react";
import "./QuestionSection.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useTranslations } from "next-intl";
export default function QuestionSection() {
  const t = useTranslations();
  const data = [
    {
      id: 1,
      number: "1.",
      title: t("home_question.home_question-question-text1"),
      text: t("home_question.home_question-text1"),
      iconOpen: "icons/open__chevron.svg",
      iconClose: "icons/close__chevron.svg",
    },
    {
      id: 2,
      number: "2.",
      title: t("home_question.home_question-question-text2"),
      text: t("home_question.home_question-text2"),
      iconOpen: "icons/open__chevron.svg",
      iconClose: "icons/close__chevron.svg",
    },
    {
      id: 3,
      number: "3.",
      title: t("home_question.home_question-question-text3"),
      text: t("home_question.home_question-text3"),
      iconOpen: "icons/open__chevron.svg",
      iconClose: "icons/close__chevron.svg",
    },
    {
      id: 4,
      number: "4.",
      title: t("home_question.home_question-question-text4"),
      text: t("home_question.home_question-text4"),
      iconOpen: "icons/open__chevron.svg",
      iconClose: "icons/close__chevron.svg",
    },
  ];
  const secondData = [
    {
      image: "images/hero__background-image.jpg",
      locationIcon: "icons/location__icon.svg",
      locationText: t("home_question.home_question-country-text1"),
      text: t("home_question.home_question-title1"),
    },
    {
      image: "images/hero__second-background-image.jpg",
      locationIcon: "icons/location__icon.svg",
      locationText: t("home_question.home_question-country-text2"),
      text: t("home_question.home_question-title2"),
    },
    {
      image: "images/hero__third-background-image.jpg",
      locationIcon: "icons/location__icon.svg",
      locationText: t("home_question.home_question-country-text3"),
      text: t("home_question.home_question-title3"),
    },
  ];
  const [activeId, setActiveId] = useState(null);
  const toggleAnswer = (id) => {
    setActiveId((prev) => (prev === id ? null : id));
  };
  const contentRefs = useRef([]);
  useEffect(() => {
    contentRefs.current.forEach((ref, index) => {
      const itemId = data[index].id;
      if (ref) {
        if (activeId === itemId) {
          ref.style.maxHeight = ref.scrollHeight + "px";

          const width = window.innerWidth;
          if (width <= 767) {
            ref.style.marginTop = "24.32px";
          } else if (width <= 1023) {
            ref.style.marginTop = "40px";
          } else {
            ref.style.marginTop = "33px";
          }
        } else {
          ref.style.maxHeight = "0px";
          ref.style.marginTop = "0px";
        }
      }
    });
  }, [activeId]);
  return (
    <section className="question mt-[64px] md:mt-[120px] xl:mt-[150px]">
      <div className="container question__container w-full flex flex-col justify-center items-start gap-[40px] px-6 md:gap-[94px] md:px-9">
        <div className="question__top-box flex flex-col justify-center items-start gap-2 md:gap-4">
          <p className="question__text font-medium text-[16px] uppercase text-[#A5958B] md:text-[24px]">
            {t("home_question.home_question-text")}
          </p>
          <h2 className="question__title w-full font-medium text-[22px] leading-[30px] text-[#323232] uppercase md:w-[620px] md:text-[36px] md:leading-[40px] lg:w-[642px] xl:text-[40px] xl:leading-[46px]">
            {t("home_question.home_question-title")}
          </h2>
        </div>
        <div className="question__bottom-box w-full flex flex-col justify-center items-center gap-2 md:gap-4 xl:w-full xl:flex xl:flex-row xl:justify-between xl:items-start xl:gap-5 xl:relative">
          <div className="question__swiper-box hidden xl:block xl:absolute xl:left-0 ">
            <Swiper
              className="question__swiper xl:top-0 xl:relative xl:block xl:rounded-3xl"
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              speed={2500}
              loop={true}
              modules={[Autoplay]}
            >
              {secondData.map((content, id) => (
                <SwiperSlide
                  className="question__swiper-slide hidden xl:flex xl:flex-col xl:justify-center xl:items-center"
                  key={id}
                >
                  <img
                    className="question__swiper-image cursor-grab xl:object-cover xl:relative"
                    src={content.image}
                    alt="nature__image"
                  />
                  <div className="question__image-info-box lg:absolute lg:flex lg:flex-row lg:justify-center lg:items-center lg:gap-3 lg:bg-white/40 lg:rounded-[50px] lg:left-[24px] lg:top-[24px] lg:px-[18px] lg:py-[12px]">
                    <img
                      className="question__location-icon"
                      src={content.locationIcon}
                      alt="location__icon"
                    />
                    <p className="question__location-text lg:text-white lg:font-medium lg:text-[14px] lg:leading-[18px]">
                      {content.locationText}
                    </p>
                  </div>
                  <p className="question__swiper-text md:w-full md:absolute md:bottom-[24px] md:px-[24px] md:text-[16px] md:leading-[20px] md:text-[#F2F2F2] 2xl:text-[24px] 2xl:leading-[32px]">
                    {content.text}
                  </p>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="question__right-box w-full flex flex-col justify-center items-center gap-2 md:gap-4 xl:flex xl:flex-col xl:justify-center xl:items-end">
            {data.map((item, index) => (
              <div
                key={item.id}
                className="question__right-mini-box w-full flex flex-col justify-between items-center border-[1px] border-[#DCDCDC] rounded-[8px] px-[18px] py-4 md:px-[40px] md:py-10 md:rounded-[24px] xl:w-[700px] xl:px-[24px] xl:py-5 2xl:px-[20px] 2xl:py-[35px]"
              >
                <div
                  className="question__right-bottom-box w-full flex flex-row justify-between items-center h-[32px] cursor-pointer md:h-[60px]"
                  onClick={() => toggleAnswer(item.id)}
                >
                  <div className="question__right-texts-box flex flex-row justify-center items-start gap-x-1.5 md:flex md:flex-row md:justify-start md:items-start md:gap-x-3 md:w-full">
                    <p className="question__right-number font-medium text-[16px] text-[#323232] leading-[22px] md:text-[32px] md:leading-[40px] xl:text-[24px] xl:leading-[30px]">
                      {item.number}
                    </p>
                    <p className="question__right-title font-medium text-[16px] text-[#323232] leading-[22px] md:text-[32px] md:leading-[40px] xl:text-[24px] xl:leading-[30px]">
                      {item.title}
                    </p>
                  </div>
                  <div
                    className={`question__right-icon-box w-[32px] h-[32px] rounded-full flex flex-row justify-center items-center md:w-[45px] md:h-[45px] ${activeId === item.id ? "bg-[#A38E82]" : "bg-[#F0ECEA]"} `}
                  >
                    <img
                      className="question__right-icon object-contain transition-transform duration-500 w-[12px] h-[12px] md:w-[22px] md:h-[22px]"
                      src={
                        activeId === item.id ? item.iconOpen : item.iconClose
                      }
                      alt="toggle icon"
                    />
                  </div>
                </div>
                <div
                  ref={(el) => (contentRefs.current[index] = el)}
                  className="question__right-text-box font-medium text-[12px] leading-[16px] text-[#323232] w-full overflow-hidden transition-all duration-500 ease-in-out max-h-0"
                >
                  <p className="question__right-text text-[12px] leading-[16px] md:text-[18px] md:leading-[22px] md:w-full lg:w-full">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
