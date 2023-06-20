import Image from 'next/image'
import React from 'react'
import arrowdownup from '../../../../public/assets/svgs/ArrowsDownUp.svg'

const PaymentTableHead = ({tableData, setTableData}) => {

  const sortName = (tableData) => {
    let newData = [...tableData]
    newData?.sort((a,b) => a.name > b.name ? 1 : -1)
    setTableData(newData)
  }
  const sortMethod = (tableData) => {
    let newData = [...tableData]
    newData?.sort((a,b) => a.payment - b.payment ? 1 : -1)
    setTableData(newData)
  }

  
  return (
    <tr className='text-xs font-bold text-[#757575] border-b '>
      <th className='text-left py-5 px-10'>
        <div>
          <p>ORDER NUMBER</p>
        </div>
      </th>
      <th className='text-left py-5 px-10'>
        <div className='flex gap-2'>
          <p>CUSTOMER NAME</p>
          <Image src={arrowdownup} width={15} onClick={e => sortName(tableData)} />
        </div>
      </th>
      <th className='text-left py-5 px-10'>
        <div>
          <p>PAYMENT DATE</p>
        </div>
      </th>
      <th className='text-left py-5 px-10'>
        <div className='flex gap-2'>
          <p>PAYMENT METHOD<span>($)</span></p>
          <Image src={arrowdownup} width={15} onClick={e => sortMethod(tableData)} />
        </div>
      </th>
      <th className='text-left py-5 px-10'>
        <div>
          <p>AMOUNT</p>
        </div>
      </th>
    </tr>
  )
}

export default PaymentTableHead