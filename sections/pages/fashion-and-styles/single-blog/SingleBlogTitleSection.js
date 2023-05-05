import React from "react";

function SingleBlogTitleSection() {
  return (
    <section className=''>
      <div className='md:w-[90%] lg:w-[80%] 2xl:w-[70%]'>
        <h2 className='text-large font-bold text-priBlack leading-snug'>
          3 Summer Staples That Will Make Fall Outfits Even Better
        </h2>
        <p className='mt-[6px] text-lightGray text-small'>
          Stay in trend of latest collections
        </p>
      </div>
      <div className='mt-4 flex justify-start items-center text-small font-normal'>
        <p>By Feranmi Olowookere </p>
        <small className='h-3 border border-lightGray mx-2'></small>
        <p className='text-lightGray'> Sep 09, 2020 3:00pm</p>
      </div>
    </section>
  );
}

export default SingleBlogTitleSection;
