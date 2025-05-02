import './HeroSectoin.css'
import SecondContactButton from '../ui/SecondContactButton'
import { Link } from '@/i18n/navigation'
export default function HeroSectoin() {
    const link = [
        {
            icon: 'icons/right__arrow.svg',
            path: '/uzbekistan',
            label: 'Uzbekistan',
        },
        {
            icon: 'icons/right__arrow.svg',
            path: '/kazakhstan',
            label: 'Kazakhstan',
        },
        {
            icon: 'icons/right__arrow.svg',
            path: '/tajikistan',
            label: 'Tajikistan',
        },
        {
            icon: 'icons/right__arrow.svg',
            path: '/turkmanistan',
            label: 'Turkmanistan',
        },
        {
            icon: 'icons/right__arrow.svg',
            path: '/kyrgizistain',
            label: 'Kyrgizistain',
        }
    ]
    return (
        <div>
            <section className='hero relative'>
                <nav className='hero__nav absolute bottom-0'>
                    <ul className='hero__list'>
                        {link.map((item, index) => (
                            <li className='hero__lists w-full' key={index}>
                                <hr className='w-full bg-white/20 h-[1px] border-none outline-none' />
                                <Link className='hero__links' href={item.path}>
                                    <p className='hero__link-texts font-medium text-[24px] uppercase text-white'>{item.label}</p>
                                    <img className='hero__link-icons' src={item.icon} alt="icons" />
                                </Link>
                                <hr className='w-full bg-white/20 h-[1px] border-none outline-none' />
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="container hero__container flex flex-col justify-center items-center min-h-screen gap-y-[89px] px-6 md:px-14 xl:pt-[290px]">
                    <div className="hero__top-box flex flex-col justify-center items-center">
                        <p className='hero__top-text text-center w-full font-medium text-[16px] tracking-tighter-[-2%] text-white mb-6 md:text-[32px] md:mb-[32px] lg:text-[40px] lg:mb-4'>
                            From Ancient Steppes to Timeless Cities
                        </p>
                        <h2 className='hero__top-title text-center w-full font-medium text-[40px] leading-[48px] uppercase text-white mb-6 md:text-[72px] md:leading-[80px] md:mb-[56px] lg:text-[96px] lg:mb-10 xl:w-[1214px]'>
                            Welcome to the Heart of the Silk Road
                        </h2>
                        <p className='hero__top-second-text text-center w-[162px] font-medium text-[16px] tracking-tighter-[-2%] text-white md:text-[32px] md:w-full'>
                            Your Central Asian Adventure Begins Here
                        </p>
                    </div>
                    <div className="hero__bottom-box flex flex-col justify-center items-center">
                        <div className='hero__contuct-button 2xl:hidden'>
                            <SecondContactButton>Contact us</SecondContactButton>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}