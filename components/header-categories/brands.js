import { categoryWrapper } from "@/utils/sharedStyles";

const BrandsTab = () => {
  return (
      <div className="flex  ">

        <nav className="p-[1.8em] lg:relative flex flex-col lg:flex-row w-full lg:h-fit  h-full  right-0 text-black bg-white ">
          <div className=" lg:flex lg:w-1/3 border-[#D8D8D8] lg:border-r flex-wrap ">
            <div className="block border-b    border-[#D8D8D8] lg:border-b-0 py-2 ">
              <h1 className="font-bold">Brands</h1>
              <ul className="text-header-gray flex flex-wrap">
                <li className="w-1/2"> Adidas</li>
                <li className="w-1/2"> Barrell M</li>
                <li className="w-1/2"> Bolu Adesanya</li>
                <li className="w-1/2"> Free Man</li>
                <li className="w-1/2"> Glamorous</li>
                <li className="w-1/2"> Gifts & Bridal</li>
                <li className="w-1/2"> House of Tara</li>
                <li className="w-1/2"> Hush</li>
                <li className="w-1/2"> Hegai & Esther </li>
                <li className="w-1/2"> L’Oreal</li>
                <li className="w-1/2"> Missguided</li>
                <li className="w-1/2"> New Look</li>
                <li className="w-1/2"> New Balance</li>
                <li className="w-1/2"> Nike</li>
                <li className="w-1/2"> Marty</li>
                <li className="w-1/2"> Olivia Burton</li>
                <li className="w-1/2">Nuban</li>
                <li className="w-1/2"> Ralph</li>
                <li className="w-1/2"> River Island</li>
                <li className="w-1/2"> Topshop</li>
                <li className="w-1/2"> Weekday</li>
                <li className="w-1/2"> Yanga</li>
                <li className="w-1/2"> Y.A.S</li>
                <li className="w-1/2"> Zara</li>
                <li className="w-1/2"> Zikel</li>
              </ul>
            </div>
          </div>
          <div className="lg:flex justify-between lg:w-4/5 ml-auto border-[#D8D8D8] ">
            <div className="border-b lg:border-b-0 py-2 px-3 w-full border-[#D8D8D8]">
              <h1 className="font-bold">Shop By Brand</h1>
              <section className="grid grid-cols-4 flex-wrap justify-between lg:space-x-1  lg:justify-center text-header-gray">
                <div>
                  <img
                    src="/assets/images/brandsMini.png"
                    className=""
                    alt=""
                  />
                  <span className="text-[.7em]">Plus Sixe & Curve</span>
                </div>
                <div>
                  <img
                    src="/assets/images/brandsMini.png"
                    className=""
                    alt=""
                  />
                  <span className="text-[.7em]">Petite</span>
                </div>
                <div>
                  <img
                    src="/assets/images/brandsMini.png"
                    className=""
                    alt=""
                  />
                  <span className="text-[.7em]">Tall</span>
                </div>
                <div>
                  <img
                    src="/assets/images/brandsMini.png"
                    className=""
                    alt=""
                  />
                  <span className="text-[.7em]">Maternity</span>
                </div>
                <div>
                  <img
                    src="/assets/images/brandsMini.png"
                    className=""
                    alt=""
                  />
                  <span className="text-[.7em]">Maternity</span>
                </div>

                <div>
                  <img
                    src="/assets/images/brandsMini.png"
                    className=""
                    alt=""
                  />
                  <span className="text-[.7em]">Maternity</span>
                </div>
                <div>
                  <img
                    src="/assets/images/brandsMini.png"
                    className=""
                    alt=""
                  />
                  <span className="text-[.7em]">Maternity</span>
                </div>

                <div>
                  <img
                    src="/assets/images/brandsMini.png"
                    className=""
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

export default BrandsTab;
