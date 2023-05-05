import React from "react";
import Image from "next/image";
import { ladyInGold, ladyInRed } from "@/public/assets/fashion-and-styles";

function SingleBlogContentSection() {
  return (
    <>
      <section className='w-full '>
        <div className='mx-auto max-w-[54rem] grid md:grid-cols-2 gap-3 md:gap-[30px] justify-center mt-12 md:mt-8'>
          <Image
            src={ladyInGold}
            placeholder='blur'
            className='object-center object-contain'
            alt='Lady in gold dress'
          />
          <Image
            src={ladyInRed}
            placeholder='blur'
            className='object-center object-contain'
            alt='Lady in red dress'
          />
          <Image
            src={ladyInGold}
            placeholder='blur'
            className='object-center object-contain'
            alt='Lady in gold dress'
          />
          <Image
            src={ladyInRed}
            placeholder='blur'
            className='object-center object-contain'
            alt='Lady in red dress'
          />
        </div>
      </section>
      <p className='mt-4 text-small'>
        Every year, it&apos;s as if the seasonal switch to cold weather happens
        overnight. One minute we&apos;re bragging about not needing a jacket in
        the middle of October, and the next, we&apos;re breaking out puffers and
        scarves, trekking through snow.
        <br />
        <br />
        Still, summer ending doesn&apos;t mean we should pack up every piece of
        warm weather gear. We&apos;re firm believers in seasonless fashion, and
        there are at least three items from our June through August rotation
        that will help punch up fall and winter staples.
      </p>
    </>
  );
}

export default SingleBlogContentSection;
