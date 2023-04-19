import Image from "next/image";
import heroImage from "../../public/assets/glamour-and-luxury/glamour-and-image-hero-section.png";
import localFont from "next/font/local";

const rougeScript = localFont({
  src: "../../public/fonts/RougeScript-Regular.woff2",
  variable: "--font-rouge",
});

function GlamourLuxury() {
  return (
    <>
      <div
        className={`relative h-[223px] sm:h-[421px] lg:h-[633px] xl:h-[731px] ${rougeScript.variable} font-rouge`}
      >
        <Image
          src={heroImage}
          alt='Hero Background'
          fill
          className='object-cover object-center '
        />
        <div className='absolute inset-0 flex flex-col justify-center items-center z-10'>
          <h1 className='text-x2Large font-normal text-white text-center max-w-3xl'>
            Glamour & Luxury
          </h1>
          <p className='text-large text-lightPink text-center mt-4 md:mt-8 xl:mt-12 max-w-2xl'>
            Live and feel the luxury style
          </p>
        </div>
        <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70' />
        <div className='flex space-x-2 absolute z-10 bottom-5 md:bottom-10 right-1/2 translate-x-1/2 -translate-y-1/2 cursor-pointer'>
          <div className='w-2 h-2 md:w-3 md:h-3 bg-lightPink rounded-full'></div>
          <div className='w-2 h-2 md:w-3 md:h-3 bg-white rounded-full'></div>
          <div className='w-2 h-2 md:w-3 md:h-3 bg-white rounded-full'></div>
          <div className='w-2 h-2 md:w-3 md:h-3 bg-white rounded-full'></div>
          <div className='w-2 h-2 md:w-3 md:h-3 bg-white rounded-full'></div>
        </div>
      </div>
    </>
  );
}

export default GlamourLuxury;
