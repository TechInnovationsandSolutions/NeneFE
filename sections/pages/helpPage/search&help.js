import Image from 'next/image'
import React, { useState } from 'react'
import help from '../../../public/assets/images/helpBG.png'
import search from '../../../public/assets/svgs/search.svg'
import minus from '../../../public/assets/svgs/minus.svg'
import plus from '../../../public/assets/svgs/plus.svg'


const Search = () => {
  const [input, setInput] = useState('')
  const [showContent, setShowContent] = useState(false)
  const [showContent2, setShowContent2] = useState(false)
  const contentShow = () => setShowContent((prev) => !prev)
  const contentShow2 = () => setShowContent2((prev) => !prev)

  return (
    <section>
      <div>
        <div className='max-w-[1240px] relative '>
          <Image src={help} alt='help' />
          <div className='bg-white absolute left-[10%] bottom-[50%] py-3 px-8 rounded-3xl w-[80%] flex justify-between '>
            <input placeholder='Search for a product' value={input} onChange={(e) => setInput(e.target.value)} className='w-full border-0 outline-none' />
            <Image src={search} alt='search' />
          </div>
        </div>
        <div className='bg-black text-white px-6 border-b border-white'>
          <div className='flex justify-between items-center py-6'>
            <h4 className='font-bold '>INTERNATIONAL DELIVERY UPDATE</h4>
            <Image src={showContent ? minus : plus} onClick={contentShow} alt='show icons' className='cursor-pointer'/>
          </div>
          <p className={`py-4 ${!showContent && 'hidden'}`}>Keeping our staff and customers safe is our biggest priority so our delivery times are a little longer than usual. Waiting for a delivery? Double check your expected delivery date under &#39;My Orders&#39; before getting in touch. Please bear in mind this date is an estimate and some deliveries may take longer &minus; we're working hard to get your order to you as quickly as possible.</p>
        </div>
        <div className='bg-black text-white px-6'>
          <div className='flex justify-between items-center py-6'>
            <h4 className='font-bold '>CUSTOMER CARE UPDATE</h4>
            <Image src={showContent2 ? minus : plus} onClick={contentShow2} alt='show icons2' className='cursor-pointer'/>
          </div>
          <p className={`py-4 ${!showContent2 && 'hidden'}`}>Our Customer Care Team are busier than usual during these uncertain times, but we&#39;re listening to what you need. We&#39;re still here to help you, but to get updates on our most popular topics and to see what we&#39;re doing to ensure the safety of our staff and customers, click here</p>
        </div>
      </div>
    </section>
  )
}

export default Search