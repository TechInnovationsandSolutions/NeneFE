import React from "react";

function DeliveryAddressSection() {
  return (
    <>
      <section className='md:w-[50%] xl:w-[60%]'>
        <div className='md:bg-grayBg md:py-5 md:pl-7 mt-10'>
          <h3 className='text-small font-bold tracking-wider '>
            DELIVERY ADDRESS
          </h3>
        </div>
        {/* Contact Form */}
        <form className='mt-6 md:mt-11'>
          <div className='flex flex-col'>
            <label htmlFor='name' className='text-small'>
              Contact Name
            </label>
            <input
              id='name'
              type='text'
              className='mt-3 border border-grayDivider/60 h-[44px] focus:border-black focus:ring-0'
            />
          </div>
          <div className='flex flex-col mt-6'>
            <label htmlFor='street' className='text-small'>
              Street Address
            </label>
            <input
              id='street'
              type='text'
              className='mt-3 border border-grayDivider/60 h-[44px] focus:border-black focus:ring-0'
            />
          </div>
          <div className='flex flex-col mt-6'>
            <label htmlFor='country' className='text-small'>
              Country
            </label>
            <select
              id='country'
              className='mt-3 border border-grayDivider/60 h-[44px] focus:border-black focus:ring-0'
            >
              <option value=''></option>
              <option value=''></option>
            </select>
          </div>
          <div className='flex flex-col mt-6'>
            <label htmlFor='state' className='text-small'>
              State/City
            </label>
            <select
              id='state'
              className='mt-3 border border-grayDivider/60 h-[44px] focus:border-black focus:ring-0'
            >
              <option value=''></option>
              <option value=''></option>
            </select>
          </div>
          <div className='flex flex-col mt-6'>
            <label htmlFor='postal-code' className='text-small'>
              Postal Code
            </label>
            <input
              id='postal-code'
              type='text'
              className='mt-3 border border-grayDivider/60 h-[44px] focus:border-black focus:ring-0'
            />
          </div>
          <div className='flex flex-col mt-6'>
            <label htmlFor='phone-number' className='text-small'>
              Phone Number
            </label>
            <input
              id='phone-number'
              type='text'
              className='mt-3 border border-grayDivider/60 h-[44px] focus:border-black focus:ring-0'
            />
          </div>
          <button className='py-2 bg-black text-white rounded-[4px] w-full md:w-[212px] font-bold mt-16'>
            Proceed to Billing
          </button>
        </form>
      </section>
    </>
  );
}

export default DeliveryAddressSection;
