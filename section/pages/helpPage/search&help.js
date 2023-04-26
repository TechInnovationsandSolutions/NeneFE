import Image from 'next/image'
import React from 'react'
import help from '../../../public/assets/images/helpBG.png'
import search from '../../../public/assets/svgs/search.svg'
import minus from '../../../public/assets/svgs/minus.svg'
import plus from '../../../public/assets/svgs/plus.svg'


const Search = () => {
  return (
    <section>
      <div>
        <div className='max-w-[1240px] relative '>
          <Image src={help} />
          <div className='bg-white absolute bottom-5 py-3 px-8 rounded-3xl w-[303px] md:w-[705px] flex justify-between '>
            <input placeholder='Search for a product' />
            <Image src={search}/>
          </div>
        </div>
        <div className='bg-black text-white px-6 border-b border-white'>
          <div className='flex justify-between items-center py-6'>
            <h4 className='font-bold '>INTERNATIONAL DELIVERY UPDATE</h4>
            <Image src={plus} />
          </div>
          <p className='p-4'>Keeping our staff and customers safe is our biggest priority so our delivery times are a little longer than usual. Waiting for a delivery? Double check your expected delivery date under ‘My Orders’ before getting in touch. Please bear in mind this date is an estimate and some deliveries may take longer – we're working hard to get your order to you as quickly as possible.</p>
        </div>
        <div className='bg-black text-white px-6'>
          <div className='flex justify-between items-center py-6'>
            <h4 className='font-bold '>CUSTOMER CARE UPDATE</h4>
            <Image src={plus} />
          </div>
          <p className='p-4'>Our Customer Care Team are busier than usual during these uncertain times, but we’re listening to what you need. We’re still here to help you, but to get updates on our most popular topics and to see what we’re doing to ensure the safety of our staff and customers, click here</p>
        </div>
      </div>
    </section>
  )
}

export default Search