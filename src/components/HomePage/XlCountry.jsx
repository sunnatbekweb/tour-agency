import React from "react";
import { Map } from "../ui/Map";

export const XlCountry = () => {
  return (
    <section className="py-[120px] font-medium">
      <div className="container flex items-center px-6">
        <div className="w-1/2">
          <span className="text-xl text-[#A5958B] uppercase">
            see your own adventure
          </span>
          <h2 className="mt-8 text-6xl text-[#323232] uppercase">
            Unveil Central Asia’s Hidden Wonders
          </h2>
        </div>
        <div className="w-1/2">
          <Map />
        </div>
      </div>
    </section>
  );
};
