import React from "react";
import Image from "next/image";
import { ladyInBlueBig } from "@/public/assets/fashion-and-styles";

function SingleBlogHeroSection() {
  return (
    <section className='w-full flex flex-col items-center justify-center'>
      <div className='relative w-full flex flex-col items-center mt-4 md:mt-10'>
        <Image
          src={ladyInBlueBig}
          placeholder='blur'
          className='object-center object-contain'
          alt='Lady in blue'
        />
      </div>
      <small className='text-small text-lightGray mt-2'>
        PHOTO: Jay Mcklurins
      </small>
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
    </section>
  );
}

export default SingleBlogHeroSection;
