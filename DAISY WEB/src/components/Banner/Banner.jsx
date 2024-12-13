import React from "react";
import BannerImg from "../../assets/marketing-speaker.png";

const Banner = () => {
  return (
    <main className="bg-green-700 ">
      <section data-aos="fade-up" className="container py-8 md:py-12">
        <div className="grid grid-cols-1 items-center gap-4 sm:text-ellipsis md:grid-cols-3 md:gap-8">
          <div className=" order-2 flex flex-col items-center gap-4 text-center text-white md:col-span-2  md:items-start md:text-left ">
            <h1 className="text-3xl font-bold ">Market your Brand</h1>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              ducimus eius quis ad enim aliquid iusto eum nihil exercitationem
              necessitatibus?
            </p>
            <button className="rounded-md bg-white dark:bg-black dark:text-white px-4 py-2  text-lg  text-black transition-colors duration-300 hover:bg-white/90 hover:text-green-800 font-semibold">
              Get Started
            </button>
          </div>
          <div className="order-1">
            <iframe
              className="aspect-video w-full"
              src=""
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Banner;
