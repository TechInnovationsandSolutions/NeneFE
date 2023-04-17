import Button from "../button/button";
import { categoryWrapper } from "@/utils/sharedStyles";

const NewIn = () => {
  return (
      <div className="flex ">
        <div
          className="h-auto hidden lg:flex lg:w-[32.5%] space-y-4 p-12  flex-col justify-center   "
          style={{
            background:
              "linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url(/assets/images/newsBgImg.png)",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <p className="text-white text-4xl">50% OFF FOR CHANEL LUXURY!</p>
          <Button variant="white" text="Shop Now" />
        </div>

        <nav className="p-[1.8em] lg:relative w-full lg:h-fit lg:w-[67.5%]  right-0 text-black bg-white ">
          <div className=" lg:flex lg:border-b lg:space-x-[8%] border-[#D8D8D8] ">
            <div className="block border-b lg:border-b-0 py-2 border-[#D8D8D8]">
              <h1 className="font-bold">New Products</h1>
              <ul className="text-header-gray">
                <li> View All</li>
                <li>Clothing</li>
                <li> Accessories</li>
                <li> Face + Body</li>
                <li> Makeup</li>
              </ul>
            </div>

            <div className="border-b lg:border-b-0 py-2 border-[#D8D8D8]">
              <h1 className="font-bold">New Collections</h1>
              <ul className="text-header-gray">
                <li>Rainbow Collection</li>
                <li>Sun Wear </li>
                <li>Best Collection</li>
                <li>Summer Body</li>
                <li>New Range</li>
                <li>Trendy Collection</li>
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
          </div>
          <div className="lg:flex justify-between">
            <div className="border-b lg:border-b-0 py-2 border-[#D8D8D8]">
              <h1 className="font-bold">New In By Fit</h1>
              <section className=" grid grid-cols-3 lg:grid-cols-4 space-x-2 justify-between text-header-gray">
                <div>
                  <img
                    src="/assets/images/new1.png"
                    className="w-[43px]"
                    alt=""
                  />
                  <span className="text-[.7em]">Plus Sixe & Curve</span>
                </div>
                <div>
                  <img
                    src="/assets/images/new2.png"
                    className="w-[43px]"
                    alt=""
                  />
                  <span className="text-[.7em]">Petite</span>
                </div>
                <div>
                  <img
                    src="/assets/images/new3.png"
                    className="w-[43px]"
                    alt=""
                  />
                  <span className="text-[.7em]">Tall</span>
                </div>
                <div>
                  <img
                    src="/assets/images/new4.png"
                    className="w-[43px]"
                    alt=""
                  />
                  <span className="text-[.7em]">Maternity</span>
                </div>
              </section>
            </div>
            <div className=" lg:w-1/2">
              <h1 className="font-bold">Offers</h1>
              <div
                className=" text-white h-[100px] flex flex-col justify-center text-center text-[.8em] bg-no-repeat"
                style={{
                  background:
                    "linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url(/assets/images/newInRect.png)",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <p>THE BIG BANG HOLIDAY SHOPPING</p>
                <span>Get 40% off from 4th - 30th Sept.</span>
              </div>
            </div>
          </div>
        </nav>
      </div>
  );
};

export default NewIn;
