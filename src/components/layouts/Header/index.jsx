"use client"
import DrawerHeader from "@/components/ui/DrawerHeader"
import { Link } from "@/i18n/navigation"
import React, { useEffect, useState } from "react"
export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [setIsScrolled])
  const closeBurger = () => {
    setIsOpen(false)
  }
  return (
    <div>
      <header className={`header fixed top-0 w-full z-[1111] ${isScrolled ? "backdrop-blur-2xl shadow-2xl duration-500 bg-black/50" : "duration-500"}`}>
        <div className="container header__container flex flex-row justify-between items-center px-6 py-12 md:px-14 md:py-[52px]">
          <div className="header__left-box">
            <button className="header__left-open-burger-button" onClick={() => setIsOpen(true)}>
              <img className="header__left-open-burger-icon inline-block w-[40px] h-[40px] md:w-[72px] md:h-[72px]" src="/icons/open__burger.svg" alt="open__burger" />
            </button>
          </div>
          <div className="header__middle-box">
            <Link href={'/'}>
              <img className="header__middle-mini-logo inline-block w-[67px] h-[37px] md:w-[140px] md:h-[77px]" src="/icons/logo.svg" alt="logo" />
            </Link>
          </div>
          <div className="header__right-box bg-white/10 rounded-[33px] border-[#A28887] border-[1px] flex flex-row justify-center items-center gap-x-[5px] py-[7.5px] px-[7.5px] md:gap-x-[9px] md:px-[18px] md:py-[19px]">
            <img className="header__right-icon object-cover w-[16px] h-[16px] md:w-[33px] md:h-[33px]" src="/icons/language__icon.svg" alt="language__icon" />
            <p className="header__right-text font-medium text-[11px] leading-[100%] text-white md:text-[24px]">
              Eng
            </p>
          </div>
        </div>
      </header>
      <DrawerHeader modal={isOpen} close={closeBurger} />
    </div >
  )
}