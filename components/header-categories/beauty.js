import Button from "../button/button";
import { categoryWrapper } from "@/utils/sharedStyles";

const Beauty = () => {
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
          <div className=" lg:flex border-[#D8D8D8] lg:border-r lg:w-1/2 flex-wrap ">
            <div className="block border-b  lg:w-1/2  border-[#D8D8D8] lg:border-b-0 py-2 ">
              <h1 className="font-bold">Beauty</h1>
              <ul className="text-header-gray">
                <li> Beauty</li>
                <li> Beauty Accessories</li>
                <li> Beauty & Skincare</li>
              </ul>
            </div>

            <div className="border-b lg:w-1/2 lg:border-b-0 py-2 border-[#D8D8D8]">
              <h1  className="font-bold">Makeup </h1>
              <ul className="text-header-gray">
                <li>New In</li>
                <li>All Makeups </li>
                <li>Face</li>
                <li>Lips</li>
                <li>Palettes</li>
                <li>Makeup Tools</li>

              </ul>
            </div>

            <div className="border-b py-2 lg:w-1/2 lg:border-b-0 border-[#D8D8D8]">
              <h1 className="font-bold">Body &  Skincare</h1>
              <ul className="text-header-gray">
                <li>Body Care </li>
                <li>Tanning</li>
                <li>Skin Care</li>
              </ul>
            </div>
            <div className="border-b py-2 lg:w-1/2 lg:border-b-0 border-[#D8D8D8]">
              <h1 className="font-bold">Hair Care</h1>
              <ul className="text-header-gray">
                <li>All Hair Care </li>
                <li>Hair Care Products</li>
                <li>Shampoo</li>
                <li>Curls</li>
                <li>Conditioner.</li>
                <li>Hair Spray</li>

              </ul>
            </div>

          </div>
          <div className="lg:flex justify-between lg:w-4/5 ml-auto border-[#D8D8D8] ">
            <div className="border-b lg:border-b-0 py-2 lg:px-3 w-full border-[#D8D8D8]">
              <h1 className="font-bold">Shop By Brand</h1>
              <section className="grid grid-cols-3 lg:grid-cols-5 flex-wrap justify-between lg:space-x-0  lg:justify-center text-header-gray">
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

export default Beauty;
