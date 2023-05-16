import React from "react";
import {
  OrderSummarySection,
  DeliveryAddressSection,
} from "@/sections/pages/shipping";

function shipping() {
  return (
    <>
      <section className=''>
        <div className='w-11/12 max-w-[1237px] mx-auto mt-5 md:mt-10 mb-12 md:mb-24'>
          <h2 className='text-medium font-bold text-center'>Shipping</h2>
          {/* Order summary */}
          <div className='md:flex md:flex-row-reverse md:gap-8 lg:gap-12 2xl:gap-28 '>
            <OrderSummarySection />
            <DeliveryAddressSection />
          </div>
        </div>
      </section>
    </>
  );
}

export default shipping;
