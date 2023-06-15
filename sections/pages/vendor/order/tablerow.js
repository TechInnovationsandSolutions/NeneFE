import React, { useState } from 'react'


function TableRow({currentItems}) {  

  return (
    <>
      {currentItems && currentItems.map((cell, i) => (
        <tr className='text-sm font-normal hover:bg-[#F6F6F6]' key={i}>
          <td className='py-8 pl-4 pr-14 '>{cell.id}</td>
          <td className='py-8 pl-4 pr-14 '>{cell.date}</td>
          <td className='py-8 pl-4 pr-14 '>{cell.name}</td>
          <td className='py-8 pl-4 pr-14 font-semibold text-[#0D0D0D]'><span className='bg-[#F6F6F6] py-1 px-3 hover:bg-white'>{cell.shipping}</span></td>
          <td className='py-8 pl-4 pr-14 font-semibold text-[#0D0D0D]'><span className='bg-[#F6F6F6] py-1 px-3 hover:bg-white'>{cell.payment}</span></td>
          <td className='py-8 pl-4 pr-14 '>{cell.total}</td>
        </tr>
      ))}
    </>
  )
}


export default TableRow