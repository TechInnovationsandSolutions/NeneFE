import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import dress2 from '../../../public/assets/images/dress2.webp'
import bell from '../../../public/assets/svgs/bell.svg'
import close from '../../../public/assets/svgs/close icon.svg'
import { ShoppingCart } from '@/public/assets/svgs/js/ShoppingCart'
import { CreditCard } from '@/public/assets/svgs/js/CreditCard'
import { SignOut } from '@/public/assets/svgs/js/SignOut'
import { Settings } from '@/public/assets/svgs/js/Settings'
import { Slideshow } from '@/public/assets/svgs/js/Slideshow'
import { QrCode } from '../../../public/assets/svgs/js/QrCode.js'
import Link from 'next/link'
import { useRouter } from 'next/router'


const List = [
  {id:1, page:'Product', icon: QrCode, route:'product'},
  {id:2, page:'Orders', icon: ShoppingCart, route:'orders'},
  {id:3, page:'Payments', icon: CreditCard, route:'payments'},
  {id:4, page:'Settings', icon: Settings, route:'settings'},
  {id:5, page:'Enable Ads', icon: Slideshow, route:'ads'},
  {id:6, page:'Log out', icon: SignOut, route:'products'},
]


const Sidebar = ({openBar, setOpenBar}) => {

  const {pathname} = useRouter()
  let path = pathname.split('/')

  useEffect(() => {
    setCurrent(path[2])
  }, [path])


  const [current , setCurrent] = useState(List[0].route)
  const closeBar = () => setOpenBar(false)



  return (
    <div className={`h-screen overflow-y-auto scrollbar-hide lg:pt-[100px] min-w-[288px] fixed lg:border-r border-[#D7D7D7] ${openBar ? 'block' : 'hidden'} ${openBar ? 'z-30' : 'z-0'} lg:block bg-white`}>
      <div className='p-6 flex justify-end pb-0 lg:hidden cursor-pointer' onClick={closeBar}>
        <Image src={close} alt='close' />  
      </div>
      <div className='py-6 flex flex-col gap-10'  >
        {List.map((list, i) => (
          <Link href={`/vendor/${list.route}`} onClick={closeBar} key={i} >
            <div
            className={` p-3 px-11  flex gap-8 items-center hover:bg-black/[0.05] ${current == list.route && 'lg:border-r border-black max-lg:border-l  text-black '} text-[#757575] cursor-pointer text-sm font-medium`} 
            >
              <list.icon color={current == list.route ? '#000000' : '#cfcfcf'} />
              <p>{list.page}</p>

            </div>
          </Link>
        ))}
      </div>
      <div className='flex flex-col gap-7 p-8 border-t border-[#D7D7D7] lg:hidden '>
        <div className='flex items-center gap-3  cursor-pointer'>
          <Image src={bell} alt='mobileell' />
          <p className='font-medium text-base'>Notifications</p>
        </div>
        <div className='flex gap-3 items-center'>
          <div className='w-11 h-11 rounded-full overflow-hidden'>
            <Image src={dress2} alt='profile' />
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