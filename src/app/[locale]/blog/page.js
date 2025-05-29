'use client';

import React, { useEffect } from "react";
import { Pagination } from "@/components/ui/Pagination";
import { BlogCard } from "@/components/ui/BlogCard";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { fetchBlogs } from "@/features/blogs/blogsSlice";
import { setPage } from "@/features/tours/toursSlice";
import "@/styles/page_styles/trip.css";

export default function Blog() {
  const dispatch = useAppDispatch();
  const { list, count, loading, currentPage } = useAppSelector(
    (state) => state.blogs
  );

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
          <h1 className="w-full sm:w-1/2 lg:max-w-[860px] font-medium text-7xl lg:text-9xl text-white text-center">
            Wander. Discover. Share.
          </h1>
          <div className="absolute bottom-20">
            <button className="w-[162px] h-[48px] lg:w-[216px] lg:h-[72px] bg-white font-medium text-xl lg:text-2xl text-[#656267] rounded-4xl 2xl:hidden">
              Contact us
            </button>
          </div>
        </div>
      </section>
      <section className="pt-[100px]">
        <div className="container font-medium px-5">
          <span className="text-xl text-[#A5958B] uppercase block mb-8">Trip Blogs</span>
          <h2 className="text-3xl md:text-5xl lg:text-7xl uppercase w-full lg:w-3/4 mb-20">
            Where Cultures Converge and History Lives
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {loading ? (
              <p>Loading...</p>
            ) : (
              list?.map((post, index) => <BlogCard post={post} key={index} />)
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
