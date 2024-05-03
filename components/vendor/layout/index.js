import React, { useState } from 'react'
import Navbar from './navbar';
import Sidebar from './sidebar';

const VendorLayout = ({ children }) => {
  const [openBar, setOpenBar] = useState(false)
  const [openSearch , setOpenSearch] = useState(false)


  return (
    <div>
      <div className={`${!openBar && 'hidden'} lg:hidden fixed inset-0 z-20 bg-black/[0.5]`} onClick={() => setOpenBar(false)}></div>
      <Navbar setOpenBar={setOpenBar} openSearch={openSearch} setOpenSearch={setOpenSearch} />
      <Sidebar openBar={openBar} setOpenBar={setOpenBar}/>
      <div className={`${openSearch ? 'pt-[135px]' : 'pt-[88px]'} lg:pl-[288px] lg:pt-[100px]  h-screen overflow-y-auto `}>
        {children}
      </div>
      
    </div>
  );
};

export default VendorLayout