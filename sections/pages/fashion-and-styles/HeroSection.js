import React from "react";
import Image from "next/image";
import { heroImage } from "@/public/assets/fashion-and-styles";

function HeroSection() {
  return (
    <section className=''>
      <div className=' w-11/12 mx-auto flex flex-col items-center justify-center mt-12 lg:mt-20 max-w-[1237px] '>
        {/* Image and Text */}
        <div className='w-full flex flex-col items-center justify-center sm:flex-row sm:justify-start'>
          <div className='relative w-full h-[260px] md:h-[280px] md:w-1/3 lg:h-[378px]'>
            <Image
              src={heroImage}
              placeholder='blur'
              fill
              className='object-cover object-center'
              unoptimized='true'
              alt='Hero image'
            />
          </div>

          <div
            className=' px-4 py-3 -mt-9 bg-white sm:drop-shadow sm:-ml-9 sm:-mt-0 sm:pl-8 2xl:pr-16'
            style={{
              width: "clamp(18.9rem, 80vw, 50.9rem)",
            }}
          >
            <h2 className='text-medium font-bold md:mt-11'>Fashion & Style</h2>
            <p className='mt-4 text-priBlack text-small font-normal tracking-wide md:mb-10'>
              Get the latest fashion tips and outfit ideas from your favorite
              celebrities and designers, whether it be luxury brands like Gucci
              and Chanel or affordable basics from Target and Gap.
            </p>
          </div>
        </div>
        {/* Categories */}
        <div className='w-full mt-4 lg:mt-9 grid gap-3 grid-cols-[repeat(2,_max-content)] sm:grid-cols-[repeat(3,_max-content)] lg:grid-cols-[repeat(6,_auto)] justify-items-stretch'>
          <div className='text-small font-medium border-2 border-black px-5 py-2 cursor-pointer text-center hover:bg-black hover:text-white'>
            Work Wear
          </div>
          <div className='text-small font-medium border-2 border-black px-5 py-2 cursor-pointer text-center hover:bg-black hover:text-white'>
            Street Style
          </div>
          <div className='text-small font-medium border-2 border-black px-5 py-2 cursor-pointer text-center hover:bg-black hover:text-white'>
            Runway
          </div>
          <div className='text-small font-medium border-2 border-black px-5 py-2 cursor-pointer text-center hover:bg-black hover:text-white'>
            Wedding
          </div>
          <div className='text-small font-medium border-2 border-black px-5 py-2 cursor-pointer text-center hover:bg-black hover:text-white'>
            Latest Shoes
          </div>
          <div className='text-small font-medium border-2 border-black px-5 py-2 cursor-pointer text-center hover:bg-black hover:text-white'>
            Clothes & Accessories
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
