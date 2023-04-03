import { useState } from "react";
const Header = () => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <header className="bg-black  text-white ">
      <div className=" flex items-center border-b px-[4em] border-b-[#8B8282] justify-between py-[2em]  ">
        <p> Nene </p>
        <div
          className={`py-2 px-4 ${
            dropdown ? "flex" : "hidden"
          }  lg:flex bg-white rounded-2xl text-black  w-3/5`}
        >
          <input
            type="search"
            className="w-full  outline-none"
            id=""
            placeholder="Search for a Product"
          />
        </div>
        <nav className="hidden lg:flex justify-between gap-2 w-[15%] ">
          <button>
            <img src="/assets/svgs/navIcon1.svg" alt="" />
          </button>
          <button>
            <img src="/assets/svgs/navIcon2.svg" alt="" />
          </button>
          <button>
            <img src="/assets/svgs/navIcon3.svg" alt="" />
          </button>
          <button>
            <img src="/assets/svgs/navIcon4.svg" alt="" />
          </button>
        </nav>
        <button onClick={() => setDropdown(true)} className="lg:hidden">
          <img src="/assets/svgs/icon-hamburger.svg" alt="" />
        </button>
      </div>
      <div className="hidden py-[1.1875rem] lg:flex justify-between px-[4em] ">
        <div className="flex gap-1 ">
          <span>New In</span>
          <img src="/assets/svgs/drop.svg" alt="" />
        </div>
        <div className="flex gap-1">
          <span>Schools</span>
          <img src="/assets/svgs/drop.svg" alt="" />
        </div>
        <div className="flex gap-1">
          <span>Clothes</span>
          <img src="/assets/svgs/drop.svg" alt="" />
        </div>
        <div className="flex gap-1">
          <span>Beauty</span>
          <img src="/assets/svgs/drop.svg" alt="" />
        </div>
        <div className="flex gap-1">
          <span>Acessories</span>
          <img src="/assets/svgs/drop.svg" alt="" />
        </div>
        <div className="flex gap-1">
          <span>Brands</span>
          <img src="/assets/svgs/drop.svg" alt="" />
        </div>
        <div className="flex gap-1">
          <span>Featured</span>
          <img src="/assets/svgs/drop.svg" alt="" />
        </div>
      </div>
    </header>
  );
};

export default Header;
