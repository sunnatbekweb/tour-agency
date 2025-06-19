import { Link } from "@/i18n/navigation";
import RightChevron from "../../../public/icons/RightChevron";
import { useLocale, useTranslations } from "next-intl";
import "./RoadSection.css";
export default function RoadSection() {
  const t = useTranslations();
  const locale = useLocale();
  return (
    <div>
      <section className="road hidden xl:w-full xl:block">
        <div className="container road__container xl:flex xl:flex-col xl:justify-center xl:items-center xl:px-6">
          <Link className="road-logo-link" href={"/"}>
            <img
              className="road__logo-image xl:inline-block xl:w-[140px] xl:h-[77px] xl:mb-[76px]"
              src={"/icons/gold__logo.svg"}
              alt="logo"
            />
          </Link>
          <div className="road__text-boxes xl:flex xl:flex-col xl:justify-center xl:items-center xl:mb-[114px]">
            <h3 className="road__first-title text-center xl:block xl:font-medium  md:text-[72px] md:leading-[80px] xl:tracking-tighter-[-2%] xl:uppercase xl:text-[#323232]">
              {locale === "en"
                ? "Explore and find yourself"
                : locale === "uz"
                  ? "Ipak yo'li sayohatida o'zingizni,"
                  : "Исследуйте и найдите себя"}
            </h3>
            <h3 className="road__second-title text-center xl:block xl:font-medium  md:text-[72px] md:leading-[80px] xl:tracking-tighter-[-2%] xl:uppercase xl:text-[#323232]">
              {locale === "en"
                ? "In Silk road Journey"
                : locale === "uz"
                  ? "kashf qiling va toping"
                  : "в путешествии по шелковому пути"}
            </h3>
          </div>
          <Link href={"/contact"}>
            <button className="road__button xl:flex xl:flex-row xl:justify-center xl:items-center xl:gap-3.5 xl:active:opacity-50">
              {t("home_unique.home_unique-button")}
              <RightChevron />
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
