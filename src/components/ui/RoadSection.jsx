import { Link } from "@/i18n/navigation";
import "./RoadSection.css";
import RightChevron from "../../../public/icons/RightChevron";
export default function RoadSection() {
  return (
    <div>
      <section className="road xl:mt-[282px]">
        <div className="container road__container xl:flex xl:flex-col xl:justify-center xl:items-center xl:px-6">
          <Link className="road-logo-link" href={"/"}>
            <img
              className="road__logo-image xl:inline-block xl:w-[140px] xl:h-[77px] xl:mb-[76px]"
              src={"/icons/gold__logo.svg"}
              alt="logo"
            />
          </Link>
          <div className="road__text-boxes xl:flex xl:flex-col xl:justify-center xl:items-center xl:mb-[114px]">
            <h3 className="road__first-title xl:block xl:font-medium xl:text-[64px] xl:leading-[100%] xl:tracking-tighter-[-2%] xl:uppercase xl:text-[#323232]">
              Explore and find yourself
            </h3>
            <h3 className="road__second-title xl:block xl:font-medium xl:text-[64px] xl:leading-[100%] xl:tracking-tighter-[-2%] xl:uppercase xl:text-[#323232]">
              In Silk road Journey
            </h3>
          </div>
          <button className="road__button xl:flex xl:flex-row xl:justify-center xl:items-center xl:gap-3.5 xl:active:opacity-50">
            Let’s travel
            <RightChevron />
          </button>
        </div>
      </section>
    </div>
  );
}
