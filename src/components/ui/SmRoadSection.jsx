import { Link } from "@/i18n/navigation";
import "./SmRoadSection.css";
import RightChevron from "../../../public/icons/RightChevron";
export default function SmRoadSection() {
  return (
    <div>
      <section className="smRoad mt-[74px]">
        <div className="container smRoad__container flex flex-col justify-center items-center px-6">
          <Link className="smRoad-logo-link" href={"/"}>
            <img
              className="smRoad__logo-image inline-block w-[80px] h-[44px] mb-[40px]"
              src={"/icons/gold__logo.svg"}
              alt="logo"
            />
          </Link>
          <div className="smRoad__text-boxes flex flex-col justify-center items-center mb-[80px]">
            <h3 className="smRoad__first-title block font-medium text-[32px] leading-[100%] tracking-tighter-[-2%] uppercase text-[#323232]">
              Explore and find{" "}
            </h3>
            <h3 className="smRoad__second-title block font-medium text-[32px] leading-[100%] tracking-tighter-[-2%] uppercase text-[#323232]">
              yourself In Silk
            </h3>
            <h3 className="smRoad__third-title block font-medium text-[32px] leading-[100%] tracking-tighter-[-2%] uppercase text-[#323232]">
              road Journey
            </h3>
          </div>

          <button className="smRoad__button flex flex-row justify-center items-center gap-3.5 active:opacity-50">
            Let’s travel
            <RightChevron />
          </button>
        </div>
      </section>
    </div>
  );
}
