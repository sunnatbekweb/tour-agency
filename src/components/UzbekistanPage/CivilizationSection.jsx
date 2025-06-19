import { useLocale, useTranslations } from "next-intl";
import "./CivilizationSection.css";
export default function CivilizationSection({ props }) {
  const t = useTranslations();
  const locale = useLocale();
  return (
    <div>
      <section className="civilization mt-10 md:mt-[64px] xl:mt-[100px]">
        <div className="container civilization__container w-full flex flex-col justify-center items-start px-6 gap-10 md:px-9 xl:gap-[60px]">
          <div className="civilization__top-box flex flex-col justify-center items-start gap-2 md:gap-4">
            <p className="civilization__top-title font-medium text-[16px] leading-[100%] text-[#A5958B] uppercase md:text-[24px]">
              {t("destinations.about")}
            </p>
            <h2 className="civilization__top-text w-full font-medium text-[22px] leading-[30px] text-[#323232] uppercase md:w-[620px] md:text-[36px] md:leading-[40px] lg:w-[642px] xl:text-[40px] xl:leading-[46px]">
              {props?.title}
            </h2>{" "}
          </div>
          <div className="civilization__bottom-box w-full grid grid-cols-1 bg-[#E5DFDC] rounded-[10px] py-[23px] px-4 md:px-[24px] md:py-[24px] md:rounded-[24px] xl:px-[48px] xl:py-[48px] 2xl:grid-cols-2 2xl:gap-[50px] 2xl:px-[32px] 2xl:py-[32px] 2xl:h-full">
            <div className="">
              <h4 className="civilization__bottom-title text-[#323232] font-medium text-[22px] leading-[100%] mb-3 md:text-[38px] md:leading-[100%] md:mb-[42px]">
                {locale === "en" ? "About" : locale === "ru" ? "O" : ""}{" "}
                <span className="capitalize">
                  {props?.country_name}
                  {locale === "ru" && "е"}
                </span>{" "}
                {locale === "uz" && "haqida"}
              </h4>
              <p
                title={props?.text1}
                className="civilization__bottom-text w-full 2xl:line-clamp-[8] text-[#878787] text-[14px] font-medium mb-4 md:text-lg md:mb-6 2xl:text-2xl"
              >
                {props?.text1}
              </p>
              <p
                title={props?.text2}
                className="civilization__bottom-second-text w-full 2xl:line-clamp-[8] text-[#878787] text-[14px] font-medium mb-6 md:text-lg md:mb-10 2xl:text-2xl 2xl:mb-0"
              >
                {props?.text1}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 xl:gap-[30px] w-full h-full">
              <div className="row-span-2 h-full">
                <img
                  className="w-full h-full object-cover rounded-[8px] md:rounded-[25px]"
                  src={props?.image3}
                  alt="image"
                />
              </div>
              <div className="flex flex-col gap-4 xl:gap-[25px] h-[calc(100%+15px)] xl:h-[calc(100%+30px)]">
                <img
                  className="w-full h-1/2 object-cover rounded-[8px] md:rounded-[25px]"
                  src={props?.image2}
                  alt="image"
                />
                <img
                  className="w-full h-1/2 object-cover rounded-[8px] md:rounded-[25px]"
                  src={props?.image1}
                  alt="image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
