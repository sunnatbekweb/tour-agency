import "./FourthCivilizationSection.css";
export default function FourthCivilizationSection() {
  return (
    <div>
      <section className="fourthCivilization mt-10 md:mt-[64px] xl:mt-[100px]">
        <div className="container fourthCivilization__container w-full flex flex-col justify-center items-start px-6 md:px-9">
          <div className="fourthCivilization__top-box flex flex-col justify-center items-start gap-2 md:gap-4 xl:gap-[32px]">
            <p className="fourthCivilization__top-title text-[#A5958B] font-medium text-[18px] leading-[100%] uppercase md:text-[24px]">
              About country
            </p>
            <h2 className="fourthCivilization__top-text font-medium text-[32px] leading-[40px] text-[#323232] uppercase mb-8 md:text-[56px] md:mb-[56px] md:leading-[100%] xl:text-[72px] xl:mb-[80px] xl:w-[963px]">
              Kyrgyzstan: Land of Peaks, Lakes & Nomads
            </h2>
          </div>
          <div className="fourthCivilization__bottom-box w-full flex flex-col justify-center items-start bg-[#E5DFDC] rounded-[10px] py-[23px] px-4 md:px-[24px] md:py-[24px] md:rounded-[24px] xl:px-[48px] xl:py-[48px] 2xl:flex 2xl:flex-row 2xl:justify-between 2xl:gap-[50px] 2xl:items-start 2xl:px-[32px] 2xl:py-[32px] 2xl:h-full">
            <div className="">
              <h4 className="fourthCivilization__bottom-title text-[#323232] font-medium text-[22px] leading-[100%] mb-3 md:text-[48px] md:leading-[100%] md:mb-[42px]">
                About Kyrgyzstan
              </h4>
              <p className="fourthCivilization__bottom-text w-full text-[#878787] text-[14px] font-medium leading-[18px] mb-6 md:text-[32px] md:leading-[40px] md:mb-10 2xl:mb-[30px] 2xl:text-[24px] 2xl:leading-[32px] 2xl:w-[550px]">
                But Kyrgyzstan is more than scenery — it's a living legacy of
                the nomadic soul. In the vast jailoo (summer pastures), families
                still herd their animals as they have for generations. Travelers
                are not strangers here — they are guests, welcomed with a bowl
                of warm kumis and heartfelt hospitality that knows no
                boundaries. Sharing stories under the stars, listening to the
                music of komuz, and tasting bread baked in clay tandyrs — this
                is everyday life, as rich as the land itself.
              </p>
              <p className="fourthCivilization__bottom-second-text w-full text-[#878787] text-[14px] font-medium leading-[18px] mb-8 md:text-[32px] md:leading-[40px] md:mb-20 2xl:text-[24px] 2xl:leading-[32px] 2xl:mb-0 2xl:w-[550px]">
                But Kyrgyzstan is more than scenery — it's a living culture. In
                the high pastures (jailoo), families still herd livestock and
                welcome travelers with open arms and warm kumis. Festivals
                celebrate eagle hunters, felt artisans, and horse games that
                date back millennia. Every visit becomes a soulful journey into
                a world untouched by time, yet alive with tradition.
              </p>
            </div>
            <div className="fourthCivilization__bottom-box-images w-full">
              <div className="fourthCivilization__mini-bottom w-full flex flex-row justify-center items-start gap-[15px] md:gap-4 xl:gap-[30px] 2xl:flex 2xl:flex-row 2xl:justify-center 2xl:items-center">
                <img
                  className="fourthCivilization__bottom-left-image w-[50%] h-[219px] object-cover rounded-[8px] md:h-[553px] md:rounded-[25px] 2xl:w-[466px] xl:h-[561px] 2xl:h-[728px]"
                  src={"/images/kyrgyzstan__first.jpg"}
                  alt={"images"}
                />
                <div className="fourthCivilization__bottom-right-image-box w-[50%] flex flex-col justify-center items-center gap-2 md:gap-4 xl:gap-[25px]">
                  <img
                    className="fourthCivilization__bottom-right-image w-full h-[105px] object-cover rounded-[8px] md:h-[268px] md:rounded-[24px] 2xl:w-[311px] 2xl:h-[351.5px]"
                    src={"/images/kyrgyzstan__second.jpg"}
                    alt={"images"}
                  />
                  <img
                    className="fourthCivilization__bottom-right-image w-full h-[105px] object-cover rounded-[8px] md:h-[268px] md:rounded-[24px] 2xl:w-[311px] 2xl:h-[351.5px]"
                    src={"/images/kyrgyzstan__third.jpg"}
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
