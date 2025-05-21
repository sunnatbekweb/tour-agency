import "./DesertSection.css";
export default function DesertSection() {
  return (
    <div>
      <section className="desert mt-[40px] md:mt-[64px] lg:mt-[100px]">
        <div className="container desert__container flex flex-col justify-center items-start gap-2 px-6 md:gap-4 md:px-9">
          <p className="desert__text font-medium text-[16px] leading-[100%] text-[#A5958B] uppercase md:text-[24px]">
            Cultural Highlights
          </p>
          <div className="desert__bottom-box w-full flex flex-col justify-center items-start gap-6 md:gap-[56px] 2xl:flex 2xl:flex-row 2xl:justify-between 2xl:items-start">
            <h2 className="desert__bottom-title w-full font-medium text-[32px] leading-[40px] text-[#323232] uppercase md:text-[56px] md:leading-[60px] lg:w-[751px]">
              From Desert Fortresses to Mountain Festivals — Central Asia is
              Calling
            </h2>
            <p className="desert__bottom-text w-full font-medium text-[12px] leading-[16px] text-[#323232] md:text-[24px] md:leading-[32px] lg:w-[553px]">
              At Silk Road Wonders, we don't just offer tours — we open doors to
              ancient civilizations, vibrant traditions, and breathtaking
              landscapes. Whether you're drawn to architectural marvels or the
              rhythms of rural life, there's a story here waiting just for you.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
