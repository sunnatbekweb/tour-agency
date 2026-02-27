import { useTranslations } from "use-intl";
import "./SecondCivilizationSection.css";
export default function SecondCivilizationSection() {
  const t = useTranslations();
  return (
    <div>
      <section className="secondCivilization mt-10 md:mt-16 xl:mt-25">
        <div className="container secondCivilization__container w-full flex flex-col justify-center items-start px-6 gap-8 md:px-9 xl:gap-14">
          <div className="secondCivilization__top-box flex flex-col justify-center items-start gap-2 md:gap-4">
            <p className="secondCivilization__top-title text-[16px] leading-[100%] text-[#A5958B] uppercase md:text-[24px]">
              {t(
                "destinations.kazakhstan.kazakhstan__civilization.civilization__title"
              )}
            </p>
            <h2 className="secondCivilization__top-text w-full font-medium text-[22px] leading-7.5 text-[#323232] uppercase md:w-155 md:text-[36px] md:leading-10 lg:w-160.5 xl:text-[40px] xl:leading-11.5">
              {t(
                "destinations.kazakhstan.kazakhstan__civilization.civilization__text"
              )}
            </h2>
          </div>
          <div className="secondCivilization__bottom-box w-full flex flex-col justify-center items-start bg-[#E5DFDC] rounded-[10px] py-5.75 px-4 md:px-6 md:py-6 md:rounded-3xl xl:px-12 xl:py-12 2xl:flex 2xl:flex-row 2xl:justify-between 2xl:gap-12.5 2xl:items-start 2xl:px-8 2xl:py-8 2xl:h-full">
            <div className="">
              <h4 className="secondCivilization__bottom-title text-[#323232] font-medium text-[22px] leading-[100%] mb-3 md:text-[40px] md:leading-[100%] md:mb-10.5">
                {t(
                  "destinations.kazakhstan.kazakhstan__civilization.civilization__bottom-title"
                )}
              </h4>
              <p className="secondCivilization__bottom-text w-full text-[#878787] text-[14px] font-medium leading-4.5 mb-6 md:text-[24px] md:leading-8 md:mb-10 2xl:mb-7.5 2xl:text-[24px] 2xl:leading-8 2xl:w-137.5">
                {t(
                  "destinations.kazakhstan.kazakhstan__civilization.civilization__bottom-text"
                )}
              </p>
              <p className="secondCivilization__bottom-second-text w-full text-[#878787] text-[14px] font-medium leading-4.5 mb-8 md:text-[24px] md:leading-8 md:mb-20 2xl:text-[24px] 2xl:leading-8 2xl:mb-0 2xl:w-137.5">
                {t(
                  "destinations.kazakhstan.kazakhstan__civilization.civilization__bottom-second-text"
                )}
              </p>
            </div>
            <div className="secondCivilization__bottom-box-images w-full">
              <div className="secondCivilization__mini-bottom w-full flex flex-row justify-center items-start gap-3.75 md:gap-4 xl:gap-7.5 2xl:flex 2xl:flex-row 2xl:justify-center 2xl:items-center">
                <img
                  className="secondCivilization__bottom-left-image w-[50%] h-[219px] object-cover rounded-[8px] md:h-[553px] md:rounded-[25px] 2xl:w-[466px] xl:h-[561px] 2xl:h-[728px]"
                  src={"/images/kazakhstan__first.jpg"}
                  alt={"images"}
                />
                <div className="secondCivilization__bottom-right-image-box w-[50%] flex flex-col justify-center items-center gap-2 md:gap-4 xl:gap-[25px]">
                  <img
                    className="secondCivilization__bottom-right-image w-full h-[105px] object-cover rounded-[8px] md:h-[268px] md:rounded-[24px] 2xl:w-[311px] 2xl:h-[351.5px]"
                    src={"/images/kazakhstan__second.jpg"}
                    alt={"images"}
                  />
                  <img
                    className="secondCivilization__bottom-right-image w-full h-[105px] object-cover rounded-[8px] md:h-[268px] md:rounded-[24px] 2xl:w-[311px] 2xl:h-[351.5px]"
                    src={"/images/kazakhstan__third.jpg"}
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
