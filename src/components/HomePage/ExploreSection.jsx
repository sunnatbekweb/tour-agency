"use client";
import { useTranslations } from "use-intl";
import "./ExploreSection.css";
export default function ExploreSection() {
  const t = useTranslations();
  return (
    <div>
      <section className="explore mt-[40px] md:mt-[64px] lg:mt-[100px]">
        <div className="container explore__container flex flex-col justify-center items-start gap-2 px-6 md:gap-4 md:px-8">
          <p className="explore__text font-medium text-[16px] leading-[100%] text-[#A5958B] uppercase md:text-[24px]">
            {t("home_explore.home_explore-text")}
          </p>
          <div className="explore__bottom-box w-full flex flex-col justify-center items-start gap-6 md:gap-[56px] 2xl:flex 2xl:flex-row 2xl:justify-between 2xl:items-start">
            <h2 className="explore__bottom-title w-full font-medium text-[32px] leading-[40px] text-[#323232] uppercase md:text-[56px] md:leading-[60px] lg:w-[642px]">
              {t("home_explore.home_explore-title")}
            </h2>
            <p className="explore__bottom-text w-full font-medium text-[12px] leading-[16px] text-[#323232] md:text-[24px] md:leading-[32px] lg:w-[700px]">
              {t("home_explore.home_explore-second-text")}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
