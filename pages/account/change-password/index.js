import Button from "@/components/button/button";
import { ChangePasswordImg } from "@/public/assets/account";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { stateContext } from "@/context/accountProvider";
import { eyeIcon } from "@/public/assets/svgs";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import AccountPageLayout from "@/layout/account-pages";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ChangePassword = () => {
  const { details, setDetails } = useContext(stateContext);
  const [hidePassword, setHidePassword] = useState(true);
  const [hideNewPassword, setHideNewPassword] = useState(true);

  // router
  const router = useRouter();

  // React Hook Form Initialization
  const form = useForm();
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = form;

  useEffect(() => {
    const formFieldNames = ["password"];

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

    setDetails((details) => {
      details = {
        ...details,
        password: data.newPassword,
      };

      return details;
    });

    toast.success("Password Changed Successfully");
    setTimeout(() => {
      // Code to execute after the specified delay
      router.push("/account/details");
    }, 2000);
  };

  // handle current password visibility
  const handleCurrentPasswordVisibility = () => {
    setHidePassword((password) => {
      return !password;
    });
  };

  // handle new password visibility
  const handleNewPasswordVisibility = () => {
    setHideNewPassword((password) => {
      return !password;
    });
  };

  return (
    <div className="w-full min-h-auto lg:min-h-[920px]  flex flex-col">
      {/* Header Section */}
      <div className="w-full px-6 pt-[44px] pb-[72.3px] mb-4 bg-white ">
        <Image src={ChangePasswordImg} alt="" width={44} height={44} />
        <h2 className="uppercase w-full pt-5 font-bold text-[1.5rem]">
          CHANGE PASSWORD
        </h2>
        <p className="w-full pt-4">
          Feel free to edit any of your details below.
        </p>
      </div>

      {/* Change Password Section */}
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="flex flex-col w-full h-auto min-h-auto bg-white py-12 px-6 gap-7 lg:min-h-[931px]"
      >
        {/*Current Password */}
        <label htmlFor="password" className="w-full flex flex-col gap-3">
          Current Password
          <span className="w-full flex relative">
            <input
              type={hidePassword ? "password" : "text"}
              {...register("password")}
              className="w-full py-3 px-4"
            />
            <Image
              src={eyeIcon}
              alt=""
              onClick={handleCurrentPasswordVisibility}
              width={20}
              height={20}
              className="absolute w-auto h-auto cursor-pointer top-3 right-5"
            />
          </span>
        </label>
        {/* New Password */}
        <label htmlFor="newPassword" className="w-full flex flex-col gap-3">
          New Password
          <span className="w-full flex relative">
            <input
              type={hideNewPassword ? "password" : "text"}
              {...register("newPassword", {
                required: "set your new password",
              })}
              className="w-full py-3 px-4"
            />
            <Image
              src={eyeIcon}
              alt=""
              onClick={handleNewPasswordVisibility}
              width={20}
              height={20}
              className="absolute w-auto h-auto cursor-pointer top-3 right-5"
            />
          </span>
          <p className="text-red-700">{errors.newPassword?.message}</p>
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
        <ToastContainer />
      </form>
    </div>
  );
};

ChangePassword.getLayout = (Page) => (
  <AccountPageLayout>{Page}</AccountPageLayout>
);

export default ChangePassword;
