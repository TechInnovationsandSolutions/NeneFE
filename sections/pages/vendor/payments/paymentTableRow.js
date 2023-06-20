import React from 'react'

const PaymentTableRow = ({currentItems}) => {  

  return (
    <>
      {currentItems && currentItems.map((cell, i) => (
        <tr className='text-sm font-normal hover:bg-[#F6F6F6]' key={i}>
          <td className='py-8 px-10  '>{cell.id}</td>
          <td className='py-8 px-10 '>{cell.name}</td>
          <td className='py-8 px-10 '>{cell.date}</td>
          <td className='py-8 px-10'>{cell.payment}</td>
          <td className='py-8 px-10 '>{cell.total}</td>
        </tr>
      ))}
    </>
  )
}


export default PaymentTableRow