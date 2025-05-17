import Image from "next/image";
import React from "react";

export default function BlogDetail() {
  return (
    <section className="mt-[216px] md:mt-[240px] xl:mt-[210px">
      <div className="container px-6 font-medium">
        <h1 className="font-medium text-2xl md:text-4xl lg:text-6xl text-[#323232]">
          The Art of Turning Lookers into Bookers: Mastering the Customer
          Journey
        </h1>
        <p className="text-xl lg:text-3xl text-[#A7A7A7] my-6 lg:my-12">6 May, 2025</p>
        <Image
          src={"/images/trip-finder-bg.png"}
          width={1920}
          height={820}
          className="w-full rounded-2xl"
          alt="Blog image"
        />
        <div className="w-full xl:w-3/4 mx-auto">
          <article className="py-12 lg:py-24">
            <p className="md:text-lg lg:text-2xl">
              The “share with client” link is one of our travel agents’
              most-loved features – and it’s easy to see why. It makes it easy
              to share experiences with your existing and potential clients and
              let them book on their own while you earn commission.Generating
              your link is as easy as clicking “share with client” in the upper
              right-hand corner of any page on travelagents.viator.com. Then,
              it’s time to share your links. Beyond simply sharing a specific
              experience with a particular client, you can utilize these links
              in many different ways. Keep reading to discover 5 best practices
              for using your “share with client” links.
            </p>
            {[...Array(5)].map((_, index) => (
              <div>
                <br />
                <h2 className="text-2xl md:text-3xl lg:text-4xl">
                  {index + 1}. Share the right links in the right places
                </h2>
                <br />
                <p className="md:text-lg lg:text-2xl">
                  What pages to share Share the homepage directly with your
                  clients to browse all experiences and destinations. You can
                  use this link in your Instagram bio, email signature, or
                  within evergreen content that applies to all clients,
                  regardless of destination.
                  <br /> <br />
                  Destination and category pages are best for social media posts
                  if you specialize in a particular destination, sharing with
                  groups traveling to the same destination or clients who prefer
                  to book in-destination. You can also add these links to your
                  travel guides and itineraries to earn passive income.
                  <br /> <br />
                  Share experience pages directly with clients who are looking
                  for specific things to do Share experiences you’ve done and
                  can vouch for them by sharing on your social media When you
                  book for a client, share the product page on your Instagram
                  story for others to be inspired by and book.
                </p>
              </div>
            ))}
          </article>
        </div>
      </div>
    </section>
  );
}
