"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./FeedbackSection.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
export default function FeedbackSection() {
  const [isMobile, setIsMobile] = useState(false);
  const t = useTranslations();
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1025);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const data = [
    {
      comment: t("home_feedback.home_feedback-comment1"),
      name: t("home_feedback.home_feedback-name1"),
      job: t("home_feedback.home_feedback-job1"),
      quotationIcon: "/icons/quotation.svg",
      userImages: "/images/first__user.jpg",
    },
    {
      comment: t("home_feedback.home_feedback-comment2"),
      name: t("home_feedback.home_feedback-name2"),
      job: t("home_feedback.home_feedback-job2"),
      quotationIcon: "/icons/quotation.svg",
      userImages: "/images/second__user.jpg",
    },
    {
      comment: t("home_feedback.home_feedback-comment3"),
      name: t("home_feedback.home_feedback-name3"),
      job: t("home_feedback.home_feedback-job3"),
      quotationIcon: "/icons/quotation.svg",
      userImages: "/images/third__user.jpg",
    },
    {
      comment: t("home_feedback.home_feedback-comment4"),
      name: t("home_feedback.home_feedback-name4"),
      job: t("home_feedback.home_feedback-job4"),
      quotationIcon: "/icons/quotation.svg",
      userImages: "/images/fourth__user.jpg",
    },
  ];
  return (
    <section className="feedback mt-[120px] md:mt-[100px] overflow-x-hidden">
      <div className="container feedback__container flex flex-col justify-center items-start gap-14 ">
        <div className="feedback__top-box flex flex-col items-start gap-2 pl-6 md:pl-9 md:gap-4">
          <p className="feedback__top-text font-medium text-[#A5958B] text-[16px] leading-[100%] uppercase md:text-[24px]">
            {t("home_feedback.home_feedback-text")}
          </p>
          <h2 className="feedback__top-title font-medium w-[328px] text-[22px] leading-[30px] uppercase md:text-[36px] md:leading-[40px] md:w-[620px] lg:w-[738px] xl:text-[46px] xl:leading-[50px]">
            {t("home_feedback.home_feedback-title")}
          </h2>
        </div>
        <Swiper
          className="feedback__swiper w-full cursor-grab xl:flex xl:flex-row xl:justify-center xl:items-center"
          navigation={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          speed={1800}
          loop={true}
          modules={[Navigation, Autoplay, Pagination]}
          slidesPerView={isMobile ? 1 : 1}
          centeredSlides={!isMobile}
          spaceBetween={24}
        >
          {data.map((item, index) => (
            <SwiperSlide
              className="feedback__swiper-slide h-[400px]"
              key={index}
            >
              <div className="xl:w-full xl:grid grid-cols-3 xl:justify-center xl:items-start xl:gap-[20px] 2xl:gap-[56px]">
                <div className="feedback__swiper-left-box col-span-2 w-full h-full flex flex-col justify-center items-start gap-8 shadow-xl bg-[#F3F3F3] rounded-[16px] border border-[#EBEBEB] px-6 pt-[80px] pb-8 relative md:rounded-[18px] md:gap-[51px] md:pb-[86.5px] md:pt-[125px] md:px-[60px] xl:shadow-none xl:pb-[82px] xl:gap-[48px] xl:pt-[117px]">
                  <img
                    className="absolute top-[35px] left-[30px] w-[29px] h-[21px] md:w-[54px] md:h-[39px] md:top-[46px] md:left-[60px] xl:w-[50px] xl:h-[36px] xl:top-[43px] xl:left-[56px]"
                    src={item.quotationIcon}
                    alt="quotation"
                  />
                  <h4 className="feedback__swiper-comment font-medium text-xl text-[#323232] md:text-2xl xl:text-2xl xl:w-full xl:line-clamp-5 2xl:line-clamp-3">
                    {item.comment}
                  </h4>
                  <div className="feedback__swiper-mini-box flex flex-col justify-center items-start gap-2 md:gap-0">
                    <h6 className="feedback__swiper-name-texts font-semibold text-lg text-[#323232] md:text-lg xl:text-xl">
                      {item.name}
                    </h6>
                    <p className="feedback__swiper-job-title font-medium text-sm text-[#323232] md:text-lg xl:text-base">
                      {item.job}
                    </p>
                  </div>
                </div>
                <div className="feedback__swiper-right-box hidden xl:block">
                  <img
                    className="feedback__swiper-images w-full h-full xl:object-cover object-center xl:rounded-[18px]"
                    src={item.userImages}
                    alt="user__images"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
