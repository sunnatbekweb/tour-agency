import "./ThirdCivilizationSection.css";
export default function ThirdCivilizationSection() {
  return (
    <div>
      <section className="thirdCivilization mt-10 md:mt-[64px] xl:mt-[100px]">
        <div className="container thirdCivilization__container w-full flex flex-col justify-center items-start px-6 md:px-9">
          <div className="thirdCivilization__top-box flex flex-col justify-center items-start gap-2 md:gap-4 xl:gap-[32px]">
            <p className="thirdCivilization__top-title text-[#A5958B] font-medium text-[18px] leading-[100%] uppercase md:text-[24px]">
              About country
            </p>
            <h2 className="thirdCivilization__top-text font-medium text-[32px] leading-[40px] text-[#323232] uppercase mb-8 md:text-[56px] md:mb-[56px] md:leading-[100%] xl:text-[72px] xl:mb-[80px] xl:w-[963px]">
              Tajikistan: Roof of Central Asia
            </h2>
          </div>
          <div className="thirdCivilization__bottom-box w-full flex flex-col justify-center items-start bg-[#E5DFDC] rounded-[10px] py-[23px] px-4 md:px-[24px] md:py-[24px] md:rounded-[24px] xl:px-[48px] xl:py-[48px] 2xl:flex 2xl:flex-row 2xl:justify-between 2xl:gap-[50px] 2xl:items-start 2xl:px-[32px] 2xl:py-[32px] 2xl:h-full">
            <div className="">
              <h4 className="thirdCivilization__bottom-title text-[#323232] font-medium text-[22px] leading-[100%] mb-3 md:text-[48px] md:leading-[100%] md:mb-[42px]">
                About Tajikistan
              </h4>
              <p className="thirdCivilization__bottom-text w-full text-[#878787] text-[14px] font-medium leading-[18px] mb-6 md:text-[32px] md:leading-[40px] md:mb-10 2xl:mb-[30px] 2xl:text-[24px] 2xl:leading-[32px] 2xl:w-[550px]">
                Tajikistan is a land of staggering mountains and deep-rooted
                history — a place where the Pamir Mountains scrape the sky and
                ancient caravan routes still echo with stories of travelers long
                gone. Here, rugged beauty and raw nature create a backdrop like
                no other in Central Asia. With over 90% of the country covered
                in mountains, this is where trekkers, dreamers, and seekers of
                solitude find their path.
              </p>
              <p className="thirdCivilization__bottom-second-text w-full text-[#878787] text-[14px] font-medium leading-[18px] mb-8 md:text-[32px] md:leading-[40px] md:mb-20 2xl:text-[24px] 2xl:leading-[32px] 2xl:mb-0 2xl:w-[550px]">
                But Tajikistan is not only wilderness — it is warmth. In remote
                villages, hospitality is a way of life. Chai is shared, stories
                are offered, and traditions are kept alive in dances, fabrics,
                and festivals. Whether you’re tracing the Wakhan Corridor or
                wandering the vibrant markets of Dushanbe, every step here
                connects you with something ancient, soulful, and utterly
                unforgettable.
              </p>
            </div>
            <div className="thirdCivilization__bottom-box-images w-full">
              <div className="thirdCivilization__mini-bottom w-full flex flex-row justify-center items-start gap-[15px] md:gap-4 xl:gap-[30px] 2xl:flex 2xl:flex-row 2xl:justify-center 2xl:items-center">
                <img
                  className="thirdCivilization__bottom-left-image w-[50%] h-[219px] object-cover rounded-[8px] md:h-[553px] md:rounded-[25px] 2xl:w-[466px] xl:h-[561px] 2xl:h-[728px]"
                  src={"/images/tajikistan__first.jpg"}
                  alt={"images"}
                />
                <div className="thirdCivilization__bottom-right-image-box w-[50%] flex flex-col justify-center items-center gap-2 md:gap-4 xl:gap-[25px]">
                  <img
                    className="thirdCivilization__bottom-right-image w-full h-[105px] object-cover rounded-[8px] md:h-[268px] md:rounded-[24px] 2xl:w-[311px] 2xl:h-[351.5px]"
                    src={"/images/tajikistan__second.jpg"}
                    alt={"images"}
                  />
                  <img
                    className="thirdCivilization__bottom-right-image w-full h-[105px] object-cover rounded-[8px] md:h-[268px] md:rounded-[24px] 2xl:w-[311px] 2xl:h-[351.5px]"
                    src={"/images/tajikistan__third.jpg"}
                    alt={"images"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
