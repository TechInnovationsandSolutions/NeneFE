import Image from 'next/image'
import React, { useState } from 'react'
import threeDot from '@/public/assets/svgs/threedots.svg'
import close from '@/public/assets/svgs/close icon.svg'

const MobileAdminAction = ({optionsArr}) => {
  const [show, setShow] = useState(false)
  const showDecision = () => setShow(prev => !prev)

  const handleClick = (value) => {
    if(value == "approveAccount"){
      //do somethine
    }else if(value == "viewDetails"){

    }else{

    }
  }

  return (
    <div className='relative' >
      <Image src={threeDot} alt='' onClick={showDecision} className='cursor-pointer' />
      <div className={`absolute -right-3 top-10 ${show ? 'flex' : 'hidden'} flex-col lg:flex-row shadow-md border text-sm bg-white xl:-right-20 xl:bottom-0 w-44`}>
      <p className=' px-2 py-1  my-2 lg:hidden flex  items-center justify-between text-base'>Take Action <span><Image  alt='' src={close} onClick={showDecision} className='cursor-pointer'/></span></p>
        {optionsArr.map((option, i) => (
          <p className=' px-2 py-1 border-r text-[#757575] lg:text-black hover:text-black cursor-pointer' key={i} onClick={() => handleClick(option)}>{option}</p>
        ))}
      </div>
    </div>
  )
}

export default MobileAdminAction