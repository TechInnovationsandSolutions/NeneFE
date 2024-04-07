import Image from "next/image";
import React, { useEffect, useState } from "react";
import dress2 from "../../../public/assets/images/dress2.webp";
import bell from "../../../public/assets/svgs/bell.svg";
import close from "../../../public/assets/svgs/close icon.svg";
import { ShoppingCart } from "@/public/assets/svgs/js/ShoppingCart";
import { CreditCard } from "@/public/assets/svgs/js/CreditCard";
import { SignOut } from "@/public/assets/svgs/js/SignOut";
import { Settings } from "@/public/assets/svgs/js/Settings";
import { Slideshow } from "@/public/assets/svgs/js/Slideshow";
import { QrCode } from "../../../public/assets/svgs/js/QrCode.js";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { setAdminState } from "@/store/superAdminSlice";
const List = [
  { id: 1, page: "Product", icon: QrCode, route: "product" },
  { id: 2, page: "Orders", icon: ShoppingCart, route: "orders" },
  { id: 3, page: "Payments", icon: CreditCard, route: "payments" },
  { id: 4, page: "Settings", icon: Settings, route: "settings" },
  { id: 5, page: "Enable Ads", icon: Slideshow, route: "ads" },
  { id: 6, page: "Log out", icon: SignOut, route: "products" },
];

const Sidebar = ({ openBar, setOpenBar }) => {
  const { pathname,push } = useRouter();
  let path = pathname.split("/");

  useEffect(() => {
    setCurrent(path[2]);
  }, [path]);

  const [current, setCurrent] = useState(path);
  const [adminDropArrowClick, setAdminDropArrowCLick] = useState(true);
  const closeBar = () => setOpenBar(false);
  
  const handleClickLink = (value) => {
   push(`/admin/${value}`)
   closeBar()
  }

  return (
    <div
      className={`h-screen overflow-y-auto scrollbar-hide lg:pt-[100px] min-w-[288px] fixed lg:border-r border-[#D7D7D7] ${
        openBar ? "block" : "hidden"
      } ${openBar ? "z-30" : "z-0"} lg:block bg-white`}
    >
      <div
        className="p-6 flex justify-end pb-0 lg:hidden cursor-pointer"
        onClick={closeBar}
      >
        <Image src={close} alt="close" />
      </div>
        <div className="px-10 flex flex-col py-10 gap-8 ">
          <div className="flex gap-4 ">
            <img src="/assets/svgs/credit-card-black.svg" alt="" />
            <div className="flex items-center gap-2  ">
              <span>Vendor Accounts</span>
              <svg
                onClick={() => setAdminDropArrowCLick(!adminDropArrowClick)}
                width="12"
                height="7"
                viewBox="0 0 12 7"
                className={`${
                  adminDropArrowClick ? "" : "rotate-180"
                } cursor-pointer `}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 6L6 1L11 6"
                  stroke="#757575"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
          {adminDropArrowClick ? (
            <div className=" mx-3 px-6 border-l border-[#D7D7D7]">
              <ul className="flex flex-col gap-2">
                <li
                  onClick={() => handleClickLink("approved-account")}
                  className={`${
                    current === "approved-account" ? "font-bold" : ""
                  } cursor-pointer `}
                >
                  Approved
                </li>
                <li
                  onClick={() => handleClickLink("pending-account")}
                  className={`${
                    current === "pending-account" ? "font-bold" : ""
                  } cursor-pointer`}
                >
                  Pending
                </li>
                <li
                  onClick={() => handleClickLink("declined-account")}
                  className={`${
                    current === "declined-account" ? "font-bold" : ""
                  } cursor-pointer`}
                >
                  Declined
                </li>
                <li
                  onClick={() => handleClickLink("suspended-account")}
                  className={`${
                    current === "suspended-account" ? "font-bold" : ""
                  } cursor-pointer`}
                >
                  Suspended
                </li>
              </ul>
            </div>
          ) : null}
        </div>
      <div className="flex flex-col gap-7 p-8 border-t border-[#D7D7D7] lg:hidden ">
        <div className="flex items-center gap-3  cursor-pointer">
          <Image src={bell} alt="mobileell" />
          <p className="font-medium text-base">Notifications</p>
        </div>
        <div className="flex gap-3 items-center">
          <div className="w-11 h-11 rounded-full overflow-hidden">
            <Image src={dress2} alt="profile" />
          </div>
          <div>
            <p className="font-medium text-base">Namegoes here</p>
            <p className="font-normal text-base text-[#757575]">
              Name@emailadd.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
