import { useLocale, useTranslations } from "next-intl";
import "./CivilizationSection.css";
export default function CivilizationSection({ props }) {
  const t = useTranslations();
  const locale = useLocale();
  return (
    <div>
      <section className="civilization mt-10 md:mt-[64px] xl:mt-[100px]">
        <div className="container civilization__container w-full flex flex-col justify-center items-start px-6 md:px-9">
          <div className="civilization__top-box flex flex-col justify-center items-start gap-2 md:gap-4 xl:gap-[32px]">
            <p className="civilization__top-title text-[#A5958B] font-medium text-[18px] leading-[100%] uppercase md:text-[24px]">
              {t("destinations.about")}
            </p>
            <h2 className="civilization__top-text font-medium text-[32px] leading-[40px] text-[#323232] uppercase mb-8 md:text-[56px] md:leading-[100%] xl:text-[64px] xl:mb-[80px] xl:w-[963px]">
              {props?.title}
            </h2>
          </div>
          <div className="civilization__bottom-box w-full flex flex-col justify-center items-start bg-[#E5DFDC] rounded-[10px] py-[23px] px-4 md:px-[24px] md:py-[24px] md:rounded-[24px] xl:px-[48px] xl:py-[48px] 2xl:flex 2xl:flex-row 2xl:justify-between 2xl:gap-[50px] 2xl:items-start 2xl:px-[32px] 2xl:py-[32px] 2xl:h-full">
            <div className="">
              <h4 className="civilization__bottom-title text-[#323232] font-medium text-[22px] leading-[100%] mb-3 md:text-[48px] md:leading-[100%] md:mb-[42px]">
                {locale === "en" ? "About" : locale === "ru" ? "O" : ""}{" "}
                <span className="capitalize">
                  {props?.country_name}
                  {locale === "ru" && "е"}
                </span>{" "}
                {locale === "uz" && "haqida"}
              </h4>
              <p className="civilization__bottom-text w-full text-[#878787] text-[14px] font-medium leading-[18px] mb-6 md:text-[32px] md:leading-[40px] md:mb-10 2xl:mb-[30px] 2xl:text-[24px] 2xl:leading-[32px] 2xl:w-[550px]">
                {props?.text1}
              </p>
              <p className="civilization__bottom-second-text w-full text-[#878787] text-[14px] font-medium leading-[18px] mb-8 md:text-[32px] md:leading-[40px] md:mb-20 2xl:text-[24px] 2xl:leading-[32px] 2xl:mb-0 2xl:w-[550px]">
                {props?.text1}
              </p>
            </div>
            <div className="civilization__bottom-box-images w-full">
              <div className="civilization__mini-bottom w-full flex flex-row justify-center items-start gap-[15px] md:gap-4 xl:gap-[30px] 2xl:flex 2xl:flex-row 2xl:justify-center 2xl:items-center">
                <img
                  className="civilization__bottom-left-image w-[50%] h-[219px] object-cover rounded-[8px] md:h-[553px] md:rounded-[25px] 2xl:w-[466px] xl:h-[561px] 2xl:h-[728px]"
                  src={props?.image1}
                  alt={"images"}
                />
                <div className="civilization__bottom-right-image-box w-[50%] flex flex-col justify-center items-center gap-2 md:gap-4 xl:gap-[25px]">
                  <img
                    className="civilization__bottom-right-image w-full h-[105px] object-cover rounded-[8px] md:h-[268px] md:rounded-[24px] 2xl:w-[311px] 2xl:h-[351.5px]"
                    src={props?.image2}
                    alt={"images"}
                  />
                  <img
                    className="civilization__bottom-right-image w-full h-[105px] object-cover rounded-[8px] md:h-[268px] md:rounded-[24px] 2xl:w-[311px] 2xl:h-[351.5px]"
                    src={props?.image3}
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
