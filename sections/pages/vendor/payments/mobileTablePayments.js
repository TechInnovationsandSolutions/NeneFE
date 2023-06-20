import React from 'react'
import creditCard  from '@/public/assets/svgs/CreditCard.svg'
import Image from 'next/image'

const MobileTablePayments = ({currentItems}) => {
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
          <div className=' mt-4'>
            <div className='flex gap-4 items-center'>
              <Image src={creditCard} alt={`payment ${i}`} />
              <p>{row.payment}</p>
            </div>
          </div>
        </div>
      ))}
    
    </>
  )
}
export default MobileTablePayments