import Link from "next/link"
import React from "react"
export default function Header() {
  return (
    <div>
      <header className="header bg-red-800">
        <div className="container header__container flex flex-row justify-between items-center px-6 py-12">
          <div className="header__left-box">
            <Link href={'/'}>
              <img className="header__left-open-burger inline-block" src="/icons/open__burger.svg" alt="open__burger" />
            </Link>
          </div>
          <div className="header__middle-box">
            <Link href={'/'}>
              <img className="header__middle-mini-logo inline-block" src="/icons/mini__logo.svg" alt="mini__logo" />
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
    </div>
  )
}