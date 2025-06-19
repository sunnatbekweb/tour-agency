"use client";
import { useTranslations } from "next-intl";
import "./DesertSection.css";
export default function DesertSection() {
  const t = useTranslations();
  return (
    <div>
      <section className="desert mt-[40px] md:mt-[80px] lg:mt-[100px]">
        <div className="container desert__container flex flex-col justify-center items-start gap-2 px-6 md:gap-4 md:px-9">
          <p className="desert__text font-medium text-[16px] leading-[100%] text-[#A5958B] uppercase md:text-[24px]">
            {t("home_desert.home_desert-text")}
          </p>
          <div className="desert__bottom-box w-full flex flex-col justify-center items-start gap-6 md:gap-[36px] xl:flex xl:flex-row xl:justify-between xl:items-start xl:gap-0">
            <h2 className="desert__bottom-title w-full font-medium text-xl text-[#323232] uppercase md:w-[620px] md:text-2xl lg:w-[620px] xl:text-4xl">
              {t("home_desert.home_desert-title")}
            </h2>
            <p className="desert__bottom-text w-full font-medium text-sm text-[#323232] md:text-xl lg:w-[500px]">
              {t("home_desert.home_desert-second-text")}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
