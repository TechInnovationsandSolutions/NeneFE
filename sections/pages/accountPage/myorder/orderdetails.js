import Image from "next/image";
import MyOrderImg from "@/public/assets/account/my_orders.svg";
import { longarrowleft } from "@/public/assets/svgs";
import Link from "next/link";

const OrderDetails = ({ currentOrder }) => {
  return (
    <div className="flex flex-col gap-8 w-full-h-auto">
      <div className="w-full h-[200px] px-6 pt-[44px] bg-white">
        <Image src={MyOrderImg} alt="" width={44} height={44} />
        <h2 className="uppercase w-full pt-3 font-bold text-[1.5rem]">
          MY ORDERS
        </h2>
      </div>
      <div className="w-full min-h-[60vh] h-auto py-12 px-6 bg-white">
        <Link
          href="/account/my-orders"
          className="flex w-full gap-12 text-[24px] leading-[31px]"
        >
          {" "}
          <Image src={longarrowleft} alt="" width={24} height={24} /> Order
          details{" "}
        </Link>

        {/* Main Order Details */}
        <main className="flex flex-col py-9 gap-6 lg:flex-row w-full h-auto">
          {/* Left Side */}
          <div className="flex flex-col w-full">
            <h3 className={sectionHeadingStyle}>ORDER SUMMARY</h3>
            <div className="flex w-full gap-16 py-5">
              <div className="flex flex-col gap-3">
                <h5 className={heading5}>Order nº </h5>
                <p> {currentOrder.orderId} </p>
              </div>
              <div className="flex flex-col gap-3">
                <h5 className={heading5}>Nº of items </h5>
                <p> {currentOrder.quantity} </p>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex flex-col w-full">
            <h3 className={sectionHeadingStyle}>DELIVERY DETAILS</h3>
          </div>
        </main>
      </div>
    </div>
  );
};

export default OrderDetails;

const sectionHeadingStyle =
  "w-full h-auto lg:py-[1.1875rem] lg:px-[1.875rem] lg:bg-[#E8E8E8] font-bold text-[14px] leading-5 lg:text-[1.125rem] text-black uppercase ";
const heading5 = "text text-[#757575] leading-[21px]"