import { Link } from "@/i18n/navigation";
import RightChevron from "../../../public/icons/RightChevron";
import { useLocale, useTranslations } from "next-intl";
import "./SmRoadSection.css";
export default function SmRoadSection() {
  const t = useTranslations();
  const locale = useLocale();
  return (
    <div>
      <section className="smRoad mt-[74px] md:hidden">
        <div className="container smRoad__container flex flex-col justify-center items-center px-6">
          <Link className="smRoad-logo-link" href={"/"}>
            <img
              className="smRoad__logo-image inline-block w-[80px] h-[44px] mb-[40px]"
              src={"/icons/gold__logo.svg"}
              alt="logo"
            />
          </Link>
          <div className="smRoad__text-boxes flex flex-col justify-center items-center mb-[80px]">
            <h3 className="smRoad__first-title text-center block font-medium text-[32px] leading-[100%] tracking-tighter-[-2%] uppercase text-[#323232]">
              {locale === "en"
                ? "Explore and find yourself"
                : locale === "uz"
                  ? "Ipak yo'li sayohatida o'zingizni,"
                  : "Исследуйте и найдите себя"}
            </h3>
            <h3 className="smRoad__third-title text-center block font-medium text-[32px] leading-[100%] tracking-tighter-[-2%] uppercase text-[#323232]">
              {locale === "en"
                ? "In Silk road Journey"
                : locale === "uz"
                  ? "kashf qiling va toping"
                  : "в путешествии по шелковому пути"}
            </h3>
          </div>
          <Link href={"/contact"}>
            <button className="smRoad__button flex flex-row justify-center items-center gap-3.5 active:opacity-50">
              {t("home_unique.home_unique-button")}
              <RightChevron />
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
