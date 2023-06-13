import Button from "@/components/button/button";
import { GiftImg } from "@/public/assets/account";
import Image from "next/image";

const AddVoucher = () => {
  return (
    <div className="flex flex-col gap-8 w-full-h-auto">
      {/* Header */}
      <div className="w-full h-[200px] flex flex-col gap-4 px-6 pt-[44px] pb-12 bg-white">
        <Image src={GiftImg} alt="" width={44} height={44} />
        <h2 className="uppercase w-full font-bold text-[1.5rem]">
          Gift Cards And Vouchers
        </h2>
      </div>
      {/* End of Header */}

      <div className="flex flex-col px-10 py-[30px] gap-3 w-full bg-white">
        <h3 className="text-xl text-black font-bold">Add Gift Voucher</h3>
        <p className="text-base max-w-[90%]">
          Enter the voucher number from the email you received.
        </p>
        <form className="flex flex-col gap-3">
          <label htmlFor="main digit" className="flex flex-col gap-3">
            16 Digit Code
            <input
              id="main digit"
              type="text"
              required
              maxLength={16}
              placeholder="0000 0000 0000 0000"
              className="max-w-[90%] px-4 py-3 outline-none focus:outline-none focus:ring-0"
            />
          </label>

          <div className="w-fit pt-10">
            <Button
              text="Save Gift Voucher"
              variant="black"
              type="submit"
              size="small"
              customClassName="border border-[#AAAAAA] text-[#1a1a1a] text leading-5 "
              onClick={() => {}}
            />{" "}
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddVoucher;
