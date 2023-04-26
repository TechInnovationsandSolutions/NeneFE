import Image from 'next/image'
import React from 'react'
import delivery from '../../../public/assets/svgs/delivery.svg'
import order from '../../../public/assets/svgs/order.svg'
import product from '../../../public/assets/svgs/product.svg'
import settings from '../../../public/assets/svgs/settings.svg'
import shipment from '../../../public/assets/svgs/shipment.svg'
import contact from '../../../public/assets/images/contact.png'
import arrow from '../../../public/assets/svgs/help-arrow-right.svg'

const HelpInfo = () => {
  return (
    <section>
      <h3 className='font-bold text-lg'>FAQ TOPICS</h3>
      <div className='grid grid-cols-2'>
        <div className='bg-[#E8E8E8] px-6 max-w-[365px]'>
          <div className='flex py-3'>
            <Image src={delivery} />
            <h6>Delivery</h6>
          </div>
          <ul className='border-t px-0 border-black py-4 '>
            <li>International deliveries</li>
            <li>Where's my order?</li>
            <li>Can I track my order?</li>
          </ul>
          <p className='font-bold'>View All</p>
        </div>
        <div className='bg-[#E8E8E8] px-6 max-w-[365px]'>
          <div className='flex py-3'>
            <Image src={shipment} />
            <h6>Returns & Refunds</h6>
          </div>
          <ul className='border-t px-0 border-black py-4 '>
            <li>How do I return?International</li>
            <li>Have you received my return?</li>
            <li>Can I exchange?</li>
          </ul>
          <p className='font-bold'>View All</p>
        </div>
        <div className='bg-[#E8E8E8] px-6 max-w-[365px]'>
          <div className='flex py-3'>
            <Image src={order} />
            <h6>Order issues</h6>
          </div>
          <ul className='border-t px-0 border-black py-4 '>
            <li>Faulty Item</li>
            <li>Wrong Item Received</li>
            <li>Missing Item</li>
          </ul>
          <p className='font-bold'>View All</p>
        </div>
        <div className='bg-[#E8E8E8] px-6 max-w-[365px]'>
          <div className='flex py-3'>
            <Image src={product} />
            <h6>Product & Stock</h6>
          </div>
          <ul className='border-t px-0 border-black py-4 '>
            <li>Sizing and Care Guide</li>
            <li>Will an item be back in stock?</li>
            <li>Find a brand</li>
          </ul>
          <p className='font-bold'>View All</p>
        </div>
        <div className='bg-[#E8E8E8] px-6 max-w-[365px]'>
          <div className='flex py-3'>
            <Image  />
            <h6>Payment, Promos & Gift Vouchers</h6>
          </div>
          <ul className='border-t px-0 border-black py-4 '>
            <li>Payment types</li>
            <li>Promo Codes</li>
            <li>When will I be charged?</li>
          </ul>
          <p className='font-bold'>View All</p>
        </div>
        <div className='bg-[#E8E8E8] px-6 max-w-[365px]'>
          <div className='flex py-3'>
            <Image src={settings} />
            <h6>Technical</h6>
          </div>
          <ul className='border-t px-0 border-black py-4 '>
            <li>Trouble signing into my account</li>
            <li>Trouble with the website</li>
            <li>Browser Support</li>
          </ul>
          <p className='font-bold'>View All</p>
        </div>
      </div>
      <div className='grid grid-rows-2'>
        <div>
          <h3 className='font-bold text-lg'>POPULAR FAQS</h3>
          <div className='px-4 bg-[#E8E8E8]'>
            <div className='py-6 px-2 border-b border-black flex justify-between items-center'>
              <p>What is your Returns Policy?</p>
              <Image src={arrow} />
            </div>
            <div className='py-6 px-2 border-b border-black flex justify-between items-center'>
              <p>Can I track the delivery of my order?</p>
              <Image src={arrow} />
            </div>
            <div className='py-6 px-2 border-b border-black flex justify-between items-center'>
              <p>Will my parcel be charged customs and import charges?</p>
              <Image src={arrow} />
            </div>
            <div className='py-6 px-2 border-b flex justify-between items-center'>
              <p>Can I cancel my order after I've placed it?</p>
              <Image src={arrow} />
            </div>
          </div>
        </div>
        <div>
          <h3 className='font-bold text-lg'>NEED TO GET IN TOUCH?</h3>
          <div className='bg-[#E8E8E8]'>
            <div>
              <Image src={contact} />
            </div>
            <div className='py-7'>
              <p className='border border-black py-[10px] mx-auto px-12 cursor-pointer'>
                CONTACT US NOW
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HelpInfo