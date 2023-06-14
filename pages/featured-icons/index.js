import Image from "next/image";
import Button from "@/components/button/button";
import Link from "next/link";
// import Gallery from "@/sections/pages/featured-icons/gallery";
import GalleryItem from "@/sections/pages/featured-icons/gallery";
import img1 from "../../public/assets/images/rectangle310.png";
import ProductSlider from "@/sections/pages/featured-icons/productSlider";

function FeaturedIcons() {
  const imgArray = [
    { src: img1, id: 1 },
    { src: img1, id: 2 },
    { src: img1, id: 3 },
    { src: img1, id: 4 },
    { src: img1, id: 5 },
    { src: img1, id: 6 },
    { src: img1, id: 7 },
    { src: img1, id: 8 },
    { src: img1, id: 9 },
    { src: img1, id: 10 },
  ];

  return (
    <div>
      <div
        className="h-[389px] md:h-[500px] bg-[#FFC0CB] overflow-hidden
             flex flex-col justify-center items-center relative"
      >
        {Array(10)
          .fill(1)
          .map((e, i) => {
            return (
              <div
                className="flex flex-nowrap -rotate-[30deg] mb-20 sm:mb-18"
                key={i}
              >
                {Array(6)
                  .fill(2)
                  .map((e, i) => {
                    return (
                      <span
                        className="text-5xl md:text-8xl text-[#FFC0CB] font-bold text-border-white inline mr-14 sm:mr-10 shrink-0"
                        key={i}
                      >
                        JOKE SILVA
                      </span>
                    );
                  })}
              </div>
            );
          })}

        <div
          className="h-[88%] md:h-[80%] w-[85%] md:w-[83%] border-4
                 border-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FFC0CB] z-10 px-4 md:px-8 flex"
        >
          <div className="w-full lg:w-[70%] py-4 sm:py-5 md:py-8 flex justify-between">
            <span className="text-3xl md:text-5xl mr-1 font-extrabold inline">
              &ldquo;
            </span>
            <div className="flex flex-col justify-between sm:justify-center">
              <p className="text-base md:text-2xl text-[#3E3E3E] sm:mb-3 flex flex-col">
                Im a product of indepth discipline and growth. And after 30
                years of being in the entertainment industry, I can say that the
                sense of fulfilment comes into play. but I still want to give
                back to the society at large.
              </p>

              <div className="sm:mb-5 flex items-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 relative rounded-full border-2 border-white flex [800px]:hidden mr-4 flex-shrink-0 lg:hidden">
                  <Image
                    src="/assets/images/joke-silva.png"
                    fill
                    alt=""
                    className="absolute object-cover rounded-full"
                  />
                </div>
                <div>
                  <p className="text-[#3E3E3E] text-base md:text-lg font-bold">
                    Joke Silva
                  </p>
                  <p className="text-[#3E3E3E] text-sm md:text-base">
                    Actress, Director, Businesswoman, Philantropist
                  </p>
                </div>
              </div>

              <Link href="#" className="max-sm:w-full">
                <Button
                  text="Read Interview"
                  variant="white"
                  customClassName="font-medium max-sm:w-full"
                />
              </Link>
            </div>
          </div>

          <div className="w-[300px] h-auto lg:w-[380px] relative hidden lg:flex">
            <Image
              src="/assets/images/joke-silva.png"
              alt=""
              fill
              className="absolute object-cover"
            />
          </div>
        </div>
      </div>

      <section className="p-10">
        <h2 className="mb-3 text-center text-[#3E3E3E12 text-2xl font-bold">
          Featured Icons
        </h2>

        <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4 flex-wrap  gap-4 py-5 justify-items-center">
          {imgArray.map((img) => {
            return <GalleryItem img={img} key={img.id} />;
          })}
        </div>
      </section>

      <section className="py-10">
        <h2 className="ml-10 text-2xl font-bold">Shop The Latest</h2>

        <div>
          <ProductSlider />
        </div>
      </section>

      <div></div>
    </div>
  );
}

export default FeaturedIcons;
