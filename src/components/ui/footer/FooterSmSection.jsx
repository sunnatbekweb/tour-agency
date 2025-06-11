"use client";
import { Link } from "@/i18n/navigation";
import "./FooterSmSection.css";
import { useEffect, useRef, useState } from "react";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SmRoadSection from "../SmRoadSection";
import { useTranslations } from "next-intl";
export default function FooterSmSection() {
  const t = useTranslations();
  const moveTop = () => {
    window.scrollTo(0, 0);
  };
  const links = [
    {
      text: t("header.destinations.index"),
      link: "#",
    },
    {
      text: t("header.nav.about"),
      link: "/about",
    },
    {
      text: t("header.nav.blog"),
      link: "/blog",
    },
    {
      text: t("header.contact"),
      link: "/contact",
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
      setError({ ...error, email: t("footer.footer__error-text1") });
      setCorrect({ ...correct, email: false });
    } else if (!emailRegex.test(form.email)) {
      setError({ ...error, email: t("footer.footer__error-text2") });
      setCorrect({ ...correct, email: false });
    } else {
      setCorrect({
        ...correct,
        email: t("footer.footer__correct-text2"),
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
      toast.success(t("footer.footer__toast-correct"), {
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
      toast.error(t("footer.footer__toast-error"), {
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
    <div className="md:hidden">
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
      <div className="top-[30px] z-[-1] relative">
        <SmRoadSection />
      </div>
      <footer
        className="footerSmSection w-full bg-[#A98D7D] rounded-tr-[30px] rounded-tl-[30px] py-[52px]"
        onSubmit={formSubmission}
      >
        <div className="container w-full footerSmSection__container flex flex-col justify-center items-center px-6">
          <div className="footerSmSection__top w-full flex flex-row justify-between items-start ">
            <Link href={"/"}>
              <img
                className="footerSmSection__top-logo inline-block w-[80px] h-[44px] md:w-[140px] md:h-[77px]"
                src={"/icons/logo.svg"}
                alt="logo"
              />
            </Link>
            <p className="footerSmSection__top-text w-[196px] font-normal text-[14px] leading-[18px] tracking-tighter-[-2%] text-white">
              {t("footer.email_text")}
            </p>
          </div>
          <form className="footerSmSection__form w-full flex flex-row justify-center items-center mt-[41px]">
            <div className="footerSmSection__form-box w-full flex flex-col justify-items-center items-start gap-2 h-[90px]">
              <div
                className="footerSmSection__form-input-box w-full flex flex-row justify-start items-center relative bg-white rounded-[26.5px] py-[15px]"
                ref={emailRef}
              >
                <input
                  className="footerSmSection__form-email-input w-[78%] outline-none pl-[24px] font-medium text-[18px] leading-[100%] text-[#323232]"
                  onChange={(e) => {
                    e.preventDefault();
                    setForm({ ...form, email: e.target.value.trimStart() });
                  }}
                  type="email"
                  id="email"
                  placeholder={t("email_placeholder")}
                  autoComplete="off"
                  value={form.email}
                  required
                />
                <button className="footerSmSection__form-button flex justify-center items-center rounded-[20.8px] right-[14px] absolute top-[6px] bottom-[6px] bg-[#A98D7D] px-[18px] py-[9px] active:opacity-50">
                  <img
                    className="footerSmSection__form-button-icon"
                    src="/icons/right__submit.svg"
                    alt="right__submit-icon"
                  />
                </button>
              </div>
              {error.email && form.email.length > 0 ? (
                <p className="text-red-500">{error.email}</p>
              ) : null}
            </div>
          </form>
          <div className="footerSmSection__bottom-box w-full flex flex-row justify-between items-start mt-[56px]">
            <nav className="footerSmSection__nav flex flex-col justify-center items-start">
              <ul className="footerSmSection__list flex flex-col justify-center items-start gap-6">
                <h4 className="footerSmSection__list-text font-medium text-[24px] leading-[100%] tracking-tighter-[-2%] text-white">
                  {t("footer.explore_text")}
                </h4>
                {links.map((item, index) => (
                  <li
                    className="footerSmSection__lists flex flex-col justify-center items-start"
                    key={index}
                  >
                    <Link href={item.link} className="footerSmSection__links flex flex-col justify-center items-start">
                      <p className="footerSmSection__links-text font-medium text-[16px] leading-[100%] tracking-tighter-[-2%] text-white/70 active:opacity-50">
                        {item.text}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="footerSmSection__bottom-right-box flex flex-col justify-center items-start w-[151px] gap-6">
              <h4 className="footerSmSection__bottom-right-box-title font-medium text-[19px] leading-[24px] tracking-tighter-[-2%] text-white">
                {t("footer.why_travel_title")}
              </h4>
              <q className="footerSmSection__bottom-right-box-texts font-medium text-[16px] leading-[20px] tracking-tighter-[-2%] text-white/70">
                {t("footer.why_travel_text")}
              </q>
            </div>
          </div>
          <div className="footerSmSection__icon-box flex flex-row justify-center items-center gap-[70px] mt-[58px]">
            {icon.map((icons, id) => (
              <div className="footerSmSection__icon-mini-boxes" key={id}>
                <a
                  className="footerSmSection__icon-links"
                  href={icons.links}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="footerSmSection__icon-images object-cover inline-block w-[48px] h-[48px]"
                    src={icons.icons}
                    alt={icons.descriptions}
                  />
                </a>
              </div>
            ))}
          </div>
          <button
            className="footerSmSection__button mt-[44px] active:duration-100 duration-100 active:opacity-50 border-4 border-white/50 rounded-full outline-none"
            onClick={moveTop}
          >
            <img
              className="footerSmSection__button-icon rotate-[316deg]"
              src={"/icons/white__arrow-icon.svg"}
              alt="button__icon"
            />
          </button>
          <hr className="border-none outline-none bg-white/15 w-full h-[2px] my-[30px]" />
          <div className="footerSmSection__copy-box flex flex-col justify-center items-center gap-4 xl:gap-12">
            <p className="footerSmSection__copy-text font-medium text-[19px] leading-[24px] tracking-tighter-[-2%] text-white uppercase">
              &copy; SRW 2025
            </p>
            <div className="footerSmSection__copy-logo-box flex flex-row justify-center items-center">
              <p className="footerSmSection__developing-text font-medium text-[19px] leading-[24px] tracking-tighter-[-2%] text-white">
                {t("footer.developed_by")}:&nbsp;&nbsp;
              </p>
              <a
                className="footerSmSection__copy-logo-link"
                href="https://www.onesystem.uz"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="footerSmSection__copy-logo-text font-medium text-[19px] leading-[24px] tracking-tighter-[-2%] text-white active:opacity-50">
                  OneSystem
                </p>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
