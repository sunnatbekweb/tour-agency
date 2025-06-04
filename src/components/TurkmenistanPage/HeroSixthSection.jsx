import "./HeroSixthSection.css";
import ContactButton from "../ui/ContactButton";
export default function HeroSixthSection() {
  return (
    <div>
      <section className="heroSixth">
        <div className="container heroSixth__container flex flex-col justify-center items-center min-h-screen px-6 xl:pt-[100px] md:px-9">
          <h2 className="heroSixth__title font-medium uppercase text-[38px] leading-[38px] text-white mb-4 md:text-[90px] md:leading-[120px] lg:text-[115px] lg:leading-[120px] xl:normal-case xl:mb-[48px]">
            Turkmenistan
          </h2>
          <p className="heroSixth__text font-medium w-full text-[24px] leading-[100%] uppercase tracking-tighter-[-2%] text-white mb-[101px] text-center md:w-[634px] md:text-[48px] md:mb-[168px] lg:mb-[268px] xl:normal-case xl:w-full xl:text-[42px] xl:mb-[50px]">
            Where the Past Still Breathes and Oasis of Timeless Traditions
          </p>
          <div className="heroSixth__button 2xl:hidden">
            <ContactButton>Contact us</ContactButton>
          </div>
        </div>
      </section>
    </div>
  );
}
