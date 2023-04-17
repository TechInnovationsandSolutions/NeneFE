import Button from "@/components/button/button";
import Cart from "@/components/billing/cart";
import MasterCard from "../public/assets/svgs/mastercard 1.svg";
import Visa from "../public/assets/svgs/visa 1.svg";
import Paypal from "../public/assets/svgs/paypal 1.svg";
import Image from "next/image";

const Billing = () => {
  return (
    <div className="w-full max-w-[1440px] m-auto h-auto flex flex-col px-5 lg:px-[6.25rem] justify-center items-center ">
      <h1 className="font-sans font-bold text-[1.5rem] leading-8 text-center py-[2.5rem] text-[#3E3E3E] w-full ">
        Billing & Payment
      </h1>

      {/* First Upper Section */}

      <div className="w-full h-auto flex flex-col-reverse gap-[48px] lg:gap-[6.5625rem] lg:flex-row ">
        {/* Adrress Section */}
        <section className="w-full h-auto flex flex-col">
          {/* Delivery Adrress Section */}
          <h2 className={sectionHeadingStyle}>Delivery Address</h2>
          <div className="flex flex-col px-0 lg:px-[1.875rem] pt-[24px] lg:pt-[1.875rem] pb-[48px] lg:pb-[3.125rem] ">
            <p className={paraText}>Feranmi Olowookere</p>
            <p className={paraText}>56, Promise Road, Ikeja, Lagos</p>
            <p className={paraText}>Lagos, Nigeria</p>
            <p className={paraText}>+2348129086629</p>
          </div>
          {/* Billing Adrress Section */}
          <h2 className={sectionHeadingStyle}>Billing Address</h2>
          <form className="flex flex-col w-full gap-[25px] pt-[24px] lg:pt-[1.875rem] pb-[48px] lg:pb-[3.125rem] ">
            {/* Name */}
            <div className="flex flex-col">
              <label className={labelStyle}>Contact Name</label>
              <input
                className={inputStyle}
                type="text"
                placeholder="Feranmi Olowookere"
              />
            </div>
            {/* Street Address */}
            <div className="flex flex-col">
              <label className={labelStyle}>Street Address</label>
              <input
                className={inputStyle}
                type="text"
                placeholder="56, Promise Road, Ikeja, Lagos, Nigeria
                10001"
              />
            </div>
            {/* Country */}
            <div className="flex flex-col">
              <label className={labelStyle}>Country</label>
              <input className={inputStyle} type="text" placeholder="Nigeria" />
            </div>
            {/* Phone Number */}
            <div className="flex flex-col">
              <label className={labelStyle}>Phone Number</label>
              <input
                className={inputStyle}
                type="number"
                placeholder="+2348129086629"
              />
            </div>
          </form>
        </section>

        {/* Order Summary Section */}
        <section className="w-full h-auto  flex flex-col">
          <div className="w-full h-auto py-[0.4375rem] lg:px-[1.875rem] lg:bg-[#E8E8E8] flex justify-between items-center">
            {/* Section Heading */}
            <h2 className="font-bold text-[14px] leading-5 lg:text-[1.125rem] text-[#3E3E3E] uppercase">
              Order Summary
            </h2>
            <Button
              text="Edit Bag"
              variant="black"
              type="button"
              size="small"
              id="editBTN"
            />
            <button
              className="text-black font-bold hidden underline text-[14px] leading-[18px]"
              type="submit"
              id="billingBtnMobile"
            >
              Edit Bag
            </button>
          </div>

          {/* All Order Infos */}
          <div className="w-full max-h-[175px] lg:max-h-[258px] overflow-y-scroll pt-[2rem] ">
            <Cart />
          </div>

          {/* Order Total */}
          <div className="w-full h-auto flex gap-[20px] flex-col  p-[1.875rem] bg-[#E8E8E8] mt-5 lg:mt-[3rem] ">
            <h3 className="w-full font-bold text-[14px] leading-5 lg:text-[1.125rem] lg:leading-6 flex justify-between">
              Subtotal <span>N 3,000</span>{" "}
            </h3>
            <h3 className="w-full text-[14px] leading-5 lg:text-[1.125rem] lg:leading-6 flex justify-between">
              Standard delivery <span>N 1,000</span>{" "}
            </h3>
            <div className="h-[0.7px] w-full  bg-[#979797]"></div>
            <h2 className="w-full font-bold text-[14px] leading-5 lg:text-[1.125rem] lg:leading-6 flex justify-between">
              Order Total <span>N 4,000</span>
            </h2>
            <p className="text-[14px] leading-5 lg:text-[1.125rem] lg:leading-6 text-[#666666] pb-[1.4375rem]">
              *All taxes are included in product prices
            </p>
          </div>
        </section>
      </div>

      {/* Second Lower Section */}

      <div className="w-full h-auto flex flex-col gap-12 lg:gap-[6.5625rem] lg:flex-row  pb-[65px]">
        {/* Payment Method Section */}
        <section className="w-full h-auto flex flex-col ">
          <h2 className={sectionHeadingStyle}>Payment Method</h2>
          <div className="w-full h-auto flex flex-col pt-6 lg:pt-[1.875rem]">
            <p className="text-[14px] leading-5 lg:text-[1.125rem] lg:leading-6 text-[#3E3E3E] pb-[1.4375rem] ">
              Complete your payment through the following means:
            </p>

            {/* Select Payment Method of Choice */}
            <form className="flex flex-col w-full ">
              <>
                {/* Payment by card */}
                <div className="flex gap-[25px]  w-full h-auto">
                  <input type="radio" name="payChoice" className="bg-black" />{" "}
                  <label className="lg:text-[1.3125rem] lg:leading-7 text-[14px] leading-5 ">
                    Pay by Card
                  </label>
                </div>

                <div className="flex flex-col gap-3 pt-2 lg:pt-3 pl-9">
                  <p className="text-[14px] leading-5 lg:text-[1rem] lg:leading-6 text-[#979797]">
                    Card payments are supported by all banks
                  </p>
                  <div className="flex gap-7">
                    <Image src={MasterCard} alt="" width={45} height={45} />
                    <Image src={Visa} alt="" width={45} height={45} />
                    <Image src={Paypal} alt="" width={45} height={45} />
                  </div>
                </div>
              </>

              {/* Payment on delivery */}
              <div className="flex gap-[25px] w-full h-auto pt-[25px] lg:pt-[54px] ">
                <input type="radio" name="payChoice" className="bg-black" />{" "}
                <label className="lg:text-[1.3125rem] lg:leading-7 text-[14px] leading-5 ">
                  Pay on Delivery
                </label>
              </div>
            </form>
          </div>
        </section>

        {/* Card Details Section */}
        <section className="w-full h-auto flex flex-col ">
          <h2 className={sectionHeadingStyle}>Card Details</h2>
          <form className="w-full h-auto flex gap-[25px] flex-col pt-6 lg:pt-[2.1875rem]">
            <div className="flex flex-col">
              <label className={labelStyle}>Card Number</label>
              <input type="text" className={inputStyle} />
            </div>

            <div className="flex flex-col">
              <label className={labelStyle}>Expiry Date</label>
              <div className="flex gap-[10px]">
                <input
                  type="text"
                  className={`${inputStyle} max-w-[88px] placeholder-[#979797] `}
                  placeholder="MM"
                />
                <input
                  type="text"
                  className={`${inputStyle} max-w-[88px] placeholder-[#979797]`}
                  placeholder="YYYY"
                />
                <input
                  type="text"
                  className={`${inputStyle} lg:ml-[45px] max-w-[88px] placeholder-[#979797]`}
                />
              </div>
            </div>
          </form>
        </section>
      </div>
      <div className="w-full pb-[100px]">
        <Button
          text="Complete Order"
          variant="black"
          type="submit"
          size="small"
        />
      </div>
    </div>
  );
};

export default Billing;

const sectionHeadingStyle =
  "w-full h-auto lg:py-[1.1875rem] lg:px-[1.875rem] lg:bg-[#E8E8E8] font-bold text-[14px] leading-5 lg:text-[1.125rem] text-[#3E3E3E] uppercase ";
const paraText =
  "font-sans font-normal text-[14px] leading-5 lg:text-[1.125rem] lg:leading-[1.4375rem] text-[ #3E3E3E] pb-4 ";
const inputStyle =
  "w-full px-[1rem] py-[13px]  text-[14px] leading-5 lg:text-[1.125rem] lg:leading-[1.4375rem border border-[#C4C4C4] rounded placeholder-black";
const labelStyle =
  "text-[#3E3E3E] text-[14px] leading-5 lg:text-[1.125rem] font-normal pb-[10px] ";
