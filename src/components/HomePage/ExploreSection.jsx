"use client";
import { useTranslations } from "use-intl";
import "./ExploreSection.css";
export default function ExploreSection() {
  const t = useTranslations();
  return (
    <div>
      <section className="explore mt-[40px] md:mt-[64px] lg:mt-[100px]">
        <div className="container explore__container w-full flex flex-col justify-center items-start gap-2 px-6 md:gap-4 md:px-9">
          <p className="explore__text font-medium text-[16px] leading-[100%] text-[#A5958B] uppercase md:text-[24px]">
            {t("home_explore.home_explore-text")}
          </p>
          <div className="explore__bottom-box w-full flex flex-col justify-center items-start gap-6 md:gap-[36px] xl:w-full xl:flex xl:flex-row xl:justify-between xl:items-start xl:gap-0">
            <h2 className="explore__bottom-title w-full font-medium text-[22px] leading-[30px] text-[#323232] uppercase md:w-[620px] md:text-[36px] md:leading-[40px] lg:w-[642px] xl:text-[40px] xl:leading-[46px]">
              {t("home_explore.home_explore-title")}
            </h2>
            <p className="explore__bottom-text w-full font-medium text-[12px] leading-[16px] text-[#323232] md:text-[20px] md:leading-[28px] lg:w-[500px]">
              {t("home_explore.home_explore-second-text")}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
