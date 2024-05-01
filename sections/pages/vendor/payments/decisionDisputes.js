import Image from 'next/image'
import React, { useState } from 'react'
import threeDot from '@/public/assets/svgs/threedots.svg'
import close from '@/public/assets/svgs/close icon.svg'

const DecisionDisputes = () => {
  const [show, setShow] = useState(false)
  const showDecision = () => setShow(prev => !prev)

  return (
    <div className='relative' >
      <Image src={threeDot} onClick={showDecision} className='cursor-pointer' />
      <div className={`absolute -right-3 -bottom-10 ${show ? 'flex' : 'hidden'} flex-col lg:flex-row shadow-md border text-sm bg-white xl:-right-20 xl:bottom-0`}>
      <p className=' px-2 py-1 border-r my-2 lg:hidden flex  w-36 items-center justify-between text-base'>Take Action <span><Image src={close} onClick={showDecision} className='cursor-pointer'/></span></p>
        <p className=' px-2 py-1 border-r text-[#757575] lg:text-black hover:text-black cursor-pointer'>Resolve</p>
        <p className=' px-2 py-1 text-[#757575] lg:text-black hover:text-black cursor-pointer'>Escalate</p>
      </div>
    </div>
  )
}

export default DecisionDisputes