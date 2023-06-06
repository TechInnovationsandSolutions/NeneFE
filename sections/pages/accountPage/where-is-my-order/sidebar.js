import Button from "@/components/button/button";
import Image from "next/image";
import Link from "next/link";
import {
  deliveryIcon,
  shipmentIcon,
  orderIssuesIcon,
  productStockIcon,
  carretRightIcon,
  settingsIcon,
  searchIcon,
} from "@/public/assets/svgs";

const WhereIsMyOrderSideBar = () => {
    return (
      <div className="flex flex-col gap-5 w-full h-auto">
        {/* FAQ Topics */}
        <div className="flex flex-col">
          <div className="py-8 px-6 w-full bg-[#d8d8d8] ">
            <h2 className="text-[18px] leading-[23px] font-medium">ALL FAQ TOPICS</h2>
          </div>
          <div className="py-8 px-6 w-full bg-[#ffffff] border-b border-[#dbdbdb]">
            <Link href="/" className="flex gap-4">
              <Image src={deliveryIcon} alt="" width={24} height={24} />
              <h3>Delivery</h3>
            </Link>
          </div>
          <div className="py-8 px-6 w-full bg-[#ffffff] border-b border-[#dbdbdb]">
            <Link href="/" className="flex gap-4">
              <Image src={shipmentIcon} alt="" width={24} height={24} />
              <h3>Returns and Refunds</h3>
            </Link>
          </div>
          <div className="py-8 px-6 w-full bg-[#ffffff] border-b border-[#dbdbdb]">
            <Link href="/" className="flex gap-4">
              <Image src={orderIssuesIcon} alt="" width={24} height={24} />
              <h3>Order issues</h3>
            </Link>
          </div>
          <div className="py-8 px-6 w-full bg-[#ffffff] border-b border-[#dbdbdb]">
            <Link href="/" className="flex gap-4">
              <Image src={productStockIcon} alt="" width={24} height={24} />
              <h3>Product & Stock</h3>
            </Link>
          </div>
          <div className="py-8 px-6 w-full bg-[#ffffff] border-b border-[#dbdbdb]">
            <Link href="/" className="flex gap-4">
              <Image src={carretRightIcon} alt="" width={24} height={24} />
              <h3>Payment, Promos & Gift Vouchers</h3>
            </Link>
          </div>
          <div className="py-8 px-6 w-full bg-[#ffffff] border-b border-[#dbdbdb]">
            <Link href="/" className="flex gap-4">
              <Image src={settingsIcon} alt="" width={24} height={24} />
              <h3>Technical</h3>
            </Link>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex flex-col">
          <div className="py-8 px-6 w-full bg-[#d8d8d8] ">
            <h2 className="text-[18px]/[23px] font-medium">NEED TO SEARCH?</h2>
          </div>
          <div className="py-8 px-6 w-full bg-[#ffffff] border-b border-[#dbdbdb]">
            <label htmlFor="search" className="flex relative">
              <input
                type="text"
                id="search"
                className="rounded-[23px] w-full px-9 py-[14px]"
                placeholder="Search for help"
              />
              <Image
                src={searchIcon}
                alt=""
                width={18}
                height={18}
                className="absolute right-5 top-5"
              />
            </label>
          </div>
        </div>

        {/* Get In Touch */}
        <div className="flex flex-col">
          <div className="py-8 px-6 w-full bg-[#d8d8d8] ">
            <h2 className="text-[18px]/[23px] font-medium">GET IN TOUCH</h2>
          </div>
          <div className="py-8 px-6 w-full bg-[#ffffff] border-b border-[#dbdbdb]">
            <Button
              text="Contact Us"
              variant="black"
              type="button"
              size="big"
              customClassName="border border-[#AAAAAA] text-[#1a1a1a] text leading-5 "
              onClick={() => {}}
            />
          </div>
        </div>
      </div>
    );
}
 
export default WhereIsMyOrderSideBar;