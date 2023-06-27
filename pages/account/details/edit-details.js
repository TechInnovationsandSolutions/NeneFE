import Image from "next/image";
import MyDetailsImg from "../../../public/assets/account/my_details.svg";
import { useContext, useEffect, useState } from "react";
import { stateContext } from "@/context/accountProvider";
import AccountPageLayout from "@/layout/account-pages";
import { eyeIcon } from "@/public/assets/svgs";
import { useForm } from "react-hook-form";
import Button from "@/components/button/button";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const EditDetails = () => {
  const { details, setDetails } = useContext(stateContext);
  const [hidePassword, setHidePassword] = useState(true);

  // yup schema setup for input fields for verifications
  const schema = yup
    .object({
      firstName: yup.string().required(),
      lastName: yup.string().required(),
      email: yup.string().required(),
      address: yup.string().required(),
      password: yup
        .string()
        .required("Password is required")
        .min(
          9,
          "Password must be atleast 9 characters, and must be Alphanumeric"
        ),
      confirmEmail: yup
        .string()
        .required("Confirm Password is required")
        .oneOf([yup.ref("email")], "Email must be a match"),
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

  // set values for input fields
  useEffect(() => {
    const formFieldNames = [
      "firstName",
      "lastName",
      "address",
      "email",
      "confirmEmail",
      "password",
    ];

    formFieldNames.forEach((field) => {
      const fieldValue = details[field];
      if (fieldValue) {
        setValue(field, fieldValue);
      }
    });
  }, [details, setValue]);

  // handle submit
  const submitHandler = (data, e) => {
    e.preventDefault();
    setDetails({ ...details, ...data });
    toast.success("Your details were updated Successfully");
    setTimeout(() => {
      // Code to execute after the specified delay
      router.push("/account/details");
    }, 2000);
  };

  // handle password visibility
  const handlePasswordVisibility = () => {
    setHidePassword((password) => {
      return !password;
    });
  };

  return (
    <div className="w-full min-h-auto lg:min-h-[920px]  flex flex-col">
      {/* Header Section */}
      <div className="w-full px-6 pt-[44px] pb-[72.3px] mb-4 bg-white ">
        <Image src={MyDetailsImg} alt="" width={44} height={44} />
        <h2 className="uppercase w-full pt-5 font-bold text-[1.5rem]">
          MY DETAILS
        </h2>
        <p className="w-full pt-4">
          Feel free to edit any of your details below.
        </p>
      </div>

      {/* Details Form */}
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="w-full h-auto min-h-[931px] flex flex-col gap-7 bg-white py-12 px-6"
      >
        {/* Name Fields */}
        <div className="w-full flex gap-4 flex-col md:flex-row justify-between">
          <label htmlFor="firstName" className="w-full flex flex-col gap-3">
            First Name
            <input
              {...register("firstName")}
              type="text"
              className="py-3 px-4"
            />
          </label>

          <label htmlFor="lastName" className="w-full flex flex-col gap-3">
            Last Name
            <input
              {...register("lastName")}
              type="text"
              className="py-3 px-4"
            />
          </label>
        </div>

        {/* Address */}
        <label htmlFor="address" className="w-full flex flex-col gap-3">
          Address
          <input type="text" {...register("address")} className="py-3 px-4" />
        </label>

        {/* Email */}
        <label htmlFor="email" className="w-full flex flex-col gap-3">
          Email Address
          <input type="text" {...register("email")} className="py-3 px-4" />
        </label>

        {/* Confirm Email */}
        <label htmlFor="confirmEmail" className="w-full flex flex-col gap-3">
          Confirm Email Address
          <input
            type="text"
            {...register("confirmEmail")}
            className="py-3 px-4"
          />
          <p className="text-red-700"> {errors.confirmEmail?.message} </p>
        </label>

        {/* Password */}
        <label htmlFor="password" className="w-full flex flex-col gap-3">
          Change Password
          <span className="w-full flex relative">
            <input
              type={hidePassword ? "password" : "text"}
              {...register("password")}
              className="w-full py-3 px-4"
            />
            <Image
              src={eyeIcon}
              alt=""
              onClick={handlePasswordVisibility}
              width={20}
              height={20}
              className="absolute w-auto h-auto cursor-pointer top-3 right-5"
            />
          </span>
        </label>

        <div className="w-full flex flex-col-reverse lg:flex-row gap-4 pt-7">
          <Button
            text="Cancel"
            variant="white"
            type="button"
            id="cancelBTN"
            size="small"
            onClick={() => router.push("/account/details")}
            customClassName="border border-black w-full"
          />
          <Button
            text="Save changes"
            variant="black"
            type="submit"
            id="saveBTN"
            size="small"
            customClassName="border border-black w-full"
          />
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

EditDetails.getLayout = (Page) => <AccountPageLayout>{Page}</AccountPageLayout>;

export default EditDetails;
