"use client";

import { Link } from "@/i18n/navigation";
import "./UniqueSection.css";
import RightChevron from "../../../public/icons/RightChevron.jsx";
import { useTranslations } from "next-intl";
export default function UniqueSection() {
  const t = useTranslations("craft_adventure");
  return (
    <div>
      <section className="unique">
        <div className="container unique__container flex flex-col justify-center items-center min-h-screen">
          <Link>
            <img
              className="unique__logo-image inline-block mb-[123px] w-[80px] h-[44px] md:w-[140px] md:h-[77px] md:mb-[140px] xl:mb-[114px]"
              src="icons/logo.svg"
              alt="logo__image"
            />
          </Link>
          <div className="w-full sm:w-[80%] md:w-full xl:w-3/4">
            <p className="unique__text font-medium text-[24px] leading-[24px] text-white mb-2 md:text-[40px] md:leading-[60px] text-center">
              {t("subtitle")}
            </p>
            <h3 className="unique__title font-medium text-[40px] text-white text-center mb-[100px] md:text-6xl lg:text-[72px] md:mb-[120px] xl:mb-[80px]">
              {t("title")}
            </h3>
          </div>
          <button className="unique__button flex flex-row justify-center items-center gap-3.5 active:opacity-50">
            {t("button")}
            <RightChevron />
          </button>
        </div>
      </section>
    </div>
  );
}
