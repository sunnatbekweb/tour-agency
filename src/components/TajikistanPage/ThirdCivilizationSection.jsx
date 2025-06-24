import "./ThirdCivilizationSection.css";
import { useTranslations } from "use-intl";
export default function ThirdCivilizationSection() {
  const t = useTranslations();
  return (
    <div>
      <section className="thirdCivilization mt-10 md:mt-[64px] xl:mt-[100px]">
        <div className="container thirdCivilization__container w-full flex flex-col justify-center items-start px-6 gap-8 md:px-9 xl:gap-[56px]">
          <div className="thirdCivilization__top-box flex flex-col justify-center items-start gap-2 md:gap-4">
            <p className="thirdCivilization__top-title text-[16px] leading-[100%] text-[#A5958B] uppercase md:text-[24px]">
              {t(
                "destinations.tajikistan.tajikistan__civilization.civilization__title"
              )}
            </p>
            <h2 className="thirdCivilization__top-text w-full font-medium text-[22px] leading-[30px] text-[#323232] uppercase md:w-[620px] md:text-[36px] md:leading-[40px] lg:w-[642px] xl:text-[40px] xl:leading-[46px]">
              {t(
                "destinations.tajikistan.tajikistan__civilization.civilization__text"
              )}
            </h2>
          </div>
          <div className="thirdCivilization__bottom-box w-full flex flex-col justify-center items-start bg-[#E5DFDC] rounded-[10px] py-[23px] px-4 md:px-[24px] md:py-[24px] md:rounded-[24px] xl:px-[48px] xl:py-[48px] 2xl:flex 2xl:flex-row 2xl:justify-between 2xl:gap-[50px] 2xl:items-start 2xl:px-[32px] 2xl:py-[32px] 2xl:h-full">
            <div className="">
              <h4 className="thirdCivilization__bottom-title text-[#323232] font-medium text-[22px] leading-[100%] mb-3 md:text-[40px] md:leading-[100%] md:mb-[42px]">
                {t(
                  "destinations.tajikistan.tajikistan__civilization.civilization__bottom-title"
                )}
              </h4>
              <p className="thirdCivilization__bottom-text w-full text-[#878787] text-[14px] font-medium leading-[18px] mb-6 md:text-[24px] md:leading-[32px] md:mb-10 2xl:mb-[30px] 2xl:text-[24px] 2xl:leading-[32px] 2xl:w-[550px]">
                {t(
                  "destinations.tajikistan.tajikistan__civilization.civilization__bottom-text"
                )}
              </p>
              <p className="thirdCivilization__bottom-second-text w-full text-[#878787] text-[14px] font-medium leading-[18px] mb-8 md:text-[24px] md:leading-[32px] md:mb-20 2xl:text-[24px] 2xl:leading-[32px] 2xl:mb-0 2xl:w-[550px]">
                {t(
                  "destinations.tajikistan.tajikistan__civilization.civilization__bottom-second-text"
                )}
              </p>
            </div>
            <div className="thirdCivilization__bottom-box-images w-full">
              <div className="thirdCivilization__mini-bottom w-full flex flex-row justify-center items-start gap-[15px] md:gap-4 xl:gap-[30px] 2xl:flex 2xl:flex-row 2xl:justify-center 2xl:items-center">
                <img
                  className="thirdCivilization__bottom-left-image w-[50%] h-[219px] object-cover rounded-[8px] md:h-[553px] md:rounded-[25px] 2xl:w-[466px] xl:h-[561px] 2xl:h-[728px]"
                  src={"/images/tajikistan__first.jpg"}
                  alt={"images"}
                />
                <div className="thirdCivilization__bottom-right-image-box w-[50%] flex flex-col justify-center items-center gap-2 md:gap-4 xl:gap-[25px]">
                  <img
                    className="thirdCivilization__bottom-right-image w-full h-[105px] object-cover rounded-[8px] md:h-[268px] md:rounded-[24px] 2xl:w-[311px] 2xl:h-[351.5px]"
                    src={"/images/tajikistan__second.jpg"}
                    alt={"images"}
                  />
                  <img
                    className="thirdCivilization__bottom-right-image w-full h-[105px] object-cover rounded-[8px] md:h-[268px] md:rounded-[24px] 2xl:w-[311px] 2xl:h-[351.5px]"
                    src={"/images/tajikistan__third.jpg"}
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
