import React from "react";
import "@/styles/page_styles/about.css";
import Image from "next/image";

export default function About() {
  return (
    <>
      <section className="about">
        <div className="container h-full flex flex-col items-center 2xl:items-start justify-center">
          <span className="font-medium text-3xl sm:text-5xl md:text-7xl xl:text-9xl text-white">
            Not Just Tours
          </span>
          <br className="hidden md:block" />
          <span className="font-medium text-3xl sm:text-5xl md:text-7xl xl:text-9xl text-white ml-[20%] 2xl:ml-[40%]">
            We Tell Stories
          </span>
        </div>
      </section>
      <section className="py-20">
        <div className="container">
          <span className="font-medium text-xl text-[#A5958B] uppercase block mb-8">
            Trip Blogs
          </span>
          <div className="flex flex-col lg:flex-row gap-x-5 items-center font-medium text-[#323232] uppercase">
            <h2 className="text-7xl w-full lg:w-1/2">
              Where Cultures Converge and History Lives
            </h2>
            <p className="text-2xl w-full lg:w-1/2">
              Silk Road Wonders is more than just a travel company — it’s your
              gateway to the legendary Silk Road. We craft immersive journeys
              that connect the past with the present, guiding you through
              ancient caravan routes, vibrant cultures, and the enduring spirit
              of trade that once linked civilizations.Each journey with us is a
              step into history, reimagined for the modern explorer.
            </p>
          </div>
        </div>
      </section>
      <Image
        src={"/images/about_page_img.png"}
        width={1920}
        height={800}
        alt="Page image"
      />
      <section className="py-20">
        <div className="container">
          <span className="font-medium text-xl text-[#A5958B] uppercase block mb-8">
            Trip Blogs
          </span>
          <div className="flex flex-col lg:flex-row gap-x-5 font-medium text-[#323232]">
            <h3 className="text-7xl w-full lg:w-1/2 uppercase">
              Explore Our Exclusive Tour
            </h3>
            <div className="w-full lg:w-1/2">
              <p className="text-2xl uppercase">
                Our crew is always getting bigger, but we all work toward one
                goal: to make sales success not only possible but inevitable for
                teams everywhere.
              </p>
              <p className="text-2xl mt-[100px] mb-[72px]">
                In 2022, at vero eos et accusamus et iusto odio dignissimos
                ducimus qui blanditiis praesentium voluptatum deleniti atque
                corrupti quos dolores et quas molestias excepturi sint occaecati
                cupiditate non provident, similique sunt in culpa qui officia
                deserunt mollitia animi, id est laborum et dolorum fuga. Et
                harum quidem rerum facilis est et expedita distinctio. Nam
                libero tempore, cum soluta nobis est eligendi optio cumque nihil
                impedit quo minus id quod maxime placeat facere possimus, omnis
                voluptas assumenda est, omnis dolor repellendus. Temporibus
                autem quibusdam et aut officiis debitis aut rerum necessitatibus
                saepe eveniet ut et voluptates repudiandae sint et molestiae non
                recusandae. Itaque earum rerum hic tenetur a sapiente delectus,
                ut aut reiciendis voluptatibus maiores alias consequatur aut
                perferendis doloribus asperiores repellat.
              </p>
              <h4 className="text-5xl uppercase">
                “Our goal is to build software that gives customer-facing teams
                at SMBs the ability to create fruitful and enduring
                relationships with customers.”
              </h4>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <hr />
      </div>
      <section className="pt-14 pb-20">
        <div className="container grid grid-cols-1 lg:grid-cols-3 gap-x-[120px]">
          <div className="font-medium">
            <h5 className="text-2xl mb-2">
              Our growing team is made up of passionate professionals committed
              to delivering exceptional service and innovation.
            </h5>
            <span className="text-9xl">200+</span>
          </div>
          <div className="font-medium">
            <h5 className="text-2xl mb-2">
              Over a decade of expertise in creating seamless customer journeys
              and reliable solutions.
            </h5>
            <span className="text-9xl">10+</span>
          </div>
          <div className="font-medium">
            <h5 className="text-2xl mb-2">
              We’re proud to have earned the trust of over 20,000 satisfied
              clients across the globe.
            </h5>
            <span className="text-9xl">30K+</span>
          </div>
        </div>
      </section>
      <section className="bg-[#F0E6E0] pt-20 pb-[120px]">
        <div className="container">
          <span className="font-medium text-xl text-[#A5958B] uppercase block mb-8">
            Trip Blogs
          </span>
          <h3 className="font-medium text-7xl w-full lg:w-1/2 uppercase mb-[72px]">
            Meet our amazing tour leaders
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10">
            {[...Array(8)].map((_, index) => (
              <div key={index}>
                <Image
                  src={"/images/tour_leader.png"}
                  width={440}
                  height={480}
                  alt="Tour leader"
                />
                <div className="pt-6 px-2 font-medium">
                  <h5 className="text-4xl mb-2">Mr. Eshmat Toshmat</h5>
                  <p className="text-2xl">Tour leader Kazakhistan</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
