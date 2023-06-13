import Image from "next/image";
import React from "react";
import delivery from "../../../public/assets/svgs/delivery.svg";
import order from "../../../public/assets/svgs/order.svg";
import product from "../../../public/assets/svgs/product.svg";
import settings from "../../../public/assets/svgs/settings.svg";
import shipment from "../../../public/assets/svgs/shipment.svg";
import contact from "../../../public/assets/images/contact.png";
import arrow from "../../../public/assets/svgs/help-arrow-right.svg";

const HelpInfo = () => {
  return (
    <section>
      <h3 className='font-bold text-lg my-5'>FAQ TOPICS</h3>
      <div className='grid place-content-center  grid-cols-1mx-auto sm:grid-cols-2 lg:grid-cols-3 gap-12 px-5'>
        <div className='bg-[#E8E8E8] p-6 max-w-[365px]'>
          <div className='flex pb-3  gap-3 items-center'>
            <Image src={delivery} alt='delivery' />
            <h6>Delivery</h6>
          </div>
          <ul className='border-t px-0 border-black py-4 '>
            <li className='my-1.5'>International deliveries</li>
            <li className='my-1.5'>Where's my order?</li>
            <li className='my-1.5'>Can I track my order?</li>
          </ul>
          <p className='font-bold'>View All</p>
        </div>
        <div className='bg-[#E8E8E8] p-6 max-w-[365px]'>
          <div className='flex pb-3  gap-3 items-center'>
            <Image src={shipment} alt='shipment' />
            <h6>Returns & Refunds</h6>
          </div>
          <ul className='border-t px-0 border-black py-4 '>
            <li className='my-1.5'>How do I return?International</li>
            <li className='my-1.5'>Have you received my return?</li>
            <li className='my-1.5'>Can I exchange?</li>
          </ul>
          <p className='font-bold'>View All</p>
        </div>
        <div className='bg-[#E8E8E8] p-6 max-w-[365px]'>
          <div className='flex pb-3  gap-3 items-center'>
            <Image src={order} alt='order' />
            <h6>Order issues</h6>
          </div>
          <ul className='border-t px-0 border-black py-4 '>
            <li className='my-1.5'>Faulty Item</li>
            <li className='my-1.5'>Wrong Item Received</li>
            <li className='my-1.5'>Missing Item</li>
          </ul>
          <p className='font-bold'>View All</p>
        </div>
        <div className='bg-[#E8E8E8] p-6 max-w-[365px]'>
          <div className='flex pb-3  gap-3 items-center'>
            <Image src={product} alt='product1' />
            <h6>Product & Stock</h6>
          </div>
          <ul className='border-t px-0 border-black py-4 '>
            <li className='my-1.5'>Sizing and Care Guide</li>
            <li className='my-1.5'>Will an item be back in stock?</li>
            <li className='my-1.5'>Find a brand</li>
          </ul>
          <p className='font-bold'>View All</p>
        </div>
        <div className='bg-[#E8E8E8] p-6 max-w-[365px]'>
          <div className='flex pb-3  gap-3 items-center'>
            <Image src={product} alt='product' />
            <h6>Payment, Promos & Gift Vouchers</h6>
          </div>
          <ul className='border-t px-0 border-black py-4 '>
            <li className='my-1.5'>Payment types</li>
            <li className='my-1.5'>Promo Codes</li>
            <li className='my-1.5'>When will I be charged?</li>
          </ul>
          <p className='font-bold'>View All</p>
        </div>
        <div className='bg-[#E8E8E8] p-6 max-w-[365px]'>
          <div className='flex pb-3  gap-3 items-center'>
            <Image src={settings} alt='settings' />
            <h6>Technical</h6>
          </div>
          <ul className='border-t px-0 border-black py-4 '>
            <li className='my-1.5'>Trouble signing into my account</li>
            <li className='my-1.5'>Trouble with the website</li>
            <li className='my-1.5'>Browser Support</li>
          </ul>
          <p className='font-bold'>View All</p>
        </div>
      </div>
      <div className='grid place-content-center grid-cols-1  md:grid-cols-2 gap-12 mb-6 px-5'>
        <div className='overflow-hidden'>
          <h3 className='font-bold text-lg my-5'>POPULAR FAQS</h3>
          <div className='px-4 bg-[#E8E8E8] h-full'>
            <div className='py-6 px-2 border-b border-black flex justify-between items-center'>
              <p>What is your Returns Policy?</p>
              <Image src={arrow} alt='arrow right3' />
            </div>
            <div className='py-6 px-2 border-b border-black flex justify-between items-center'>
              <p>Can I track the delivery of my order?</p>
              <Image src={arrow} alt='arrow right2' />
            </div>
            <div className='py-6 px-2 border-b border-black flex justify-between items-center'>
              <p>Will my parcel be charged customs and import charges?</p>
              <Image src={arrow} alt='arrow right1' />
            </div>
            <div className='py-6 px-2 border-b flex justify-between items-center'>
              <p>Can I cancel my order after I've placed it?</p>
              <Image src={arrow} alt='arrow right' />
            </div>
          </div>
        </div>
        <div className='overflow-hidden'>
          <h3 className='font-bold text-lg my-5'>NEED TO GET IN TOUCH?</h3>
          <div className='bg-[#E8E8E8] md:h-full'>
            <div className=''>
              <Image src={contact} width={800} alt='contact' />
            </div>
            <div className='py-7 flex justify-center'>
              <button className='border text-xs sm:text-sm text-center border-black py-[10px] px-2 sm:px-12 cursor-pointer'>
                CONTACT US NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelpInfo;
