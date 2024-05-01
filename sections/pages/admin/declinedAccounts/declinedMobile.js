import React, { useState } from 'react'
import MobileAdminAction from '../mobileModal'

const DeclinedMobile = ({currentItems}) => {
  return (
    <>
      {currentItems && currentItems.map((row,i) => (
        <div className='border p-4 shadow' key={i}>
          <div className='flex justify-between items-center  mt-2 mb-4'>
            <h3 className='font-semibold'>{row.fullName}</h3>
            <MobileAdminAction optionsArr= {actionArr}  />
          </div>
          <div className='flex justify-between items-center text-[#757575] text-sm my-2'>
            <p>{row.email}</p>
          </div>
          <hr />
          <div className=' mt-4'>
            <div className='flex gap-4 justify-between text-gray-500 '>
              <p>Applied</p>
              <p>{row.date}</p>
            </div>
          </div>
        </div>
      ))}
    
    </>
  )
}
export default DeclinedMobile


 const actionArr = ['Delete  Account','View Account Details','View Account Details']