import Image from 'next/image'
import React from 'react'
import DecisionDisputes from './decisionDisputes'


const DisputesTableRow = ({currentItems}) => {  

  return (
    <>
      <tbody>
      {currentItems && currentItems.map((cell, i) => (
        <tr className='text-sm font-normal hover:bg-[#F6F6F6]' key={i}>
          <td className='py-8 px-10  '>{cell.id}</td>
          <td className='py-8 px-10 '>{cell.date}</td>
          <td className='py-8 px-10'>{cell.reason}</td>
          <td className='py-8 px-10 '>
            <span className={` p-2 rounded ${cell.status == 'in progress' && 'bg-orange-100 text-orange-700'} ${cell.status == 'resolved' && 'bg-emerald-100 text-emerald-500'} ${cell.status == 'pending' && 'bg-red-100 text-red-500'}`}>{cell.status}</span>
          </td>
          <td className='py-8 px-10 '>
            <DecisionDisputes />
          </td>
        </tr>
      ))}
      </tbody>
    </>
  )
}

export default DisputesTableRow