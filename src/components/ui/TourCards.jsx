import React from 'react';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { useLocale } from 'next-intl';

export const TourCards = ({ props }) => {
  const locale = useLocale();
  function truncateText(text, maxLength) {
    if (!text) return '';
    return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
  }

  return (
    <div className="p-4 pb-6 border border-[#EBEBEB] rounded-4xl shadow-xl">
      <div className="h-[200px] xl:h-[320px] rounded-xl lg:rounded-3xl overflow-hidden">
        <Image
          src={props.map_image}
          width={300}
          height={180}
          className="w-full h-full object-cover object-center"
          alt="Trip image"
        />
      </div>
      <div className="pt-6 flex flex-col justify-end">
        <div className="text-[#323232] mb-5">
          <div className="flex items-center gap-x-4 justify-between mb-4">
            <h4 className="w-[80%] font-semibold text-xl lg:text-2xl line-clamp-1">
              {props.title}
            </h4>
            <div className="w-[20%] flex items-center justify-end gap-x-3">
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
          <span className="font-semibold text-base lg:text-xl text-[#323232]">${props.price}</span>
        </div>
        <div className="flex flex-col 2xl:flex-row items-end gap-x-3">
          <ul className="w-full 2xl:w-1/2 flex flex-col gap-y-1">
            {[...Array(3)].map((_, index) => (
              <li key={index} className="flex items-center gap-3">
                <Image
                  src={'/icons/card_checkbox.svg'}
                  width={20}
                  height={20}
                  alt="checkbox icon"
                />
                <span
                  className="font-medium text-sm md:text-base lg:text-xl hidden 2xl:block"
                  title={props?.[`text${index + 1}_${locale}`]}
                >
                  {truncateText(props?.[`text${index + 1}_${locale}`], 13)}
                </span>
                <span
                  className="font-medium text-sm md:text-base lg:text-xl line-clamp-1 2xl:hidden"
                  title={props?.[`text${index + 1}_${locale}`]}
                >
                  {props?.[`text${index + 1}_${locale}`]}
                </span>
              </li>
            ))}
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
