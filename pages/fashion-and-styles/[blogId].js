import {
  SingleBlogContentSection,
  SingleBlogHeroSection,
  SingleBlogTitleSection,
  SingleBlogArticle,
} from "@/sections/pages/fashion-and-styles";

function SingleBlogPage({ data }) {
  return (
    <>
      <section className=''>
        <div className='w-11/12 max-w-[1237px] mx-auto mt-5 mb-12 md:mb-24'>
          <SingleBlogTitleSection />
          <SingleBlogHeroSection />
          <SingleBlogContentSection />
          <div>
            <h3 className='font-bold text-medium mt-12 md:mt-24 text-center'>
              Popular in Fashion
            </h3>
            <div className='mt-6 md:mt-8 space-y-8'>
              <SingleBlogArticle />
              <SingleBlogArticle />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SingleBlogPage;

export async function getStaticPaths() {
  return {
    paths: [
      { params: { blogId: "1" } },
      { params: { blogId: "2" } },
      { params: { blogId: "3" } },
    ],
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;

  return {
    props: {
      data: "Data coming soon...",
    },
  };
}
