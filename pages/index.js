import Button from "@/components/button/button";
import FirstSlider from "@/components/homePage1/FirstSlider";
import Head from "next/head";
import peso from "../public/assets/homePage1/persone.png";
import Image from "next/image";
import Brands from "@/components/homePage1/brand";
import CategoryRender from "@/components/homePage1/categoryRender";
import { shirt, shoes } from "@/components/homePage1/data";

export default function Home() {
  return (
    <>
      <Head>
        <title>Nene</title>
        <meta name="description" content="Nene Web App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <div className="w-full md:w-9/12 mx-auto mb-5">
          <FirstSlider />
        </div>
        <section className="md:pt-20 pt-10 mb-2">
          <h2 className="font-bold text-4xl text-center">New Now</h2>
          <CategoryRender data={shirt} title="Shirt" />
          <CategoryRender data={shoes} title="Shoes" />
        </section>
        <section
          className="bg-purle flex justify-center items-center p-2"
          style={{
            minHeight: "500px",
          }}
        >
          <div className="md:mx-10 border-2 h-4/5 w-full border-white p-8 md:flex items-center">
            <div className="flex-1">
              <p className="text-2xl">
                I am a product of in-depth discipline and growth. And after 30
                years of being in the entertainment industry, I can say that the
                sense of fullfillment comes into play. But I still want to give
                back to the society at large
              </p>
              <div className="flex gap-4 items-center mt-5">
                <div className="w-12 h-12 border-2 border-white rounded-full overflow-hidden md:hidden">
                  <Image src={peso} width={50} alt="image" />
                </div>
                <div className="flex justify-center flex-col">
                  <h2 className="font-bold text-lg md:pt-3">Joke Silva</h2>
                  <p className="text-gray-800">
                    Actress, Director, Businesswoman, Philantrophist
                  </p>
                </div>
              </div>
              <Button
                text="Read Interview"
                variant="white"
                customClassName="mt-5"
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
