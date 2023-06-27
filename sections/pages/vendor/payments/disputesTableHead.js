import Image from 'next/image'
import React from 'react'
import arrowdownup from '../../../../public/assets/svgs/ArrowsDownUp.svg'

const DisputesTableHead = ({tableData, setTableData}) => {

  const sortDate = (tableData) => {
    let newData = [...tableData]
    newData?.sort((a,b) => new Date(a.date) - new Date(b.date))
    setTableData(newData)
  }


  return (
    <>
      <thead>
        <tr className='text-xs font-bold text-[#757575] border-b '>
          <th className='text-left py-5 px-10'>
            <div>
              <p>ORDER NUMBER</p>
            </div>
          </th>
          <th className='text-left py-5 px-10'>
            <div className='flex gap-2 min-w-[70px]'>
              <p>DATE RAISED</p>
              <Image src={arrowdownup} width={15} onClick={e => sortDate(tableData)} />
            </div>
          </th>
          <th className='text-left py-5 px-10'>
            <div>
              <p>REASON FOR DISPUTE</p>
            </div>
          </th>
          <th className='text-left py-5 min-w-[170px] px-10'>
            <div className=''>
              <p>STATUS</p>
            </div>
          </th>
          <th className='text-left py-5 px-10'>
            <div>
              <p>TAKE ACTION</p>
            </div>
          </th>
        </tr>
      </thead>
    </>
  )
}

export default DisputesTableHead