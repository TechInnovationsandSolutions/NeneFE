import React from "react";
import { shoppingBag, creditCard, binoculars } from "@/public/assets/svgs";
import Image from "next/image";

const Overview = () => {
  return (
    <>
      <section className=''>
        <div className='w-11/12 mx-auto lg:mt-9 lg:pb-12 lg:border-b lg:border-[#D7D7D7]'>
          <div className='w-full flex items-center justify-between'>
            <div className='text-medium'>Overview</div>
            <select
              name='timeFrame'
              id=''
              className='border border-medGray text-black font-medium rounded-[3px]  focus:border-gray-300 focus:ring focus:ring-gray-200 focus:ring-opacity-50 focus:border-transparent'
            >
              <option value='' className=''>
                Today
              </option>
              <option value='' className=''>
                This Week
              </option>
              <option value='' className=''>
                This Month
              </option>
              <option value='' className=''>
                This Year
              </option>
            </select>
          </div>
          <div className=' mt-6 flex flex-col items-center justify-between gap-8 md:flex-row '>
            {/* Credit card */}
            <div className='w-full bg-[#F2F2F2] flex flex-col items-center justify-center py-14'>
              <div className='bg-black p-3 flex items-center justify-center rounded-full w-12 h-12'>
                <Image src={creditCard} alt='Credit card' />
              </div>
              <div className='mt-6 space-y-4 text-center'>
                <p className='text-[#6E6E6E] text-xSmall font-bold'>
                  TOTAL SALES
                </p>
                <p className='text-[2.5rem] lg:text-[2.75rem]'>$53,000</p>
              </div>
            </div>
            {/* Views */}
            <div className='w-full bg-[#F2F2F2] flex flex-col items-center justify-center py-14 '>
              <div className='bg-black p-3 flex items-center justify-center rounded-full w-12 h-12'>
                <Image src={binoculars} alt='Credit card' />
              </div>
              <div className='mt-6 space-y-4 text-center'>
                <p className='text-[#6E6E6E] text-xSmall font-bold'>
                  TOTAL VIEWS
                </p>
                <p className='text-[2.5rem] lg:text-[2.75rem]'>1.5M</p>
              </div>
            </div>
            {/* Shopping bag */}
            <div className='w-full bg-[#F2F2F2] flex flex-col items-center justify-center py-14 '>
              <div className='bg-black p-3 flex items-center justify-center rounded-full w-12 h-12'>
                <Image src={shoppingBag} alt='Credit card' />
              </div>
              <div className='mt-6 space-y-4 text-center'>
                <p className='text-[#6E6E6E] text-xSmall font-bold'>
                  QUANTITY SOLD{" "}
                </p>
                <p className='text-[2.5rem] lg:text-[2.75rem]'>3420</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Overview;
