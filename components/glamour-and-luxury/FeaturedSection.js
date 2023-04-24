import React from "react";
import {
  featuredStyles,
  luxuryBrands,
  latestShoeStyles,
} from "@/public/assets/glamour-and-luxury";
import Image from "next/image";

const FeaturedSection = () => {
  return (
    <section className='lg:border border-lightGray/3 lg:mt-24 '>
      <div className='relative mx-auto w-11/12 md:w-4/6 lg:w-11/12 2xl:w-4/6 flex flex-col lg:flex-row justify-center  text-center gap-7 lg:gap-0'>
        <div className='relative w-full mt-12 lg:mt-0 lg:pb-12 lg:pr-4 '>
          <div className='relative h-64 sm:h-80 lg:mt-16'>
            <Image
              src={latestShoeStyles}
              alt='Latest shoe styles'
              fill
              className='object-cover object-center'
            />
          </div>
          <p className='mt-4 font-bold text-normal'>The Latest Shoe Styles</p>
        </div>
        <div className='relative w-full lg:border border-lightGray/3 lg:border-t-0 lg:border-b-0 lg:pb-12 lg:px-4'>
          <div className='relative h-64 sm:h-80 lg:mt-16'>
            <Image
              src={luxuryBrands}
              alt='Luxury brands'
              fill
              className='object-cover object-center'
            />
          </div>
          <p className='mt-4 font-bold text-normal'>Luxury Brands</p>
        </div>
        <div className='relative w-full mb-12 lg:mb-0 lg:pb-12 lg:pl-4 '>
          <div className='relative h-64 sm:h-80 lg:mt-16'>
            <Image
              src={featuredStyles}
              alt='Featured styles'
              fill
              className='object-cover object-center'
            />
          </div>
          <p className='mt-4 font-bold text-normal'>Featured Styles</p>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
