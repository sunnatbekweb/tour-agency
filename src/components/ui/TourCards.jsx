import React from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useLocale } from "next-intl";

export const TourCards = ({ props }) => {
  const locale = useLocale();
  return (
    <div className="p-4 pb-6 border border-[#EBEBEB] rounded-4xl shadow-xl">
      <div className="rounded-xl lg:rounded-3xl overflow-hidden">
        <Image
          src={props.map_image}
          width={300}
          height={180}
          className="w-full"
          alt="Trip image"
        />
      </div>
      <div className="pt-6 flex flex-col justify-end">
        <div className="text-[#323232] mb-5">
          <div className="flex items-center gap-x-4 justify-between mb-4">
            <h4 className="font-semibold text-xl lg:text-2xl line-clamp-1">
              {props.title}
            </h4>
            <div className="flex items-center gap-x-3">
              <Image
                src={"/icons/star.svg"}
                width={24}
                height={24}
                alt="Star"
              />
              <span className="font-semibold text-xl text-[#323232]">5.5</span>
            </div>
          </div>
          <p className="font-medium text-sm md:text-base lg:text-xl line-clamp-2 mb-4">
            Traveling privately on a custom itinerary means flexibility.
          </p>
          <span className="font-semibold text-base lg:text-xl text-[#323232]">
            ${props.price}
          </span>
        </div>
        <div className="flex flex-col 2xl:flex-row items-end gap-x-3">
          <ul className="w-full 2xl:w-1/2 flex flex-col gap-y-1">
            <li className="flex items-center gap-3">
              <Image
                src={"/icons/card_checkbox.svg"}
                width={20}
                height={20}
                alt="checkbox icon"
              />
              <span className="font-medium">{props?.[`text1_${locale}`]}</span>
            </li>
            <li className="flex items-center gap-3">
              <Image
                src={"/icons/card_checkbox.svg"}
                width={20}
                height={20}
                alt="checkbox icon"
              />
              <span className="font-medium">{props?.[`text2_${locale}`]}</span>
            </li>
            <li className="flex items-center gap-3">
              <Image
                src={"/icons/card_checkbox.svg"}
                width={20}
                height={20}
                alt="checkbox icon"
              />
              <span className="font-medium">{props?.[`text3_${locale}`]}</span>
            </li>
          </ul>
          <Link href={`/trip/${props.id}`} className="w-full 2xl:w-1/2">
            <button className="w-full h-[36px] bg-[#B4A297] rounded-4xl font-medium text-white text-base mt-8 ml-auto ">
              Booking
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
