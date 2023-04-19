import React from "react";
import {
  onlineExclusive,
  janelleMakeup,
} from "@/public/assets/glamour-and-luxury";
import Image from "next/image";
import Button from "../button/button";

const DiscoverFeelShopSection = () => {
  return (
    <section className='md:border border-[#8b82822b]'>
      <div className='mx-auto w-11/12 2xl:w-4/6 flex flex-col md:flex-row md:items-end justify-center md:justify-between text-center'>
        <div className='md:pr-10 md:border-r border-r-[#8b82824a] md:pb-12 flex flex-col items-center w-full '>
          <Image
            src={onlineExclusive}
            alt='Online Exclusive'
            className='md:mt-12'
          />
          <h3 className='text-normal font-bold mt-4 md:mt-6'>
            Online Exclusive: The Chanel Collection
          </h3>
        </div>
        <div className='mt-8 md:mt-0 flex flex-col items-center justify-between md:pb-12 md:pl-10 w-full '>
          <h2 className='font-bold text-xLarge'>DISCOVER.FEEL.SHOP</h2>
          <Button
            text='Now Available'
            variant='white'
            customClassName='rounded-md border border-black mt-4 md:mt-8'
          />
          <Image
            src={janelleMakeup}
            alt='Online Exclusive'
            className='mt-6 md:mt-16'
          />
          <h3 className='text-normal font-bold mt-4 md:mt-6'>
            Janelle&apos;s Makeup Collection
          </h3>
        </div>
      </div>
    </section>
  );
};

export default DiscoverFeelShopSection;
