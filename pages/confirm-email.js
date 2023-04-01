import Button from "@/components/button/button";
import Link from "next/link";

const ConfirmEmail = () => {
  return (
    <div className="bg-black w-full h-screen flex justify-center items-center absolute z-10">
      <div className=" w-[60%] md:w-[50%] lg:w-[44.65%] flex flex-col items-center py-[1.875rem] px-[4.8125rem] justify-center bg-white">
        <h1 className="font-sans font-medium text-black text-2xl pb-[1.3125rem] text-center ">
          Reset your password{" "}
        </h1>
        <p className="font-sans font-normal text-base text-[#585757] text-center max-w-[383px] pb-[1.875rem] ">
          Enter your email address and we&apos;ll send you a link to reset your
          password.
        </p>
        {/* form details */}
        <form className="w-full">
          {/* Email */}
          <div className="flex flex-col w-full pb-[2.25rem]">
            <label className={`${formBaseTextStyle} ${labelTextStyle}`}>
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter Email Address"
              className={`${formBaseTextStyle} ${inputTextStyle}`}
            />
          </div>
          <Button
            text="Send me an email"
            variant="black"
            size="big"
            type="submit"
          />
        </form>
        <Link
          href="/"
          className="pt-4 text-[#020000] text-[0.9375rem] text-center  "
        >
          I remember my password now
        </Link>
      </div>
    </div>
  );
};

export default ConfirmEmail;

const formBaseTextStyle =
  "text-[1rem] leading-[1.3125rem] font-normal font-sans ";
const inputTextStyle =
  "text-[ #979797] pt-[0.8125rem] pb-[0.875rem] px-[1rem] rounded border-[0.5px] border-[#979797] ";
const labelTextStyle = "text-black pb-[0.6875rem]";
