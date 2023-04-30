import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";
import Button from "../button/button";
import { stateContext } from "../stateContext/stateProvider";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";

const SignIn = () => {
  const { isSignin, setIsSignin } = useContext(stateContext);
  const [activeTab, setActiveTab] = useState("createAcc");
  const schema = yup
    .object({
      firstName: yup.string().required(),
      lastName: yup.string().required(),
      email: yup.string().required(),
      address: yup.string().required(),
      password: yup
        .string()
        .required("Password is required")
        .min(6, "Password must be atleast 6 characters"),
      confirmPassword: yup
        .string()
        .required("Confirm Password is required")
        .oneOf([yup.ref("password")], "Password must be a match"),
    })
    .required();

  // React Hook Form Initialization

  const form = useForm({
    resolver: yupResolver(schema),
  });
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = form;

  const handleSignInSubmit = async (data) => {
    const userInfo = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
    };

    try {
      const res = await axios.post(
        "https://staging.nene.ng/api/buyers/register",
        userInfo
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-full h-screen bg-black/70 ml-0 flex justify-end items-center fixed top-0 left-0 z-10000">
      <div className="bg-white h-screen w-[80%] md:w-[50%] lg:w-[25rem] px-[1.25rem] pt-[1.5rem] pb-[3.4375rem] flex flex-col gap-[3rem] overflow-y-auto scrollbar-hide  ">
        {/* Header */}
        <div className="flex justify-between">
          <h1 className="text-black font-alegreya text-2xl font-normal leading-[2.0625rem]  ">
            Nene
          </h1>
          <button onClick={() => setIsSignin(false)}>
            <Image
              src="/assets/svgs/close icon.svg"
              width="24"
              height="24"
              alt=""
            />
          </button>
        </div>
        {/* Tabs */}
        <div className="flex ">
          <button
            onClick={() => {
              setActiveTab("createAcc");
            }}
            className={
              activeTab === "createAcc"
                ? `${baseTabStyle} ${activeTabStyle} `
                : `${baseTabStyle} ${inactiveTabStyle}`
            }
          >
            Create account
          </button>
          <button
            onClick={() => {
              setActiveTab("signin");
            }}
            className={
              activeTab === "signin"
                ? `${baseTabStyle} ${activeTabStyle} `
                : `${baseTabStyle} ${inactiveTabStyle}`
            }
          >
            Sign in
          </button>
        </div>

        {activeTab === "createAcc" ? (
          <>
            {/*  Register*/}

            <h2 className="text-black font-medium leading-[2.25rem] text-[1.75rem]">
              Let&apos;s get started
            </h2>
            {/* Form Fields */}
            <form
              onSubmit={handleSubmit(handleSignInSubmit)}
              className="flex flex-col"
            >
              {/* First Name */}
              <div className="flex flex-col w-full pb-[2.25rem]">
                <label className={`${formBaseTextStyle} ${labelTextStyle}`}>
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="Enter First Name"
                  {...register("firstName")}
                  className={`${formBaseTextStyle} ${inputTextStyle}`}
                />
                <p className="text-red-700"> {errors.firstName?.message} </p>
              </div>
              {/* Last Name */}
              <div className="flex flex-col w-full pb-[2.25rem]">
                <label className={`${formBaseTextStyle} ${labelTextStyle}`}>
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Enter Last Name"
                  {...register("lastName")}
                  className={`${formBaseTextStyle} ${inputTextStyle}`}
                />
                <p className="text-red-700"> {errors.lastName?.message} </p>
              </div>
              {/* Address */}
              <div className="flex flex-col w-full pb-[2.25rem]">
                <label className={`${formBaseTextStyle} ${labelTextStyle}`}>
                  Address
                </label>
                <input
                  type="text"
                  placeholder="Enter Address"
                  {...register("address")}
                  className={`${formBaseTextStyle} ${inputTextStyle}`}
                />
                <p className="text-red-700"> {errors.address?.message} </p>
              </div>
              {/* Email Address */}
              <div className="flex flex-col w-full pb-[2.25rem]">
                <label className={`${formBaseTextStyle} ${labelTextStyle}`}>
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter Email Address"
                  {...register("email")}
                  className={`${formBaseTextStyle} ${inputTextStyle}`}
                />
                <p className="text-red-700"> {errors.email?.message} </p>
              </div>
              {/* Password */}
              <div className="flex flex-col w-full pb-[2.25rem]">
                <label className={`${formBaseTextStyle} ${labelTextStyle}`}>
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  {...register("password")}
                  className={`${formBaseTextStyle} ${inputTextStyle}`}
                />
                <p className="text-red-700"> {errors.password?.message} </p>
              </div>
              {/* Confirm Password */}
              <div className="flex flex-col w-full pb-[2.25rem]">
                <label className={`${formBaseTextStyle} ${labelTextStyle}`}>
                  Confirm Password
                </label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  {...register("confirmPassword")}
                  className={`${formBaseTextStyle} ${inputTextStyle}`}
                />
                <p className="text-red-700">
                  {" "}
                  {errors.confirmPassword?.message}{" "}
                </p>
              </div>

              <div className="pt-[0.5rem] pb-5">
                <p className="text-[#585757] text-center text-[0.9375rem] ">
                  By creating an account, you agree to Nene’s{" "}
                  <Link href="/" className="text-black">
                    Privacy Policy
                  </Link>{" "}
                  and{" "}
                  <Link href="/" className="text-black">
                    Terms of Use
                  </Link>
                </p>
              </div>
              <Button
                text="Create account"
                type="submit"
                variant="black"
                size="big"
                disabled={isSubmitting}
              />
            </form>
          </>
        ) : (
          <>
            {/* Sign In */}

            <h2 className="text-black font-medium leading-[2.25rem] text-[1.75rem]">
              Welcome Back
            </h2>
            {/* Form Fields */}
            <form className="flex flex-col">
              {/* Email Address */}
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
              {/* Password */}
              <div className="flex flex-col w-full pb-[2.25rem]">
                <label className={`${formBaseTextStyle} ${labelTextStyle}`}>
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  className={`${formBaseTextStyle} ${inputTextStyle}`}
                />
              </div>
              <div className="pb-[3.21875rem]">
                <Link
                  href="/confirm-email"
                  className="text-black font-sans font-medium text-[1rem] leading-5 border-b-[1px] pb-1 border-black "
                >
                  {" "}
                  Forgot password?{" "}
                </Link>
              </div>
              <div className="flex gap-3 pb-[3rem] ">
                <input type="checkbox" className="w-[1rem] h-[1rem]" />{" "}
                <label>Stay signed in</label>
              </div>
              <Button text="Sign in" variant="black" size="big" type="submit" />
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default SignIn;

const baseTabStyle =
  "font-sans leading-[1.4375rem] text-xl pb-[1.0625rem] pt-[0rem] w-full border-b-[1.5px] ";
const inactiveTabStyle = "text-[#757575] border-[#757575] font-normal";
const activeTabStyle = "text-black border-black font-medium";

const formBaseTextStyle =
  "text-[1rem] leading-[1.3125rem] font-normal font-sans ";
const inputTextStyle =
  "text-[#979797] pt-[0.8125rem] pb-[0.875rem] px-[1rem] rounded border-[0.5px] border-[#979797] ";
const labelTextStyle = "text-black pb-[0.6875rem]";
