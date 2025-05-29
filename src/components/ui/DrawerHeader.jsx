"use client";
import React, { useState } from "react";
import { Link } from "@/i18n/navigation";
import ContactButton from "./ContactButton";
import "./DrawerHeader.css";
export default function DrawerHeader({ modal, close }) {
  const [showDestinations, setShowDestinations] = useState(false);
  const toggleDestinations = () => {
    setShowDestinations(!showDestinations);
  };
  const destinations = [
    { href: "/destination/uzbekistan", label: "Uzbekistan" },
    { href: "/destination/tajikistan", label: "Tajikistan" },
    { href: "/destination/kazakhstan", label: "Kazakhstan" },
    { href: "/destination/turkmenistan", label: "Turkmenistan" },
    { href: "/destination/kyrgyzstan", label: "Kyrgyzstan" },
  ];
  return (
    <header
      className={`
            drawerHeader z-[1111] fixed top-0 right-0 left-0 w-full h-[100vh] bg-[#A5958B] duration-500 py-12 md:py-[52px] 
            ${modal ? "translate-x-0 visible" : "translate-x-[-100%] collapse"} 
            ${showDestinations ? "overflow-y-auto" : "overflow-hidden"}`}
    >
      <div className="drawerHeader__top-box flex justify-between items-center px-6 md:px-9">
        <button
          className="drawerHeader__top-box-open-burger-button"
          onClick={close}
        >
          <img
            className="drawerHeader__top-box-open-burger-button-icon w-[40px] h-[40px] md:w-[72px] md:h-[72px]"
            src="/icons/close__burger.svg"
            alt="close__burger"
          />
        </button>
        <Link href="/">
          <img
            className="drawerHeader__mini-logo w-[67px] h-[37px] md:w-[140px] md:h-[77px]"
            src="/icons/logo.svg"
            alt="logo"
          />
        </Link>
        <div className="drawerHeader__empty-box w-[54.92px] h-[37px] opacity-0 md:w-[121.29px] md:h-[73px]" />
      </div>
      <nav className="drawerHeader__nav flex flex-col items-center justify-center min-h-[70vh]">
        <ul className="drawerHeader__list w-full flex flex-col items-center">
          <li className="drawerHeader__lists w-full text-center">
            <Link
              className="drawerHeader__links w-full block"
              href="/"
              onClick={close}
            >
              <p className="drawerHeader__links-texts text-white text-[20px] uppercase font-medium py-[32px] md:text-[32px] md:py-[46px]">
                Home
              </p>
            </Link>
            <hr className="drawerHeader__hr w-full bg-white opacity-20 border-none outline-none h-[1px]" />
          </li>
          <li className="drawerHeader__button-list w-full text-center">
            <hr className="drawerHeader__hr w-full bg-white opacity-20 border-none outline-none h-[1px]" />
            <button
              className="drawerHeader__button w-full"
              onClick={toggleDestinations}
            >
              <p className="drawerHeader__button-text text-white text-[20px] uppercase font-medium py-[32px] md:text-[32px] md:py-[46px]">
                Destinations
              </p>
            </button>
            <div
              className={`
                                drawerHeader__second-nav 
                                transition-all duration-500 ease-in-out overflow-hidden 
                                transform origin-top 
                                ${showDestinations ? "scale-y-100 opacity-100 mt-1 max-h-[500px] md:max-h-[792px]" : "scale-y-0 opacity-0 max-h-0"}
                                `}
            >
              <hr className="drawerHeader__hr w-full bg-white opacity-20 border-none outline-none h-[1px]" />
              <ul
                className="drawerHeader__second-list flex flex-col gap-2 mt-2 bg-[#AC9D94]"
                onClick={close}
              >
                {destinations.map((item, index) => (
                  <li className="drawerHeader__second-lists" key={index}>
                    <Link
                      className="drawerHeader__second-links"
                      href={item.href}
                    >
                      <p className="drawerHeader__second-links-texts text-white text-[20px] uppercase font-medium py-[32px] md:text-[32px] md:py-[46px]">
                        {item.label}
                      </p>
                    </Link>
                    <hr className="drawerHeader__hr w-full bg-white opacity-20 border-none outline-none h-[2px]" />
                  </li>
                ))}
              </ul>
            </div>
          </li>
          {[
            { href: "/trip-finder", label: "Trip Founder" },
            { href: "/blog", label: "Blog" },
            { href: "/about", label: "About Us" },
          ].map((item, index) => (
            <li
              className="drawerHeader__third-list w-full text-center"
              key={index}
              onClick={close}
            >
              <hr className="drawerHeader__hr w-full bg-white opacity-20 border-none outline-none h-[1px]" />
              <Link className="drawerHeader__third-links" href={item.href}>
                <p className="drawerHeader__third-links-texts text-white text-[20px] uppercase font-medium py-[32px] md:text-[32px] md:py-[46px]">
                  {item.label}
                </p>
              </Link>
              <hr className="drawerHeader__hr w-full bg-white opacity-20 border-none outline-none h-[1px]" />
            </li>
          ))}
        </ul>
      </nav>
      <div
        className="drawerHeader__contact-button mt-8 flex justify-center items-center md:mt-[46px]"
        onClick={close}
      >
        <ContactButton>Contact us</ContactButton>
      </div>
    </header>
  );
}
