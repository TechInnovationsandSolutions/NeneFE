import OrderFaqLayout from "@/layout/order-faq";
import { useContext, useEffect, useState } from "react";
import { stateContext } from "@/context/accountProvider";
import { carretRightIcon } from "@/public/assets/svgs";

import Link from "next/link";
import Image from "next/image";

const FAQ_1 = () => {
  const [items, setItems] = useState([]);
  const { faqList, setFaqList } = useContext(stateContext);

  // Load initial set of items
    useEffect(() => {
      const shuffled = faqList.sort(() => Math.random() - 0.5)
    const initialItems = shuffled.slice(0, 3);
    setItems(initialItems);
  }, [faqList]);

  
    return (
      <div className="w-full h-auto">
        <div className="w-full h-auto py-8 px-10 bg-white mb-5">
          <h2 className="text-xl font-medium pb-[46px] w-full text-center uppercase">
            Where is my order?
          </h2>
          <ol className="list-decimal flex flex-col gap-7">
            <li className={listItemStyles}>
              Track your order
              <ul className="list-disc list-inside">
                <li className={listSubItemStyles}>
                  Go to &lsquo;My Orders&lsquo; and select the order you want to
                  track.
                </li>
                <li className={listSubItemStyles}>
                  {" "}
                  Select the ‘Track Parcel’ button to track your parcel.
                </li>
              </ul>
            </li>
            <li className={listItemStyles}>
              Check the estimated delivery date
              <ul className="list-disc list-inside">
                <li className={listSubItemStyles}>
                  You’ll find this date in your Order Confirmation email and in
                  &lsquo;My Orders&lsquo;.
                </li>
                <li className={listSubItemStyles}>
                  Remember, this date is an estimate, so your order may arrive
                  before, on, or slightly after your estimated delivery date.*
                  To see the progress of your order, check your tracking.
                </li>
              </ul>
              <p className={listSubItemStyles}>
                {" "}
                If the tracking doesn’t show any updates or is blank, don&apos;t
                worry! Please wait until your estimated delivery date. There may
                be a delay with your tracking being updated, but it should
                update soon.
              </p>
            </li>
            <li className={listItemStyles}>
              I&apos;m still waiting for my order
              <p className={listSubItemStyles}>
                Waited until your estimated delivery date? Please wait a few
                extra days for your order to be delivered (especially during
                busy times) - our carriers are always doing their best to get
                your order to you. Make sure you check your tracking link for
                the latest updates.
              </p>
            </li>
          </ol>
        </div>
        {/* FAQ List Display */}
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

export default FAQ_1;

FAQ_1.getLayout = (page) => <OrderFaqLayout>{page}</OrderFaqLayout>;

const listItemStyles = "text-[20px] text-black leading-9 font-medium";
const listSubItemStyles = "text-[16px] text-[#414141] leading-7 font-normal";
