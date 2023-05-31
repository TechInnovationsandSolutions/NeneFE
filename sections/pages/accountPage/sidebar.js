import Image from "next/image";
import {
  ProfileImg,
  AccOverview,
  MyOrderImg,
  MyDetailsImg,
  ChangePasswordImg,
  AddressBookImg,
  PaymentImg,
  ContactImg,
  SocialImg,
  GiftImg,
  NeedhelpImg,
  WhereissMyOrderImg,
  signoutImg,
} from "@/public/assets/account";
import Link from "next/link";
import { useRouter } from "next/router";

const SideBar = () => {
  const router = useRouter();
  const activeRoute = router.pathname;

  const details = [
    {
      text: "My details",
      img: MyDetailsImg,
      link: "details",
    },
    {
      text: "Change password",
      img: ChangePasswordImg,
      link: "",
    },
    {
      text: "Address book",
      img: AddressBookImg,
      link: "",
    },
    {
      text: "Payment method",
      img: PaymentImg,
      link: "",
    },
    {
      text: "Contact preferences",
      img: ContactImg,
      link: "",
    },
    {
      text: "Social accounts",
      img: SocialImg,
      link: "social",
      last: true,
    },
  ];

  const helpList = [
    {
      text: "Need help",
      img: NeedhelpImg,
      link: "",
    },
    {
      text: "Where's my order",
      img: WhereissMyOrderImg,
      link: "",
    },
    {
      text: "How do I make a return",
      img: WhereissMyOrderImg,
      link: "",
    },
    {
      text: "I need a new return's note",
      img: WhereissMyOrderImg,
      link: "",
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
      <Link
        className={
          activeRoute === "/account" ? activeSectionStyles : sectionStyles
        }
        href={"/account"}
      >
        <Image src={AccOverview} alt="" width={24} height={24} />
        <h3 className={sectionText}>Account Overview</h3>
      </Link>

      {/* My Orders TAb */}
      <Link
        className={
          activeRoute === "/account/my-orders"
            ? activeSectionStyles
            : sectionStyles
        }
        href={"/account/my-orders"}
      >
        <Image src={MyOrderImg} alt="" width={24} height={24} />
        <h3 className={sectionText}>My orders</h3>
      </Link>

      {/* Details */}
      <section className="flex flex-col bg-white">
        {details.map((detail) => {
          return (
            <Link
              href={`/account/${detail.link}`}
              className={
                activeRoute === `/account/${detail.link}`
                  ? `${activeSectionStyles} pr-0 pb-0`
                  : `${sectionStyles} pr-0 pb-0`
              }
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
            </Link>
          );
        })}
      </section>

      {/* Gift Cards and Vouchers */}
      <Link
        href={"/account/giftcards-and-vouchers"}
        className={
          activeRoute === "/account/gift-and-vouchers"
            ? activeSectionStyles
            : sectionStyles
        }
      >
        <Image src={GiftImg} alt="" width={24} height={24} />
        <h3 className={sectionText}>Gift cards & vouchers</h3>
      </Link>

      {/* Help */}
      <section className="flex flex-col bg-white">
        {helpList.map((help) => {
          return (
            <Link
              href={`/account/${help.link}`}
              className={
                activeRoute === `/account/${help.link}`
                  ? `${activeSectionStyles} pr-0 pb-0`
                  : `${sectionStyles} pr-0 pb-0`
              }
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
            </Link>
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
