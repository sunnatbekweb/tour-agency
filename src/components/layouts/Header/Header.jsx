"use client";
import "./Header.css";
import { Link } from "@/i18n/navigation";
import DrawerHeader from "@/components/ui/DrawerHeader";
import React, { useEffect, useState } from "react";
import SecondContactButton from "@/components/ui/SecondContactButton";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";

export const Header = () => {
  const destinations = [
    { path: "/destination/uzbekistan", label: "Uzbekistan" },
    { path: "/destination/kazakhstan", label: "Kazakhstan" },
    { path: "/destination/tajikistan", label: "Tajikistan" },
    { path: "/destination/turkmenistan", label: "Turkmanistan" },
    { path: "/destination/kyrgyzstan", label: "Kyrgizistain" },
  ];
  const link = [
    {
      icon: "/icons/tripFound__icon.svg",
      path: "/trip-finder",
      label: "Trip founder",
    },
    {
      icon: "/icons/aboutUs__icon.svg",
      path: "/about",
      label: "About us",
    },
    {
      icon: "/icons/blog__icon.svg",
      path: "/blog",
      label: "Blog",
    },
  ];

  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const locale = useLocale();

  const cleanPath = pathname.replace(`/${locale}`, "");
  const isDestinationPage = cleanPath.startsWith("/destination");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeBurger = () => setIsOpen(false);

  return (
    <div>
      <header
        className={`header fixed top-0 w-full z-[1111] ${
          isScrolled
            ? "backdrop-blur-2xl shadow-2xl duration-500 bg-black/40"
            : "duration-500"
        }`}
      >
        <div className="container header__container w-full flex flex-row justify-between items-center px-6 py-12 md:px-9 md:py-[52px] xl:py-[36px]">
          {/* LEFT */}
          <div className="header__left-box">
            <button
              className="header__left-open-burger-button"

              onClick={() => setIsOpen(true)}
            >
              <img
                className="header__left-open-burger-icon inline-block w-[40px] h-[40px] md:w-[72px] md:h-[72px]"
                src="/icons/open__burger.svg"
                alt="open__burger"
              />
            </button>
            <Link href={"/"}>
              <img
                className="header__left-mini-logo inline-block xl:active:opacity-50 xl:duration-100 lg:w-[140px] lg:h-[77px]"
                src="/icons/logo.svg"
                alt="logo"
              />
            </Link>
          </div>

          {/* MIDDLE */}
          <div className="header__middle-box">
            <Link href={"/"}>
              <img
                className="header__middle-mini-logo inline-block w-[67px] h-[37px] md:w-[140px] md:h-[77px]"
                src="/icons/logo.svg"
                alt="logo"
              />
            </Link>
            <nav className="header__middle-nav">
              <ul className="header__middle-list">
                <li className="header__middle-lists relative group">
                  <div
                    className={`header__middle-links ${
                      isDestinationPage && "bg-white/70"
                    } cursor-pointer flex items-center px-4 py-2`}
                  >
                    {isDestinationPage && (
                      <img
                        className="header__middle-links-texts-icons"
                        src={"/icons/destinations__icon.svg"}
                        alt="icon"
                      />
                    )}
                    <p
                      className={`header__middle-links-texts font-bold ${
                        isDestinationPage ? "text-[#656267]" : "text-white"
                      } uppercase xl:16px 2xl:text-[20px]`}
                    >
                      {destinations.find(
                        (destination) => destination.path === cleanPath
                      )?.label ?? "Destinations"}
                    </p>
                  </div>
                  <ul className="backdrop-blur-2xl shadow-2xl bg-black/40 absolute left-0 top-full translate-y-[24px] opacity-0 pointer-events-none group-hover:opacity-100 group-hover:translate-y-[0px] group-hover:pointer-events-auto transition-all duration-300 flex flex-col justify-center items-center w-full rounded-[8px] z-50">
                    {destinations.map((dest, i) => (
                      <Link
                        className={`w-full flex flex-col justify-center items-center text-center duration-500 text-white hover:bg-white/10 hover:text-white whitespace-nowrap
                              ${i === 0 ? "rounded-t-[8px]" : ""} 
                              ${
                                i === destinations?.length - 1
                                  ? "rounded-b-[8px]"
                                  : ""
                              }`}
                        href={dest.path}
                        key={i}
                      >
                        <p className="w-full font-bold uppercase xl:16px 2xl:text-[20px] py-4">
                          {dest.label}
                        </p>
                      </Link>
                    ))}
                  </ul>
                </li>
                {link.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.path}
                      className={`header__middle-links ${
                        cleanPath === item.path && "bg-white/70"
                      } flex items-center px-4 py-2`}
                    >
                      {cleanPath === item.path && (
                        <img
                          className="header__middle-links-texts-icons"
                          src={item.icon}
                          alt="icon"
                        />
                      )}
                      <p
                        className={`header__middle-links-texts font-bold uppercase ${
                          cleanPath === item.path
                            ? "text-[#656267]"
                            : "text-white"
                        } xl:16px 2xl:text-[20px]`}
                      >
                        {item.label}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* RIGHT */}
          <div className="header__right-box flex flex-row justify-center items-center gap-x-[48px]">
            <div className="header__right-contact-button hidden">
              <SecondContactButton>Contact us</SecondContactButton>
            </div>
            <div className="header__right-language bg-white/10 rounded-[33px] border-[#A28887] border-[1px] flex flex-row justify-center items-center gap-x-[5px] py-[7.5px] px-[7.5px] md:gap-x-[9px] md:py-[14px] md:px-[14px] xl:py-[8px] 2xl:px-[18px] 2xl:py-[18px]">
              <img
                className="header__right-language-icon object-cover w-[16px] h-[16px] md:w-[33px] md:h-[33px]"
                src="/icons/language__icon.svg"
                alt="language__icon"
              />
              <p className="header__right-language-text font-medium text-[11px] leading-[100%] text-white md:text-[16px] 2xl:text-[20px]">
                Eng
              </p>
            </div>
          </div>
        </div>
      </header>

      <DrawerHeader modal={isOpen} close={closeBurger} />
    </div>
  );
};
