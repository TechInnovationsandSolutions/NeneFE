import React, { useEffect, useState } from 'react';


const ChecboxPendingbox = ({ setSelected,allSelected,currentItems,cell}) => {
  const [isChecked, setIsChecked] = useState()

  useEffect(() => {
      const list = document.querySelectorAll(".checkedApproved")
      list.forEach(box => {
        if(allSelected){
          box.checked = true 
          setIsChecked(true)
        }else{
          box.checked = false
          setIsChecked(false)
        }
      })
  }, [allSelected, currentItems])
  

  const handleChangle = (event) => {
    setIsChecked(!isChecked)
    console.log(event.target.checked, cell);
    if(event.target.checked){
      setSelected(prev => [...prev, {id: cell.email}])
    }else{
      setSelected(prev => {
        let leftList = prev.filter(e => e.id !== cell.email)
        console.log(leftList);
        return leftList
      })
    }
  }

  return (
    <td className='py-8 px-4  '>
      <input type="checkbox" style={{ backgroundColor: isChecked ? 'black' : 'transparent', border:"1px solid gray"}} className='checkedApproved outline-none  focus:ring-0 checked:bg-black border border-black' onChange={handleChangle} />
    </td>
  )
}

export default ChecboxPendingbox