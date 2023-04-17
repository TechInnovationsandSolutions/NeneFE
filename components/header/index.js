import { useState, useEffect } from "react";
import NewIn from "../header-categories/newIn";
import ShoesTab from "../header-categories/shoes";
import ClothesTab from "../header-categories/clothes";
import BeautyTab from "../header-categories/beauty";
import Accessories from "../header-categories/acessories";
import BrandsTab from "../header-categories/brands";
import FeaturedTab from "../header-categories/featured";
import HeaderProfile from "../headerProfileBox";
const Header = () => {
  const [dropdown, setDropdown] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);
  const [profileClick, setProfileClick] = useState(false);

  const [toggleNumber, setToggleNumber] = useState(null);
  const listClass = `${
    dropdown ? "flex w-full justify-between " : ""
  }  flex space-x-1  ${toggleNumber ? "py-2" : ""} px-2 `;
  const categoryWrapper = `lg:absolute z-10  right-0 top-[150px]  bottom-0  left-0 max-h-full lg:bg-[#00000059]`;

  const category = [
    "News",
    "Shoes",
    "Clothes",
    "Beauty",
    "Accessories",
    "Brands",
    "Featured",
  ];

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      if (window.innerWidth > 768) {
        setDropdown(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  function handleCategoryToggle(category) {
    if (category === 0) {
      setToggleNumber(0);
    }
    if (category === 0 && toggleNumber === 0) {
      setToggleNumber(null);
    }
    if (category === 1) {
      setToggleNumber(1);
    }
    if (category === 1 && toggleNumber === 1) {
      setToggleNumber(null);
    }
    if (category === 2) {
      setToggleNumber(2);
    }
    if (category === 2 && toggleNumber === 2) {
      setToggleNumber(null);
    }
    if (category === 3) {
      setToggleNumber(3);
    }
    if (category === 3 && toggleNumber === 3) {
      setToggleNumber(null);
    }

    if (category === 4) {
      setToggleNumber(4);
    }
    if (category === 4 && toggleNumber === 4) {
      setToggleNumber(null);
    }
    if (category === 5) {
      setToggleNumber(5);
    }
    if (category === 5 && toggleNumber === 5) {
      setToggleNumber(null);
    }
    if (category === 6) {
      setToggleNumber(6);
    }
    if (category === 6 && toggleNumber === 6) {
      setToggleNumber(null);
    }
  }
  return (
    <header
      className={`${
        dropdown ? "w-full h-full overflow-y-scroll  fixed z-10 flex-col " : ""
      } bg-black  text-white `}
    >
      <div
        className={`${
          dropdown
            ? "flex flex-col relative space-y-10 items-start"
            : "items-center"
        }" flex  border-b px-[8%] md:px-[4em] border-b-[#8B8282] justify-between py-[2em]  "  `}
      >
        <p> Nene </p>
        <div
          className={`py-1 px-4 hidden lg:flex bg-white rounded-2xl text-black  w-3/5`}
        >
          <input
            type="search"
            className="w-full  outline-none"
            id=""
            placeholder="Search for a Product"
          />
        </div>
        <button
          onClick={() => setDropdown(false)}
          className={`${
            dropdown ? "flex absolute m-0 right-4 -top-2 pr-5 " : "hidden"
          }  `}
        >
          <img src="/assets/svgs/X.svg" alt="" />
        </button>
        <button
          className={`${
            dropdown ? "hidden  " : "flex"
          } ml-auto mr-5 sm:mr-10 lg:hidden`}
        >
          <img src="/assets/svgs/search.svg" alt="" />
        </button>
        <nav
          className={`${
            dropdown ? "flex w-4/5 m-auto " : "hidden"
          } lg:flex justify-between space-x-2 relative lg:w-[15%] `}
        >
          <button onClick={() => setProfileClick(true)}>
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
          {profileClick ? (
            <HeaderProfile close={() => setProfileClick(false)} />
          ) : null}
        </nav>

        <button
          onClick={() => setDropdown(true)}
          className={`${dropdown ? "hidden" : "flex"} lg:hidden`}
        >
          <img src="/assets/svgs/icon-hamburger.svg" alt="" />
        </button>
      </div>
      <div
        className={`${
          dropdown ? "flex flex-col space-y-5 px-[8%] " : "hidden"
        }  py-[1.1875rem]  lg:flex justify-between px-[4em]  `}
      >
        {category.map((items, index) => {
          return (
            <div
              key={index}
              className={`${
                toggleNumber === index ? "bg-white text-black" : ""
              }  flex flex-col`}
            >
              <div className={listClass}>
                <span>{items}</span>
                <button onClick={() => handleCategoryToggle(index)}>
                  {" "}
                  <svg
                    width="10"
                    height="5"
                    viewBox="0 0 10 5"
                    transform=""
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 0L5 5L10 0H0Z"
                      fill={toggleNumber === index ? "black" : "white"}
                      transform={
                        toggleNumber === index ? "rotate(180 5 2.5)" : ""
                      }
                    />
                  </svg>
                </button>
              </div>
              {toggleNumber === 0 && index === 0 ? (
                <div className={categoryWrapper}>
                  <NewIn />{" "}
                </div>
              ) : null}
              {toggleNumber === 1 && index === 1 ? (
                <div className={categoryWrapper}>
                  <ShoesTab />{" "}
                </div>
              ) : null}
              {toggleNumber === 2 && index === 2 ? (
                <div className={categoryWrapper}>
                  <ClothesTab />{" "}
                </div>
              ) : null}
              {toggleNumber === 3 && index === 3 ? (
                <div className={categoryWrapper}>
                  <BeautyTab />{" "}
                </div>
              ) : null}
              {toggleNumber === 4 && index === 4 ? (
                <div className={categoryWrapper}>
                  <Accessories />{" "}
                </div>
              ) : null}
              {toggleNumber === 5 && index === 5 ? (
                <div className={categoryWrapper}>
                  <BrandsTab />{" "}
                </div>
              ) : null}
              {toggleNumber === 6 && index === 6 ? (
                <div className={categoryWrapper}>
                  <FeaturedTab />{" "}
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </header>
  );
};

export default Header;
