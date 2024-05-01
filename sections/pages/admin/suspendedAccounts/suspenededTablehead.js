import { useState } from "react";

const SuspendedTablehead = ({setSelected, allLists, setAllSelected}) => {
  const [isChecked, setIsChecked] = useState()

  const handleChangle = (event) => {
    setIsChecked(!isChecked)
    if(event.target.checked){
      setSelected(prev => {
        let newSelectedArr = []
        for (let i = 0; i < allLists.length; i++) {
          const element = allLists[i];
          newSelectedArr.push({id:element.email})
        }
        return newSelectedArr
      })
      setAllSelected(true)
    }else{
      setSelected([])
      setAllSelected(false)
    }
  }
    return (  
        <>
      <thead className='w-full'>
        <tr className='text-xs sm:text-sm font-bold text-[#757575] border-b w-full'>
          <th className='text-left py-5 px-4'>
            <div>
            <input type="checkbox" style={{ backgroundColor: isChecked ? 'black' : 'transparent', border:"1px solid gray"}} className='checkedApproved outline-none  focus:ring-0 checked:bg-black border border-black' onChange={handleChangle} />
            </div>
          </th>
          <th className='text-left py-5 px-4'>
            <div className='flex gap-2 min-w-[70px]' >
              <p>NAME</p>
            </div>
          </th>
          <th className='text-left py-5 px-4'>
            <div>
              <p>BUSINESS NAME</p>
            </div>
          </th>
          <th className='text-left py-5 px-4'>
            <div>
              <p>EMAIL ADDRESS</p>
            </div>
          </th>
          
        </tr>
      </thead>
    </>
    );
}

export default SuspendedTablehead;