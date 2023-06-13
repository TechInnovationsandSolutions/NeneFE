import Image from "next/image";
import MyDetailsImg from "../../../public/assets/account/my_details.svg";
import Button from "../../../components/button/button";

const MyDetails = () => {
  return (
    <div className="w-full min-h-auto lg:min-h-[920px] px-6 pt-[44px] flex flex-col bg-white">
      <div className="w-full  pb-[51px] ">
        <Image src={MyDetailsImg} alt="" width={44} height={44} />
        <h2 className="uppercase w-full pt-5 font-bold text-[1.5rem]">
          MY DETAILS
        </h2>
        <p className="w-full pt-4">
          Feel free to edit any of your details below.
        </p>
      </div>
      <form className="flex flex-col w-full h-[600px] justify-between gap-4">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label className={labelStyle}>FIRST NAME:</label>
            <input className={inputStyle} type="text" value="Chenemi" />
          </div>
          <div className="flex flex-col gap-2">
            <label className={labelStyle}>LAST NAME:</label>
            <input className={inputStyle} type="text" value="Abraham" />
          </div>
          <div className="flex flex-col gap-2">
            <label className={labelStyle}>EMAIL:</label>
            <input
              className={inputStyle}
              type="email"
              value="chenemiabraham@gmail.com"
            />
          </div>
        </div>
        <div className="w-full flex justify-center ">
          <Button
            text="START SHOPPING"
            variant="black"
            type="submit"
            size="big"
            customClassName="max-w-[50%]"
          />
        </div>
      </form>
    </div>
  );
};

export default MyDetails;

const inputStyle =
  "placeholder-[#5E5E5E] text-[#5E5E5E] border border-black max-w-[340px] py-4 px-6";
const labelStyle = "text-black uppercase text-[18px]";
