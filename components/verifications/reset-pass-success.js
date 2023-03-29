import Link from "next/link";

const ResetPassSuccess = () => {
  return (
    <div className="bg-black w-full h-screen flex justify-center items-center absolute z-10">
      <div className=" w-[60%] md:w-[50%] lg:w-[44.65%] flex flex-col items-center py-[1.875rem] px-[4.8125rem] justify-center bg-white">
        <p className="font-sans font-normal text-base text-[#585757] text-center max-w-[383px] pb-[1.875rem] ">
          Your password has been successfully changed
        </p>

        <Link
          href="/"
          className="py-[0.8125rem] px-[2.625rem] rounded w-full text-white bg-black text-center  "
        >
          Continue to Sign in
        </Link>
      </div>
    </div>
  );
};

export default ResetPassSuccess;
