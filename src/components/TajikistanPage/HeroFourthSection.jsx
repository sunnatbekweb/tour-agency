import "./HeroFourthSection.css";
import ContactButton from "../ui/ContactButton";
export default function HeroFourthSection() {
  return (
    <div>
      <section className="heroFourth">
        <div className="container heroFourth__container flex flex-col justify-center items-center min-h-screen px-6 xl:pt-[100px] md:px-9">
          <h2 className="heroFourth__title font-medium uppercase text-[40px] leading-[48px] text-white mb-4 md:text-[62px] md:leading-[70px] lg:capitalize">
            Tajikistan
          </h2>
          <p className="heroFourth__text font-medium uppercase sm:normal-case w-full text-[16px] tracking-tighter-[-2%] text-white mb-[101px] text-center sm:w-3/4 md:w-[60%] md:text-[32px] lg:w-[45%] xl:w-full md:text-4xl md:mb-[168px] lg:mb-[268px] xl:mb-[50px]">
            Land of Mountains and Glaciers and Ancient Cultures
          </p>
          <div className="heroFourth__button 2xl:hidden">
            <ContactButton>Contact us</ContactButton>
          </div>
        </div>
      </section>
    </div>
  );
}
