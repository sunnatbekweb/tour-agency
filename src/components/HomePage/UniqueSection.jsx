import { Link } from '@/i18n/navigation';
import './UniqueSection.css';
import RightChevron from '../../../public/icons/RightChevron.jsx';
export default function UniqueSection() {
  return (
    <div>
      <section className="unique">
        <div className="container unique__container flex flex-col justify-center items-center min-h-screen">
          <Link>
            <img
              className="unique__logo-image inline-block mb-[123px] w-[80px] h-[44px] md:w-[140px] md:h-[77px] md:mb-[140px] xl:mb-[114px]"
              src="icons/logo.svg"
              alt="logo__image"
            />
          </Link>
          <p className="unique__text font-medium text-[24px] leading-[24px] text-white mb-2 md:text-[40px] md:leading-[60px]">
            Craft Your Own Adventure
          </p>
          <h3 className="unique__title font-medium text-[40px] leading-[40px] text-white text-center mb-[100px] md:text-[72px] md:leading-[72px] md:mb-[120px] xl:leading-[74px] xl:mb-[80px]">
            Unique, Personal,
            <span className="unique__title-span block">Unforgettable</span>
          </h3>
          <button className="unique__button flex flex-row justify-center items-center gap-3.5 active:opacity-50">
            Let’s travel
            <RightChevron />
          </button>
        </div>
      </section>
    </div>
  );
}
