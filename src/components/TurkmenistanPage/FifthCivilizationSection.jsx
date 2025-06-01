import "./FifthCivilizationSection.css";
export default function FifthCivilizationSection() {
  return (
    <div>
      <section className="fifthCivilization mt-10 md:mt-[64px] xl:mt-[100px]">
        <div className="container fifthCivilization__container w-full flex flex-col justify-center items-start px-6 md:px-9">
          <div className="fifthCivilization__top-box flex flex-col justify-center items-start gap-2 md:gap-4 xl:gap-[32px]">
            <p className="fifthCivilization__top-title text-[#A5958B] font-medium text-[18px] leading-[100%] uppercase md:text-[24px]">
              About country
            </p>
            <h2 className="fifthCivilization__top-text font-medium text-[32px] leading-[40px] text-[#323232] uppercase mb-8 md:text-[56px] md:mb-[56px] md:leading-[100%] xl:text-[72px] xl:mb-[80px] xl:w-[963px]">
              Turkmenistan: The Hidden Jewel of the Silk Road
            </h2>
          </div>
          <div className="fifthCivilization__bottom-box w-full flex flex-col justify-center items-start bg-[#E5DFDC] rounded-[10px] py-[23px] px-4 md:px-[24px] md:py-[24px] md:rounded-[24px] xl:px-[48px] xl:py-[48px] 2xl:flex 2xl:flex-row 2xl:justify-between 2xl:gap-[50px] 2xl:items-start 2xl:px-[32px] 2xl:py-[32px] 2xl:h-full">
            <div className="">
              <h4 className="fifthCivilization__bottom-title text-[#323232] font-medium text-[22px] leading-[100%] mb-3 md:text-[48px] md:leading-[100%] md:mb-[42px]">
                About Turkmenistan
              </h4>
              <p className="fifthCivilization__bottom-text w-full text-[#878787] text-[14px] font-medium leading-[18px] mb-6 md:text-[32px] md:leading-[40px] md:mb-10 2xl:mb-[30px] 2xl:text-[24px] 2xl:leading-[32px] 2xl:w-[550px]">
                Turkmenistan is a land of deep silence and timeless secrets —
                where golden sands hide ancient cities, and marble cities rise
                in the desert. Once home to mighty empires like Parthia and
                Khwarezm, this country holds the ruins of Merv and Nisa,
                whispering stories of traders, scholars, and civilizations that
                shaped the Silk Road.
              </p>
              <p className="fifthCivilization__bottom-second-text w-full text-[#878787] text-[14px] font-medium leading-[18px] mb-8 md:text-[32px] md:leading-[40px] md:mb-20 2xl:text-[24px] 2xl:leading-[32px] 2xl:mb-0 2xl:w-[550px]">
                But beyond the history lies a living culture: proud, resilient,
                and welcoming. In traditional villages, carpets are still
                handwoven with centuries-old symbolism; in the vast Karakum
                Desert, yurts still dot the horizon. The blazing Darvaza Gas
                Crater — “The Door to Hell” — lights up the night like a torch
                from the underworld. Hospitality here is sacred — tea is shared,
                stories are offered, and visitors are treated as honored guests.
                Turkmenistan isn’t just a destination — it’s a revelation
                waiting to unfold, for the curious and the courageous.
              </p>
            </div>
            <div className="fifthCivilization__bottom-box-images w-full">
              <div className="fifthCivilization__mini-bottom w-full flex flex-row justify-center items-start gap-[15px] md:gap-4 xl:gap-[30px] 2xl:flex 2xl:flex-row 2xl:justify-center 2xl:items-center">
                <img
                  className="fifthCivilization__bottom-left-image w-[50%] h-[219px] object-cover rounded-[8px] md:h-[553px] md:rounded-[25px] 2xl:w-[466px] xl:h-[561px] 2xl:h-[728px]"
                  src={"/images/turkmenistan__first.jpg"}
                  alt={"images"}
                />
                <div className="fifthCivilization__bottom-right-image-box w-[50%] flex flex-col justify-center items-center gap-2 md:gap-4 xl:gap-[25px]">
                  <img
                    className="fifthCivilization__bottom-right-image w-full h-[105px] object-cover rounded-[8px] md:h-[268px] md:rounded-[24px] 2xl:w-[311px] 2xl:h-[351.5px]"
                    src={"/images/turkmenistan__second.jpg"}
                    alt={"images"}
                  />
                  <img
                    className="fifthCivilization__bottom-right-image w-full h-[105px] object-cover rounded-[8px] md:h-[268px] md:rounded-[24px] 2xl:w-[311px] 2xl:h-[351.5px]"
                    src={"/images/turkmenistan__third.jpg"}
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
