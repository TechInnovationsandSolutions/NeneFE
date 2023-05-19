import Image from "next/image";
import img from "../../public/assets/images/Rectangle 321.jpg";
import dress4 from "../../public/assets/images/dress4.webp";
import dress2 from "../../public/assets/images/dress2.webp";
import interview from "../../public/assets/images/Rectangle 324.jpg";

function FeaturedIcon() {
  return (
    <main>
      <section className="p-8 md:p-16 flex flex-col items-center">
        <h1 className="text-[#3E3E3E] text-3xl font-bold text-start sm:text-center w-full sm:max-w-[80%] mb-3">
          Interview with Deola Sagoe on Nigeria’s fashion industry and what
          should be excpected in the coming years
        </h1>
        <h4 className="text-lg text-[#3E3E3E] mb-5">Sep 3, 2020</h4>

        <Image src={img} alt="" width={1240} className="mb-5" />

        <p className="max-w-[80%] text-lg text-[#3E3E3E] mb-5">
          Her effortlessly fabulous pieces from her latest Spring/Summer 2015
          luxury collection ‘A TOUCH OF ELEGANCE ‘ , is a breathe of fresh air;
          an all white collection, with crisp accents of stone colors and silver
          sequin. Soft feather-like details add texture to a few pieces while
          other pieces of the collection are charmed with metallic
          embellishments.
        </p>
      </section>

      <section className="px-8 md:px-16 flex flex-col items-center">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 gap-5
         justify-items-center mb-3"
        >
          <Image src={dress4} alt="" />
          <Image src={dress2} alt="" />
        </div>
        <p className="text-lg font-medium mb-2">
          Fashion styles exhibited by Deola Sagoe at the African fashion weekly
        </p>
        <p className="text-lg text-[#585757] mb-5">© John Rivers</p>
      </section>

      <section className="py-5 px-8 md:px-16 flex flex-col items-center">
        <div className="grid grid-cols-1 gap-20 md:grid-cols-2 mb-14">
          <div>
            <h3 className="text-2xl font-bold mb-2">Can we get to know you?</h3>
            <p className="text-lg">
              I am Deola Sagoe, a variety fashion designer based in Lagos,
              Nigeria. Ms. Ray was founded a year ago by me. I always had
              something with African prints and fashion but I did not pay close
              attention to it because I didn’t see it as something serious but
              rather more a hobby. I decided to focus on my fulltime law
              education and it was after my crowning as Miss Africa Netherlands
              2012 I started putting more effort in designing. I have never been
              to fashion school I just simply followed my instinct and the
              reigning trends to later on come out with my own style.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-2">Can we get to know you?</h3>
            <p className="text-lg">
              I am Deola Sagoe, a variety fashion designer based in Lagos,
              Nigeria. Ms. Ray was founded a year ago by me. I always had
              something with African prints and fashion but I did not pay close
              attention to it because I didn’t see it as something serious but
              rather more a hobby. I decided to focus on my fulltime law
              education and it was after my crowning as Miss Africa Netherlands
              2012 I started putting more effort in designing. I have never been
              to fashion school I just simply followed my instinct and the
              reigning trends to later on come out with my own style.
            </p>
          </div>
        </div>

        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-10">
            <Image src={interview} alt="" />
            <div>
              <h3 className="text-2xl font-bold mb-2">
                What are the major challenges you have encountered while
                building a business in Nigeria and how have you overcome them?
              </h3>
              <p className="text-lg">
                I am Deola Sagoe, a variety fashion designer based in Lagos,
                Nigeria. Ms. Ray was founded a year ago by me. I always had
                something with African prints and fashion but I did not pay
                close attention to it because I didn’t see it as something
                serious but rather more a hobby. I decided to focus on my
                fulltime law education and it was after my crowning as Miss
                Africa Netherlands 2012 I started putting more effort in
                designing. I have never been to fashion school I just simply
                followed my instinct and the reigning trends to later on come
                out with my own style.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <Image src={interview} alt="" />
            <div>
              <h3 className="text-2xl font-bold mb-2">
                What are the major challenges you have encountered while
                building a business in Nigeria and how have you overcome them?
              </h3>
              <p className="text-lg">
                I am Deola Sagoe, a variety fashion designer based in Lagos,
                Nigeria. Ms. Ray was founded a year ago by me. I always had
                something with African prints and fashion but I did not pay
                close attention to it because I didn’t see it as something
                serious but rather more a hobby. I decided to focus on my
                fulltime law education and it was after my crowning as Miss
                Africa Netherlands 2012 I started putting more effort in
                designing. I have never been to fashion school I just simply
                followed my instinct and the reigning trends to later on come
                out with my own style.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-[#FFC0CB] w-full py-10 px-8 md:px-16 my-16">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-[#3E3E3E]">
        &ldquo; Our major focus is to provide continuous training to upskill our
          craftsmen to be able to produce world-class products and increase
          their employability. &ldquo;
        </h2>
      </div>

      <div className="flex flex-col items-center px-8 md:px-16">
        <h3 className="text-2xl font-bold mb-2">
          The African Fashion Industry is said to be worth over $50bn and we
          haven’t even scratched the surface yet. What needs to be in place for
          Africa to actually experience a major boom and break into the global
          market, in the fashion space?
        </h3>
        <p className="text-lg">
          I asked myself that question too, at a time when the African Fashion
          is making global headlines, why do we in Nigeria spend $3 billion
          dollars annually importing foreign brands? The answer was around
          distribution and scale but most importantly the quality and fit of the
          clothes that are made in Africa. These are some of the issues we are
          solving at Fashpa, looking at how we can use technology to make Made
          in Africa Fashion successful at scale both at home and abroad and make
          it accessible for all. With $50 billion fashion retail market in
          Africa, the major growth driver is going to be online, and more
          specifically, mobile. There is an undeniably huge opportunity for the
          market leader in online fashion retail in Africa.
        </p>
      </div>

      <div className="my-10 px-8 md:px-16 w-full">
        <video class="w-full h-auto md:auto max-w-full" controls>
          <source
            src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </main>
  );
}

export default FeaturedIcon;
