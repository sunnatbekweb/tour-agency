"use client";

import React, { useState } from "react";
import { ContactForm } from "@/components/ui/form/ContactForm";
import { FormSuccess } from "@/components/ui/form/FormSuccess";
import { useTranslations } from "next-intl";
import "@/styles/page_styles/contact.css";

export default function Contact() {
  const t = useTranslations();
  const [isFormSuccess, setIsFormSuccess] = useState(false);
  const setSuccess = () => {
    setIsFormSuccess(true);
  };
  return (
    <section className="contact_section">
      <div className="contact_section-bg"></div>
      {!isFormSuccess ? (
        <div className="container flex-col-reverse lg:flex-row flex items-center justify-between gap-x-[180px] gap-y-14 lg:gap-y-[120px] px-2.5 md:px-5 2xl:px-0">
          <div className="text-white w-full lg:w-1/2">
            <h2 className="font-medium text-[32px] md:text-[64px] lg:text-[72px]">
              {t("header.contact")}.
            </h2>
            <p className="font-medium text-base md:text-lg lg:text-xl max-w-[480px] mt-9 mb-14 md:mt-14 md:mb-[100px] lg:mt-[68px] lg:mb-[84px]">
              <strong className="font-bold">{t("contact.text1")}</strong>{" "}
              {t("contact.text2")}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-x-4 sm:gap-x-8 md:gap-x-16 font-medium text-sm sm:text-base lg:text-xl">
              <div className="flex flex-col gap-y-4">
                <h3 className="font-bold uppercase">
                  {t("contact.address_text")}
                </h3>
                <a href="#">{t("contact.address")}</a>
              </div>
              <div className="flex flex-col">
                <h3 className="font-bold uppercase mb-4">
                  {t("contact.contacts")}
                </h3>
                <a href="mailto:traveluzbekista@gmail.com">
                  traveluzbekista@gmail.com
                </a>
                <a href="tel:+8004247289">800 424 7289</a>
                <a href="tel:+2066247289">206 624 7289</a>
              </div>
            </div>
          </div>
          <div className="form_container w-full lg:w-1/2">
            <ContactForm setSuccess={setSuccess} />
          </div>
        </div>
      ) : (
        <FormSuccess />
      )}
    </section>
  );
}
