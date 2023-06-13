import React from "react";
import Image from "next/image";

function SingleBlogContentSection({ blogText, blogImages }) {
  const blogImagesList = blogImages.map((blogImage, i) => {
    return (
      <Image
        src={blogImage?.imageData}
        placeholder={blogImage?.imageData.blurData}
        className='object-center object-contain'
        alt={blogImage?.alt}
        key={blogImage?.alt + i}
      />
    );
  });

  const blogTextChunk1 = blogText?.substring(0, 234);
  const blogTextChunk2 = blogText?.substring(234);

  return (
    <>
      <section className='w-full '>
        <div className='mx-auto max-w-[54rem] grid md:grid-cols-2 gap-3 md:gap-[30px] justify-center mt-12 md:mt-8'>
          {blogImagesList}
          {blogImagesList}
        </div>
      </section>
      <p className='mt-4 text-small'>
        {blogTextChunk1}
        <br />
        <br />
        {blogTextChunk2}
      </p>
    </>
  );
}

export default SingleBlogContentSection;
