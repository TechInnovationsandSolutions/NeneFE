const HeaderProfile = ({close}) => {

   // if statement when authenticated ... 
   return (  
<>

  <div className="absolute z-[11] bg-white text-[.8em] -left-[3em] w-[200px] text-black py-1 px-2 top-[3em]">
    <div className="flex justify-between py-2 border-b border-[#D7D7D7]">
      <button className="border-transparent hover:border-b border-b-[#757575]">Sign In</button>
      <button className="border-transparent hover:border-b border-b-[#757575]">Register</button>
      <button onClick= {close} >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.625 4.375L4.375 15.625" stroke="black" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
          <path d="M15.625 15.625L4.375 4.375" stroke="black" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>
    <div className="py-2 space-y-2 text-[#757575]">
      <div className="w-4/5 flex space-x-2">
        <img src="/assets/svgs/ArchiveBox.svg" alt="" />
        <span>Vendor</span>
      </div>
      <div className="w-4/5 flex space-x-2">
        <img src="/assets/svgs/Swap.svg" alt="" />
        <span>Returns & Refunds</span>
      </div>
      <div className="w-4/5 flex space-x-2">
        <img src="/assets/svgs/Chats.svg" alt="" />
        <span>Contact Us</span>
      </div>
    </div>
   <div class="absolute -top-1 left-10 h-[10px] transform rotate-45  w-0  border border-solid border-turquoise border-l-transparent border-r-transparent z-20" style={{borderWidth: '10px 10px 0 0'}}></div>
  </div>
</>
    );
}
 
export default HeaderProfile;