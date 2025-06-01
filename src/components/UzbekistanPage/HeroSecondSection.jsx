import "./HeroSecondSection.css";
import ContactButton from "../ui/ContactButton";
export default function HeroSecondSection() {
  return (
    <div>
      <section className="heroSecond">
        <div className="container heroSecond__container flex flex-col justify-center items-center min-h-screen px-6 xl:pt-[100px] md:px-9">
          <h2 className="heroSecond__title font-medium uppercase text-[55px] leading-[72px] text-white mb-4 md:text-[115px] md:leading-[120px] xl:normal-case xl:mb-[48px]">
            Uzbekistan
          </h2>
          <p className="heroSecond__text font-medium w-full text-[24px] leading-[100%] uppercase tracking-tighter-[-2%] text-white mb-[101px] text-center md:w-[634px] md:text-[48px] md:mb-[168px] lg:mb-[268px] xl:normal-case xl:w-full xl:text-[42px] xl:mb-[50px]">
            Land of Great Scholars and Crossroads of Cultures
          </p>
          <div className="heroSecond__button 2xl:hidden">
            <ContactButton>Contact us</ContactButton>
          </div>
        </div>
      </section>
    </div>
  );
}
