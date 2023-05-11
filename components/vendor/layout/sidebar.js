import Image from 'next/image'
import React, { useState } from 'react'
import QrCode from '../../../public/assets/svgs/QrCode.svg'
import CreditCard from '../../../public/assets/svgs/CreditCard.svg'
import shop from '../../../public/assets/svgs/ShoppingCart.svg'
import Slideshow from '../../../public/assets/svgs/Slideshow.svg'
import SignOut from '../../../public/assets/svgs/SignOut.svg'
import settings from '../../../public/assets/svgs/settings.svg'
import dress2 from '../../../public/assets/images/dress2.webp'
import bell from '../../../public/assets/svgs/bell.svg'
import close from '../../../public/assets/svgs/close icon.svg'



const List = [
  {id:1, page:'Product', icon: QrCode, route:'/product'},
  {id:2, page:'Orders', icon: shop, route:'/orders'},
  {id:3, page:'Payments', icon: CreditCard, route:'/payments'},
  {id:4, page:'Settings', icon: settings, route:'/settings'},
  {id:5, page:'Enable Ads', icon: Slideshow, route:'/ads'},
  {id:6, page:'Log out', icon: SignOut, route:'/log-out'},
]


const Sidebar = ({openBar, setOpenBar}) => {
  
  const [current , setCurrent] = useState(List[0].page)
  const onsetCurrent = (page) => setCurrent(page)
  const closeBar = () => setOpenBar(false)

  return (
    <div className={`h-screen overflow-y-auto scrollbar-hide lg:pt-[100px] min-w-[288px] fixed lg:border-r border-[#D7D7D7] ${openBar ? 'block' : 'hidden'} ${openBar ? 'z-30' : 'z-0'} lg:block bg-white`}>
      <div className='p-6 flex justify-end pb-0 lg:hidden cursor-pointer' onClick={closeBar}>
        <Image src={close} />  
      </div>
      <div className='py-6 pr-0 flex flex-col gap-10'  >
        {List.map((list, i) => (
          <div
           className={` p-3 px-11  flex gap-8 items-center hover:bg-black/[0.05] ${current == list.page && 'lg:border-r border-black text-black '} text-[#757575] cursor-pointer text-sm font-medium`} 
           key={i} 
           onClick={e => onsetCurrent(list.page)}
          >

            <Image src={list.icon} color='red' />
            <p>{list.page}</p>

          </div>
        ))}
      </div>
      <div className='flex flex-col gap-7 p-8 border-t border-[#D7D7D7] lg:hidden '>
        <div className='flex items-center gap-3  cursor-pointer'>
          <Image src={bell} />
          <p className='font-medium text-base'>Notifications</p>
        </div>
        <div className='flex gap-3 items-center'>
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
  )
}

export default Sidebar