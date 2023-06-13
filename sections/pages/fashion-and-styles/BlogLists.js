import React from "react";
import SingleBlogArticle from "./SingleBlogArticle";
import { blogData } from "@/mockData/blogData";

function BlogLists() {
  const blogLists = blogData.map((blogItem) => {
    const { id, imageData, alt, blogTitle, blogDescription } = blogItem;
    return (
      <SingleBlogArticle
        key={id}
        imageData={imageData}
        alt={alt}
        blogTitle={blogTitle}
        blogDescription={blogDescription}
      />
    );
  });

  return (
    <section>
      <div className='w-11/12 max-w-[1237px] mx-auto flex flex-col items-center justify-center mt-12 lg:mt-20 gap-7 md:gap-[60px] mb-12 lg:mb-20'>
        {blogLists}
        <button className='md:border-2 border-lightGray py-3 w-[195px] gap-[10px] mt-7 md:mt-[75px] font-medium rounded-[4px]'>
          Load More
        </button>
      </div>
    </section>
  );
}

export default BlogLists;
