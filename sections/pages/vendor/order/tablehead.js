import Image from 'next/image'
import React from 'react'
import arrowdownup from '../../../../public/assets/svgs/ArrowsDownUp.svg'
const Tablehead = ({tableData, setTableData}) => {

  const sortDate = (tableData) => {
    let newData = [...tableData]
    newData?.sort((a,b) => new Date(a.date) - new Date(b.date))
    setTableData(newData)
  }
  const sortName = (tableData) => {
    let newData = [...tableData]
    newData?.sort((a,b) => a.name > b.name ? 1 : -1)
    setTableData(newData)
  }
  const sortPrice = (tableData) => {
    let newData = [...tableData]
    newData?.sort((a,b) => a.total - b.total)
    setTableData(newData)
  }

  
  return (
    <tr className='text-xs font-bold text-[#757575] border-b '>
      <th className='text-left py-5 px-4'>
        <div>
          <p>ORDER NUMBER</p>
        </div>
      </th>
      <th className='text-left py-5 px-4'>
        <div className='flex gap-2' >
          <p>DATE</p>
          <Image src={arrowdownup} width={15} onClick={e => sortDate(tableData)} />
        </div>
      </th>
      <th className='text-left py-5 px-4'>
        <div className='flex gap-2'>
          <p>CUSTOMER NAME</p>
          <Image src={arrowdownup} width={15} onClick={e => sortName(tableData)} />
        </div>
      </th>
      <th className='text-left py-5 px-4'>
        <div>
          <p>SHIPPING STATUS</p>
        </div>
      </th>
      <th className='text-left py-5 px-4'>
        <div>
          <p>PAYMENT STATUS</p>
        </div>
      </th>
      <th className='text-left py-5 px-4'>
        <div className='flex gap-2'>
          <p>ORDER TOTAL<span>($)</span></p>
          <Image src={arrowdownup} width={15} onClick={e => sortPrice(tableData)} />
        </div>
      </th>
    </tr>
  )
}

export default Tablehead