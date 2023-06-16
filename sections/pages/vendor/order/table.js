import React, { useEffect, useState } from 'react'
import Mobiletable from './mobiletable'
import PaginateTable, { list } from './pagination'
import Tablehead from './tablehead'
import Tablerow from './tablerow'

const Table = () => {
  const [tableData, setTableData] = useState(list)
  const [currentItems, setCurrentItems] = useState(null);
  


  return (
    <>
      <div className='px-6'>
        <table className='w-full hidden lg:block'>
        <Tablehead setTableData={setTableData} tableData={tableData} />
        <Tablerow currentItems={currentItems} />
        </table>
      </div>
      <div className='px-6 grid grid-cols-1 gap-4 lg:hidden mb-6'>
        <Mobiletable currentItems={currentItems} />
      </div>
      <PaginateTable setCurrentItems={setCurrentItems} tableData={tableData} />
    </>
  )
}

export default Table