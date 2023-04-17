import Button from "../button/button";
import { categoryWrapper } from "@/utils/sharedStyles";

const ShoesTab = () => {
  return (
      <div className="flex flex-row-reverse ">
        <div
          className="h-auto hidden lg:flex lg:w-[32.5%] space-y-4 p-12  flex-col justify-center   "
          style={{
            background:
              "linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url(/assets/images/shoesTabBg.png)",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <p className="text-white text-4xl">50% OFF FOR CHANEL LUXURY!</p>
          <Button variant="white" text="Shop Now" />
        </div>

        <nav className="p-[1.8em] lg:relative w-full lg:h-fit lg:w-[67.5%] h-full  right-0 text-black bg-white ">
          <div className=" lg:flex  lg:space-x-[3%] ">
            <div className="block border-b border-[#D8D8D8] lg:border-b-0 py-2 ">
              <h1 className="font-bold">Shoes</h1>
              <ul className="text-header-gray">
                <li> View All</li>
                <li>New In</li>
                <li> Boots</li>
                <li> Flat Sandals</li>
                <li> Heels</li>
                <li> Loafers</li>
                <li> Sandals</li>
                <li> Sliders Flip Flops</li>
                <li> Slippers</li>
                <li> Trainers</li>

              </ul>
            </div>

            <div className="border-b lg:border-b-0 py-2 border-[#D8D8D8]">
              <h1 className="font-bold">Shoes By Trends</h1>
              <ul className="text-header-gray">
                <li>Mules</li>
                <li>Sliders</li>
                <li>Clear Heels</li>
                <li>Print Shoes</li>
              </ul>
            </div>

            <div className="border-b py-2 lg:border-b-0 border-[#D8D8D8]">
              <h1 className="font-bold">New trends</h1>
              <ul className="text-header-gray">
                <li>Skinny Jeans </li>
                <li>Woman Collection</li>
                <li>Utility + Fragrance</li>
                <li>Channel Luxury</li>
                <li>Range Clothes</li>
              </ul>
            </div>
            <div className="border-b py-2 lg:border-b-0 border-[#D8D8D8]">
              <h1 className="font-bold">Heel Height</h1>
              <ul className="text-header-gray">
                <li>Flat </li>
                <li>Low</li>
                <li>Mid</li>
                <li>High</li>
              </ul>
            </div>
            <div className="border-b py-2   lg:w-1/5 lg:border-b-0 border-[#D8D8D8]">
              <h1 className="font-bold">Shoe Size</h1>
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
          <div className="lg:flex justify-between lg:border-t lg:w-4/5 ml-auto border-[#D8D8D8] ">
            <div className="border-b lg:border-b-0 py-2 w-full border-[#D8D8D8]">
              <h1 className="font-bold">Shop By Brand</h1>
              <section className= " grid grid-cols-3 lg:grid  lg:grid-cols-7 flex-wrap justify-between lg:space-x-0  lg:justify-center text-header-gray">
                <div className="lg:w-4/5">
                  <img
                    src="/assets/images/shoesMini.png"
                    className="w-[43px]"
                    alt=""
                  />
                  <span className=" w-1/3 break-words text-[.7em]">Plus Sixe & Curve</span>
                </div>
                <div className="lg:w-4/5">
                  <img
                    src="/assets/images/shoesMini.png"
                    className="w-[43px]"
                    alt=""
                  />
                  <span className="text-[.7em]">Petite</span>
                </div>
                <div className="lg:w-4/5">
                  <img
                    src="/assets/images/shoesMini.png"
                    className="w-[43px]"
                    alt=""
                  />
                  <span className="text-[.7em]">Tall</span>
                </div>
                <div className="lg:w-4/5">
                  <img
                    src="/assets/images/shoesMini.png"
                    className="w-[43px]"
                    alt=""
                  />
                  <span className="text-[.7em]">Maternity</span>
                </div>
                <div className="lg:w-4/5">
                  <img
                    src="/assets/images/shoesMini.png"
                    className="w-[43px]"
                    alt=""
                  />
                  <span className="text-[.7em]">Maternity</span>
                </div>

                <div className="lg:w-4/5">
                  <img
                    src="/assets/images/shoesMini.png"
                    className="w-[43px]"
                    alt=""
                  />
                  <span className="text-[.7em]">Maternity</span>
                </div>

                <div className="lg:w-4/5">
                  <img
                    src="/assets/images/shoesMini.png"
                    className="w-[43px]"
                    alt=""
                  />
                  <span className="text-[.7em]">Maternity</span>
                </div>

              </section>
            </div>
          </div>
        </nav>
      </div>
  );
};

export default ShoesTab;
