import { Link } from "@/i18n/navigation";
import "./MdRoadSection.css";
import RightChevron from "../../../public/icons/RightChevron";
import { useLocale, useTranslations } from "next-intl";
export default function MdRoadSection() {
  const locale = useLocale();
  const t = useTranslations();
  return (
    <div>
      <section className="mdRoad hidden md:mt-[60px] md:block xl:hidden">
        <div className="container mdRoad__container md:flex md:flex-col md:justify-center md:items-center md:px-6">
          <Link className="mdRoad-logo-link" href={"/"}>
            <img
              className="mdRoad__logo-image md:inline-block md:w-[140px] md:h-[77px] md:mb-[76px]"
              src={"/icons/gold__logo.svg"}
              alt="logo"
            />
          </Link>
          <div className="mdRoad__text-boxes md:flex md:flex-col md:justify-center md:items-center md:mb-[114px]">
            <h3 className="mdRoad__first-title text-center md:block md:font-medium md:text-[32px] md:leading-[38px] md:tracking-tighter-[-2%] md:uppercase md:text-[#323232] lg:text-[64px] lg:leading-[100%]">
              {locale === "en"
                ? "Explore and find yourself"
                : locale === "uz"
                  ? "Ipak yo'li sayohatida o'zingizni,"
                  : "Исследуйте и найдите себя"}
              <span className="block"></span>
              {locale === "en"
                ? "In Silk road Journey"
                : locale === "uz"
                  ? "kashf qiling va toping"
                  : "в путешествии по шелковому пути"}
            </h3>
          </div>
          <Link href={"/contact"}>
            <button className="mdRoad__button md:flex md:flex-row md:justify-center md:items-center md:gap-3.5 md:active:opacity-50">
              {t("home_unique.home_unique-button")}
              <RightChevron />
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
