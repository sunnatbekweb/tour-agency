import "./HeroSixthSection.css";
import ContactButton from "../ui/ContactButton";
import { useTranslations } from "use-intl";
export default function HeroSixthSection() {
  const t = useTranslations();
  return (
    <div>
      <section className="heroSixth">
        <div className="container heroSixth__container flex flex-col justify-center items-center min-h-screen px-6 xl:pt-[100px] md:px-9">
          <h2 className="heroSixth__title font-medium uppercase text-[40px] leading-[48px] text-white mb-4 md:text-[62px] md:leading-[70px] lg:capitalize">
            {t("destinations.turkmenistan.turkmenistan__hero.hero__title")}
          </h2>
          <p className="heroSixth__text font-medium uppercase sm:normal-case w-full text-[16px] tracking-tighter-[-2%] text-white mb-[101px] text-center sm:w-3/4 md:w-[60%] md:text-[32px] lg:w-[45%] xl:w-full md:text-4xl md:mb-[168px] lg:mb-[268px] xl:mb-[50px]">
            {t("destinations.turkmenistan.turkmenistan__hero.hero__text")}
          </p>
          <div className="heroSixth__button 2xl:hidden">
            <ContactButton>{t("header.contact")}</ContactButton>
          </div>
        </div>
      </section>
    </div>
  );
}
