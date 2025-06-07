"use client";
import { Link } from "@/i18n/navigation";
import "./FooterMdSection.css";
import { useEffect, useRef, useState } from "react";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MdRoadSection from "./MdRoadSection";
import { useTranslations } from "next-intl";
export default function FooterMdSection() {
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
    <div className="hidden md:block xl:hidden">
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
      <div className="relative top-[90px] z-[-1]">
        <MdRoadSection />
      </div>
      <footer className="footerMdSection md:w-full md:bg-[#A98D7D] md:rounded-tr-[56px] md:rounded-tl-[56px] md:py-[52px] px-6">
        <div className="container footerMdSection__container md:w-full md:flex md:flex-col md:justify-center md:items-center md:px-9">
          <div className="footerMdSection__top-box md:w-full md:flex md:flex-row md:justify-between md:items-end md:gap-[47px] md:mb-[102px]">
            <div className="footerMdSection__top-left-box md:flex md:flex-col md:justify-center md:items-start md:gap-8">
              <Link href={"/"}>
                <img
                  className="footerMdSection__top-logo inline-block md:w-[140px] md:h-[77px]"
                  src={"/icons/logo.svg"}
                  alt="logo"
                />
              </Link>
              <p className="footerMdSection__top-text md:w-[235px] md:font-medium md:text-[24px] md:leading-[30px] md:tracking-tighter-[-2%] md:text-white">
                {t("footer.email_text")}
              </p>
            </div>
            <form
              className="footerMdSection__form md:w-full"
              onSubmit={formSubmission}
            >
              <div className="footerMdSection__form-box md:w-full md:flex md:flex-col md:justify-items-center md:items-start md:gap-3 md:h-[116px]">
                <div
                  className="footerMdSection__form-input-box md:w-full md:flex md:flex-col md:justify-items-center md:items-start md:relative md:bg-white md:rounded-[50px] md:py-6 md:pl-10"
                  ref={emailRef}
                >
                  <input
                    className="footerMdSection__form-email-input md:font-medium md:text-[24px] md:leading-[20px] md:text-[#323232] md:outline-none"
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
                  <button className="footerMdSection__form-button md:flex md:justify-center md:items-center md:absolute md:rounded-[36px] md:px-[22px] md:py-[19px] md:top-[9px] md:bottom-[9px] md:right-[9px] md:bg-[#A98D7D]">
                    <img
                      className="footerMdSection__form-button-icon md:inline-block md:object-contain md:w-[28.69px] md:h-[30.94px]"
                      src="/icons/right__submit.svg"
                      alt="right__submit-icon"
                    />
                  </button>
                </div>
                {error.email && form.email.length > 0 ? (
                  <p className="footerMdSection__form-text text-red-500">
                    {error.email}
                  </p>
                ) : null}
              </div>
            </form>
          </div>
          <div className="footerMdSection__middle-box md:w-full md:flex md:flex-row md:justify-between md:items-center">
            <nav className="footerMdSection__nav md:flex md:flex-col md:justify-center md:items-start">
              <h4 className="footerMdSection__list-text md:font-medium md:text-[40px] md:leading-[100%] md:tracking-tighter-[-2%] md:text-white md:mb-12">
                {t("footer.explore_text")}
              </h4>
              <ul className="footerMdSection__list md:flex md:flex-col md:justify-center md:items-start md:gap-9">
                {link.map((item, index) => (
                  <li
                    className="footerMdSection__lists md:flex md:flex-col md:justify-center md:items-start"
                    key={index}
                  >
                    <Link className="footerMdSection__links md:flex md:flex-col md:justify-center md:items-start">
                      <p className="footerMdSection__links-text font-medium text-[30px] leading-[100%] tracking-tighter-[-2%] md:text-white/70 md:active:opacity-50">
                        {item.links}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <button
              className="footerMdSection__button md:active:duration-100 md:duration-100 md:active:opacity-50 md:border-4 md:border-white/50 md:rounded-full md:outline-none"
              onClick={moveTop}
            >
              <img
                className="footerMdSection__button-icon md:rotate-[316deg] md:object-cover md:inline-block md:w-[80px] md:h-[80px]"
                src={"/icons/white__arrow-icon.svg"}
                alt="button__icon"
              />
            </button>
            <div className="footerMdSection__bottom-right-box md:w-[277px] md:flex md:flex-col md:justify-center md:items-center">
              <h4 className="footerMdSection__bottom-right-box-title md:w-[277px] md:font-medium md:text-[35px] md:leading-[100%] md:tracking-tighter-[-2%] md:mb-[57.5px] md:text-white">
                {t("footer.why_travel_title")}
              </h4>
              <q className="footerMdSection__bottom-right-box-texts md:w-[277px] md:mb-[57.5px] md:text-white/70">
                {t("footer.why_travel_text")}
              </q>
              <div className="footerMdSection__icon-box md:w-full md:flex md:flex-row md:justify-between md:items-center">
                {icon.map((icons, id) => (
                  <div
                    className="footerMdSection__icon-mini-boxes md:w-full md:flex md:flex-row md:justify-between md:items-center"
                    key={id}
                  >
                    <a
                      className="footerMdSection__icon-links"
                      href={icons.links}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className="footerMdSection__icon-images md:object-cover md:inline-block md:w-[64px] md:h-[64px] md:active:duration-100 md:duration-100 md:active:opacity-50"
                        src={icons.icons}
                        alt={icons.descriptions}
                      />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <hr className="footerMdSection__hr md:border-none md:outline-none md:bg-white/15 md:w-full md:h-[2px] md:my-[52px]" />
          <div className="footerMdSection__copy-box md:flex md:flex-col md:justify-center md:items-center md:gap-8">
            <p className="footerMdSection__copy-text md:font-medium md:text-[24px] md:leading-[100%] md:tracking-tighter-[-2%] md:text-white md:uppercase">
              &copy; SRW 2025
            </p>
            <div className="footerMdSection__copy-logo-box md:flex md:flex-row md:justify-center md:items-center">
              <p className="footerMdSection__developing-text md:font-medium md:text-[24px] md:leading-[100%] md:tracking-tighter-[-2%] md:text-white">
                {t("footer.developed_by")}:&nbsp;&nbsp;
              </p>
              <a
                className="footerMdSection__copy-logo-link"
                href="https://www.onesystem.uz"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="footerMdSection__copy-logo-text md:font-medium md:text-[24px] md:leading-[100%] md:tracking-tighter-[-2%] md:text-white active:opacity-50">
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
