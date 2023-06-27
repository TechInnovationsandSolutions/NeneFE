import React from 'react'
import Visa from "@/public/assets/svgs/visa 1.svg";
import Image from "next/image";
import img1 from "@/public/assets/homePage1/s1.png"
import chevronDown from '../../../public/assets/svgs/chevronDown.svg'


const OrderDetails = () => {
  return (
    <div className=" px-6 pb-20">
      <div className='flex flex-col md:flex-row justify-between gap-3 md:items-center mt-8 mb-4 px-6'>
        <h2 className=''>List of Orders (34)/<span className='text-black'>Order Details</span></h2>
        <div className='flex flex-col md:flex-row gap-2'>
         <div className='py-2 px-3 flex border justify-center items-center border-[#AAAAAA] gap-3'>
            <p>payment status: pending</p>
            <Image src={chevronDown} />
          </div> 
          <div className='py-2 px-3 flex border justify-center items-center border-[#AAAAAA] gap-3'>
            <p>shipping status: pending</p>
            <Image src={chevronDown} />
          </div>
          <div className='py-2 px-3 border text-center border-[#AAAAAA] gap-3'>
            <p>Initiate refund</p>
          </div>
        </div>
        
      </div>

      <div className='h-[2px] hidden lg:block bg-[#E8E8E8] mt-4 mb-12'></div>

      {/* First Upper Section */}

      <div className="w-full h-auto flex flex-col gap-[48px] lg:flex-row ">
        {/* Adrress Section */}
        <section className="w-full h-auto flex flex-col">
          {/* Delivery Adrress Section */}
          <h2 className={sectionHeadingStyle}>Delivery Address</h2>
          <div className="flex flex-col px-0 lg:px-[1.875rem] py-[24px]  ">
            <p className={paraText}>Feranmi Olowookere</p>
            <p className={paraText}>56, Promise Road, Ikeja, Lagos</p>
            <p className={paraText}>Lagos, Nigeria</p>
            <p className={paraText}>+2348129086629</p>
          </div>
          {/* Billing Adrress Section */}
          <h2 className={sectionHeadingStyle}>Billing Address</h2>
          <div className="flex flex-col px-0 lg:px-[1.875rem] py-[24px] ">
              <p className={paraText}>Feranmi Olowookere</p>
              <p className={paraText}>56, Promise Road, Ikeja, Lagos, Nigeria</p>
              <p  className={paraText}>10001</p>
              <p className={paraText}>Lagos, Nigeria</p>
              <p className={paraText}>+2348129086629</p>
          </div>
          <div className="w-full h-auto flex flex-col ">
            <h2 className={sectionHeadingStyle}>Payment Method</h2>
            <div className="flex gap-[25px] items-center pt-6  w-full h-auto">
              <p>Pay by Card</p>
              <Image src={Visa} alt="" width={75} height={45} />
            </div>
          </div>

        </section>

        {/* Order Summary Section */}
        <section className="w-full h-auto  flex flex-col">
          <div className="w-full h-auto flex flex-col ">
            {/* Section Heading */}
            <h2 className={sectionHeadingStyle}>
              Order Summary
            </h2>
          </div>

          {/* All Order Infos */}
          <div className='flex items-center gap-4 text-sm sm:text-base mt-5'>
          <div className=''>
              <Image src={img1} alt='dress' height={200} />
          </div>
          <div className=''>
            <p className='text-[#3E3E3E] sm:text-base'>Zara Twist Front Textured Slinky Ruched Midi Dress </p>
            <div className='flex flex-row gap-6'>
              <p className='text-[#979797] mt-1 sm:mt-4 text-sm'>Color: <span className='text-black'>Black</span></p>
              <p className='text-[#979797] mt-1 sm:mt-4 text-sm'>UK Size: <span className='text-black'>6</span></p>
              <p className='text-[#979797] mt-1 sm:mt-4 text-sm'>Quantity: <span className='text-black'>1</span></p>
            </div>
              <h5 className='mt-3 sm:mt-4  font-bold'>N 3,000</h5>
          </div>
        </div>

          {/* Order Total */}
          <div className="w-full h-auto flex gap-[20px] flex-col  p-[1.875rem] bg-[#E8E8E8] mt-5 lg:mt-[3rem] ">
            <h3 className="w-full font-semibold teext-sm leading-5 lg:text-[1.125rem] lg:leading-6 flex justify-between">
              Subtotal <span>N 3,000</span>{" "}
            </h3>
            <h3 className="w-full text-base leading-5  flex justify-between">
              Standard delivery <span>N 1,000</span>{" "}
            </h3>
            <div className="h-[0.7px] w-full  bg-[#979797]"></div>
            <h2 className="w-full font-bold text-[14px] leading-5 lg:text-[1.125rem] lg:leading-6 flex justify-between">
              Order Total <span>N 4,000</span>
            </h2>
            <p className="text-sm leading-5 text-[#666666] pb-[1.4375rem]">
              *All taxes are included in product prices
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default OrderDetails

const sectionHeadingStyle =
  "w-full h-auto py-3 px-4 bg-[#E8E8E8] font-bold text-[14px] leading-5  text-[#3E3E3E] uppercase ";
const paraText =
  "font-sans font-normal text-[14px] leading-5 lg:text-[1.125rem] lg:leading-[1.4375rem] text-[ #3E3E3E] pb-4 ";
