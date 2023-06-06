import SideBar from "@/sections/pages/accountPage/where-is-my-order/sidebar";

const OrderFaqLayout = ({children}) => {
    return (
      <div className="w-full h-full flex flex-col bg-[#e5e5e5] px-5 py-5 lg:px-[100px] lg:py-[80px]">
        <div className=" w-full h-auto flex flex-col lg:flex-row gap-6 lg:gap-[5%] bg-medGray ">
          {/* Where is my order main page section */}
          <div className="w-full lg:w-[70%]">
            {children}
          </div>

          {/* Where is my order sidebar */}
          <section className="w-full lg:w-[25%] h-auto">
            <SideBar />
          </section>
        </div>
        <div className="flex justify-center items-center bg-[#FFC0CB] mt-[120px] p-16 ">
          <h3 className="text-2xl lg:text-[36px] flex flex-col lg:leading-[45px]">
            <p>“</p>
            <p className="text-[#3e3e3e] font-bold text-center">
              We are still in business cause we never take for granted our
              customers’ experience. Stay with us, this is the beginning yet.
            </p>
            <p className="self-end">“</p>
          </h3>
        </div>
      </div>
    );
}
 
export default OrderFaqLayout;