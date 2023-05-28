import React from "react";

function SingleBlogTitleSection({ blogTitle, blogDescription, author, date }) {
  return (
    <section className=''>
      <div className='md:w-[90%] lg:w-[80%] 2xl:w-[70%]'>
        <h2 className='text-large font-bold text-priBlack leading-snug'>
          {blogTitle}
        </h2>
        <p className='mt-[6px] text-lightGray text-small'>{blogDescription}</p>
      </div>
      <div className='mt-4 flex justify-start items-center text-small font-normal'>
        <p>{author}</p>
        <small className='h-3 border border-lightGray mx-2'></small>
        <p className='text-lightGray'> {date}</p>
      </div>
    </section>
  );
}

export default SingleBlogTitleSection;
