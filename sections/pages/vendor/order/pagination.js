import Image from "next/image";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import chevronDown from '../../../../public/assets/svgs/chevronDown.svg'

export let list = [
  {id:'73283DMD', date:'10-jan-2022', name:'John Doe', shipping:'Delivered',payment:'Paid', total:788},
  {id:'1', date:'2-jan-2022', name:'Peter Doe', shipping:'Delivered',payment:'Paid', total:788},
  {id:'2', date:'4-jan-2022', name:'John Doe', shipping:'Delivered',payment:'Paid', total:788},
  {id:'3', date:'5-jan-2022', name:'John Doe', shipping:'Delivered',payment:'Paid', total:788},
  {id:'4', date:'3-jan-2022', name:'John Doe', shipping:'Delivered',payment:'Paid', total:788},
  {id:'5', date:'7-jan-2022', name:'John Doe', shipping:'Delivered',payment:'Paid', total:788},
  {id:'6', date:'1-jan-2022', name:'Andre Doe', shipping:'Delivered',payment:'Paid', total:788},
  {id:'7', date:'1-jan-2022', name:'John Doe', shipping:'Delivered',payment:'Paid', total:788},
  {id:'8', date:'1-jan-2022', name:'John Doe', shipping:'Delivered',payment:'Paid', total:788},
  {id:'9', date:'1-jan-2022', name:'John Doe', shipping:'Delivered',payment:'Paid', total:748},
  {id:'10', date:'1-jan-2022', name:'John Doe', shipping:'Delivered',payment:'Paid', total:788},
  {id:'11', date:'1-jan-2022', name:'John Doe', shipping:'Delivered',payment:'Paid', total:778},
  {id:'12', date:'1-jan-2022', name:'John Doe', shipping:'Delivered',payment:'Paid', total:588},
  {id:'13', date:'1-jan-2022', name:'John Doe', shipping:'Delivered',payment:'Paid', total:288},
  {id:'14', date:'1-jan-2022', name:'John Doe', shipping:'Delivered',payment:'Paid', total:688},
  {id:'15', date:'1-jan-2022', name:'John Doe', shipping:'Delivered',payment:'Paid', total:188},
  {id:'16', date:'1-jan-2022', name:'Beth Doe', shipping:'Delivered',payment:'Paid', total:488},
  {id:'17', date:'1-jan-2022', name:'John Doe', shipping:'Delivered',payment:'Paid', total:788},
  {id:'18', date:'1-jan-2022', name:'John Doe', shipping:'Delivered',payment:'Paid', total:788},
  {id:'19', date:'1-jan-2022', name:'John Doe', shipping:'Delivered',payment:'Paid', total:788},
  {id:'20', date:'1-jan-2022', name:'John Doe', shipping:'Delivered',payment:'Paid', total:788},
  {id:'21', date:'1-jan-2022', name:'John Doe', shipping:'Delivered',payment:'Paid', total:788},
  {id:'22', date:'1-jan-2022', name:'John Doe', shipping:'Delivered',payment:'Paid', total:788},
  {id:'23', date:'1-jan-2022', name:'John Doe', shipping:'Delivered',payment:'Paid', total:788},
  {id:'24', date:'1-jan-2022', name:'John Doe', shipping:'Delivered',payment:'Paid', total:788},
  {id:'25', date:'1-jan-2022', name:'John Doe', shipping:'Delivered',payment:'Paid', total:788},
  {id:'26', date:'1-jan-2022', name:'John Doe', shipping:'Delivered',payment:'Paid', total:788},
  {id:'17', date:'1-jan-2022', name:'John Doe', shipping:'Delivered',payment:'Paid', total:788},
  {id:'28', date:'1-jan-2022', name:'John Doe', shipping:'Delivered',payment:'Paid', total:788},
  {id:'29', date:'1-jan-2022', name:'John Doe', shipping:'Delivered',payment:'Paid', total:788},
  {id:'30', date:'1-jan-2022', name:'John Doe', shipping:'Delivered',payment:'Paid', total:788},
  {id:'31', date:'1-jan-2022', name:'John Doe', shipping:'Delivered',payment:'Paid', total:788},
  {id:'32', date:'1-jan-2022', name:'John Doe', shipping:'Delivered',payment:'Paid', total:788},
  {id:'33', date:'1-jan-2022', name:'John Doe', shipping:'Delivered',payment:'Paid', total:788},
  
]

export default function PaginateTable({setCurrentItems, tableData}) {
  // const {tableData} = usePaginate()
  // We start with an empty list of items.
  
  const[backDrop, setBackDrop] = useState(false)
 const[PerPage, setPerPage ] = useState(5)
 // We start with an empty list of items.
 const [pageCount, setPageCount] = useState(0);
 // Here we use item offsets; we could also use page offsets
 // following the API or data you're working with.
 const [itemOffset, setItemOffset] = useState(0);

 useEffect(() => {
   // Fetch items from another resources.
   const endOffset = Number(itemOffset) + Number(PerPage);
   console.log(`Loading items from ${itemOffset} to ${Number(itemOffset) + Number(PerPage)}`);
   setCurrentItems(tableData.slice(itemOffset, endOffset));
   setPageCount(Math.ceil(tableData.length / PerPage));
 }, [itemOffset, PerPage,tableData]);

 // Invoke when user click to request another page.
 const handlePageClick = (event) => {
   const newOffset = event.selected * PerPage ;
   console.log(`User requested page number ${event.selected}, which is offset ${newOffset} `);
   setItemOffset(newOffset);
 };

  const changePageNumber = (e) => {
    setPerPage(e.target.value)
    setBackDrop(false)
    console.log(e.target.value);
  }


  return (
    <div className='flex justify-between border-y py-5 px-6 sm:items-center flex-col sm:flex-row text-sm md:text-base gap-2'>
      <div className='flex gap-2 sm:gap-4 sm:items-center flex-col sm:flex-row'>
        <div className="flex items-center gap-3">
            <span>show</span> 
            <span className={`${backDrop ? 'block' : 'hidden'} fixed inset-0  bg-transparent z-10`} onClick={e => setBackDrop(false)}></span>
            <span className='relative z-20'>
              
              <div className='w-10 flex justify-between border border-black p-1 ' onClick={e => setBackDrop(true)}>
                <p>{PerPage}</p>
                <Image src={chevronDown} />
              </div>
              <ul className={`${backDrop ? 'block' : 'hidden'} bg-white border border-black w-10 text-center absolute -top-[60px] md:-top-[74px]`}>
                <li value={5} onClick={changePageNumber} className='cursor-pointer'>5</li>
                <li value={10} onClick={changePageNumber} className='cursor-pointer'>10</li>
                <li value={15} onClick={changePageNumber} className='cursor-pointer'>15</li>
              </ul>
            </span>
            <span>lines</span> 
        </div>
        
        <p>showing {itemOffset+ 1} of {itemOffset + PerPage} of {list.length} request</p>
      </div>
      <ReactPaginate
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel='<'
        pageClassName="text-xl"
        pageLinkClassName="page-link"
        previousClassName="text-xl"
        previousLinkClassName="page-link"
        nextClassName=" text-xl"
        nextLinkClassName=""
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="flex gap-4"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
    </div>
    
  )
}
