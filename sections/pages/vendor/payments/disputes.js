import React from 'react'
import { useState } from 'react';
import DisputesTableHead from './disputesTableHead';
import DisputesTableRow from './disputesTableRow';
import MobileTableDisputes from './mobileTableDisputes';
import Paginate from '@/components/paginate/pagination';

let list = [
  {id:'73283DMD', date:'10-jan-2022', reason:'wrong pice tag Doe',status:'resolved', action:'', name:'john emeka'},
  {id:'1', date:'2-jan-2022', reason:'wrong pice tagr Doe',status:'resolved', action:'', name:'john emeka'},
  {id:'2', date:'4-jan-2022', reason:'wrong pice tag Doe',status:'in progress', action:'', name:'john emeka'},
  {id:'3', date:'5-jan-2022', reason:'wrong pice tag Doe',status:'pending', action:'', name:'john emeka'},
  {id:'4', date:'3-jan-2022', reason:'wrong pice tag Doe',status:'resolved', action:'', name:'john emeka'},
  {id:'5', date:'7-jan-2022', reason:'wrong pice tag Doe',status:'resolved', action:'', name:'john emeka'},
  {id:'6', date:'1-jan-2022', reason:'wrong pice tage Doe',status:'resolved', action:'', name:'john emeka'},
  {id:'7', date:'1-jan-2022', reason:'wrong pice tag Doe',status:'in progress', action:'', name:'john emeka'},
  {id:'8', date:'1-jan-2022', reason:'wrong pice tag Doe',status:'in progress', action:'', name:'john emeka'},
  {id:'9', date:'1-jan-2022', reason:'wrong pice tag Doe',status:'in progress', action:'', name:'john emeka'},
  {id:'10', date:'1-jan-2022', reason:'wrong pice tag Doe',status:'in progress', action:'', name:'john emeka'},
  {id:'11', date:'1-jan-2022', reason:'wrong pice tag Doe',status:'in progress', action:'', name:'john emeka'},
  {id:'12', date:'1-jan-2022', reason:'wrong pice tag Doe',status:'in progress', action:'', name:'john emeka'},
  {id:'13', date:'1-jan-2022', reason:'wrong pice tag Doe',status:'resolved', action:'', name:'john emeka'},
  {id:'14', date:'1-jan-2022', reason:'wrong pice tag Doe',status:'resolved', action:'', name:'john emeka'},
  {id:'15', date:'1-jan-2022', reason:'wrong pice tag Doe',status:'resolved', action:'', name:'john emeka'},
  {id:'16', date:'1-jan-2022', reason:'wrong pice tag Doe',status:'resolved', action:'', name:'john emeka'},
  {id:'17', date:'1-jan-2022', reason:'wrong pice tag Doe',status:'resolved', action:'', name:'john emeka'},
  {id:'18', date:'1-jan-2022', reason:'wrong pice tag Doe',status:'pending', action:'', name:'john emeka'},
  {id:'19', date:'1-jan-2022', reason:'wrong pice tag Doe',status:'pending', action:'', name:'john emeka'},
  {id:'20', date:'1-jan-2022', reason:'wrong pice tag Doe',status:'pending', action:'', name:'john emeka'},
  {id:'21', date:'1-jan-2022', reason:'wrong pice tag Doe',status:'pending', action:'', name:'john emeka'},
  {id:'22', date:'1-jan-2022', reason:'wrong pice tag Doe',status:'pending', action:'', name:'john emeka'},
  {id:'23', date:'1-jan-2022', reason:'wrong pice tag Doe',status:'pending', action:'', name:'john emeka'},
  {id:'24', date:'1-jan-2022', reason:'wrong pice tag Doe',status:'pending', action:'', name:'john emeka'},
  {id:'25', date:'1-jan-2022', reason:'wrong pice tag Doe',status:'pending', action:'', name:'john emeka'},
  {id:'26', date:'1-jan-2022', reason:'wrong pice tag Doe',status:'pending', action:'', name:'john emeka'},
  {id:'17', date:'1-jan-2022', reason:'wrong pice tag Doe',status:'pending', action:'', name:'john emeka'},
  {id:'28', date:'1-jan-2022', reason:'wrong pice tag Doe',status:'resolved', action:'', name:'john emeka'},
  {id:'29', date:'1-jan-2022', reason:'wrong pice tag Doe',status:'resolved', action:'', name:'john emeka'},
  {id:'30', date:'1-jan-2022', reason:'wrong pice tag Doe',status:'resolved', action:'', name:'john emeka'},
  {id:'31', date:'1-jan-2022', reason:'wrong pice tag Doe',status:'resolved', action:'', name:'john emeka'},
  {id:'32', date:'1-jan-2022', reason:'wrong pice tag Doe',status:'resolved', action:'', name:'john emeka'},
  {id:'33', date:'1-jan-2022', reason:'wrong pice tag Doe',status:'resolved', action:'', name:'john emeka'},
  
]

const PaymentDisputes = () => {
  const [tableData, setTableData] = useState(list)
  const [currentItems, setCurrentItems] = useState(null);



  return (
    <>
      <div className='px-6'>
        <table className='w-full hidden lg:block'>
        <DisputesTableHead setTableData={setTableData} tableData={tableData} />
        <DisputesTableRow currentItems={currentItems} />
        </table>
      </div>
      <div className='px-6 grid grid-cols-1 gap-4 lg:hidden my-6'>
        <MobileTableDisputes currentItems={currentItems} />
      </div>
      <Paginate setCurrentItems={setCurrentItems} tableData={tableData} />
    </>
  )
}

export default PaymentDisputes