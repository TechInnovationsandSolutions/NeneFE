import { categoryWrapper } from "@/utils/sharedStyles";

const FeaturedTab = () => {
  return (
      <div className="flex  ">
        <nav className="p-[1.8em] lg:relative flex flex-col lg:flex-row w-full lg:h-fit  h-full  right-0 text-black bg-white ">
          <div className="lg:flex justify-between  ml-auto border-[#D8D8D8] ">
            <div className="border-b lg:border-b-0 py-2 px-3 w-full border-[#D8D8D8]">
              <section className=" flex flex-col  md:grid grid-cols-4 flex-wrap justify-between lg:space-x-0  lg:justify-center text-header-gray">
                <div className=" lg:w-4/5 ">
                  <img
                    src="/assets/images/brandsMini.png"
                    className=""
                    alt=""
                  />
                  <p className="text-black font-bold text-xl">FEATURED BOOKS</p>
                  <span className=" max-w-3/5 text-[.7em]">
                    View our interviews with famous women in different
                    industries
                  </span>
                </div>
                <div className=" lg:w-4/5 ">
                  <img
                    src="/assets/images/brandsMini.png"
                    className=""
                    alt=""
                  />
                  <p className="text-black font-bold text-xl">
                    GLAMOUR & LUXURY
                  </p>
                  <span className=" max-w-3/5 text-[.7em]">
                    Live and feel the luxury style{" "}
                  </span>
                </div>
                <div className=" lg:w-4/5 ">
                  <img
                    src="/assets/images/brandsMini.png"
                    className=""
                    alt=""
                  />
                  <p className="text-black font-bold text-xl">
                    {" "}
                    FASHION & STYLE
                  </p>
                  <span className=" max-w-3/5 text-[.7em]">
                    Explore style from exclusive designers
                  </span>
                </div>
                <div className=" lg:w-4/5 ">
                  <img
                    src="/assets/images/brandsMini.png"
                    className=""
                    alt=""
                  />
                  <p className="text-black font-bold text-xl"> SCRAPBOOK</p>
                  <span className=" max-w-3/5 text-[.7em]">
                    Explore and view recent fashion trends & styles
                  </span>
                </div>
              </section>
            </div>
          </div>
        </nav>
      </div>
  );
};

export default FeaturedTab;
