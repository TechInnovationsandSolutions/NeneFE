import PaginateTable, { list } from '@/sections/pages/vendor/order/pagination'
import Table from '@/sections/pages/vendor/order/table'
import Image from 'next/image'
import React from 'react'
import chevronDown from '@/public/assets/svgs/chevronDown.svg'
import close from '@/public/assets/svgs/close icon.svg'
import { useState } from 'react'


const Order = () => {
  const [show, setShow] = useState(false)
  const [period, setPeriod] = useState('All Time')
  const showDecision = () => setShow(prev => !prev)
  const pickPeriod = (value) => {
    setPeriod(value)
    showDecision();
  }



  return (
    <article>
      <div className='flex flex-col md:flex-row justify-between gap-3 md:items-center mt-8 mb-10 px-6'>
        <h2  className='text-2xl '>List of Orders <span className='text-[#757575]'>({list.length})</span></h2>
        <div className='py-3 px-5 flex border justify-center lg:justify-between gap-3 lg:gap-0  border-[#AAAAAA] lg:w-[147px]  relative  cursor-pointer'  >
          <p>{period}</p>
          <Image src={chevronDown} onClick={showDecision}/>
            <div className={`absolute right-0 -bottom-[132px] ${show ? 'flex' : 'hidden'} flex-col shadow-md border text-sm bg-white w-[147px] text-center py-2`}>
              <p className=' px-2 py-1 border-r text-[#757575]  hover:text-black cursor-pointer' onClick={e => pickPeriod('All Time')}>All Time</p>
              <p className=' px-2 py-1 border-r text-[#757575]  hover:text-black cursor-pointer' onClick={e => pickPeriod('This Year')}>This Year</p>
              <p className=' px-2 py-1 text-[#757575]  hover:text-black cursor-pointer' onClick={e => pickPeriod('This Month')}>This Month</p>
              <p className=' px-2 py-1 text-[#757575]  hover:text-black cursor-pointer' onClick={e => pickPeriod('Today')}>Today</p>
            </div>
        </div>
      </div>
      <section>
        <Table />
      </section>
    </article>
  )
}

export default Order