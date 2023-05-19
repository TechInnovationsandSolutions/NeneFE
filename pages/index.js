import Button from "@/components/button/button";
import FirstSlider from "@/components/homePage1/FirstSlider";
import Head from "next/head";
import peso from "../public/assets/homePage1/persone.png";
import Image from "next/image";
import Brands from "@/components/homePage1/brand";

import { bags, shirt, shoes } from "@/components/homePage1/data";
import Carrousel from "@/components/homePage1/slider";
import MobileCaroussel from "@/components/homePage1/mobileArticles";

export default function Home() {
  return (
    <>
      <Head>
        <title>Nene</title>
        <meta name="description" content="Nene Web App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="font-sans">
        <div className="w-full md:w-9/12 mx-auto mb-5 overflow-hidden">
          <FirstSlider />
        </div>
        <section className="md:pt-10 pt-10 mb-2 pb-10 overflow-hidden">
          <h2 className="font-bold text-4xl text-center">New Now</h2>
          <MobileCaroussel data={shirt} />
          <Carrousel title="Shirts" data={shirt} />
          <Carrousel title="Bags" data={bags} />
          <Carrousel title="Shoes" data={shoes} />
        </section>
        <section
          className="bg-purle flex justify-center items-center md:p-14 p-4"
          style={{
            minHeight: "500px",
            background: "url(/assets/homePage1/bg.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="md:mx-10 border-2 h-4/5 w-full border-white md:p-8 p-4 md:flex items-center bg-[#FFC0CB]">
            <div className="flex-1">
              <p className="md:text-2xl text-base sans text-justify">
                I am a product of in-depth discipline and growth. And after 30
                years of being in the entertainment industry, I can say that the
                sense of fullfillment comes into play. But I still want to give
                back to the society at large
              </p>
              <div className="flex gap-4 items-center mt-5 ">
                <div className="p-2 border-2 justify-center flex items-center border-white rounded-full  md:hidden">
                  <Image src={peso} width={50} height={50} alt="image" />
                </div>
                <div className="flex justify-center flex-col sans">
                  <h2 className="font-bold text-base md:text-lg  md:pt-3">
                    Joke Silva
                  </h2>
                  <p className="text-gray-800 text-xs md:text-base">
                    Actress, Director, Businesswoman, Philantrophist
                  </p>
                </div>
              </div>
              <Button
                text="Read Interview"
                variant="white"
                customClassName="mt-5 w-full md:w-1/2"
              />
            </div>
            <div className="flex-1 md:flex hidden items-center justify-center">
              <Image src={peso} alt="image" />
            </div>
          </div>
        </section>

        <section>
          <Brands />
        </section>
      </main>
    </>
  );
}
