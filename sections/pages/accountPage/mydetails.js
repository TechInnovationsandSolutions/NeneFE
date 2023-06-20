import Image from "next/image";
import MyDetailsImg from "../../../public/assets/account/my_details.svg";
import { useContext } from "react";
import { stateContext } from "@/context/accountProvider";
import Link from "next/link";

const MyDetails = () => {

  const { details, setDetails } = useContext(stateContext);
  const { firstName, lastName, address, email, password } = details
  
  return (
    <div className="w-full min-h-auto lg:min-h-[920px]  flex flex-col">
      {/* Header Section */}
      <div className="w-full px-6 pt-[44px] pb-[72.3px] mb-4 bg-white ">
        <Image src={MyDetailsImg} alt="" width={44} height={44} />
        <h2 className="uppercase w-full pt-5 font-bold text-[1.5rem]">
          MY DETAILS
        </h2>
        <p className="w-full pt-4">
          Feel free to edit any of your details below.
        </p>
      </div>

      {/* Details Section */}
      <section className="flex flex-col gap-6 w-full h-auto min-h-[931px] bg-white py-12 px-6">
        <div className={sectionStyle}>
          <h4 className={labelStyles}>First Name</h4>
          <p className={labelValueStyles}>{firstName}</p>
        </div>
        <div className={sectionStyle}>
          <h4 className={labelStyles}>Last Name</h4>
          <p className={labelValueStyles}>{lastName}</p>
        </div>
        <div className={sectionStyle}>
          <h4 className={labelStyles}>Address</h4>
          <p className={labelValueStyles}>{address}</p>
        </div>
        <div className={sectionStyle}>
          <h4 className={labelStyles}>Email Address</h4>
          <p className={labelValueStyles}>{email}</p>
        </div>
        <div className={sectionStyle}>
          <h4 className={labelStyles}>Password</h4>
          <p className={labelValueStyles}>**********</p>
        </div>

        <Link
          href="/account/details/edit-details"
          className="underline text-lg"
        >
          Edit
        </Link>
      </section>
    </div>
  );
};

export default MyDetails;


const sectionStyle =
  "w-full max-w-full xl:max-w-[70%] flex flex-col md:flex-row justify-between items-start gap-3 md:items-center";
const labelStyles = "text-[14px] lg:text-[18px] leading-6 text-[#757575] ";
const labelValueStyles =
  "text-[14px] lg:text-[18px] leading-6 text-[#000000] font-medium ";