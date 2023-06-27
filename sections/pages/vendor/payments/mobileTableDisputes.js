import React from 'react'
import threeDot from '@/public/assets/svgs/DotsThreeOutlineVertical.svg'
import Image from 'next/image'
import DecisionDisputes from './decisionDisputes'


const MobileTableDisputes= ({currentItems}) => {
  return (
    <>
      {currentItems && currentItems.map((row,i) => (
        <div className='border p-4 shadow' key={i}>
          <div className='flex justify-between items-center text-[#757575] text-sm my-2'>
            <p>o3728834788</p>
            <p>{row.date}</p>
          </div>
          <div className='flex justify-between items-center  mt-2 mb-4'>
            <h3 className='font-semibold'>{row.name}</h3>
            <DecisionDisputes />
          </div>
          <hr />
          <div className=' mt-4 flex justify-between items-center'>
            <div className='flex gap-4 flex-col '>
              <p className='text-[#757575] text-sm'>REASON FOR DISPUTE</p>
              <p>{row.reason}</p>
            </div>
            <p className={` p-2 rounded w-fit ${row.status == 'in progress' && 'bg-orange-100 text-orange-700'} ${row.status == 'resolved' && 'bg-emerald-100 text-emerald-500'} ${row.status == 'pending' && 'bg-red-100 text-red-500'}`}>{row.status}</p>
          </div>
        </div>
      ))}
    
    </>
  )
}

export default MobileTableDisputes