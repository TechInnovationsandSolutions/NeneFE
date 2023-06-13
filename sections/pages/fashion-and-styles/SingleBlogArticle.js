import React from "react";
import Image from "next/image";
import Link from "next/link";

function SingleBlogArticle({ imageData, alt, blogTitle, blogDescription }) {
  const modifiedURL = blogTitle?.replace(/\s/g, "-");

  return (
    <article className='relative w-full md:flex items-center gap-7'>
      <div className='relative w-full md:w-1/3 h-[260px] sm:h-[330px]'>
        <Image
          src={imageData}
          fill
          className='object-cover object-center'
          unoptimized='true'
          alt={alt}
        />
      </div>
      <div className='w-full md:w-2/3'>
        <div className=''>
          <h3 className='text-medium font-bold md:font-medium mt-3 text-priBlack leading-snug'>
            {blogTitle}
          </h3>
          <p className='mt-2 text-priBlack text-small font-normal tracking-wide'>
            {blogDescription?.substring(0, 50) + "..."}
          </p>
        </div>
        <Link href={`/fashion-and-styles/${modifiedURL}`} className=''>
          <button className='border-2 border-lightGray flex items-center justify-center py-3 w-full md:w-[195px] gap-[10px] mt-5 md:mt-8 font-medium rounded-[4px]'>
            Read More
            <svg
              width='16'
              height='16'
              viewBox='0 0 16 16'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M12.172 6.99998L6.808 1.63598L8.222 0.221985L16 7.99998L8.222 15.778L6.808 14.364L12.172 8.99998H0V6.99998H12.172Z'
                fill='black'
              />
            </svg>
          </button>
        </Link>
      </div>
      <div className='hidden md:block absolute top-[57%] xl:top-[54%] left-0 w-full border border-lightGray/20'></div>
    </article>
  );
}

export default SingleBlogArticle;
