"use client";
import React, { useState } from "react";
import { Map } from "../ui/Map";

export const XlCountry = () => {
  const [selectedCountry, setSelectedCountry] = useState("Uzbekistan");

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
          {selectedCountry && (
            <p className="mt-6 text-2xl text-[#555]">
              Selected: {selectedCountry}
            </p>
          )}
        </div>
        <div className="w-1/2">
          <Map
            onSelectCountry={setSelectedCountry}
            selectedCountry={selectedCountry}
          />
        </div>
      </div>
    </section>
  );
};
