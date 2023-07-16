import React from "react";
import BannerImage from "../assets/img/house-banner.png";
import Image from "next/image";
import Search from "~/components/Search";

const Banner = () => {
  return (
    <section className="mb-8 h-full max-h-[640] xl:mb-24">
      <div className="flex flex-col lg:flex-row">
        <div className="flex flex-col items-center justify-center px-4 text-center lg:ml-8 lg:items-center lg:px-0 lg:text-left xl:ml-[135px]">
          <h1 className="mb-6 text-4xl font-semibold leading-none lg:text-[58px]">
            <span className="text-violet-700">Rent</span> Your Dream House With
            Us
          </h1>
          <p className="mb-8 max-w-[480px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
            cupiditate error illo itaque iure libero numquam porro recusandae
            saepe totam.
          </p>
        </div>
        {/*  image*/}
        <div className="hidden flex-1 items-end justify-end lg:flex">
          <Image src={BannerImage} alt="banner image" />
        </div>
      </div>
      <Search />
    </section>
  );
};

export default Banner;
