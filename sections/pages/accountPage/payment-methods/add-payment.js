import { closeIcon, eyeIcon, masterCardIcon } from "@/public/assets/svgs";
import Image from "next/image";
import { useContext } from "react";
import { stateContext } from "@/context/accountProvider";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/router";
import Button from "@/components/button/button";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ChangePasswordImg } from "@/public/assets/account";

const AddPaymentMethod = ({ closeModal }) => {
  const [hideCard, setHideCard] = useState(true);
  const { paymentDetails, setPaymentDetails } = useContext(stateContext);

  // yup schema setup for input fields for verifications
  const schema = yup
    .object({
      cardNum: yup
        .string()
        .required()
        .max(16, "Card number should be up to 16 digits"),
      cardDate: yup.string().required(),
      cardCode: yup.string().required(),
    })
    .required();

  // router
  const router = useRouter();

  // React Hook Form Initialization
  const form = useForm({
    resolver: yupResolver(schema),
  });

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = form;

  // handle submit
  const submitHandler = (data, e) => {
    e.preventDefault();
    const cardNumber = data.cardNum.split("").splice(0, 4).join("");
    const hiddenCard = cardNumber + "**** **** ****";

    const paymentData = {
      name: "Johnny Depp",
      id: Math.floor(Math.random() * 100),
      method: "Credit Card",
      icon: masterCardIcon,
      cardNum: hiddenCard,
      cardDate: data.cardDate,
      cardCode: data.cardCode,
    };
    setPaymentDetails([...paymentDetails, paymentData]);
    closeModal();
    toast.success("Your details were updated Successfully");
    setTimeout(() => {
      // Code to execute after the specified delay
      router.push("/account/payment");
    }, 2000);
  };

  // handle password visibility
  const handleCardVisibility = () => {
    setHideCard((show) => {
      return !show;
    });
  };

  return (
    <section className="w-full fixed top-0 left-0 h-screen bg-[#1010108c] flex justify-center items-center">
      <div className="w-[95%] lg:w-[44%] h-auto lg:min-h-[630px] py-6 lg:pt-10 lg:pb-12 px-5 lg:px-[3.5rem] bg-white">
        <div className="w-full flex justify-between">
          <h2 className=" text-[20px] leading-[26px] lg:text-[32px] lg:leading-[42px] text-black ">
            Add payment method
          </h2>
          <Image
            src={closeIcon}
            alt=""
            width={24}
            height={24}
            onClick={() => closeModal()}
          />
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit(submitHandler)}
          className="w-full h-auto flex flex-col gap-5 lg:gap-7 bg-white py-6 px-6"
        >
          {/* Card Number */}
          <label
            htmlFor="cardNum"
            className="w-full flex flex-col gap-2 lg:gap-3"
          >
            Card number
            <span className="w-full flex relative">
              <input
                type={hideCard ? "password" : "text"}
                {...register("cardNum")}
                id="cardNum"
                maxLength={16}
                className="w-full py-3 px-4"
              />
              <Image
                src={ChangePasswordImg}
                alt=""
                onClick={handleCardVisibility}
                width={20}
                height={20}
                className="absolute w-auto h-auto cursor-pointer top-3 right-5"
              />
            </span>
          </label>

          <div className="w-full flex gap-4 flex-col xl:flex-row justify-between">
            <label
              htmlFor="cardDate"
              className="w-full flex flex-col gap-2 lg:gap-3"
            >
              Expiration date
              <input
                {...register("cardDate")}
                type="text"
                id="cardDate"
                placeholder="MM/YY"
                className="py-3 px-4"
              />
            </label>

            <label
              htmlFor="cardCode"
              className="w-full flex flex-col gap-2 lg:gap-3"
            >
              Security code
              <input
                {...register("cardCode")}
                type="text"
                id="cardCode"
                className="py-3 px-4"
                placeholder="XXX"
                maxLength={3}
              />
            </label>
          </div>

          <Button
            text="Add Billing Address"
            variant="white"
            type="button"
            id="addBilling"
            size="small"
            onClick={() => router.push("/account/address-book")}
            customClassName="border border-black "
          />
          <label htmlFor="checkBilling" className="w-full flex gap-3">
            <input type="checkbox" name="" {...register("checkBilling")} />
            Billing address same as default shipping
          </label>
          <label htmlFor="setDefault" className="w-full flex gap-3">
            <input type="checkbox" name="" {...register("setDefault")} />
            Set as default payment method
          </label>

          <div className="w-full flex flex-col-reverse lg:flex-row gap-4 pt-3">
            <Button
              text="Save"
              variant="black"
              type="submit"
              id="saveBTN"
              size="small"
              customClassName="border border-black "
            />
          </div>
        </form>
        <ToastContainer />
      </div>
    </section>
  );
};

export default AddPaymentMethod;
