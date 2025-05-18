import React from "react";
import Image from "next/image";

export const TourInfoItem = ({ icon, title, text }) => {
  return (
    <div className="flex gap-x-4 w-fit">
      <div className="min-w-4 md:min-w-8 h-4 md:h-8 rounded-full bg-[#A5958B] grid place-content-center">
        <Image
          src={icon}
          width={16}
          height={16}
          className="w-2 h-2 md:h-4 md:w-4"
          alt="icon"
        />
      </div>
      <div className="flex flex-col gap-y-3">
        <h3 className="font-bold text-xs md:text-lg lg:text-2xl">{title}</h3>
        <p className="flex items-center gap-x-3 text-xs md:text-lg lg:text-2xl">
          {text}
        </p>
      </div>
    </div>
  );
};
