import Image from "next/image";
import ProfileImg from "../../../public/assets/account/profile_image.png";
import AccOverview from "../../../public/assets/account/account_overview.svg";
import MyOrderImg from "../../../public/assets/account/my_orders.svg";
import MyDetailsImg from "../../../public/assets/account/my_details.svg";
import ChangePasswordImg from "../../../public/assets/account/change_password.svg";
import AddressBookImg from "../../../public/assets/account/address_book.svg";
import PaymentImg from "../../../public/assets/account/payment_methods.svg";
import ContactImg from "../../../public/assets/account/contact_preferences.svg";
import SocialImg from "../../../public/assets/account/social_accounts.svg";
import GiftImg from "../../../public/assets/account/gift_cards.svg";
import NeedhelpImg from "../../../public/assets/account/need_help.svg";
import WhereissMyOrderImg from "../../../public/assets/account/where's_my_order.svg";
import signoutImg from "../../../public/assets/account/signout.svg";

import { stateContext } from "../../../components/stateContext/stateProvider";
import { useContext } from "react";

const SideBar = () => {
  const [accountTab, setAccountTab] = useContext(stateContext);

  const details = [
    {
      text: "My details",
      img: MyDetailsImg,
    },
    {
      text: "Change password",
      img: ChangePasswordImg,
    },
    {
      text: "Address book",
      img: AddressBookImg,
    },
    {
      text: "Payment method",
      img: PaymentImg,
    },
    {
      text: "Contact preferences",
      img: ContactImg,
    },
    {
      text: "Social accounts",
      img: SocialImg,
      last: true,
    },
  ];

  const helpList = [
    {
      text: "Need help",
      img: NeedhelpImg,
    },
    {
      text: "Where's my order",
      img: WhereissMyOrderImg,
    },
    {
      text: "How do I make a return",
      img: WhereissMyOrderImg,
    },
    {
      text: "I need a new return's note",
      img: WhereissMyOrderImg,
      last: true,
    },
  ];

  return (
    <div className="bg-medGray h-auto min-w-[80px] flex flex-col gap-2">
      {/* Profile Image Section */}
      <div className="flex flex-col w-full max-h-[300px] justify-center items-center lg:justify-start py-[100px] px-5 lg:flex-row bg-white gap-4 ">
        <Image
          src={ProfileImg}
          alt=""
          width={100}
          height={100}
          className="w-10 h-10 lg:w-[100px] lg:h-[100px]"
        />
        <div className="flex flex-col items-center justify-center lg:items-start">
          <p className=" text-[14px] lg:text-small">Hi,</p>
          <p className="font-bold text-[14px] lg:text-small">Chenemi Abraham</p>
        </div>
      </div>

      {/* Other Links */}

      {/* Account overview Tab */}
      <section
        className={
          accountTab === "Account overview"
            ? activeSectionStyles
            : sectionStyles
        }
        onClick={() => {
          setAccountTab("Account overview");
        }}
      >
        <Image src={AccOverview} alt="" width={24} height={24} />
        <h3 className={sectionText}>Account Overview</h3>
      </section>

      {/* My Orders TAb */}
      <section
        className={
          accountTab === "My orders" ? activeSectionStyles : sectionStyles
        }
        onClick={() => {
          setAccountTab("My orders");
        }}
      >
        <Image src={MyOrderImg} alt="" width={24} height={24} />
        <h3 className={sectionText}>My orders</h3>
      </section>

      {/* Details */}
      <section className="flex flex-col bg-white">
        {details.map((detail) => {
          return (
            <div
              className={
                accountTab === detail.text
                  ? `${activeSectionStyles} pr-0 pb-0`
                  : `${sectionStyles} pr-0 pb-0`
              }
              onClick={() => {
                setAccountTab(detail.text);
              }}
              key={detail.text}
            >
              <Image src={detail.img} alt="" width={24} height={24} />
              <h3
                className={
                  detail.last
                    ? `${sectionText} w-full pb-5`
                    : `${sectionText} w-full pb-5 border-b-2 border-[rgba(0,0,0,0.3)]`
                }
              >
                {detail.text}
              </h3>
            </div>
          );
        })}
      </section>

      {/* Gift Cards and Vouchers */}
      <section
        className={
          accountTab === "Gift cards" ? activeSectionStyles : sectionStyles
        }
        onClick={() => {
          setAccountTab("Gift cards");
        }}
      >
        <Image src={GiftImg} alt="" width={24} height={24} />
        <h3 className={sectionText}>Gift cards & vouchers</h3>
      </section>

      {/* Help */}
      <section className="flex flex-col bg-white">
        {helpList.map((help) => {
          return (
            <div
              className={
                accountTab === help.text
                  ? `${activeSectionStyles} pr-0 pb-0`
                  : `${sectionStyles} pr-0 pb-0`
              }
              onClick={() => {
                setAccountTab(help.text);
              }}
              key={help.text}
            >
              <Image src={help.img} alt="" width={24} height={24} />
              <h3
                className={
                  help.last
                    ? `${sectionText} w-full pb-5`
                    : `${sectionText} w-full pb-5 border-b-2 border-[rgba(0,0,0,0.3)]`
                }
              >
                {help.text}
              </h3>
            </div>
          );
        })}
      </section>

      {/* Signout */}
      <section className={sectionStyles}>
        <Image src={signoutImg} alt="" width={24} height={24} />
        <h3 className={sectionText}>Signout</h3>
      </section>
    </div>
  );
};

export default SideBar;

const sectionStyles = "flex gap-16 bg-white px-6 py-4 cursor-pointer";
const sectionText = "text-small hidden lg:flex";
const activeSectionStyles =
  "flex gap-16 bg-[#f9f9f9] px-6 py-4 border-l-4 border-black cursor-pointer";
