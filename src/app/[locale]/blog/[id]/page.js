"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { useLocale } from "next-intl";
import { useParams } from "next/navigation";

export default function BlogDetail() {
  const [post, setPost] = useState();
  const params = useParams();
  const locale = useLocale();
  const getPost = async () => {
    try {
      axios
        .get(`http://tour.onesystem.uz/api/v1/blog/posts/${params?.id}/`)
        .then((response) => setPost(response.data));
    } catch (error) {
      console.error(error);
    }
  };
  const formatDate = (rawDate) => {
    const date = new Date(rawDate);
    const day = date.getDate();
    const month = date.toLocaleString(locale, { month: "long" });
    const year = date.getFullYear();
    return `${day} ${month}, ${year}`;
  };

  useEffect(() => {
    getPost();
  }, []);
  return (
    <section className="mt-[216px] md:mt-[240px] xl:mt-[210px">
      <div className="container px-6 font-medium">
        <h1 className="font-medium text-2xl md:text-4xl lg:text-6xl text-[#323232]">
          {post?.[`title_${locale}`]}
        </h1>
        <p className="text-xl lg:text-3xl text-[#A7A7A7] my-6 lg:my-12">
          {formatDate(post?.created_at)}
        </p>
        <Image
          src={post?.image}
          width={1920}
          height={820}
          className="w-full rounded-2xl"
          alt="Blog image"
        />
        <div className="w-full xl:w-3/4 mx-auto">
          <article className="py-12 lg:py-24">
            <p className="md:text-lg lg:text-2xl">{post?.[`text_${locale}`]}</p>
            {post?.extra_text.map((text, index) => (
              <div key={index}>
                <br />
                <h2 className="text-2xl md:text-3xl lg:text-4xl">
                  {text?.[`title_${locale}`]}
                </h2>
                <br />
                <p className="md:text-lg lg:text-2xl">
                  {text?.[`text_${locale}`]
                    ?.split(/\r?\n/)
                    .map((line, index) => (
                      <React.Fragment key={index}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                </p>
              </div>
            ))}
          </article>
        </div>
      </div>
    </section>
  );
}
