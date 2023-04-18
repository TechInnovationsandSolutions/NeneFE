import React from "react";
import Button from "../button/button";
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
      <div className='mx-auto w-11/12 2xl:w-4/6 flex flex-col items-center justify-center'>
        <h2 className='text-medium font-bold text-center'>
          Women&apos;s Fall-Winter 2020 Show Collection Now Available
        </h2>
        <div className='relative w-full'>
          <div className='relative w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-0 mt-6 lg:mt-8'>
            <Image
              src={ladyWalkingPink}
              alt='Lady walking wearing a pink dress'
              // fill
              sizes='100vw'
              style={{
                objectFit: "contain",
                width: "100%",
              }}
            />
            <Image
              src={ladyPosingBlue}
              alt='Lady posing on a lue dress'
              // fill
              sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw'
              style={{
                objectFit: "cover",
                width: "100%",
              }}
            />
            <Image
              src={ladyStandingRed}
              alt='Lady standing wearing a red gown'
              // fill
              sizes='100vw'
              style={{
                objectFit: "contain",
                width: "100%",
              }}
            />
            <Image
              src={ladyBack}
              alt='Lady standing facing back'
              // fill
              sizes='100vw'
              style={{
                objectFit: "contain",
                width: "100%",
              }}
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
