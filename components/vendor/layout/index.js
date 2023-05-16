import React, { useState } from 'react'
import Navbar from './navbar';
import Sidebar from './sidebar';

const VendorLayout = ({ children }) => {
  const [openBar, setOpenBar] = useState(false)


  return (
    <div>
      <div className={`${!openBar && 'hidden'} lg:hidden fixed inset-0 z-20 bg-black/[0.5]`} onClick={e => setOpenBar(false)}></div>
      <Navbar setOpenBar={setOpenBar} />
      <Sidebar openBar={openBar} setOpenBar={setOpenBar}/>
      <div className='lg:pl-[288px] lg:pt-[100px] pt-[112px] h-screen overflow-y-auto scrollbar-hide'>
        {children}
      </div>
      
    </div>
  );
};

export default VendorLayout