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
import AdminSidebar from "@/components/admin/layout/adminSidebar";
import { vendor } from "@/sections/pages/admin/vendor";

const List = [
  { id: 1, page: "Product", icon: QrCode, route: "" },
  { id: 2, page: "Orders", icon: ShoppingCart, route: "orders" },
  { id: 3, page: "Payments", icon: CreditCard, route: "payments" },
  { id: 4, page: "Settings", icon: Settings, route: "" },
  { id: 5, page: "Enable Ads", icon: Slideshow, route: "" },
  { id: 6, page: "Log out", icon: SignOut, route: "" },
];

const sidebarItems = [
  { id: 1, page: "Approved", route: "approved" },
  { id: 2, page: "Pending", route: "pending" },
  { id: 3, page: "Declined", route: "declined" },
  { id: 4, page: "Suspended", route: "suspended" },
];

const Sidebar = ({ openBar, setOpenBar }) => {
  const { pathname } = useRouter();
  let path = pathname.split("/");

  useEffect(() => {
    setCurrent(path[2]);
  }, [path]);

  const AdminStatus = useSelector((state) => state.superAdmin.adminStatus);
  const [current, setCurrent] = useState(List[0].route);
  const [adminDropArrowClick, setAdminDropArrowCLick] = useState(true);
  const [vendorDropArrowClick, setVendorDropArrowCLick] = useState(true);
  const [openVendorAccountsDropdown, setOpenVendorAccountsDropdown] =
    useState(true);
  const onsetCurrent = (page) => setCurrent(page);
  const closeBar = () => setOpenBar(false);
  // console.log(current, pathname);
  const isSuperAdminPage = pathname.includes("/super-admin");
  const isAdminPage = path[1] === "admin";
  const subPath = path[path.length - 1];

  const router = useRouter();
  const { replace, query } = router;
  const dispatch = useDispatch();

  useEffect(() => {
    if (pathname.includes("/super-admin")) {
      replace({
        pathname: router.pathname,
        query: { status: AdminStatus },
      });
    }
  }, []);

  console.log(
    path[1] === "admin" ? `right path: ${[path]}` : `Wrong path: ${[path]}`
  );
  // performs updates to Admin account status
  //
  function updateAdminStatus(params) {
    // checks if status is in queryURL i.e correct URL for status change.
    if (query.hasOwnProperty("status") && pathname.includes("/super-admin")) {
      dispatch(setAdminState(params));
      replace({
        pathname: router.pathname,
        query: { status: params },
      });
    }
  }

  return (
    <div
      className={`h-[calc(100vh-88px)] bottom-0 overflow-y-auto scrollbar-hide min-w-[288px] fixed lg:border-r border-[#D7D7D7] ${
        openBar ? "block" : "hidden"
      } ${openBar ? "z-30" : "z-0"} lg:block bg-white`}
    >
      {/* Displays sidebar for super-admin page */}
      {isSuperAdminPage ? (
        <div className="px-10 flex flex-col py-10 gap-8 ">
          {/* Vendor Tab */}
          <div className="flex items-center gap-4  ">
            <img src="/assets/svgs/CreditCard.svg" alt="" />
            <Link href="/super-admin/vendor/approved">
              <span>Vendor Accounts</span>
            </Link>
            <svg
              onClick={() => setVendorDropArrowCLick(!vendorDropArrowClick)}
              width="12"
              height="7"
              viewBox="0 0 12 7"
              className={`${
                vendorDropArrowClick ? "" : "rotate-180"
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
          {/* vendor items dropdown options i.e approved... */}
          {vendorDropArrowClick && (
            <div className=" mx-3 px-6 border-l border-[#D7D7D7]">
              <div className="flex flex-col gap-2">
                {sidebarItems.map((item) => {
                  return (
                    <Link
                      key={item.id}
                      href={`/super-admin/vendor/${item.route}`}
                      className={`${
                        subPath === item.page.toLocaleLowerCase()
                          ? "font-semibold"
                          : ""
                      }`}
                    >
                      {item.page}
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
          {/* admin tab  */}
          <div className="flex items-center gap-4 ">
            <img src="/assets/svgs/UsersThree.svg" alt="" />

            <div className="flex items-center gap-2  ">
              <Link href="/super-admin/admin">
                <span>Admin Accounts</span>
              </Link>
            </div>
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
          {/* admin items dropdown options*/}
          {adminDropArrowClick ? (
            <div className=" mx-3 px-6 border-l border-[#D7D7D7]">
              <ul className="flex flex-col gap-2">
                <li
                  onClick={() => updateAdminStatus("Active")}
                  className={`${
                    AdminStatus === "Active" ? "font-bold" : ""
                  } cursor-pointer `}
                >
                  <Link href="/super-admin/admin?status=Active">Active</Link>
                </li>
                <li
                  onClick={() => updateAdminStatus("Suspended")}
                  className={`${
                    AdminStatus === "Suspended" ? "font-bold" : ""
                  } cursor-pointer`}
                >
                  <Link href="/super-admin/admin?status=Suspended">
                    Suspended
                  </Link>
                </li>
                <li
                  onClick={() => updateAdminStatus("Deleted")}
                  className={`${
                    AdminStatus === "Deleted" ? "font-bold" : ""
                  } cursor-pointer`}
                >
                  <Link href="/super-admin/admin?status=Deleted">Deleted</Link>
                </li>
              </ul>
            </div>
          ) : null}
          {/* Scrapbook tab */}
          <div className="flex items-center gap-4">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.9503 14.1002C22.8715 14.1593 22.7818 14.2023 22.6864 14.2267C22.591 14.2511 22.4917 14.2566 22.3942 14.2426C22.2967 14.2287 22.2029 14.1957 22.1182 14.1455C22.0334 14.0953 21.9594 14.029 21.9003 13.9502C21.4482 13.3425 20.8598 12.8495 20.1824 12.5108C19.5051 12.1721 18.7576 11.9972 18.0003 12.0002C17.8528 12.0002 17.7086 11.9567 17.5857 11.8751C17.4628 11.7936 17.3667 11.6776 17.3093 11.5417C17.2704 11.4495 17.2504 11.3503 17.2504 11.2502C17.2504 11.15 17.2704 11.0509 17.3093 10.9586C17.3667 10.8227 17.4628 10.7068 17.5857 10.6252C17.7086 10.5437 17.8528 10.5002 18.0003 10.5002C18.4211 10.5001 18.8335 10.3821 19.1906 10.1594C19.5476 9.93677 19.8351 9.61844 20.0204 9.24058C20.2056 8.86273 20.2812 8.4405 20.2385 8.02185C20.1958 7.6032 20.0365 7.20493 19.7788 6.87225C19.5211 6.53958 19.1753 6.28584 18.7806 6.13987C18.3859 5.9939 17.9582 5.96154 17.546 6.04646C17.1338 6.13139 16.7538 6.3302 16.4489 6.62031C16.1441 6.91043 15.9267 7.28021 15.8215 7.68767C15.7969 7.78308 15.7537 7.87271 15.6945 7.95144C15.6352 8.03017 15.561 8.09645 15.4761 8.14651C15.3913 8.19656 15.2974 8.22941 15.1998 8.24318C15.1022 8.25694 15.0029 8.25135 14.9075 8.22673C14.8121 8.20211 14.7224 8.15893 14.6437 8.09967C14.565 8.04041 14.4987 7.96622 14.4486 7.88134C14.3986 7.79646 14.3657 7.70256 14.352 7.60498C14.3382 7.50741 14.3438 7.40808 14.3684 7.31267C14.5144 6.74765 14.7903 6.22451 15.1741 5.78487C15.5579 5.34523 16.039 5.00124 16.5791 4.78025C17.1192 4.55926 17.7034 4.46738 18.2853 4.51191C18.8672 4.55645 19.4307 4.73618 19.9309 5.0368C20.431 5.33742 20.8542 5.75063 21.1666 6.24356C21.479 6.73648 21.672 7.29552 21.7303 7.87618C21.7887 8.45684 21.7107 9.0431 21.5026 9.58831C21.2944 10.1335 20.9619 10.6226 20.5315 11.0167C21.5514 11.4583 22.4379 12.159 23.1031 13.0492C23.1622 13.1282 23.2051 13.2181 23.2294 13.3137C23.2537 13.4093 23.2589 13.5088 23.2447 13.6064C23.2305 13.704 23.1972 13.7979 23.1467 13.8826C23.0962 13.9673 23.0294 14.0413 22.9503 14.1002ZM17.899 19.8752C17.9533 19.9605 17.9897 20.056 18.0062 20.1558C18.0226 20.2556 18.0186 20.3577 17.9946 20.456C17.9705 20.5542 17.9268 20.6466 17.8661 20.7275C17.8054 20.8084 17.729 20.8762 17.6414 20.9268C17.5539 20.9775 17.4569 21.0099 17.3565 21.022C17.2561 21.0342 17.1543 21.026 17.0571 20.9978C16.96 20.9696 16.8695 20.9221 16.7912 20.8581C16.713 20.794 16.6484 20.7148 16.6015 20.6252C16.1291 19.8252 15.4562 19.1622 14.6493 18.7016C13.8424 18.241 12.9294 17.9988 12.0003 17.9988C11.0712 17.9988 10.1582 18.241 9.35126 18.7016C8.54436 19.1622 7.87149 19.8252 7.39903 20.6252C7.35215 20.7148 7.28762 20.794 7.20932 20.8581C7.13102 20.9221 7.04058 20.9696 6.94344 20.9978C6.84629 21.026 6.74445 21.0342 6.64403 21.022C6.54362 21.0099 6.44671 20.9775 6.35914 20.9268C6.27156 20.8762 6.19513 20.8084 6.13445 20.7275C6.07376 20.6466 6.03007 20.5542 6.00601 20.456C5.98194 20.3577 5.978 20.2556 5.99441 20.1558C6.01083 20.056 6.04727 19.9605 6.10153 19.8752C6.82866 18.6258 7.93734 17.6427 9.26466 17.0702C8.51778 16.4983 7.96887 15.7068 7.6951 14.8069C7.42132 13.9069 7.43644 12.9438 7.73833 12.053C8.04022 11.1621 8.6137 10.3882 9.37816 9.84005C10.1426 9.29194 11.0596 8.99716 12.0003 8.99716C12.9409 8.99716 13.8579 9.29194 14.6224 9.84005C15.3869 10.3882 15.9603 11.1621 16.2622 12.053C16.5641 12.9438 16.5792 13.9069 16.3055 14.8069C16.0317 15.7068 15.4828 16.4983 14.7359 17.0702C16.0632 17.6427 17.1719 18.6258 17.899 19.8752ZM12.0003 16.5002C12.5936 16.5002 13.1736 16.3242 13.667 15.9946C14.1603 15.6649 14.5449 15.1964 14.7719 14.6482C14.999 14.1 15.0584 13.4968 14.9426 12.9149C14.8269 12.333 14.5412 11.7984 14.1216 11.3788C13.702 10.9593 13.1675 10.6736 12.5856 10.5578C12.0036 10.4421 11.4004 10.5015 10.8522 10.7285C10.3041 10.9556 9.83552 11.3401 9.50588 11.8335C9.17623 12.3268 9.00028 12.9068 9.00028 13.5002C9.00028 14.2958 9.31635 15.0589 9.87896 15.6215C10.4416 16.1841 11.2046 16.5002 12.0003 16.5002ZM6.75028 11.2502C6.75028 11.0513 6.67127 10.8605 6.53061 10.7198C6.38996 10.5792 6.1992 10.5002 6.00028 10.5002C5.57947 10.5001 5.16709 10.3821 4.81 10.1594C4.45292 9.93677 4.16543 9.61844 3.98019 9.24058C3.79495 8.86273 3.71939 8.4405 3.76209 8.02185C3.8048 7.6032 3.96405 7.20493 4.22176 6.87225C4.47947 6.53958 4.82531 6.28584 5.22 6.13987C5.61469 5.9939 6.04241 5.96154 6.45457 6.04646C6.86672 6.13139 7.2468 6.3302 7.55164 6.62031C7.85647 6.91043 8.07383 7.28021 8.17903 7.68767C8.22876 7.88036 8.353 8.04541 8.52442 8.14651C8.69584 8.2476 8.9004 8.27646 9.0931 8.22673C9.28579 8.177 9.45084 8.05276 9.55194 7.88134C9.65303 7.70992 9.68189 7.50536 9.63216 7.31267C9.48614 6.74765 9.21026 6.22451 8.82648 5.78487C8.4427 5.34523 7.96161 5.00124 7.42149 4.78025C6.88137 4.55926 6.29712 4.46738 5.71524 4.51191C5.13336 4.55645 4.56991 4.73618 4.06972 5.0368C3.56952 5.33742 3.14639 5.75063 2.83399 6.24356C2.52159 6.73648 2.32855 7.29552 2.27022 7.87618C2.2119 8.45684 2.2899 9.0431 2.49801 9.58831C2.70613 10.1335 3.03862 10.6226 3.46903 11.0167C2.45024 11.4587 1.5647 12.1594 0.900284 13.0492C0.780813 13.2084 0.729448 13.4084 0.757491 13.6054C0.785533 13.8024 0.890686 13.9802 1.04982 14.0997C1.20895 14.2192 1.40902 14.2705 1.60602 14.2425C1.80302 14.2144 1.98081 14.1093 2.10028 13.9502C2.55233 13.3425 3.14073 12.8495 3.81812 12.5108C4.49551 12.1721 5.24295 11.9972 6.00028 12.0002C6.1992 12.0002 6.38996 11.9211 6.53061 11.7805C6.67127 11.6398 6.75028 11.4491 6.75028 11.2502Z"
                fill="black"
              />
            </svg>
            <span>
              {" "}
              <Link href="/super-admin/scrapbook">Scrapbook </Link>{" "}
            </span>
          </div>
        </div>
      ) : isAdminPage ? (
        // Admin Sidebar
        <AdminSidebar />
      ) : (
        <div className="py-6 flex flex-col gap-10">
          {List.map((list, i) => (
            <Link href={`/vendor/${list.route}`} onClick={closeBar} key={i}>
              <div
                className={` p-3 px-11  flex gap-8 items-center hover:bg-black/[0.05] ${
                  current == list.route &&
                  "lg:border-r border-black max-lg:border-l  text-black "
                } text-[#757575] cursor-pointer text-sm font-medium`}
                onClick={(e) => onsetCurrent(list.route)}
              >
                <list.icon
                  color={current == list.route ? "#000000" : "#cfcfcf"}
                />
                <p>{list.page}</p>
              </div>
            </Link>
          ))}
        </div>
      )}{" "}
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
