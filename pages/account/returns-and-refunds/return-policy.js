import OrderFaqLayout from "@/layout/order-faq";
import { useContext, useEffect, useState } from "react";
import { stateContext } from "@/context/accountProvider";
import { carretRightIcon } from "@/public/assets/svgs";

import Link from "next/link";
import Image from "next/image";

const ReturnPolicy = () => {
  const [items, setItems] = useState([]);
  const { returnsFaqList, setReturnsFaqList } = useContext(stateContext);

  // Load initial set of items
  useEffect(() => {
    const shuffled = returnsFaqList.sort(() => Math.random() - 0.5);
    const initialItems = shuffled.slice(0, 3);
    setItems(initialItems);
  }, [returnsFaqList]);

  return (
    <div className="w-full h-auto">
      <div className="w-full h-auto py-8 px-10 bg-white mb-5">
        <h2 className="text-xl font-medium pb-[46px] w-full text-center uppercase">
          WHAT IS YOUR RETURNS POLICY?
        </h2>

        <h3 className={listSubItemStyles}>Returning an unwanted item? </h3>
        <p className={listSubItemStyles}>
          We get it, sometimes something just doesn&apos;t work for you and you
          want your money back. Don&apos;t worry, as long as an item is still in
          its original condition, we accept returns, subject to the rules below,
          which includes rules around fair use. None of these rules affect your
          statutory rights.
        </p>

        <br />
        <h3 className={listSubItemStyles}>Returning from New Zealand? </h3>
        <p className={listSubItemStyles}>
          You will have 28 calendar days from the date your order is delivered
          to you or made available for collection to return your item(s). You
          can return your unwanted items via the Create a Return section of your
          ASOS Account. You will be refunded to your original payment method. A
          returns charge is payable and will be deducted from the refunded
          amount (subject to exclusions).
        </p>
        <br />
        <h3 className={listSubItemStyles}>
          Returning from Hong Kong or Switzerland?{" "}
        </h3>
        <p className={listSubItemStyles}>
          If you return an item requesting a refund within 28 days of the item
          being delivered to you or available for collection, we&apos;ll give
          you a full refund by way of the original payment method. Returning
          sale items from Hong Kong, New Zealand or Switzerland: If you have
          purchased an item that was in the sale (that means it had a
          red-penned, reduced price) you&apos;ll need to create a return and
          request a refund for your item within 14 days of it being delivered to
          you or becoming available for collection. You then need to ensure that
          you return the item to us within a further 14 days. Provided that we
          receive your item within 28 days of it being delivered to you or
          becoming available for collection, we will issue a refund to your
          original payment method.
        </p>
      </div>
      {/* Returns FAQ List Display */}
      <section className="flex flex-col w-full h-auto mb-5">
        {items.map((item) => {
          return (
            <Link
              href={`/account/where-is-my-order/${item.link}`}
              key={item.faqTitle}
              className="bg-white flex justify-between px-6 py-10 border-b border-[#d8d8d8] cursor-pointer"
            >
              <p className="text-[14px] lg:text-[18px] leading-[23px]">
                {item.faqTitle}
              </p>
              <Image
                src={carretRightIcon}
                alt=""
                className="w-auto h-auto"
                width={24}
                height={24}
              />
            </Link>
          );
        })}
      </section>
    </div>
  );
};

export default ReturnPolicy;

ReturnPolicy.getLayout = (page) => <OrderFaqLayout>{page}</OrderFaqLayout>;

const listSubItemStyles = "text-[16px] text-[#414141] leading-7 font-normal";
