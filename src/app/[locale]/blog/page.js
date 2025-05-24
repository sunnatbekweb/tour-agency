"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocale } from "next-intl";
import { Pagination } from "@/components/ui/Pagination";
import { BlogCard } from "@/components/ui/BlogCard";
import "@/styles/page_styles/trip.css";

export default function Blog() {
  const [posts, setPosts] = useState();
  const [currentPage, setCurrentPage] = useState(1);

  const getPosts = async (page = 1) => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/blog/posts/?page=${page}`
      );
      setPosts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPosts(currentPage);
  }, [currentPage]);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected + 1);
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
          <span className="text-xl text-[#A5958B] uppercase block mb-8">
            Trip Blogs
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-7xl uppercase w-full lg:w-3/4 mb-20">
            Where Cultures Converge and History Lives
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {posts?.results?.map((post, index) => (
              <BlogCard key={index} post={post} />
            ))}
          </div>
          <div className="pt-[100px]">
            {posts?.count && posts?.results?.length > 0 && (
              <Pagination
                count={Math.ceil(posts.count / 6)}
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
