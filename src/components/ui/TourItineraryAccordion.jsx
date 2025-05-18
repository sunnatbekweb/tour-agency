import React from "react";
import Image from "next/image";

export const TourItineraryAccordion = () => {
  return (
    <li className="introduction_list-item">
      <div className="accordion">
        <details className="accordion__details" name="introdution">
          <summary>
            <h3 className="accordion__title">
              <strong className="font-bold text-[#A5958B]">
                Day 1{" "}
              </strong>
              <span>Introduce Samarkand</span>
            </h3>
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
        <div className="accordion__content">
          <div className="accordion__content-body">
            <p className="text-xs md:text-base">
              Kazakhstan is the world&apos;s ninth-largest country by land area
              and the largest landlocked country. Hilly plateaus and plains
              account for nearly half its vast territory, with lowlands
              composing another third; its southern and eastern frontiers are
              composed of low mountainous regions. Kazakhstan has a population
              of 20 million and one of the lowest population densities in the
              world
            </p>
            <Image
              src={"/images/hystorical__samarkand.jpg"}
              width={250}
              height={220}
              alt="Accordion image"
              className="hidden lg:block"
            />
          </div>
        </div>
      </div>
    </li>
  );
};
