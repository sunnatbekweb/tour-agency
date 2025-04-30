"use client"
import DrawerHeader from "@/components/ui/DrawerHeader"
import { Link } from "@/i18n/navigation"
import React, { useState } from "react"
export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const closeBurger = () => {
    setIsOpen(false)
  }
  return (
    <div>
      <header className="header bg-red-800">
        <div className="container header__container flex flex-row justify-between items-center px-6 py-12">
          <div className="header__left-box">
            <button className="header__left-open-burger-button" onClick={() => setIsOpen(true)}>
              <img className="header__left-open-burger-icon inline-block w-[40px] h-[40px]" src="/icons/open__burger.svg" alt="open__burger" />
            </button>
          </div>
          <div className="header__middle-box">
            <Link href={'/'}>
              <img className="header__middle-mini-logo inline-block w-[67px] h-[37px]" src="/icons/mini__logo.svg" alt="mini__logo" />
            </Link>
          </div>
          <div className="header__right-box bg-white/10 rounded-[33px] border-[#B9B9B9] flex flex-row justify-center items-center gap-x-[5px] py-[7.5px] px-[7.5px]">
            <img className="header__right-icon object-cover w-[16px] h-[16px]" src="/icons/language__icon.svg" alt="language__icon" />
            <p className="header__right-text font-medium text-[11px] leading-[100%] text-white">
              Eng
            </p>
          </div>
        </div>
      </header>
      <DrawerHeader modal={isOpen} close={closeBurger} />
    </div>
  )
}