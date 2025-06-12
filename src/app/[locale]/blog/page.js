"use client";

import React, { useEffect } from "react";
import { Pagination } from "@/components/ui/Pagination";
import { BlogCard } from "@/components/ui/BlogCard";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { fetchBlogs } from "@/features/blogs/blogsSlice";
import { setPage } from "@/features/tours/toursSlice";
import SecondContactButton from "@/components/ui/SecondContactButton";
import { useTranslations } from "next-intl";
import "@/styles/page_styles/trip.css";

export default function Blog() {
  const dispatch = useAppDispatch();
  const { list, count, loading, currentPage } = useAppSelector(
    (state) => state.blogs
  );
  const t = useTranslations();

  useEffect(() => {
    dispatch(fetchBlogs(currentPage));
  }, [currentPage]);

  const handlePageChange = ({ selected }) => {
    dispatch(setPage(selected + 1));
  };

  return (
    <>
      <section className="blog_hero">
        <div className="container h-full flex flex-col items-center justify-center">
          <h1 className="w-full sm:w-1/2 lg:max-w-1/5 font-medium text-5xl lg:text-7xl text-white text-center">
            {t("blog.hero_title")}
          </h1>
          <div className="absolute bottom-20 2xl:hidden">
            <SecondContactButton>{t("header.contact")}</SecondContactButton>
          </div>
        </div>
      </section>
      <section className="pt-[100px]">
        <div className="container font-medium px-5">
          <span className="text-xl text-[#A5958B] uppercase block mb-8">
            {t("blog.top_text")}
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-6xl uppercase w-full lg:w-3/5 mb-20">
            {t("blog.title")}
          </h2>
          <div
            className={`${list?.length > 0 && loading === false && "grid"} grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4`}
          >
            {loading ? (
              <p className="font-medium text-2xl text-center mt-40">
                {t("loading")}
              </p>
            ) : list?.length > 0 ? (
              list?.map((card, index) => <BlogCard post={card} key={index} />)
            ) : (
              <p className="font-medium text-2xl text-center mt-40">
                {t("not_found")}
              </p>
            )}
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
        </div>
      </section>
    </>
  );
}
