"use client";
import React from "react";
import { Uzbekistan } from "./maps/Uzbekistan";
import { Kazahstan } from "./maps/Kazahstan";
import { Kyrgyzystan } from "./maps/Kyrgyzystan";
import { Tadjikistan } from "./maps/Tadjikistan";
import { Turkmenistan } from "./maps/Turkmenistan";

export const Map = ({ onSelectCountry, selectedCountry }) => {
  return (
    <svg
      width="712"
      height="785"
      viewBox="0 0 912 785"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Uzbekistan
        onClickFn={() => onSelectCountry(1)}
        selected={selectedCountry === 1}
      />
      <Kazahstan
        onClickFn={() => onSelectCountry(2)}
        selected={selectedCountry === 2}
      />
      <Kyrgyzystan
        onClickFn={() => onSelectCountry(3)}
        selected={selectedCountry === 3}
      />
      <Tadjikistan
        onClickFn={() => onSelectCountry(4)}
        selected={selectedCountry === 4}
      />
      <Turkmenistan
        onClickFn={() => onSelectCountry(5)}
        selected={selectedCountry === 5}
      />
    </svg>
  );
};
