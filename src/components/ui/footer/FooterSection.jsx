"use client";
import "./FooterSection.css";
import { Link } from "@/i18n/navigation";
import { useEffect, useRef, useState } from "react";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RoadSection from "../RoadSection";
import WhiteChevron from "../../../../public/icons/WhiteChevron";
import { useTranslations } from "next-intl";
export default function FooterSection() {
  const t = useTranslations();
  const moveTop = () => {
    window.scrollTo(0, 0);
  };
  const link = [
    {
      links: t("header.nav.finder"),
    },
    {
      links: t("header.nav.about"),
    },
    {
      links: t("header.nav.blog"),
    },
    {
      links: t("header.contact"),
    },
  ];
  const icon = [
    {
      icons: "/icons/telegram.svg",
      descriptions: "telegram__icon",
      links: "https://t.me/VueMid",
    },
    {
      icons: "/icons/facebook.svg",
      descriptions: "facebook__icon",
      links: "https://www.facebook.com/cleanhouse.uz",
    },
    {
      icons: "/icons/instagram.svg",
      descriptions: "instagram__icon",
      links: "https://www.instagram.com/umid_dev",
    },
  ];
  const [form, setForm] = useState({ email: "" });
  const [correct, setCorrect] = useState({ email: "" });
  const [error, setError] = useState({ email: false });
  const [isFormValid, setIsFormValid] = useState(false);
  const emailRef = useRef();
  if (form.email.length > 0) {
    if (error.email) {
      emailRef.current.style.borderColor = "red";
      emailRef.current.style.borderWidth = "2px";
    } else {
      emailRef.current.style.borderColor = "green";
      emailRef.current.style.borderWidth = "2px";
    }
  }
  useEffect(() => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (form.email.length === null) {
      setError({ ...error, email: "*Please enter your email." });
      setCorrect({ ...correct, email: false });
    } else if (!emailRegex.test(form.email)) {
      setError({ ...error, email: "*Please enter a valid email address." });
      setCorrect({ ...correct, email: false });
    } else {
      setCorrect({
        ...correct,
        email: "This field has been filled correctly!",
      });
      setError({ ...error, email: false });
    }
  }, [form.email]);
  useEffect(() => {
    setIsFormValid(correct.email);
  }, [correct]);
  async function sendData(email) {
    const TOKEN = `7331186148:AAEXcMJUHFCgpzm1TghB9itA7WT0KHlVu3M`;
    const botID = "-1001837026407";
    const info = `User  %0A<strong>📧: </strong>${email}`;
    const response = await fetch(
      `https://api.telegram.org/bot${TOKEN}/sendMessage?chat_id=${botID}&text=${info}&parse_mode=html`
    );
    const data = await response.json();
    console.log(data);
    setForm({ email: "" });
  }
  const formSubmission = async (e) => {
    e.preventDefault();
    if (isFormValid) {
      await sendData(form.email);
      toast.success("Successful!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Slide,
      });
    } else {
      toast.error("Error", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Slide,
      });
    }
  };
  return (
    <div className="hidden xl:block">
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="colored"
        transition={Slide}
      />
      <div className="relative top-[95px]">
        <RoadSection />
      </div>
      <footer className="footer bg-[#A98D7D] xl:w-full xl:rounded-tr-[56px] xl:rounded-tl-[56px] xl:absolute">
        <div className="container footer__container xl:pt-[106.65px] px-6">
          <div className="footer__top-box xl:flex xl:flex-row xl:justify-between xl:items-start">
            <div className="footer__top-left-box xl:flex xl:flex-col xl:justify-center xl:items-start xl:w-[419px] 2xl:w-[519px]">
              <Link className="footer__top-left-logo-link" href={"/"}>
                <img
                  className="footer__top-left-logo-image xl:inline-block xl:w-[140px] xl:h-[77px] xl:mb-[72px]"
                  src={"/icons/logo.svg"}
                  alt="logo"
                />
              </Link>
              <p className="footer__top-left-text xl:font-normal xl:text-2xl xl:tracking-tighter-[-2%] xl:text-white xl:w-[419px] xl:mb-[72px] 2xl:w-[519px]">
                {t("footer.email_text")}
              </p>
              <form
                className="footer__top-left-form xl:w-[419px] 2xl:w-[519px]"
                onSubmit={formSubmission}
              >
                <div className="footer__top-left-form-box xl:w-[419px] xl:flex xl:flex-col xl:justify-items-center xl:items-start xl:gap-3 xl:h-[116px] 2xl:w-[519px]">
                  <div
                    className="footer__top-left-form-input-box xl:w-full xl:flex xl:flex-col xl:justify-items-center xl:items-start xl:relative xl:bg-white xl:rounded-[50px] xl:py-6 xl:pl-10"
                    ref={emailRef}
                  >
                    <input
                      className="footer__top-left-form-email-input xl:font-medium xl:text-[24px] xl:leading-[20px] xl:text-[#323232] xl:outline-none"
                      onChange={(e) => {
                        e.preventDefault();
                        setForm({ ...form, email: e.target.value.trimStart() });
                      }}
                      type="email"
                      id="email"
                      placeholder={t("footer.email_placeholder")}
                      autoComplete="off"
                      value={form.email}
                      required
                    />
                    <button className="footer__top-left-form-button xl:flex xl:justify-center xl:items-center xl:absolute xl:rounded-[36px] xl:px-[22px] xl:py-[19px] xl:top-[9px] xl:bottom-[9px] xl:right-[9px] xl:bg-[#A98D7D]">
                      <img
                        className="footer__top-left-button-icon xl:inline-block xl:object-contain xl:w-[28.69px] xl:h-[30.94px]"
                        src="/icons/right__submit.svg"
                        alt="right__submit-icon"
                      />
                    </button>
                  </div>
                  {error.email && form.email.length > 0 ? (
                    <p className="footerxlSection__form-text text-red-500">
                      {error.email}
                    </p>
                  ) : null}
                </div>
              </form>
            </div>
            <nav className="footer__top-middle-box xl:flex xl:flex-col xl:justify-center xl:items-start">
              <h4 className="footer__top-middle-list-text xl:font-medium xl:text-4xl xl:leading-[100%] xl:tracking-tighter-[-2%] xl:text-white xl:mb-12">
                {t("footer.explore_text")}
              </h4>
              <ul className="footer__top-middle-list xl:flex xl:flex-col xl:justify-center xl:items-start xl:gap-9">
                {link.map((item, index) => (
                  <li
                    className="footer__top-middle-lists xl:flex xl:flex-col xl:justify-center xl:items-start"
                    key={index}
                  >
                    <Link className="footer__top-middle-links xl:flex xl:flex-col xl:justify-center xl:items-start">
                      <p className="footer__top-middle-links-text xl:duration-500 xl:hover:duration-500 xl:font-normal xl:text-2xl xl:leading-[100%] xl:tracking-tighter-[-2%] xl:text-white/70 xl:hover:text-white xl:active:opacity-50">
                        {item.links}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="footer__top-seond-middle-bottom-right-box xl:w-[350px] xl:flex xl:flex-col xl:justify-center xl:items-start 2xl:w-[418px]">
              <h4 className="footer__top-seond-middle-bottom-right-box-title xl:w-[350px] xl:font-medium xl:text-[35px] xl:leading-[100%] xl:tracking-tighter-[-2%] xl:mb-[57.5px] xl:text-white 2xl:w-[418px] 2xl:text-4xl">
                {t("footer.why_travel_title")}
              </h4>
              <q className="footer__top-seond-middle-bottom-right-box-texts xl:font-medium xl:text-2xl xl:w-[350px] xl:mb-[57.5px] xl:text-white/70 xl:tracking-tighter-[-2%] 2xl:w-[418px]">
                {t("footer.why_travel_text")}
              </q>
              <div className="footer__top-seond-middle-icon-box xl:w-full xl:flex xl:flex-row xl:justify-between xl:items-center">
                {icon.map((icons, id) => (
                  <div
                    className="footer__top-seond-middle-icon-mini-boxes xl:w-full xl:flex xl:flex-row xl:justify-between xl:items-center"
                    key={id}
                  >
                    <a
                      className="footer__top-seond-middle-icon-links"
                      href={icons.links}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className="footer__top-seond-middle-icon-images xl:object-cover xl:inline-block xl:w-[64px] xl:h-[64px]"
                        src={icons.icons}
                        alt={icons.descriptions}
                      />
                    </a>
                  </div>
                ))}
              </div>
            </div>
            <button
              className="footer__right-button border-4 border-white/50 rounded-full"
              onClick={moveTop}
            >
              <WhiteChevron />
            </button>
          </div>
          <hr className="footer__hr xl:border-none xl:outline-none xl:bg-white/15 xl:w-full xl:h-[2px] xl:my-[52px]" />
          <div className="footer__bottom-box xl:pb-[52px]">
            <div className="footer__bottom-box-copy-box xl:w-full xl:flex xl:flex-row xl:justify-between xl:items-center xl:gap-8">
              <p className="footer__bottom-box-copy-text xl:font-medium xl:text-xl xl:leading-[100%] xl:tracking-tighter-[-2%] xl:text-white xl:uppercase">
                &copy; "Silk Road Wonders" 2025
              </p>
              <div className="footer__bottom-box-copy-logo-box xl:flex xl:flex-row xl:justify-center xl:items-center">
                <p className="footer__bottom-box-developing-text xl:font-medium xl:text-xl xl:leading-[100%] xl:tracking-tighter-[-2%] xl:text-white">
                  {t("footer.developed_by")}:&nbsp;&nbsp;
                </p>
                <a
                  className="footer__bottom-box-copy-logo-link"
                  href="https://www.onesystem.uz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="footer__bottom-box-copy-logo-text xl:font-medium xl:text-xl xl:leading-[100%] xl:tracking-tighter-[-2%] xl:text-white xl:hover:opacity-50 xl:duration-500">
                    OneSystem
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
