import Button from "@/components/button/button";
import { GiftImg } from "@/public/assets/account";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

const NoGiftsAndVouchers = () => {
  const [showAddGiftBox, setShowAddGiftBox] = useState(false);
  const router = useRouter();
  return (
    <div>
      {showAddGiftBox ? (
        <div className="flex gap-10 bg-white justify-center items-center min-h-[504px]">
          <Button
            text="Gift Cards"
            variant="white"
            type="button"
            size="small"
            customClassName="border border-[#AAAAAA] text-[#1a1a1a] text leading-5 px-5 "
            onClick={() => {
              router.push("giftcards-and-vouchers/add-giftcard");
            }}
          />{" "}
          <Button
            text="Voucher"
            variant="white"
            type="button"
            size="small"
            customClassName="border border-[#AAAAAA] text-[#1a1a1a] text leading-5 px-5 "
            onClick={() => {
              router.push("giftcards-and-vouchers/add-voucher");
            }}
          />
        </div>
      ) : (
        <div className="flex flex-col gap-10 bg-white justify-center items-center min-h-[504px]">
          <Image src={GiftImg} width={100} height={80} alt="" />
          {/* Info */}
          <div className="flex flex-col gap-4 w-full items-center">
            <h3 className="font-bold text-[18px] leading-6 text-black text-center">
              You have no vouchers yet
            </h3>
            <p className="text-base leading-5 text-black text-center">
              Get started by reedeming or buying one now
            </p>
          </div>
          {/* Buttons */}
          <div className="flex flex-col gap-4 w-full items-center">
            <Button
              text="Add Gift Card/Voucher"
              variant="black"
              type="button"
              size="small"
              customClassName="border border-[#AAAAAA] text-[#1a1a1a] text leading-5 px-5"
              onClick={() => {
                setShowAddGiftBox(true);
              }}
            />
            <Button
              text="Buy Gift Card/Voucher"
              variant="white"
              type="button"
              size="small"
              customClassName="border border-[#AAAAAA] text-[#1a1a1a] text leading-5 px-5 "
              onClick={() => {
                setShowAddGiftBox(true);
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default NoGiftsAndVouchers;
