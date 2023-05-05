import React from "react";
import SingleBlogArticle from "./SingleBlogArticle";

function BlogLists() {
  return (
    <section>
      <div className='w-11/12 max-w-[1237px] mx-auto flex flex-col items-center justify-center mt-12 lg:mt-20 gap-7 md:gap-[60px] mb-12 lg:mb-20'>
        <SingleBlogArticle />
        <SingleBlogArticle />
        <SingleBlogArticle />
        <button className='md:border-2 border-lightGray py-3 w-[195px] gap-[10px] mt-7 md:mt-[75px] font-medium rounded-[4px]'>
          Load More
        </button>
      </div>
    </section>
  );
}

export default BlogLists;
