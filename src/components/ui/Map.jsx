"use client";
import React from "react";
import { Uzbekistan } from "./Maps/Uzbekistan";
import { Kazahstan } from "./Maps/Kazahstan";
import { Kyrgyzystan } from "./Maps/Kyrgyzystan";
import { Tadjikistan } from "./Maps/Tadjikistan";
import { Turkmenistan } from "./Maps/Turkmenistan";

export const Map = ({ onSelectCountry, selectedCountry }) => {
  return (
    <svg
      width="912"
      height="785"
      viewBox="0 0 912 785"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Uzbekistan
        onClickFn={() => onSelectCountry("Uzbekistan")}
        selected={selectedCountry === "Uzbekistan"}
      />
      <Kazahstan
        onClickFn={() => onSelectCountry("Kazakhstan")}
        selected={selectedCountry === "Kazakhstan"}
      />
      <Kyrgyzystan
        onClickFn={() => onSelectCountry("Kyrgyzstan")}
        selected={selectedCountry === "Kyrgyzstan"}
      />
      <Tadjikistan
        onClickFn={() => onSelectCountry("Tajikistan")}
        selected={selectedCountry === "Tajikistan"}
      />
      <Turkmenistan
        onClickFn={() => onSelectCountry("Turkmenistan")}
        selected={selectedCountry === "Turkmenistan"}
      />
    </svg>
  );
};
