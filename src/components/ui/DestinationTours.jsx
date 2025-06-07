"use client";

import { fetchTours, setTripTheme } from "@/features/tours/toursSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import axios from "axios";
import { useLocale, useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";
import { TourCards } from "./tour/TourCards";
import { Pagination } from "./Pagination";

export const DestinationTours = ({ title, text }) => {
  const [tripThemes, setTripThemes] = useState();
  const locale = useLocale();
  const t = useTranslations();
  const dispatch = useAppDispatch();
  const { list, count, loading, currentPage, filters } = useAppSelector(
    (state) => state.tours
  );
  const getTripThemes = async () => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/tour/trip-theme/`
      );
      setTripThemes(res.data.results);
    } catch (error) {
      console.error(error);
    }
  };
  const handlePageChange = ({ selected }) => {
    dispatch(setPage(selected + 1));
  };

  useEffect(() => {
    dispatch(fetchTours({ page: currentPage, filters }));
  }, [currentPage, filters]);

  const handleThemeSelect = (id) => {
    dispatch(setTripTheme(id));
  };

  useEffect(() => {
    getTripThemes();
  }, []);

  return (
    <section className="pt-[120px] px-6 font-medium">
      <div className="container">
        <span className="font-medium text-xl text-[#A5958B] uppercase block mb-8">
          Trip Blogs
        </span>
        <div className="flex flex-col gap-y-8 lg:flex-row gap-x-5 items-center font-medium text-[#323232] uppercase">
          <h2 className="text-3xl md:text-5xl lg:text-7xl w-full lg:w-[65%]">
            {title}
          </h2>
          <p className="text-xs md:text-lg w-full lg:w-[35%]">{text}</p>
        </div>
        <div className="w-full flex items-center gap-x-6 overflow-x-auto scrollbar-hidden mt-20 mb-14">
          <button
            onClick={() => dispatch(setTripTheme(""))}
            className={`px-10 lg:px-20 py-3 lg:py-5 rounded-2xl lg:rounded-4xl text-sm md:text-base lg:text-xl ${
              !filters.trip_theme
                ? "bg-[#A5958B] text-white"
                : "bg-[#EDEDED] text-[#A5958B]"
            }`}
          >
            {t("all")}
          </button>
          {tripThemes?.map((theme) => (
            <button
              key={theme?.id}
              onClick={() => handleThemeSelect(theme.id)}
              className={`px-10 lg:px-20 py-3 lg:py-5 whitespace-nowrap rounded-2xl lg:rounded-4xl text-sm md:text-base lg:text-xl ${
                filters.trip_theme === theme.id
                  ? "bg-[#A5958B] text-white"
                  : "bg-[#EDEDED] text-[#A5958B]"
              }`}
            >
              {theme?.[`name_${locale}`]}
            </button>
          ))}
        </div>

        <div
          className={`${list?.length > 0 && loading === false && "grid"} grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4`}
        >
          {loading ? (
            <p className="font-medium text-2xl text-center mt-40">
              {t("loading")}
            </p>
          ) : list?.length > 0 ? (
            list?.map((card, index) => <TourCards props={card} key={index} />)
          ) : (
            <p className="font-medium text-2xl text-center mt-40">
              {t("not_found")}
            </p>
          )}
        </div>
      </div>
      <div className="pt-[100px]">
        {count > 0 && (
          <Pagination
            count={Math.ceil(count / 6)}
            onPageChange={handlePageChange}
            forcePage={currentPage - 1}
          />
        )}
      </div>
    </section>
  );
};
