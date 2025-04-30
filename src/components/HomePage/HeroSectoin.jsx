import './HeroSectoin.css'
import SecondContactButton from '../ui/SecondContactButton'
export default function HeroSectoin() {
    return (
        <div>
            <section className='hero'>
                <div className="container hero__container flex flex-col justify-center items-center gap-y-[89px] min-h-screen px-6">
                    <div className="hero__top-box flex flex-col justify-center items-center">
                        <p className='hero__top-text text-center w-full font-medium text-[16px] tracking-tighter-[-2%] text-white mb-6 md:text-[32px] md:mb-[32px]'>
                            From Ancient Steppes to Timeless Cities
                        </p>
                        <h2 className='hero__top-title text-center w-full font-medium text-[40px] leading-[48px] uppercase text-white mb-6 md:text-[72px] md:leading-[80px] md:mb-[56px]'>
                            Welcome to the Heart of the Silk Road
                        </h2>
                        <p className='hero__top-second-text text-center w-[162px] font-medium text-[16px] tracking-tighter-[-2%] text-white md:text-[32px] md:w-full'>
                            Your Central Asian Adventure Begins Here
                        </p>
                    </div>
                    <div className="hero__bottom-box flex flex-col justify-center items-center">
                        <div className='hero__contuct-button lg:hidden'>
                            <SecondContactButton>Contact us</SecondContactButton>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}