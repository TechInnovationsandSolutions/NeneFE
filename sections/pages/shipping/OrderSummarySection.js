import React from "react";
import Image from "next/image";
import { ladyOnBlackPalazzo2 } from "@/public/assets/images";

function OrderSummarySection() {
  return (
    <>
      <section className='md:w-[50%] xl:w-[40%]'>
        <div className='md:bg-grayBg md:py-5 md:pl-7 mt-5 md:mt-10 '>
          <h3 className='text-small font-bold tracking-wider '>
            ORDER SUMMARY
          </h3>
        </div>
        {/* Product details */}
        <div className='flex items-center justify-start gap-3 mt-6 h-[140px]  md:overflow-auto '>
          <div className='relative w-[117px] h-[142px] sm:h-[152px] overflow-hidden'>
            <Image
              src={ladyOnBlackPalazzo2}
              placeholder='blur'
              fill
              alt='Lady on black palazzo'
            />
          </div>
          <div className='w-2/3'>
            <h4 className='text-small'>
              Zara Twist Front Textured Slinky Ruched Midi Dress{" "}
            </h4>
            <div className='mt-3 text-small'>
              <p>
                Color: <span className='text-lightGray'>Black</span>{" "}
              </p>
              <p>
                UK Size: <span className='text-lightGray'>6</span>{" "}
              </p>
              <p>
                Quantity: <span className='text-lightGray'>1</span>{" "}
              </p>
            </div>
          </div>
        </div>
        {/* Order total */}
        <div className='bg-grayBg px-4 pt-4 pb-6 mt-5 space-y-5'>
          <div className='flex items-center justify-between text-small'>
            <p>Subtotal</p>
            <p className='font-bold'>N 3,000</p>
          </div>
          <div className='flex items-center justify-between'>
            <p>Standard Delivery</p>
            <p>N 1,000</p>
          </div>
          <div className='flex items-center justify-between border-t border-grayDivider font-bold pt-4'>
            <p className=''>Order Total</p>
            <p className='text-medium '>N 4,000</p>
          </div>
          <p className='text-[#666666]'>
            *All taxes are included in product prices
          </p>
        </div>
      </section>
    </>
  );
}

export default OrderSummarySection;
