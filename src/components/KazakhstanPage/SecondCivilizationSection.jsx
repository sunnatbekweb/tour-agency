import "./SecondCivilizationSection.css";
export default function SecondCivilizationSection() {
  return (
    <div>
      <section className="secondCivilization mt-10 md:mt-[64px] xl:mt-[100px]">
        <div className="container secondCivilization__container w-full flex flex-col justify-center items-start px-6 md:px-9">
          <div className="secondCivilization__top-box flex flex-col justify-center items-start gap-2 md:gap-4 xl:gap-[32px]">
            <p className="secondCivilization__top-title text-[#A5958B] font-medium text-[18px] leading-[100%] uppercase md:text-[24px]">
              About country
            </p>
            <h2 className="secondCivilization__top-text font-medium text-[32px] leading-[40px] text-[#323232] uppercase mb-8 md:text-[56px] md:mb-[56px] md:leading-[100%] xl:text-[72px] xl:mb-[80px] xl:w-[963px]">
              Kazakhstan: Land of Wide Horizons and Bold Spirits
            </h2>
          </div>
          <div className="secondCivilization__bottom-box w-full flex flex-col justify-center items-start bg-[#E5DFDC] rounded-[10px] py-[23px] px-4 md:px-[24px] md:py-[24px] md:rounded-[24px] xl:px-[48px] xl:py-[48px] 2xl:flex 2xl:flex-row 2xl:justify-between 2xl:gap-[50px] 2xl:items-start 2xl:px-[32px] 2xl:py-[32px] 2xl:h-full">
            <div className="">
              <h4 className="secondCivilization__bottom-title text-[#323232] font-medium text-[22px] leading-[100%] mb-3 md:text-[48px] md:leading-[100%] md:mb-[42px]">
                About Kazakhstan
              </h4>
              <p className="secondCivilization__bottom-text w-full text-[#878787] text-[14px] font-medium leading-[18px] mb-6 md:text-[32px] md:leading-[40px] md:mb-10 2xl:mb-[30px] 2xl:text-[24px] 2xl:leading-[32px] 2xl:w-[550px]">
                Kazakhstan’s true magic lies not only in its vastness, but in
                its contrasts — where silence meets strength, and ancient
                traditions meet modern ambition. Venture beyond the urban
                skylines of Astana and Almaty, and you’ll discover a world
                sculpted by wind, time, and nomadic pride. The boundless steppe
                isn’t just a landscape — it’s a symbol of freedom that has
                shaped generations of resilient, welcoming people.
              </p>
              <p className="secondCivilization__bottom-second-text w-full text-[#878787] text-[14px] font-medium leading-[18px] mb-8 md:text-[32px] md:leading-[40px] md:mb-20 2xl:text-[24px] 2xl:leading-[32px] 2xl:mb-0 2xl:w-[550px]">
                In every village, you'll find stories passed down around the
                fire. In every traditional yurt, a connection to the past. The
                Kazakh way of life is deeply rooted in respect for nature,
                hospitality, and courage — whether you're sharing fermented
                kumis with a herder or climbing snow-covered peaks in the Tien
                Shan. This is a land for wanderers, dreamers, and anyone
                yearning to reconnect with something pure, powerful, and
                timeless.
              </p>
            </div>
            <div className="secondCivilization__bottom-box-images w-full">
              <div className="secondCivilization__mini-bottom w-full flex flex-row justify-center items-start gap-[15px] md:gap-4 xl:gap-[30px] 2xl:flex 2xl:flex-row 2xl:justify-center 2xl:items-center">
                <img
                  className="secondCivilization__bottom-left-image w-[50%] h-[219px] object-cover rounded-[8px] md:h-[553px] md:rounded-[25px] 2xl:w-[466px] xl:h-[561px] 2xl:h-[728px]"
                  src={"/images/kazakhstan__first.jpg"}
                  alt={"images"}
                />
                <div className="secondCivilization__bottom-right-image-box w-[50%] flex flex-col justify-center items-center gap-2 md:gap-4 xl:gap-[25px]">
                  <img
                    className="secondCivilization__bottom-right-image w-full h-[105px] object-cover rounded-[8px] md:h-[268px] md:rounded-[24px] 2xl:w-[311px] 2xl:h-[351.5px]"
                    src={"/images/kazakhstan__second.jpg"}
                    alt={"images"}
                  />
                  <img
                    className="secondCivilization__bottom-right-image w-full h-[105px] object-cover rounded-[8px] md:h-[268px] md:rounded-[24px] 2xl:w-[311px] 2xl:h-[351.5px]"
                    src={"/images/kazakhstan__third.jpg"}
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
