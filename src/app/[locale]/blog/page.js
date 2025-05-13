import React from "react";
import "@/styles/page_styles/blog.css";

export default function Blog() {
  return (
    <>
      <section className="blog_hero">
        <div className="container h-full flex flex-col items-center justify-center">
          <h1 className="w-full sm:w-1/2 lg:max-w-[860px] font-medium text-7xl lg:text-9xl text-white text-center mb-[100px]">
            Wander. Discover. Share.
          </h1>
          <button className="w-[162px] h-[48px] lg:w-[216px] lg:h-[72px] bg-white font-medium text-xl lg:text-2xl text-[#656267] rounded-4xl 2xl:hidden">
            Contact us
          </button>
        </div>
      </section>
    </>
  );
}
