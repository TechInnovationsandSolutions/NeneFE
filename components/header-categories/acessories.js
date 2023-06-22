import Button from "../button/button";
import { categoryWrapper } from "@/utils/sharedStyles";

const Accessories = () => {
  return (
      <div className="flex flex-row-reverse ">
        <div
          className="h-auto hidden lg:flex lg:w-[32.5%] space-y-4 p-12  flex-col justify-center   "
          style={{
            background:
              "linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url(/assets/images/NewsBgImg.png)",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <p className="text-white text-4xl">50% OFF FOR CHANEL LUXURY!</p>
          <Button variant="white" text="Shop Now" />
        </div>

        <nav className="p-[1.8em] lg:relative  flex flex-col lg:gap-4 lg:flex-row w-full lg:h-fit lg:w-[69.7%] h-full  right-0 text-black bg-white ">
          <div className=" lg:flex px-3  lg:w-fit border-[#D8D8D8] lg:border-r flex-wrap ">
            <div className="block border-b  lg:max-h-[40vh] lg:w-[250px] border-[#D8D8D8] lg:border-b-0 py-2 ">
              <h1 className="font-bold">Accessories</h1>
              <ul className="text-header-gray h-full w-full flex flex-col flex-wrap ">
                <li className="w-1/2" > New In</li>
                <li className="w-1/2"> All Accessories</li>
                <li className="w-1/2"> Bags & Purses</li>
                <li className="w-1/2"> Belts</li>
                <li className="w-1/2"> Fashion Face Masks</li>
                <li className="w-1/2"> Gifts & Bridal</li>
                <li className="w-1/2"> Hair Accessories</li>
                <li className="w-1/2"> Hats</li>
                <li className="w-1/2"> Jewellery</li>
                <li className="w-1/2"> Scarves</li>
                <li className="w-1/2"> Sunglasses</li>
                <li className="w-1/2"> Socks & Tights</li>
                <li className="w-1/2"> Watches</li>
              </ul>
            </div>
          </div>
          <div className="lg:flex justify-between lg:w-fit border-[#D8D8D8] ">
            <div className="border-b lg:border-b-0 py-2 px-3 w-full border-[#D8D8D8]">
              <h1 className="font-bold">Shop By Brand</h1>
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
                  <span className="text-[.7em]">Maternity</span>
                </div>
                <div>
                  <img
                    src="/assets/images/shoesMini.png"
                    className="w-[43px]"
                    alt=""
                  />
                  <span className="text-[.7em]">Maternity</span>
                </div>

                <div>
                  <img
                    src="/assets/images/shoesMini.png"
                    className="w-[43px]"
                    alt=""
                  />
                  <span className="text-[.7em]">Maternity</span>
                </div>

                <div>
                  <img
                    src="/assets/images/shoesMini.png"
                    className="w-[43px]"
                    alt=""
                  />
                  <span className="text-[.7em]">Maternity</span>
                </div>
                <div>
                  <img
                    src="/assets/images/shoesMini.png"
                    className="w-[43px]"
                    alt=""
                  />
                  <span className="text-[.7em]">Maternity</span>
                </div>
                <div>
                  <img
                    src="/assets/images/shoesMini.png"
                    className="w-[43px]"
                    alt=""
                  />
                  <span className="text-[.7em]">Maternity</span>
                </div>
                <div>
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

export default Accessories;
