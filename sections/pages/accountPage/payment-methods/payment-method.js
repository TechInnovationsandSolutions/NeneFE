import Button from "@/components/button/button";
import { PaymentImg } from "@/public/assets/account";
import Image from "next/image";
import NoPaymentMethods from "./no-payment";
import Link from "next/link";
import { useState } from "react";
import { useContext } from "react";
import { stateContext } from "@/context/accountProvider";
import { closeIcon, pencilIcon, trashIcon } from "@/public/assets/svgs";
import AddPaymentMethod from "./add-payment";

const PaymentMethod = () => {
  const [defaultPaymentMethod, setDefaultPaymentMethod] = useState(null);
  const [addPayment, setAddPayment] = useState(false);
  const { paymentDetails, setPaymentDetails } = useContext(stateContext);

  return (
    <div className="w-full min-h-auto lg:min-h-[920px]  flex flex-col">
      {/* Header Section */}
      <div className="w-full px-6 pt-[44px] pb-[72.3px] mb-4 bg-white ">
        <Image src={PaymentImg} alt="" width={44} height={44} />
        <h2 className="uppercase w-full pt-5 font-bold text-[1.5rem]">
          PAYMENT METHODS
        </h2>
        <p className="w-full pt-4">
          Feel free to edit any of your details below.
        </p>
      </div>

      {/* Add Payment */}
      {addPayment && (
        <AddPaymentMethod closeModal={() => setAddPayment(false)} />
      )}

      {/* Payment Section */}
      <section className="flex flex-col gap-6 w-full h-auto min-h-[931px] bg-white py-12 px-6">
        {paymentDetails.length !== 0 ? (
          paymentDetails.map((payment) => {
            return (
              <div
                key={payment.id}
                className="w-full border border-[#c2c2c2] flex flex-col gap-6 py-5 px-6"
              >
                <section className="w-full h-auto flex flex-col lg:grid lg:grid-cols-4 gap-5 justify-between ">
                  <p className={textStyles}>{payment.name}</p>
                  <p className={`${textStyles} flex gap-1`}>
                    <span>
                      <Image src={payment.icon} alt="" width={22} height={22} />
                    </span>
                    {payment.method}
                  </p>
                  <p
                    className={`${textStyles}  flex flex-col lg:items-end gap-1`}
                  >
                    {payment.cardNum}
                    <span>{payment.cardDate}</span>
                  </p>
                  <div className="w-full flex flex-col gap-3 text-base lg:text-lg text-black justify-self-end items-center ">
                    <Link
                      href="/"
                      className="w-full flex gap-3 items-center lg:justify-end underline"
                    >
                      Edit Address
                      <Image src={pencilIcon} alt="" width={20} height={20} />
                    </Link>
                    <button
                      onClick={() => {
                        const index = paymentDetails.indexOf(payment);
                        setPaymentDetails((paymentDetails) => {
                          let removedItem = paymentDetails.splice(index, 1);
                          let newAddressBook = paymentDetails.filter(
                            (item) => item !== removedItem
                          );

                          return newAddressBook;
                        });
                      }}
                      className="w-full flex gap-3 lg:justify-end items-center underline"
                    >
                      Remove
                      <Image src={trashIcon} alt="" width={20} height={20} />
                    </button>
                  </div>
                </section>
                {defaultPaymentMethod === payment.id ? (
                  <p className="text-[15px] font-bold leading-5">
                    Preferred shipping address
                  </p>
                ) : (
                  <Button
                    text="Set as default"
                    variant="white"
                    type="button"
                    size="small"
                    onClick={() => setDefaultPaymentMethod(payment.id)}
                    customClassName="border border-black"
                  />
                )}
              </div>
            );
          })
        ) : (
          <NoPaymentMethods />
        )}
        <Button
          text="Add payment method +"
          variant="black"
          type="button"
          size="small"
          onClick={() => setAddPayment(true)}
        />
      </section>
    </div>
  );
};

export default PaymentMethod;
const textStyles = "text-base lg:text-lg text-black";
