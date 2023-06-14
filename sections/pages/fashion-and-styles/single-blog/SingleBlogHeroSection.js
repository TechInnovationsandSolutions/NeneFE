import React from "react";
import Image from "next/image";

function SingleBlogHeroSection({
  imageData2,
  alt,
  blogText,
  photoAttribution,
}) {
  const blogTextChunk1 = blogText.substring(0, 234);
  const blogTextChunk2 = blogText.substring(234);

  return (
    <section className='w-full flex flex-col items-center justify-center'>
      <div className='relative w-full flex flex-col items-center mt-4 md:mt-10'>
        <Image
          src={imageData2}
          placeholder={imageData2?.blurData}
          className='object-center object-contain'
          priority
          alt={alt}
        />
      </div>
      <small className='text-small text-lightGray mt-2'>
        {photoAttribution}
      </small>
      <p className='mt-4 text-small'>
        {blogTextChunk1}
        <br />
        <br />
        {blogTextChunk2}
      </p>
    </section>
  );
}

export default SingleBlogHeroSection;
