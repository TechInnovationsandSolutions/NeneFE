import PaginateTable, { list } from '@/sections/pages/vendor/order/pagination'
import Table from '@/sections/pages/vendor/order/table'
import Image from 'next/image'
import React from 'react'
import chevronDown from '../../../public/assets/svgs/chevronDown.svg'

const Order = () => {
  return (
    <article>
      <div className='flex justify-between items-center mt-8 mb-10 px-6'>
        <h2>List of Orders <span>({list.length})</span></h2>
        <div className='py-3 px-5 flex border border-[#AAAAAA] gap-3'>
          <p>All time</p>
          <Image src={chevronDown} />
        </div>
      </div>
      <section>
        <Table />
      </section>
    </article>
  )
}

export default Order