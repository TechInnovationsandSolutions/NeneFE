import PaymentDisputes from '@/sections/pages/vendor/payments/disputes'
import PaymentLists from '@/sections/pages/vendor/payments/payments'
import Image from 'next/image'
import React, { useState } from 'react'
import piggy from '@/public/assets/svgs/PiggyBank.svg'
import chevronDown from '@/public/assets/svgs/chevronDown.svg'
import funnel from '@/public/assets/svgs/FunnelSimple.svg'
import close from '@/public/assets/svgs/close icon.svg'


const Payment = () => {
  const [page, setPage] = useState(true)
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
        <div className='flex flex-col  gap-5'>
          <div className='flex gap-3 text-[#757575]'>
            <p>Total Earnings</p>
            <Image src={piggy} />
          </div>
          
          <h1 className='text-4xl'>$56,230</h1>
        </div>
        <div className='flex gap-2 justify-center items-center flex-col md:flex-row'>
          <div className='py-3 px-5 flex border justify-center border-[#AAAAAA] gap-3 w-full md:w-[240px]'>
            <p>Change payment method</p>
          </div>
          <div className='py-3 px-5 flex  justify-center bg-black text-white gap-3 w-full md:w-[240px]'>
            <p>withdraw earnings</p>
          </div>
        </div>
      </div>
      <div className='flex gap-7  border-b px-6  items-center'>
        <div className={` flex gap-1 cursor-pointer py-6 text-[#757575] text-base   ${page && 'border-b-2 border-black'}`}>
          <p className={`  ${page && 'text-black'}`} onClick={e => setPage(true)}>List of Payments</p>
          <p >(54)</p>
        </div>
        <div className={` flex gap-1 cursor-pointer py-6 text-[#757575] text-base   ${!page && 'border-b-2 border-black'}`}>
          <p className={`  ${!page && 'text-black'}`} onClick={e => setPage(false)}>Payment Disputes </p>
          <p>(18)</p>
        </div>

        <div className='cursor-pointer ml-auto relative'>
          <div className='py-1 px-5 lg:flex border justify-center border-[#AAAAAA]  gap-3 items-center hidden ' >
            <p className=''>{period}</p>
            <Image src={chevronDown} onClick={showDecision} />
          </div>
          <Image src={funnel} className='lg:hidden' onClick={showDecision} />
          <div className={`absolute -right-3 -bottom-36 ${show ? 'flex' : 'hidden'} flex-col shadow-md border text-sm bg-white w-44 lg:text-center py-2`}>
            <div className=' px-2 py-1 my-2 flex items-center lg:hidden  justify-between'>
              <p>Filters</p>
              <Image src={close} onClick={showDecision} className='cursor-pointer'/>
            </div>
            <p className=' px-2 py-1 border-r text-[#757575]  hover:text-black cursor-pointer' onClick={e => pickPeriod('All Time')}>All Time</p>
            <p className=' px-2 py-1 border-r text-[#757575]  hover:text-black cursor-pointer' onClick={e => pickPeriod('This Year')}>This Year</p>
            <p className=' px-2 py-1 text-[#757575]  hover:text-black cursor-pointer' onClick={e => pickPeriod('This Month')}>This Month</p>
            <p className=' px-2 py-1 text-[#757575]  hover:text-black cursor-pointer' onClick={e => pickPeriod('Today')}>Today</p>
          </div> 
        </div>
        
      </div>
      <section>
        {page ? 
          <PaymentLists /> 
          :
          <PaymentDisputes />
        }
      </section>
    </article>
  )
}

export default Payment