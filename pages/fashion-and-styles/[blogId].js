import {
  SingleBlogContentSection,
  SingleBlogHeroSection,
  SingleBlogTitleSection,
  SingleBlogArticle,
} from "@/sections/pages/fashion-and-styles";
import { blogData } from "@/mock-data/blogData";

function SingleBlogPage({ individualBlogData }) {
  const {
    imageData2,
    alt,
    blogTitle,
    blogDescription,
    author,
    date,
    blogText,
    photoAttribution,
    blogImages,
  } = individualBlogData;

  const popularBlogLists = blogData
    .map((blogItem) => {
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
    })
    .slice(0, 2);

  return (
    <>
      <section className=''>
        <div className='w-11/12 max-w-[1237px] mx-auto mt-5 mb-12 md:mb-24'>
          <SingleBlogTitleSection
            blogTitle={blogTitle}
            blogDescription={blogDescription}
            author={author}
            date={date}
          />
          <SingleBlogHeroSection
            imageData2={imageData2}
            alt={alt}
            blogText={blogText}
            photoAttribution={photoAttribution}
          />
          <SingleBlogContentSection blogImages={blogImages} />
          <div>
            <h3 className='font-bold text-medium mt-12 md:mt-24 text-center'>
              Popular in Fashion
            </h3>
            <div className='mt-6 md:mt-8 space-y-8'>{popularBlogLists}</div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SingleBlogPage;

export async function getStaticPaths() {
  const blogPaths = blogData.map((blogItem) => {
    const urlWithHyphens = blogItem?.blogTitle.replace(/\s/g, "-");

    return {
      params: { blogId: `${urlWithHyphens}` },
    };
  });

  return {
    paths: blogPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const urlWithoutHyphens = params?.blogId.replace(/\-/g, " ");

  const individualBlogData = blogData.find((item) => {
    return item.blogTitle === urlWithoutHyphens;
  });

  // const response = await fetch(
  //   `url/${params.blogId}`
  // );
  // const data = await response.json();

  // if (!data.id) {
  //   return {
  //     notFound: true,
  //   };
  // }

  return {
    props: {
      individualBlogData,
    },
  };
}
