"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import DrawerHeader from "@/components/ui/DrawerHeader";
import SecondContactButton from "@/components/ui/SecondContactButton";
import { isDynamicRoute } from "@/lib/utils/routes";
import "./Header.css";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [langDropdown, setLangDropdown] = useState(false);

  const pathname = usePathname();
  const locale = useLocale();
  const cleanPath = pathname.replace(`/${locale}`, "");

  const isDimmed = isDynamicRoute(cleanPath, ["/trip", "/blog"]);
  const isDestinationPage = cleanPath.startsWith("/destination");

  const destinations = [
    { path: "/destination/uzbekistan", label: "Uzbekistan" },
    { path: "/destination/kazakhstan", label: "Kazakhstan" },
    { path: "/destination/tajikistan", label: "Tajikistan" },
    { path: "/destination/turkmenistan", label: "Turkmenistan" },
    { path: "/destination/kyrgyzstan", label: "Kyrgyzstan" },
  ];

  const links = [
    {
      icon: "/icons/tripFound__icon.svg",
      path: "/trip-finder",
      label: "Trip founder",
    },
    { icon: "/icons/aboutUs__icon.svg", path: "/about", label: "About us" },
    { icon: "/icons/blog__icon.svg", path: "/blog", label: "Blog" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeBurger = () => setIsOpen(false);
  const newPathname = pathname.replace(`/${locale}`, "") || "/";

  return (
    <div>
      <header
        className={`header fixed top-0 w-full z-[1111] ${
          isScrolled
            ? `backdrop-blur-2xl shadow-2xl duration-500 ${isDimmed ? "bg-white" : "bg-black/40"}`
            : "duration-500"
        }`}
      >
        <div className="container header__container flex justify-between items-center px-5 py-6">
          <div className="header__left-box">
            <button
              className={`header__left-open-burger-button ${isDimmed && "bg-[#F3ECE8] rounded-lg"}`}
              onClick={() => setIsOpen(true)}
            >
              <img
                className="header__left-open-burger-icon w-[40px] h-[40px] md:w-[72px] md:h-[72px]"
                src={
                  isDimmed
                    ? "/icons/open__burger_colored.svg"
                    : "/icons/open__burger.svg"
                }
                alt="Open menu"
              />
            </button>
            <Link href="/">
              <img
                className="header__left-mini-logo lg:w-[140px] lg:h-[77px]"
                src={isDimmed ? "/icons/Logo_colored.svg" : "/icons/logo.svg"}
                alt="Logo"
              />
            </Link>
          </div>

          <div className="header__middle-box">
            <Link href="/">
              <img
                className="header__middle-mini-logo w-[67px] h-[37px] md:w-[140px] md:h-[77px]"
                src={isDimmed ? "/icons/Logo_colored.svg" : "/icons/logo.svg"}
                alt="Logo"
              />
            </Link>
            <nav className="header__middle-nav">
              <ul className="header__middle-list">
                <li className="relative group">
                  <div
                    className={`header__middle-links ${isDestinationPage && "bg-white/70"} cursor-pointer flex items-center px-4 py-2`}
                  >
                    {isDestinationPage && (
                      <img
                        className="header__middle-links-texts-icons"
                        src="/icons/destinations__icon.svg"
                        alt="Destinations"
                      />
                    )}
                    <p
                      className={`font-bold uppercase xl:16px 2xl:text-[20px] ${
                        isDestinationPage || isDimmed
                          ? "text-[#656267]"
                          : "text-white"
                      }`}
                    >
                      {destinations.find((dest) => dest.path === cleanPath)
                        ?.label || "Destinations"}
                    </p>
                  </div>
                  <ul className="absolute left-0 top-full bg-black/40 backdrop-blur-2xl shadow-2xl rounded-[8px] translate-y-[24px] opacity-0 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 z-50">
                    {destinations.map((dest, i) => (
                      <Link
                        key={i}
                        href={dest.path}
                        className={`block text-center text-white hover:bg-white/10 font-bold uppercase xl:16px 2xl:text-[20px] py-4 ${
                          i === 0 ? "rounded-t-[8px]" : ""
                        } ${i === destinations.length - 1 ? "rounded-b-[8px]" : ""}`}
                      >
                        {dest.label}
                      </Link>
                    ))}
                  </ul>
                </li>
                {links.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.path}
                      className={`header__middle-links flex items-center px-4 py-2 ${
                        cleanPath === item.path &&
                        (isDimmed ? "bg-[#CBBCB3]" : "bg-white/70")
                      }`}
                    >
                      {cleanPath === item.path && (
                        <img
                          className="header__middle-links-texts-icons"
                          src={item.icon}
                          alt="icon"
                        />
                      )}
                      <p
                        className={`font-bold uppercase xl:16px 2xl:text-[20px] ${
                          cleanPath === item.path || isDimmed
                            ? "text-[#656267]"
                            : "text-white"
                        }`}
                      >
                        {item.label}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="header__right-box flex items-center gap-x-[48px]">
            <div className="hidden">
              <SecondContactButton>Contact us</SecondContactButton>
            </div>

            <div
              className={`language-switcher hidden lg:flex items-center border cursor-pointer duration-300 overflow-hidden border-[#FFFFFF33] rounded-[24px] px-[11px] h-[48px] ${isDimmed && "bg-[#CBBCB3]"}`}
            >
              <img
                className="w-[16px] h-[16px] md:w-[32px] md:h-[32px]"
                src="/icons/language__icon.svg"
                alt="Lang icon"
              />
              <div className="flex items-center gap-x-2 ml-2">
                {["uz", "ru", "en"].map((lang) => (
                  <Link
                    key={lang}
                    href={newPathname}
                    locale={lang}
                    aria-pressed={locale === lang}
                    className={`px-2 font-medium text-xs md:text-base 2xl:text-lg ${locale === lang ? "text-white" : "gray_text"}`}
                  >
                    {lang.toUpperCase()}
                  </Link>
                ))}
              </div>
            </div>

            <button
              onClick={() => setLangDropdown(!langDropdown)}
              className={`language-switcher-sm relative lg:hidden flex flex-col gap-y-2 items-center px-3 py-1.5 h-[40px] rounded-[12px] ${langDropdown && "rounded-b-none"} ${isDimmed ? "bg-[#CBBCB3]" : "bg-[#ffffff33]"}`}
            >
              <div className="flex items-center gap-2">
                <img
                  className="w-[16px] h-[16px] md:w-[24px] md:h-[24px]"
                  src="/icons/language__icon.svg"
                  alt="Lang icon"
                />
                <p className="font-medium uppercase text-white">{locale}</p>
              </div>
              <div
                className={`w-full absolute top-full px-3 pb-1.5 rounded-b-xl overflow-hidden duration-500 ${isDimmed ? "bg-[#CBBCB3]" : "bg-[#ffffff33]"} ${
                  langDropdown
                    ? `h-[62px] opacity-100 visible translate-y-0 ${isDimmed && "bg-[#CBBCB3]"}`
                    : "h-0 opacity-0 collapse -translate-y-5"
                }`}
              >
                <ul className="flex flex-col gap-y-2">
                  {["uz", "ru", "en"]
                    .filter((lang) => lang !== locale)
                    .map((lang, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <img
                          className="w-[12px] h-[12px] md:w-[24px] md:h-[24px]"
                          src="/icons/language__icon.svg"
                          alt="Lang icon"
                        />
                        <Link
                          href={newPathname}
                          locale={lang}
                          className="uppercase px-2 font-medium text-white/60"
                        >
                          {lang}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            </button>
          </div>
        </div>
      </header>

      <DrawerHeader modal={isOpen} close={closeBurger} />
    </div>
  );
};
