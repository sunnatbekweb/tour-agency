import './ExploreSection.css'
export default function ExploreSection() {
    return (
        <div>
            <section className="explore mt-[40px] md:mt-[64px]">
                <div className="container explore__container flex flex-col justify-center items-start px-6 md:px-9 2xl:flex 2xl:flex-row 2xl:justify-between 2xl:items-end">
                    <div className="explore__left-box flex flex-col justify-center items-start">
                        <p className='explore__left-text font-medium text-[16px] text-[#A5958B] mb-2 uppercase md:text-[24px] md:mb-4 xl:mb-8 xl:text-[20px]'>
                            destination preview
                        </p>
                        <h2 className='explore__left-title w-full font-medium text-[32px] leading-[40px] uppercase text-[#323232] mb-6 md:text-[56px] md:leading-[100%] md:mb-14 xl:text-[72px] xl:leading-[80px] xl:w-full xl:max-w-[830px]'>
                            Explore Central Asia Like Never Before
                        </h2>
                    </div>
                    <p className='explore__right-text w-full font-medium text-[12px] leading-[18px] text-[#32323] md:text-[24px] md:leading-[32px] md:w-[637px] xl:leading-[37px]'>
                        At SRW (Silk Road Wonders), we craft unforgettable journeys across Uzbekistan, Kazakhstan, Kyrgyzstan, and Tajikistan. Whether you're drawn by majestic architecture, ancient bazaars, or serene nature — your perfect adventure awaits.
                    </p>
                </div>
            </section>
        </div>
    )
}