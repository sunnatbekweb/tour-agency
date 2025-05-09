import { Link } from '@/i18n/navigation'
import './RoadSection.css'
import RightChevron from '../../../public/icons/RightChevron'
export default function RoadSection() {
    return (
        <div>
            <section className="road mt-[74px] md:mt-[159px]">
                <div className="container road__container flex flex-col justify-start items-center px-6 md:px-9">
                    <Link href={'/'}>
                        <img
                            className="road__logo inline-block w-[80px] h-[44px] mb-[30px] md:w-[140px] md:h-[77px] md:mb-[76px] xl:mb-[105px]"
                            src="icons/gold__logo.svg"
                            alt="logo" />
                    </Link>
                    <h2 className='road__title flex flex-col justify-center items-center'>
                        <span className='road__title-span text-[#323232] hidden md:block md:w-full md:text-center md:font-medium md:text-[64px] md:leading-[100%] md:tracking-tighter-[-2%] uppercase'>
                            Explore and find yourself <span className='hidden lg:block lg:text-[#707070]'>In Silk road Journey</span>
                        </span>
                        <div className='road__span-box flex flex-col justify-center items-center md:hidden'>
                            <span className='road__title-top-span font-medium text-[32px] leading-[100%] tracking-tighter-[-2%] uppercase'>
                                explore and find
                            </span>
                            <span className='road__title-mid-span block font-medium text-[32px] leading-[100%] tracking-tighter-[-2%] uppercase'>
                                yourself in silk
                            </span>
                            <span className='road__title-bottom-span block font-medium text-[32px] leading-[100%] tracking-tighter-[-2%] uppercase'>
                                road journey
                            </span>
                        </div>
                    </h2>
                    <button className='road__button flex flex-row justify-center items-center gap-3.5'>
                        Let’s travel
                        <RightChevron />
                    </button>
                </div>
            </section>
        </div>
    )
}