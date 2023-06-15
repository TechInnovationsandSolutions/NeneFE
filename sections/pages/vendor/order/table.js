import React, { useEffect, useState } from 'react'
import PaginateTable, { list } from './pagination'
import Tablehead from './tablehead'
import Tablerow from './tablerow'

const Table = () => {
  const [tableData, setTableData] = useState(list)
  const [currentItems, setCurrentItems] = useState(null);
  


  return (
    <>
      <div className='px-6'>
        <table className='w-full'>
        <Tablehead setTableData={setTableData} tableData={tableData} />
        <Tablerow currentItems={currentItems} />
      </table>
      </div>
      <PaginateTable setCurrentItems={setCurrentItems} tableData={tableData} />
    </>
  )
}

export default Table