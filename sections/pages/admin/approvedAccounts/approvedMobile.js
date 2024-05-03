import React, { useState } from 'react'
import MobileAdminAction from '../mobileModal'

const ApproveMobile = ({currentItems}) => {
  return (
    <>
      {currentItems && currentItems.map((row,i) => (
        <div className='border p-4 shadow' key={i}>
          <div className='flex justify-between items-center  mt-2 mb-4'>
            <h3 className='font-semibold'>{row.name}</h3>
            <MobileAdminAction optionsArr= {actionArr}  />
          </div>
          <div className='flex justify-between items-center text-[#757575] text-sm my-2'>
            <p>{row.email}</p>
            <p>{row.date}</p>
          </div>
          <hr />
          <div className=' mt-4 flex gap-6'>
            <div className='flex gap-4 flex-col text-gray-500 '>
              <span>{row.fulfilledOrders}</span>
              <p>Orders fulfilled</p>
            </div>
            <div className='flex gap-4 flex-col text-gray-500'>
              <span>{row.failedOrders}</span>
              <p>Failed orders</p>
            </div>
          </div>
        </div>
      ))}
    
    </>
  )
}
export default ApproveMobile


 const actionArr = ['Suspend Account','View Account Details']