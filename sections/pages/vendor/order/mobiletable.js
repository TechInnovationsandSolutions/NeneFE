import React from 'react'
import creditCard  from '@/public/assets/svgs/CreditCard.svg'
import Image from 'next/image'
import air from '@/public/assets/svgs/AirplaneTakeoff.svg'


const Mobiletable = ({currentItems}) => {
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
            <p className=''>${row.total}</p>
          </div>
          <hr />
          <div className='flex gap-6 items-center mt-4'>
            <div className='flex gap-4 items-center '>
              <Image src={air} />
              <p className='bg-[#F6F6F6] py-1 px-2 '>{row.shipping}</p>
            </div>
            <div className='flex gap-4 items-center'>
              <Image src={creditCard} />
              <p className='bg-[#F6F6F6] py-1 px-2 '>{row.payment}</p>
            </div>
          </div>
        </div>
      ))}
    
    </>
  )
}

export default Mobiletable