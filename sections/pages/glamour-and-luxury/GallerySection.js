import React from "react";
import Button from "../../../components/button/button";
import Image from "next/image";
import {
  ladyBack,
  ladyPosingBlue,
  ladyStandingRed,
  ladyWalkingPink,
} from "@/public/assets/glamour-and-luxury";
import { arrowLeft, arrowRight } from "@/public/assets/svgs";

const GallerySection = () => {
  return (
    <section className=' pt-12 pb-24'>
      <div className='mx-auto w-11/12 md:w-2/3 lg:w-11/12 2xl:w-4/6 flex flex-col items-center justify-center'>
        <h2 className='text-medium font-bold text-center'>
          Women&apos;s Fall-Winter 2020 Show Collection Now Available
        </h2>
        <div className='relative w-full'>
          <div className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-0 mt-6 lg:mt-8 justify-items-center'>
            <Image
              src={ladyWalkingPink}
              alt='Lady walking wearing a pink dress'
              placeholder='blur'
              className='object-contain object-center xl:w-[350px]'
            />
            <Image
              src={ladyPosingBlue}
              alt='Lady posing on a lue dress'
              placeholder='blur'
              className='object-contain object-center xl:w-[350px]'
            />
            <Image
              src={ladyStandingRed}
              alt='Lady standing wearing a red gown'
              placeholder='blur'
              className='object-contain object-center xl:w-[350px]'
            />
            <Image
              src={ladyBack}
              alt='Lady standing facing back'
              placeholder='blur'
              className='object-contain object-center xl:w-[350px]'
            />
          </div>
          <div className='hidden absolute top-1/2 right-0 bg-white w-20 h-20 -translate-y-1/2 lg:flex items-center justify-center'>
            <Image
              src={arrowRight}
              alt='arrow-right'
              className='cursor-pointer'
            />
          </div>
          <div className='hidden lg:flex absolute top-1/2 bg-white w-20 h-20 -translate-y-1/2 items-center justify-center'>
            <Image
              src={arrowLeft}
              alt='arrow-left'
              className='cursor-pointer'
            />
          </div>
        </div>
        <Button text='Shop Now' customClassName='mt-6' />
      </div>
    </section>
  );
};

export default GallerySection;
