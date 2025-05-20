"use client";
import "./SecondCarouselSection.css";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
export default function SecondCarouselSection() {
  const data = [
    {
      image: "/images/first__image.jpg",
      titles: "Splendor of Ancient Khiva",
      description: "images",
    },
    {
      image: "/images/second__image.jpg",
      titles: "Splendor of Ancient Khiva",
      description: "images",
    },
    {
      image: "/images/third__image.jpg",
      titles: "Elegance of Uzbek Traditions",
      description: "images",
    },
    {
      image: "/images/second__image.jpg",
      titles: "Traditional Colorful Crafts",
      description: "images",
    },
    {
      image: "/images/third__image.jpg",
      titles: "Elegance of Uzbek Traditions",
      description: "images",
    },
  ];
  return (
    <div style={{ direction: "ltr" }}>
      <section className="secondCarousel w-full mt-16 md:mt-[88px] lg:mt-[232px]">
        <div className="container w-full secondCarousel__container flex flex-row justify-between items-center px-6 md:px-9">
          <div className="swiper-button-left"></div>
          <div className="swiper-button-right"></div>
        </div>
        <Swiper
          className="secondCarousel__swiper flex flex-row justify-center items-center cursor-grab"
          navigation={{
            prevEl: ".swiper-button-left",
            nextEl: ".swiper-button-right",
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
              className="secondCarousel__swiperSlide flex flex-row justify-center items-center"
              key={index}
            >
              <div className="secondCarousel__box relative">
                <img
                  className="secondCarousel__images"
                  src={item.image}
                  alt={item.description}
                />
              </div>
              <p className="secondCarousel__image-texts rounded-b-[8px] font-medium text-white text-[32px] absolute bottom-[0px] py-[24px] pl-[24px] z-[1] bg-black/65 w-full md:rounded-b-[24px] md:pr-[56px] md:py-[56px] md:text-[48px] md:leading-[56px]">
                {item.titles}
              </p>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
}
