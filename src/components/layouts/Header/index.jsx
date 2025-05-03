"use client"
import './index.css'
import { Link } from "@/i18n/navigation"
import DrawerHeader from "@/components/ui/DrawerHeader"
import React, { useEffect, useState } from "react"
import SecondContactButton from '@/components/ui/SecondContactButton'
export const Header = () => {
  const link = [
    {
      icon: 'icons/destinations__icon.svg',
      path: '/destinations',
      label: 'Destinations',
    },
    {
      icon: 'icons/tripFound__icon.svg',
      path: '/tripFounder',
      label: 'Trip founder',
    },
    {
      icon: 'icons/aboutUs__icon.svg',
      path: '/aboutUs',
      label: 'About us',
    },
    {
      icon: 'icons/blog__icon.svg',
      path: '/blog',
      label: 'Blog',
    }
  ]
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
      <header className={`header fixed top-0 w-full z-[1111] ${isScrolled ? "backdrop-blur-2xl shadow-2xl duration-500 bg-black/40" : "duration-500"}`}>
        <div className="container header__container w-full flex flex-row justify-between items-center px-6 py-12 md:px-14 md:py-[52px] xl:py-[36px]">
          <div className="header__left-box">
            <button className="header__left-open-burger-button" onClick={() => setIsOpen(true)}>
              <img className="header__left-open-burger-icon inline-block w-[40px] h-[40px] md:w-[72px] md:h-[72px]" src="/icons/open__burger.svg" alt="open__burger" />
            </button>
            <Link href={'/'}>
              <img className="header__left-mini-logo inline-block xl:active:opacity-50 xl:duration-100 lg:w-[140px] lg:h-[77px]" src="/icons/logo.svg" alt="logo" />
            </Link>
          </div>
          <div className="header__middle-box">
            <Link href={'/'}>
              <img className="header__middle-mini-logo inline-block w-[67px] h-[37px] md:w-[140px] md:h-[77px]" src="/icons/logo.svg" alt="logo" />
            </Link>
            <nav className='header__middle-nav'>
              <ul className='header__middle-list'>
                <li className='header__middle-lists'>
                  {link.map((item, id) => (
                    <Link href={item.path} className='header__middle-links bg-white/70' key={id}>
                      <img className='header__middle-links-texts-icons' src={item.icon} alt="icon" />
                      <p className='header__middle-links-texts font-bold text-[18px] uppercase text-[#656267]'>{item.label}</p>
                    </Link>
                  ))}
                </li>
              </ul>
            </nav>
          </div>
          <div className='header__right-box flex flex-row justify-center items-center gap-x-[48px]'>
            <div className='header__right-contact-button hidden'>
              <SecondContactButton>Contact us</SecondContactButton>
            </div>
            <div className="header__right-language bg-white/10 rounded-[33px] border-[#A28887] border-[1px] flex flex-row justify-center items-center gap-x-[5px] py-[7.5px] px-[7.5px] md:gap-x-[9px] md:px-[18px] md:py-[18px]">
              <img className="header__right-language-icon object-cover w-[16px] h-[16px] md:w-[33px] md:h-[33px]" src="/icons/language__icon.svg" alt="language__icon" />
              <p className="header__right-language-text font-medium text-[11px] leading-[100%] text-white md:text-[24px]">
                Eng
              </p>
            </div>
          </div>
        </div>
      </header>
      <DrawerHeader modal={isOpen} close={closeBurger} />
    </div >
  )
}