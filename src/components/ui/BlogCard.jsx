import React from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";

export const BlogCard = ({ post }) => {
  const locale = useLocale();
  const t = useTranslations();

  const formatDate = (rawDate) => {
    const date = new Date(rawDate);
    const day = date.getDate();
    const month = date.toLocaleString(locale, { month: "long" });
    const year = date.getFullYear();
    return `${day} ${month}, ${year}`;
  };

  return (
    <div className="p-4 pb-6 border border-[#EBEBEB] rounded-4xl shadow-xl">
      <div className="h-[200px] xl:h-[320px] rounded-xl lg:rounded-3xl overflow-hidden">
        <Image
          src={post.image}
          width={300}
          height={180}
          className="w-full h-full object-cover object-center"
          alt="Trip image"
        />
      </div>
      <div className="pt-6 flex flex-col justify-end">
        <div className="text-[#323232] mb-5">
          <div className="flex items-center gap-x-4 justify-between mb-4">
            <h4 className="font-medium text-xl lg:text-2xl line-clamp-3">
              {post?.[`title_${locale}`]}
            </h4>
          </div>
        </div>
        <div className="flex items-center justify-between gap-x-3">
          <span className="text-lg text-[#A7A7A7]">
            {formatDate(post.created_at)}
          </span>
          <Link href={`/blog/${post.id}`} className="w-1/2">
            <button className="w-full h-[48px] bg-[#B4A297] rounded-4xl font-medium text-white text-base">
              {t("blog.read_more")}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
