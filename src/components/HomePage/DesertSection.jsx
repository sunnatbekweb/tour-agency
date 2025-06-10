"use client";
import { useTranslations } from "next-intl";
import "./DesertSection.css";
export default function DesertSection() {
  const t = useTranslations();
  return (
    <div>
      <section className="desert mt-[40px] md:mt-[64px] lg:mt-[100px]">
        <div className="container desert__container flex flex-col justify-center items-start gap-2 px-6 md:gap-4 md:px-9">
          <p className="desert__text font-medium text-[16px] leading-[100%] text-[#A5958B] uppercase md:text-[24px]">
            {t("home_desert.home_desert-text")}
          </p>
          <div className="desert__bottom-box w-full flex flex-col justify-center items-start gap-6 md:gap-[56px] 2xl:flex 2xl:flex-row 2xl:justify-between 2xl:items-start">
            <h2 className="desert__bottom-title w-full font-medium text-[32px] leading-[40px] text-[#323232] uppercase md:text-[56px] md:leading-[60px] lg:w-[751px]">
              {t("home_desert.home_desert-title")}
            </h2>
            <p className="desert__bottom-text w-full font-medium text-[12px] leading-[16px] text-[#323232] md:text-[24px] md:leading-[32px] lg:w-[553px]">
              {t("home_desert.home_desert-second-text")}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
