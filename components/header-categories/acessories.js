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

        <nav className="p-[1.8em] lg:relative flex flex-col lg:flex-row w-full lg:h-fit lg:w-[67.5%] h-full  right-0 text-black bg-white ">
          <div className=" lg:flex border-[#D8D8D8] lg:border-r flex-wrap ">
            <div className="block border-b  lg:w-1/2  border-[#D8D8D8] lg:border-b-0 py-2 ">
              <h1 className="font-bold">Accessories</h1>
              <ul className="text-header-gray">
                <li> New In</li>
                <li> All Accessories</li>
                <li> Bags & Purses</li>
                <li> Belts</li>
                <li> Fashion Face Masks</li>
                <li> Gifts & Bridal</li>
                <li> Hair Accessories</li>
                <li> Hats</li>
                <li> Jewellery</li>
                <li> Scarves</li>
                <li> Sunglasses</li>
                <li> Socks & Tights</li>
                <li> Watches</li>
              </ul>
            </div>
          </div>
          <div className="lg:flex justify-between lg:w-4/5 ml-auto border-[#D8D8D8] ">
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
