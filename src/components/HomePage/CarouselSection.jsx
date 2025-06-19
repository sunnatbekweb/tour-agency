"use client";
import "./CarouselSection.css";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import BookingButton from "../ui/BookingButton";
import { useTranslations } from "use-intl";
export default function CarouselSection() {
  const t = useTranslations();
  const data = [
    {
      locationIcon: "icons/location__icon.svg",
      locationText: t("home_carousel.home_carousel-text"),
      locationImage: "images/hystorical__samarkand.jpg",
      locationDescription: "samarkand__image",
      locationTitle: t("home_carousel.home_carousel-title"),
      locationPrice: "$456.99",
      locationTickIcon: "icons/tick__icon.svg",
      locationDetails: [
        t(
          "home_carousel.home_carousel-detail-first.home_carousel-detail-first-1"
        ),
        t(
          "home_carousel.home_carousel-detail-first.home_carousel-detail-first-2"
        ),
        t(
          "home_carousel.home_carousel-detail-first.home_carousel-detail-first-3"
        ),
      ],
    },
    {
      locationIcon: "icons/location__icon.svg",
      locationText: t("home_carousel.home_carousel-second-text"),
      locationImage: "images/hystorical__samarkand.jpg",
      locationDescription: "samarkand__image",
      locationTitle: t("home_carousel.home_carousel-second-title"),
      locationPrice: "$456.99",
      locationTickIcon: "icons/tick__icon.svg",
      locationDetails: [
        t(
          "home_carousel.home_carousel-detail-second.home_carousel-detail-second-1"
        ),
        t(
          "home_carousel.home_carousel-detail-second.home_carousel-detail-second-2"
        ),
        t(
          "home_carousel.home_carousel-detail-second.home_carousel-detail-second-3"
        ),
      ],
    },
    {
      locationIcon: "icons/location__icon.svg",
      locationText: t("home_carousel.home_carousel-third-text"),
      locationImage: "images/hystorical__samarkand.jpg",
      locationDescription: "samarkand__image",
      locationTitle: t("home_carousel.home_carousel-third-title"),
      locationPrice: "$456.99",
      locationTickIcon: "icons/tick__icon.svg",
      locationDetails: [
        t(
          "home_carousel.home_carousel-detail-third.home_carousel-detail-third-1"
        ),
        t(
          "home_carousel.home_carousel-detail-third.home_carousel-detail-third-2"
        ),
        t(
          "home_carousel.home_carousel-detail-third.home_carousel-detail-third-3"
        ),
      ],
    },
    {
      locationIcon: "icons/location__icon.svg",
      locationText: t("home_carousel.home_carousel-fourth-text"),
      locationImage: "images/hystorical__samarkand.jpg",
      locationDescription: "samarkand__image",
      locationTitle: t("home_carousel.home_carousel-fourth-title"),
      locationPrice: "$456.99",
      locationTickIcon: "icons/tick__icon.svg",
      locationDetails: [
        t(
          "home_carousel.home_carousel-detail-fourth.home_carousel-detail-fourth-1"
        ),
        t(
          "home_carousel.home_carousel-detail-fourth.home_carousel-detail-fourth-2"
        ),
        t(
          "home_carousel.home_carousel-detail-fourth.home_carousel-detail-fourth-3"
        ),
      ],
    },
    {
      locationIcon: "icons/location__icon.svg",
      locationText: t("home_carousel.home_carousel-fifth-text"),
      locationImage: "images/hystorical__samarkand.jpg",
      locationDescription: "samarkand__image",
      locationTitle: t("home_carousel.home_carousel-fifth-title"),
      locationPrice: "$456.99",
      locationTickIcon: "icons/tick__icon.svg",
      locationDetails: [
        t(
          "home_carousel.home_carousel-detail-fifth.home_carousel-detail-fifth-1"
        ),
        t(
          "home_carousel.home_carousel-detail-fifth.home_carousel-detail-fifth-2"
        ),
        t(
          "home_carousel.home_carousel-detail-fifth.home_carousel-detail-fifth-3"
        ),
      ],
    },
    {
      locationIcon: "icons/location__icon.svg",
      locationText: t("home_carousel.home_carousel-sixth-text"),
      locationImage: "images/hystorical__samarkand.jpg",
      locationDescription: "samarkand__image",
      locationTitle: t("home_carousel.home_carousel-sixth-title"),
      locationPrice: "$456.99",
      locationTickIcon: "icons/tick__icon.svg",
      locationDetails: [
        t(
          "home_carousel.home_carousel-detail-sixth.home_carousel-detail-sixth-1"
        ),
        t(
          "home_carousel.home_carousel-detail-sixth.home_carousel-detail-sixth-2"
        ),
        t(
          "home_carousel.home_carousel-detail-sixth.home_carousel-detail-sixth-3"
        ),
      ],
    },
  ];
  return (
    <section className="carousel w-full mt-8 md:mt-[88px] lg:mt-[232px]">
      <div className="container carousel__container relative w-full flex flex-row justify-between items-center px-6 md:px-9">
        <div className="swiper-button-next bg-amber-500"></div>
        <div className="swiper-button-prev bg-amber-500"></div>
      </div>
      <Swiper
        className="carousel__swiper-box flex flex-row justify-center items-center cursor-grab"
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        speed={1800}
        loop={true}
        modules={[Navigation, Autoplay]}
        slidesPerView={"auto"}
        spaceBetween={24}
        centeredSlides={true}
      >
        {data.map((item, index) => (
          <SwiperSlide
            className="carousel__swiperSlide flex flex-row justify-center items-center md:py-[20px]"
            key={index}
          >
            <div className="carousel__box flex flex-col justify-center items-start pt-[11.5px] pb-[21.94px] px-[11.53px] border-2 border-[#EBEBEB] bg-white rounded-[16px] md:px-[23px] md:pt-[22px] md:pb-[22px] md:rounded-[40px]">
              <div className="carousel__top-box">
                <img
                  className="carousel__image relative rounded-[11.78px] object-cover md:rounded-[24px]"
                  src={item.locationImage}
                  alt={item.locationDescription}
                />
                <div className="carousel__image-info-box absolute top-[30.33px] left-[27.25px] flex flex-row justify-center items-center gap-1 bg-white/40 border-[2px] border-[#B6B6B6] rounded-[24.55px] px-2.5 py-2 md:rounded-[50px] md:left-[50px] md:top-[60px] md:px-[10px]">
                  <img
                    className="carousel__location-icon object-contain w-[12.56px] h-[12.56px] md:w-[16px] md:h-[16px]"
                    src={item.locationIcon}
                    alt="location__icon"
                  />
                  <p className="carousel__location-text text-white font-medium text-[10.48px] tracking-tighter-[-2%] md:text-[14px] md:tracking-tighter-[-2%]">
                    {item.locationText}
                  </p>
                </div>
              </div>
              <div className="carousel__bottom-box w-full flex flex-col justify-center items-start">
                <h4 className="carousel__location-title font-medium text-[18.87px] text-[#323232] mt-[6.2px] mb-[11.28px] md:text-[22px] md:mt-[20px]">
                  {item.locationTitle}
                </h4>
                <p className="carousel__price-text font-semibold text-[14.67px] text-[#323232] md:text-[22px]">
                  {item.locationPrice}
                </p>
                <div className="carousel__lists-main-box w-full flex flex-row justify-between items-end mt-[21.26px]">
                  <div className="carousel__lists-box flex flex-col justify-center items-start gap-[5.95px] md:gap-[16px]">
                    {item.locationDetails.map((detail, idx) => (
                      <div
                        className="carousel__lists-mini-boxes flex flex-row justify-center items-center gap-2"
                        key={idx}
                      >
                        <img
                          className="carousel__list-icons object-contain w-[14.67px] h-[14.67px] md:w-[24px] md:h-[24px]"
                          src={item.locationTickIcon}
                          alt="tick__icon"
                        />
                        <p className="carousel__texts font-normal text-[12.58px] tracking-tighter-[2%] text-[#323232] md:text-[18px]">
                          {detail}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="carousel__button">
                    <BookingButton>
                      {t("home_carousel.home_carousel-button")}
                    </BookingButton>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
