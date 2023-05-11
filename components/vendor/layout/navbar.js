import Image from 'next/image'
import React from 'react'
import search from '../../../public/assets/svgs/search.svg'
import bell from '../../../public/assets/svgs/bell.svg'
import dress2 from '../../../public/assets/images/dress2.webp'
import handburger from '../../../public/assets/svgs/List.svg'


const Navbar = ({setOpenBar}) => {
  return (
    <nav className='fixed lg:z-40 lg:h-[100px] lg:border-b-[0.5px] border-[#D7D7D7] flex w-full bg-white'>
      <div className='lg:min-w-[288px] h-full lg:border-r px-5 py-10 lg:p-9 font-alegreya font-normal text-2xl'>
        Nene
      </div>
      <div className='lg:flex items-center justify-between w-full p-9 hidden'>
        <div>
          <div className='h-10 xl:w-[400px]  flex px-5 py-2 bg-[#F2F2F2] rounded-sm'>
            <input className='w-full bg-inherit h-full outline-none' placeholder='search . . .'/>
            <Image src={search} />     
          </div>
        </div>
        <div className='flex gap-7'>
          <div className='flex justify-between items-center gap-7 '>
            <Image src={bell} />
            <span className='h-7 border-r border-black'></span>
          </div>
          <div className='flex gap-3'>
            <div className='w-11 h-11 rounded-full overflow-hidden'>
              <Image src={dress2} />
            </div>
            <div>
              <p className='font-medium text-base'>Namegoes here</p>
              <p className='font-normal text-base text-[#757575]'>Name@emailadd.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className='flex lg:hidden ml-auto p-5 gap-10 items-center'>
        <Image src={handburger} onClick={e => setOpenBar(prev => !prev)} />
        <Image src={search} />
      </div>
    </nav>
  )
}

export default Navbar