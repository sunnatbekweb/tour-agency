"use client"
import { Link } from '@/i18n/navigation'
import './FooterSmSection.css'
export default function FooterSmSection() {
    const moveTop = () => {
        window.scrollTo(0, 0)
    }
    const link = [
        {
            links: 'Trip founder',
        },
        {
            links: 'About us',
        },
        {
            links: 'Blog',
        },
        {
            links: 'Contact us',
        },
    ]
    const icon = [
        {
            icons: '/icons/telegram.svg',
            descriptions: 'telegram__icon',
            links: 'https://t.me/VueMid'
        },
        {
            icons: '/icons/facebook.svg',
            descriptions: 'facebook__icon',
            links: 'https://www.facebook.com/cleanhouse.uz'
        },
        {
            icons: '/icons/instagram.svg',
            descriptions: 'instagram__icon',
            links: 'https://www.instagram.com/umid_dev'
        },
    ]
    return (
        <div>
            <footer className='footerSmSection w-full bg-[#A98D7D] rounded-tr-[30px] rounded-tl-[30px] py-[52px]'>
                <div className="container w-full footerSmSection__container flex flex-col justify-center items-center px-6 md:px-9">
                    <div className="footerSmSection__top w-full flex flex-row justify-between items-start ">
                        <Link href={'/'}>
                            <img
                                className="footerSmSection__top-logo inline-block w-[80px] h-[44px] md:w-[140px] md:h-[77px]"
                                src={'/icons/logo.svg'}
                                alt="logo" />
                        </Link>
                        <p className='footerSmSection__top-text w-[196px] font-normal text-[14px] leading-[18px] tracking-tighter-[-2%] text-white'>
                            Sign up to get exclusive offers, travel tips, and destination inspiration straight to your inbox!
                        </p>
                    </div>
                    <form className='footerSmSection__form w-full flex flex-row justify-center items-center mt-[41px]'>
                        <div className='footerSmSection__form-box w-full flex flex-col justify-items-center items-start gap-2'>
                            <div className='footerSmSection__form-input-box w-full flex flex-row justify-start items-center relative bg-white rounded-[26.5px] py-[15px]'>
                                <input
                                    className="formSection__form-email-input outline-none border-none pl-[24px]"
                                    type="email"
                                    id="email"
                                    placeholder="Enter Your email"
                                    autoComplete="on"
                                    required
                                />
                                <button className='footerSmSection__form-button flex justify-center items-center rounded-[20.8px] right-[24px] absolute top-[6px] bottom-[6px] bg-[#A98D7D] px-[18px] py-[9px] active:opacity-50'>
                                    <img
                                        className='footerSmSection__form-button-icon'
                                        src="/icons/right__submit.svg"
                                        alt="right__submit-icon" />
                                </button>
                            </div>
                            <p className="footerSmSection__form-text text-[#CF734A]">

                            </p>
                            <p className="footerSmSection__form-text text-green-800">

                            </p>
                        </div>
                    </form>
                    <div className="footerSmSection__bottom-box w-full flex flex-row justify-between items-start mt-[56px]">
                        <nav className='footerSmSection__nav flex flex-col justify-center items-start'>
                            <ul className='footerSmSection__list flex flex-col justify-center items-start gap-6'>
                                <h4 className='footerSmSection__list-text font-medium text-[24px] leading-[100%] tracking-tighter-[-2%] text-white'>
                                    Explore
                                </h4>
                                {link.map((item, index) => (
                                    <li className='footerSmSection__lists flex flex-col justify-center items-start' key={index}>
                                        <Link className='footerSmSection__links flex flex-col justify-center items-start'>
                                            <p className='footerSmSection__links-text font-medium text-[16px] leading-[100%] tracking-tighter-[-2%] text-white/70 active:opacity-50'>
                                                {item.links}
                                            </p>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                        <div className="footerSmSection__bottom-right-box flex flex-col justify-center items-start w-[151px] gap-6">
                            <h4 className='footerSmSection__bottom-right-box-title font-medium text-[19px] leading-[24px] tracking-tighter-[-2%] text-white'>
                                Why travel with us?
                            </h4>
                            <q className='footerSmSection__bottom-right-box-texts font-medium text-[16px] leading-[20px] tracking-tighter-[-2%] text-white/70'>
                                Authentic experiences, expert guides, unforgettable memories — discover the true spirit of the Silk Road with Wonder:)
                            </q>
                        </div>
                    </div>
                    <div className='footerSmSection__icon-box flex flex-row justify-center items-center gap-[70px] mt-[123px]'>
                        {icon.map((icons, id) => (
                            <div className="footerSmSection__icon-mini-boxes" key={id}>
                                <a className='footerSmSection__icon-links' href={icons.links} target="_blank" rel="noopener noreferrer">
                                    <img className='footerSmSection__icon-images object-cover inline-block w-[48px] h-[48px]' src={icons.icons} alt={icons.descriptions} />
                                </a>
                            </div>
                        ))}
                    </div>
                    <button className='footerSmSection__button mt-[44px] active:duration-100 duration-100 active:opacity-50 border-4 border-white/50 rounded-full outline-none' onClick={moveTop}>
                        <img className='footerSmSection__button-icon rotate-[316deg]' src={'/icons/white__arrow-icon.svg'} alt="button__icon" />
                    </button>
                    <div className="footerSmSection__copy-box flex flex-col justify-center items-center gap-4 mt-[40px] xl:gap-12">
                        <p className="footerSmSection__copy-text font-medium text-[19px] leading-[24px] tracking-tighter-[-2%] text-white uppercase">
                            &copy; SRW 2025
                        </p>
                        <div className="footerSmSection__copy-logo-box flex flex-row justify-center items-center">
                            <p className="footerSmSection__developing-text font-medium text-[19px] leading-[24px] tracking-tighter-[-2%] text-white">Developed by:&nbsp;&nbsp;</p>
                            <a className="footerSmSection__copy-logo-link" href="https://www.onesystem.uz" target="_blank" rel="noopener noreferrer">
                                <p className="footerSmSection__copy-logo-text font-medium text-[19px] leading-[24px] tracking-tighter-[-2%] text-white active:opacity-50">
                                    OneSystem
                                </p>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}