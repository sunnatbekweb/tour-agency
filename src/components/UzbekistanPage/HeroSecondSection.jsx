import ContactButton from "../ui/ContactButton";
import Image from "next/image";
import "./HeroSecondSection.css";
export default function HeroSecondSection({ image, title, subtitle }) {
  return (
    <div>
      <section className="heroSecond">
        <div className="w-full h-screen relative flex flex-col items-center justify-center px-6">
          <Image
            src={image}
            width={1920}
            height={1080}
            loading="lazy"
            className="absolute top-0 left-0 w-full h-full -z-10 object-cover"
            alt="Hero background image"
          />
          <h2 className="heroSecond__title font-medium uppercase text-[55px] leading-[72px] text-white mb-4 md:text-[115px] md:leading-[120px] lg:capitalize">
            {title}
          </h2>
          <p className="heroSecond__text font-medium uppercase sm:capitalize w-full text-xl tracking-tighter-[-2%] text-white mb-[101px] text-center sm:w-3/4 md:w-[60%] lg:w-[45%] xl:w-full md:text-4xl md:mb-[168px] lg:mb-[268px] xl:text-[42px] xl:mb-[50px]">
            {subtitle}
          </p>
          <div className="heroSecond__button 2xl:hidden">
            <ContactButton>Contact us</ContactButton>
          </div>
        </div>
      </section>
    </div>
  );
}
