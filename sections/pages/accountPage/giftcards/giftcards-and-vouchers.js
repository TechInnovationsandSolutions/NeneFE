import { stateContext } from "@/context/accountProvider";
import { GiftImg } from "@/public/assets/account";
import Image from "next/image";
import NoGiftsAndVouchers from "./nogiftcards";
import GiftsAndVouchersList from "./giftcardlist";
import { useContext } from "react";
import GiftHelp from "./gifthelp";

const GiftAndVouchers = () => {
  const { isGiftCards, setIsGiftCards } = useContext(stateContext);

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

      {isGiftCards ? <GiftsAndVouchersList /> : <NoGiftsAndVouchers />}

      <div className="pt-4">
        <GiftHelp />
      </div>
    </div>
  );
};

export default GiftAndVouchers;
