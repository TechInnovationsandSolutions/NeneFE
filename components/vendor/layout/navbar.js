import Image from "next/image";
import React, { useState } from "react";
import searchicon from "../../../public/assets/svgs/search.svg";
import bell from "../../../public/assets/svgs/bell.svg";
import dress2 from "../../../public/assets/images/dress2.webp";
import handburger from "../../../public/assets/svgs/List.svg";
import SearchBarMobile from "./modileSearchBar";

const Navbar = ({ setOpenBar, setOpenSearch, openSearch }) => {
  const [search, setSearch] = useState("");

  const submitSearch = (search) => {
    console.log(search);
  };

  return (
    <nav className='fixed flex flex-col lg:z-40 lg:h-[100px] lg:border-b-[0.5px] border-[#D7D7D7] w-full bg-white z-20 shadow-lg lg:shadow-none'>
      <div className='flex w-full'>
        <div className='lg:min-w-[288px] h-full lg:border-r px-5 py-7 lg:px-9 lg:pt-9 lg:py-0 lg:pb-4 font-alegreya font-normal text-2xl'>
          Nene
        </div>
        <div className='lg:flex items-center justify-between w-full px-9 pt-9 pb-4  hidden'>
          <div className='h-10 xl:w-[400px]  flex px-5 py-2 bg-[#F2F2F2] rounded-sm '>
            <input
              className='w-full bg-inherit h-full border-none outline-none focus:ring-0'
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder='search . . .'
            />
            <Image
              src={searchicon}
              alt='search'
              onClick={submitSearch(search)}
            />
          </div>
          <div className='flex gap-7'>
            <div className='flex justify-between items-center gap-7 '>
              <Image src={bell} alt='bell' />
              <span className='h-7 border-r border-black'></span>
            </div>
            <div className='flex gap-3'>
              <div className='w-11 h-11 rounded-full overflow-hidden'>
                <Image src={dress2} alt='profile' />
              </div>
              <div>
                <p className='font-medium text-base'>Namegoes here</p>
                <p className='font-normal text-base text-[#757575]'>
                  Name@emailadd.com
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='flex lg:hidden ml-auto p-5 gap-10 items-center'>
          <Image
            src={handburger}
            alt='menu'
            onClick={(e) => setOpenBar((prev) => !prev)}
          />
          <Image
            src={searchicon}
            alt='search'
            onClick={() => setOpenSearch(true)}
            className={`${openSearch && "hidden"}`}
          />
        </div>
      </div>
      <div className=''>
        <SearchBarMobile
          openSearch={openSearch}
          setOpenSearch={setOpenSearch}
        />
      </div>
    </nav>
  );
};

export default Navbar;
