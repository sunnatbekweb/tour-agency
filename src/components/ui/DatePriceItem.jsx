import React from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

export const DatePriceItem = ({ props }) => {
  const locale = useLocale();
  const t = useTranslations();
  return (
    <li className="data-price_list-item">
      <div className="accordion">
        <details className="accordion__details" name="introdution">
          <summary>
            <h3 className="accordion__title">{props?.[`title_${locale}`]}</h3>
            <span className="accordion-icon">
              <div
                className={`question__right-icon-box w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 rounded-full flex flex-row justify-center items-center bg-[#F0ECEA]`}
              >
                <Image
                  src={"/icons/close__chevron.svg"}
                  width={22}
                  height={22}
                  alt="toggle icon"
                  className="question__right-icon w-3 h-3 md:w-4 md:h-4 lg:w-6 lg:h-6 object-contain -rotate-90"
                />
              </div>
            </span>
          </summary>
        </details>
        <div className="accordion__content font-medium">
          <div className="accordion__content-body">
            <div className="accordion__content-body-item flex flex-col gap-y-6 md:gap-y-8">
              <div className="flex flex-col gap-y-2 md:gap-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="md:text-2xl text-[#878787]">
                    {props?.[`dates_${locale}`]}
                  </h4>
                  <button
                    className={`w-[85px] md:w-[150px] py-2 rounded-2xl text-xs md:text-lg ${props?.ticket_type === "sold_out" ? "bg-[#A5958B] font-bold text-white" : "bg-[#F0ECEA] font-medium text-[#A5958B]"}`}
                  >
                    {props?.ticket_type === "sold_out"
                      ? t("trip_finder.trip_detail.sold_out")
                      : t("trip_finder.trip_detail.avilable")}
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-y-1">
                {[...Array(1)].map((_, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between text-[#878787]"
                  >
                    <h5 className="text-sm md:text-lg">
                      {t("trip_finder.trip_detail.occupancy")}
                    </h5>
                    <span className="text-lg md:text-2xl">
                      ${props?.tour_double_occupancy_price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
