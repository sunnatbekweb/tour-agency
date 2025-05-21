import { Link } from "@/i18n/navigation";
import "./MdRoadSection.css";
import RightChevron from "../../../public/icons/RightChevron";
export default function MdRoadSection() {
  return (
    <div>
      <section className="mdRoad md:mt-[160px]">
        <div className="container mdRoad__container md:flex md:flex-col md:justify-center md:items-center md:px-6">
          <Link className="mdRoad-logo-link" href={"/"}>
            <img
              className="mdRoad__logo-image md:inline-block md:w-[140px] md:h-[77px] md:mb-[76px]"
              src={"/icons/gold__logo.svg"}
              alt="logo"
            />
          </Link>
          <div className="mdRoad__text-boxes md:flex md:flex-col md:justify-center md:items-center md:mb-[114px]">
            <h3 className="mdRoad__first-title md:block md:font-medium md:text-[32px] md:leading-[38px] md:tracking-tighter-[-2%] md:uppercase md:text-[#323232] lg:text-[64px] lg:leading-[100%]">
              Explore and find yourself
            </h3>
            <h3 className="mdRoad__second-title md:block md:font-medium md:text-[32px] md:leading-[38px] md:tracking-tighter-[-2%] md:uppercase md:text-[#323232] lg:text-[64px] lg:leading-[100%]">
              in Silk road Journey
            </h3>
          </div>
          <button className="mdRoad__button md:flex md:flex-row md:justify-center md:items-center md:gap-3.5 md:active:opacity-50">
            Let’s travel
            <RightChevron />
          </button>
        </div>
      </section>
    </div>
  );
}
