import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

export const FormSuccess = () => {
  const t = useTranslations("contact.form_success");
  return (
    <div className="container">
      <div className="bg-white rounded-2xl flex flex-col items-center font-medium py-6 lg:py-9 px-8 lg:px-16">
        <Image
          src={"/icons/Logo_colored.svg"}
          width={105}
          height={65}
          alt="Logo"
        />
        <h3 className="text-3xl lg:text-5xl text-black text-center mt-4 lg:mt-8 mb-5 lg:mb-10">
          {t("title")}
        </h3>
        <hr className="w-full text-[#D9D9D9]" />
        <p className="text-xl lg:text-3xl text-center mt-7 lg:mt-14 mb-24 lg:mb-32">
          {t("text")} <br /> {t("text1")}
        </p>
        <Link
          href={"/"}
          className="w-full sm:w-2/5 h-12 lg:h-18 flex items-center justify-center rounded-lg bg-[#A5958B] text-white text-lg lg:text-2xl text-center"
        >
          {t("button")}
        </Link>
      </div>
    </div>
  );
};
