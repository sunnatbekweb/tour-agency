import React from "react";
import "@/styles/page_styles/contact.css";

export default function Contact() {
  return (
    <section className="contact_section">
      <div className="contact_section-bg"></div>
      <div className="container flex items-center justify-between gap-x-[180px] px-5 2xl:px-0">
        <div className="text-white w-1/2">
          <h2 className="font-medium text-[110px]">Contact Us.</h2>
          <p className="font-medium text-2xl leading-8 max-w-[480px] mt-[68px] mb-[84px]">
            <strong className="font-bold">
              Have questions about your next adventure?
            </strong>{" "}
            If needed, we’re happy to connect by phone for further assistance.
            Let’s plan your perfect trip together!
          </p>
          <div className="grid grid-cols-2 gap-x-16 font-medium text-2xl leading-8">
            <div className="flex flex-col gap-y-4">
              <h3 className="font-bold uppercase">Our adress</h3>
              <a href="#">
                Uzbekistan,Tashkent City, Mirabad district, Street Shahrisabz,
                23
              </a>
            </div>
            <div className="flex flex-col">
              <h3 className="font-bold uppercase mb-4">Our adress</h3>
              <a href="mailto:traveluzbekista@gmail.com">
                traveluzbekista@gmail.com
              </a>
              <a href="tel:+8004247289">800 424 7289</a>
              <a href="tel:+2066247289">206 624 7289</a>
            </div>
          </div>
        </div>
        <div className="form_container w-1/2">
          <form className="px-8 py-10 bg-white rounded-2xl">
            <h4 className="font-medium text-[56px] mb-[60px]">
              Let’s Get in Touch
            </h4>
            <label
              htmlFor="fullName"
              className="flex flex-col gap-y-4 font-medium text-2xl mb-6"
            >
              <span className="text-[#878787]">Full name</span>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Enter your name"
                className="bg-[#B4A2971A] border border-[#D9D9D9] placeholder:text-[#BDBDBD] px-6 py-5 rounded-lg"
              />
            </label>
            <label
              htmlFor="email"
              className="flex flex-col gap-y-4 font-medium text-2xl mb-6"
            >
              <span className="text-[#878787]">Email</span>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="bg-[#B4A2971A] border border-[#D9D9D9] placeholder:text-[#BDBDBD] px-6 py-5 rounded-lg"
              />
            </label>
            <label
              htmlFor="destination"
              className="flex flex-col gap-y-4 font-medium text-2xl mb-6"
            >
              <span className="text-[#878787]">Your Destination</span>
              <input
                type="text"
                id="destination"
                name="destination"
                placeholder="Select destination"
                className="bg-[#B4A2971A] border border-[#D9D9D9] placeholder:text-[#BDBDBD] px-6 py-5 rounded-lg"
              />
            </label>
            <label
              htmlFor="tripTour"
              className="flex flex-col gap-y-4 font-medium text-2xl mb-6"
            >
              <span className="text-[#878787]">Trip Tour</span>
              <input
                type="text"
                id="tripTour"
                name="tripTour"
                placeholder="Select Trip Tour"
                className="bg-[#B4A2971A] border border-[#D9D9D9] placeholder:text-[#BDBDBD] px-6 py-5 rounded-lg"
              />
            </label>
            <button className="w-[305px] h-[72px] grid place-content-center text-white bg-[#A5958B] mx-auto rounded-4xl font-medium text-2xl mt-[60px]">
              Send a message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
