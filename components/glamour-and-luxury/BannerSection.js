import React from "react";
import Image from "next/image";
import { banner, louisVuitton } from "@/public/assets/glamour-and-luxury";
import Button from "../button/button";

const BannerSection = () => {
  return (
    <section className='relative h-[180px] sm:h-[203px] md:h-[251px] lg:h-[321px] 2xl:h-[481px] mt-12 lg:mt-20'>
      <Image
        src={banner}
        alt='banner'
        fill
        className='object-cover object-center z-0'
      />
      <Image
        src={louisVuitton}
        alt='louis vuitton logo'
        // fill
        className='absolute w-44 sm:w-48 md:w-60 lg:w-80 2xl:w-[400px] top-0 bottom-0 right-0 lg:right-[1%] 2xl:right-[10%]'
      />
      <div className='absolute flex flex-col items-end justify-center top-0 bottom-0 right-0 lg:right-[1%] 2xl:right-[10%] z-10 mr-[5%]'>
        <h3 className='text-medium font-medium text-white'>
          “Fashions fade, style is eternal”
        </h3>
        <small className='text-white text-small mt-1 xl:mt-3'>
          {" "}
          - Alexander Wang
        </small>
        <Button
          text='Shop Louis Vuitton’s Collection'
          variant='white'
          customClassName='mt-8 cursor-pointer'
        />
      </div>
      <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50' />
    </section>
  );
};

export default BannerSection;
