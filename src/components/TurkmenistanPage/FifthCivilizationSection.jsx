"use client";
import "./FifthCivilizationSection.css";
import { useTranslations } from "next-intl";
export default function FifthCivilizationSection() {
  const t = useTranslations();
  return (
    <div>
      <section className="fifthCivilization mt-10 md:mt-16 xl:mt-25">
        <div className="container fifthCivilization__container w-full flex flex-col justify-center items-start px-6 gap-8 md:px-9 xl:gap-14">
          <div className="fifthCivilization__top-box flex flex-col justify-center items-start gap-2 md:gap-4">
            <p className="fifthCivilization__top-title text-[16px] leading-[100%] text-[#A5958B] uppercase md:text-[24px]">
              {t(
                "destinations.turkmenistan.turkmenistan__civilization.civilization__title"
              )}
            </p>
            <h2 className="fifthCivilization__top-text w-full font-medium text-[22px] leading-7.5 text-[#323232] uppercase md:w-155 md:text-[36px] md:leading-10 lg:w-160 xl:text-[40px] xl:leading-11.5">
              {t(
                "destinations.turkmenistan.turkmenistan__civilization.civilization__text"
              )}
            </h2>
          </div>
          <div className="fifthCivilization__bottom-box w-full flex flex-col justify-center items-start bg-[#E5DFDC] rounded-[10px] py-5.75 px-4 md:p-6 md:rounded-3xl xl:p-12 2xl:flex 2xl:flex-row 2xl:justify-between 2xl:gap-12.5 2xl:items-start 2xl:p-8 2xl:h-full">
            <div className="">
              <h4 className="fifthCivilization__bottom-title text-[#323232] font-medium text-[22px] leading-[100%] mb-3 md:text-[40px] md:leading-[100%] md:mb-10.5">
                {t(
                  "destinations.turkmenistan.turkmenistan__civilization.civilization__bottom-title"
                )}
              </h4>
              <p className="fifthCivilization__bottom-text w-full text-[#878787] text-[14px] font-medium leading-4.5 mb-6 md:text-[24px] md:leading-8 md:mb-10 2xl:mb-7.5 2xl:text-[24px] 2xl:leading-8 2xl:w-137.5">
                {t(
                  "destinations.turkmenistan.turkmenistan__civilization.civilization__bottom-text"
                )}
              </p>
              <p className="fifthCivilization__bottom-second-text w-full text-[#878787] text-[14px] font-medium leading-4.5 mb-8 md:text-[24px] md:leading-8 md:mb-20 2xl:text-[24px] 2xl:leading-8 2xl:mb-0 2xl:w-137.5">
                {t(
                  "destinations.turkmenistan.turkmenistan__civilization.civilization__bottom-second-text"
                )}
              </p>
            </div>
            <div className="fifthCivilization__bottom-box-images w-full">
              <div className="fifthCivilization__mini-bottom w-full flex flex-row justify-center items-start gap-3.75 md:gap-4 xl:gap-7.5 2xl:flex 2xl:flex-row 2xl:justify-center 2xl:items-center">
                <img
                  className="fifthCivilization__bottom-left-image w-[50%] h-55 object-cover rounded-lg md:h-138.25 md:rounded-[25px] 2xl:w-116 xl:h-140 2xl:h-182"
                  src={"/images/turkmenistan__first.jpg"}
                  alt={"images"}
                />
                <div className="fifthCivilization__bottom-right-image-box w-[50%] flex flex-col justify-center items-center gap-2 md:gap-4 xl:gap-6.25">
                  <img
                    className="fifthCivilization__bottom-right-image w-full h-26.25 object-cover rounded-lg md:h-67 md:rounded-3xl 2xl:w-77 2xl:h-86"
                    src={"/images/turkmenistan__second.jpg"}
                    alt={"images"}
                  />
                  <img
                    className="fifthCivilization__bottom-right-image w-full h-26.25 object-cover rounded-lg md:h-67 md:rounded-3xl 2xl:w-75 2xl:h-[351.5px]"
                    src={"/images/turkmenistan__third.jpg"}
                    alt={"images"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
