import Button from "../button/button";
import { categoryWrapper } from "@/utils/sharedStyles";
const ClothesTab = () => {
  return (
      <div className="flex flex-row-reverse ">
        <div
          className="h-auto hidden lg:flex lg:w-[32.5%] space-y-4 p-12  flex-col justify-center   "
          style={{
            background:
              "linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url(/assets/images/ClothBgImg.png)",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <p className="text-white leading-relaxed text-4xl">Get the best deals in modern fashion trends!</p>
          <Button variant="white" text="Shop Now" />
        </div>

        <nav className="p-[1.8em] lg:relative w-full lg:h-fit lg:w-[67.5%] h-full  right-0 text-black bg-white ">
          <div className=" lg:flex  lg:space-x-[3%] ">
            <div className="block lg:w-1/2 border-b lg:border-b-0  border-[#D8D8D8] py-2 ">
              <h1 className="font-bold">Clothes </h1>
              <ul className="flex-wrap  flex text-header-gray">
                <li className="w-1/2"> View All</li>
                <li className="w-1/2">New In</li>
                <li className="w-1/2">Activewear</li>
                <li className="w-1/2"> Co-ords </li>
                <li className="w-1/2">Coats & Jackets</li>
                <li className="w-1/2"> Dresses</li>
                <li className="w-1/2"> Hoodies & Sweatshirts </li>
                <li className="w-1/2"> Jeans</li>
                <li className="w-1/2"> Jumpers & Cardigans</li>
                <li className="w-1/2"> Jumpsuits & Playsuits</li>
                <li className="w-1/2"> Kimonos </li>
                <li className="w-1/2"> Lingerie & Nightwear </li>
                <li className="w-1/2"> Loungewear </li>
                <li className="w-1/2"> Multipacks </li>
                <li className="w-1/2"> Shorts</li>
                <li className="w-1/2"> Skirts </li>
                <li className="w-1/2"> Socks & Tights </li>
                <li className="w-1/2"> Suits & Tailoring</li>
                <li className="w-1/2"> Swimwear</li>
                <li className="w-1/2"> Tops</li>
                <li className="w-1/2"> Traditional</li>
                <li className="w-1/2"> Tracksuits & Sweatpants </li>
                <li className="w-1/2"> Trousers & Leggings </li>

              </ul>
            </div>

            <div className="border-b lg:border-b-0 py-2 border-[#D8D8D8]">
              <h1 className="font-bold">Collections</h1>
              <ul className="text-header-gray">
                <li>Mules</li>
                <li>Sliders</li>
                <li>Clear Heels</li>
                <li>Print Shoes</li>
              </ul>
            </div>
            <div className="border-b py-2   lg:w-1/3 lg:border-b-0 border-[#D8D8D8]">
              <h1 className="font-bold">Clothes By Size</h1>
              <ul className= "flex  flex-wrap  flex-1 text-header-gray">
                <li className=" w-1/2" >UK Size 1 </li>
                <li className="w-1/2">UK Size 1 </li>
                <li className="w-1/2">UK Size 1 </li>
                <li className="w-1/2">UK Size 1 </li>
                <li className="w-1/2">UK Size 1 </li>
                <li className="w-1/2">UK Size 1 </li>
                <li className="w-1/2">UK Size 1 </li>
                <li className="w-1/2">UK Size 1 </li>
                <li className="w-1/2">UK Size 1 </li>
              </ul>
            </div>


          </div>
          <div className="lg:flex justify-between lg:border-t lg:w-1/2 ml-auto border-[#D8D8D8] ">
            <div className="border-b lg:border-b-0 py-2 w-full border-[#D8D8D8]">
              <h1 className="font-bold">Shop By Fit</h1>
              <section className="grid grid-cols-4 flex-wrap justify-between lg:space-x-0  lg:justify-center text-header-gray">
                <div>
                  <img
                    src="/assets/images/shoesMini.png"
                    className="w-[43px]"
                    alt=""
                  />
                  <span className="text-[.7em]">Plus Sixe & Curve</span>
                </div>
                <div>
                  <img
                    src="/assets/images/shoesMini.png"
                    className="w-[43px]"
                    alt=""
                  />
                  <span className="text-[.7em]">Petite</span>
                </div>
                <div>
                  <img
                    src="/assets/images/shoesMini.png"
                    className="w-[43px]"
                    alt=""
                  />
                  <span className="text-[.7em]">Tall</span>
                </div>
                <div>
                  <img
                    src="/assets/images/shoesMini.png"
                    className="w-[43px]"
                    alt=""
                  />
                  <span className="text-[.7em]">Tall</span>
                </div>


              </section>
            </div>
          </div>
        </nav>
      </div>
  );
};

export default ClothesTab;
