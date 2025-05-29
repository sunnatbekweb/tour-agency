import "./CivilizationSection.css";
export default function CivilizationSection() {
  return (
    <div>
      <section className="civilization mt-10 md:mt-[64px] xl:mt-[100px]">
        <div className="container civilization__container w-full flex flex-col justify-center items-start px-6 md:px-9">
          <div className="civilization__top-box flex flex-col justify-center items-start gap-2 md:gap-4 xl:gap-[32px]">
            <p className="civilization__top-title text-[#A5958B] font-medium text-[18px] leading-[100%] uppercase md:text-[24px]">
              About country
            </p>
            <h2 className="civilization__top-text font-medium text-[32px] leading-[40px] text-[#323232] uppercase mb-8 md:text-[56px] md:leading-[100%] xl:text-[72px] xl:mb-[80px] xl:w-[963px]">
              Uzbekistan: Crossroads of Civilizations
            </h2>
          </div>
          <div className="civilization__bottom-box w-full flex flex-col justify-center items-start bg-[#E5DFDC] rounded-[10px] py-[23px] px-4 md:px-[24px] md:py-[24px] md:rounded-[24px] xl:px-[48px] xl:py-[48px] 2xl:flex 2xl:flex-row 2xl:justify-between 2xl:gap-[50px] 2xl:items-start 2xl:px-[32px] 2xl:py-[32px] 2xl:h-full">
            <div className="">
              <h4 className="civilization__bottom-title text-[#323232] font-medium text-[22px] leading-[100%] mb-3 md:text-[48px] md:leading-[100%] md:mb-[42px]">
                About Uzbekistan
              </h4>
              <p className="civilization__bottom-text w-full text-[#878787] text-[14px] font-medium leading-[18px] mb-6 md:text-[32px] md:leading-[40px] md:mb-10 2xl:mb-[30px] 2xl:text-[24px] 2xl:leading-[32px] 2xl:w-[550px]">
                Uzbekistan is the beating heart of Central Asia — a country
                where history lives in every mosaic and hospitality greets you
                at every corner. From the towering minarets of Khiva to the
                majestic Registan of Samarkand, Uzbekistan offers a cultural
                journey unlike any other. It’s where science once thrived, trade
                flourished, and traditions were born that still color the land
                today. Let the Silk Road guide your footsteps through this
                timeless land.2
              </p>
              <p className="civilization__bottom-second-text w-full text-[#878787] text-[14px] font-medium leading-[18px] mb-8 md:text-[32px] md:leading-[40px] md:mb-20 2xl:text-[24px] 2xl:leading-[32px] 2xl:mb-0 2xl:w-[550px]">
                Uzbekistan’s charm lies not only in its architectural wonders
                but in the warmth of its people and the richness of its living
                traditions. In bustling bazaars, the scent of spices mingles
                with the sound of craftsmen at work. Music, storytelling, and
                intricate artistry remain part of daily life — a true blend of
                ancient legacy and vibrant culture. Whether you're wandering
                through historic caravanserais or sharing a meal with locals,
                Uzbekistan welcomes you with open arms and timeless soul.
              </p>
            </div>
            <div className="civilization__bottom-box-images w-full">
              <div className="civilization__mini-bottom w-full flex flex-row justify-center items-start gap-[15px] md:gap-4 xl:gap-[30px] 2xl:flex 2xl:flex-row 2xl:justify-center 2xl:items-center">
                <img
                  className="civilization__bottom-left-image w-[50%] h-[219px] object-cover rounded-[8px] md:h-[553px] md:rounded-[25px] 2xl:w-[466px] xl:h-[561px] 2xl:h-[728px]"
                  src={"/images/uzbekistan__third.jpg"}
                  alt={"images"}
                />
                <div className="civilization__bottom-right-image-box w-[50%] flex flex-col justify-center items-center gap-2 md:gap-4 xl:gap-[25px]">
                  <img
                    className="civilization__bottom-right-image w-full h-[105px] object-cover rounded-[8px] md:h-[268px] md:rounded-[24px] 2xl:w-[311px] 2xl:h-[351.5px]"
                    src={"/images/uzbekistan__second.jpg"}
                    alt={"images"}
                  />
                  <img
                    className="civilization__bottom-right-image w-full h-[105px] object-cover rounded-[8px] md:h-[268px] md:rounded-[24px] 2xl:w-[311px] 2xl:h-[351.5px]"
                    src={"/images/uzbekistan__first.jpg"}
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
