import React, { useState } from 'react'
// import MobileTablePayments from '../mobileTablePayments'
import AccountTableHead from './activeTablehead'
import AccountTableRow from './activeTablerow'
import Paginate from '@/components/paginate/pagination'

let list = [
  {id:'73283DMD', date:'10-jan-2022', name:'John Doe',payment:'Credit Card', total:788},
  {id:'1', date:'2-jan-2022', name:'Peter Doe',payment:'Credit Card', total:788},
  {id:'2', date:'4-jan-2022', name:'John Doe',payment:'Credit Card', total:788},
  {id:'3', date:'5-jan-2022', name:'John Doe',payment:'Credit Card', total:788},
  {id:'4', date:'3-jan-2022', name:'John Doe',payment:'Credit Card', total:788},
  {id:'5', date:'7-jan-2022', name:'John Doe',payment:'Credit Card', total:788},
  {id:'6', date:'1-jan-2022', name:'Andre Doe',payment:'Credit Card', total:788},
  {id:'7', date:'1-jan-2022', name:'John Doe',payment:'Credit Card', total:788},
  {id:'8', date:'1-jan-2022', name:'John Doe',payment:'Credit Card', total:788},
  {id:'9', date:'1-jan-2022', name:'John Doe',payment:'Credit Card', total:748},
  {id:'10', date:'1-jan-2022', name:'John Doe',payment:'Credit Card', total:788},
  {id:'11', date:'1-jan-2022', name:'John Doe',payment:'Credit Card', total:778},
  {id:'12', date:'1-jan-2022', name:'John Doe',payment:'Credit Card', total:588},
  {id:'13', date:'1-jan-2022', name:'John Doe',payment:'Credit Card', total:288},
  {id:'14', date:'1-jan-2022', name:'John Doe',payment:'Credit Card', total:688},
  {id:'15', date:'1-jan-2022', name:'John Doe',payment:'Credit Card', total:188},
  {id:'16', date:'1-jan-2022', name:'Beth Doe',payment:'Credit Card', total:488},
  {id:'17', date:'1-jan-2022', name:'John Doe',payment:'Credit Card', total:788},
  {id:'18', date:'1-jan-2022', name:'John Doe',payment:'Credit Card', total:788},
  {id:'19', date:'1-jan-2022', name:'John Doe',payment:'Credit Card', total:788},
  {id:'20', date:'1-jan-2022', name:'John Doe',payment:'Credit Card', total:788},
  {id:'21', date:'1-jan-2022', name:'John Doe',payment:'Credit Card', total:788},
  {id:'22', date:'1-jan-2022', name:'John Doe',payment:'Credit Card', total:788},
  {id:'23', date:'1-jan-2022', name:'John Doe',payment:'Credit Card', total:788},
  {id:'24', date:'1-jan-2022', name:'John Doe',payment:'Credit Card', total:788},
  {id:'25', date:'1-jan-2022', name:'John Doe',payment:'Credit Card', total:788},
  {id:'26', date:'1-jan-2022', name:'John Doe',payment:'Credit Card', total:788},
  {id:'17', date:'1-jan-2022', name:'John Doe',payment:'Credit Card', total:788},
  {id:'28', date:'1-jan-2022', name:'John Doe',payment:'Credit Card', total:788},
  {id:'29', date:'1-jan-2022', name:'John Doe',payment:'Credit Card', total:788},
  {id:'30', date:'1-jan-2022', name:'John Doe',payment:'Credit Card', total:788},
  {id:'31', date:'1-jan-2022', name:'John Doe',payment:'Credit Card', total:788},
  {id:'32', date:'1-jan-2022', name:'John Doe',payment:'Credit Card', total:788},
  {id:'33', date:'1-jan-2022', name:'John Doe',payment:'Credit Card', total:788},
  
]

const ActiveAcoountList = () => {
  const [tableData, setTableData] = useState(list)
  const [currentItems, setCurrentItems] = useState(null);



  return (
    <>
      <div className='px-6'>
        <table className='w-full hidden lg:block'>
        <AccountTableHead setTableData={setTableData} tableData={tableData} />
        <AccountTableRow currentItems={currentItems} />
        </table>
      </div>
      <div className='px-6 grid grid-cols-1 gap-4 lg:hidden my-6'>
        {/* <MobileTablePayments currentItems={currentItems} /> */}
      </div>
      <Paginate setCurrentItems={setCurrentItems} tableData={tableData} />
    </>
  )
}

export default ActiveAcoountList