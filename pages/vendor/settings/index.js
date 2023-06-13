import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Button from "@/components/button/button";

const CustomCheckbox = ({ label, checked }) => {
  const [isChecked, setIsChecked] = useState(false);
  const onChange = (e) => {
    setIsChecked(e.target.checked);
    console.log("Checkbox icon clicked", isChecked, e.target.checked);
    // Perform the desired action or event handling
  };
  return (
    <div className="flex items-center justify-between ">
      <span className="w-4/5"> {label}</span>
      <label className="">
        <input
          type="checkbox"
          className=" z-[-1] hidden absolute  w-[50px] h-[24px] ml-auto "
          onChange={onChange}
        />
        <span className="rounded-xl cursor-pointer px-1 flex  border w-[50px]  py-1 ">
          <svg
            width="14"
            className={`${
              isChecked ? "translate-x-[25px]  transition-transform " : ""
            }`}
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.333313"
              y="0.333252"
              width="13.3333"
              height="13.3333"
              rx="6.66667"
              fill={isChecked ? "green" : "#A9A9A9"}
            />
          </svg>
        </span>
      </label>
    </div>
  );
};

const Settings = () => {
  const items = ["Store settings", "Password", "Notifications", "Payment"];
  const [itemClick, setItemClick] = useState(0);
  const {
    register,
    handleSubmit,
    control,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  return (
    <main className=" px-4 md:px-8">
      <h1 className="text-2xl font-bold py-4">Settings</h1>
      <div className=" w-full md:w-4/5 border-b flex overflow-x-auto whitespace-nowrap md:overflow-x-hidden gap-4 justify-between pr-4 border-[#EBEBEB] ">
        {items.map((item, index) => {
          return (
            <span
              onClick={() => setItemClick(index)}
              className={`${
                index === itemClick
                  ? "border-b px-4 transition-all duration-700  border-b-black"
                  : "border-b-transparent"
              }  text-[14px] text-[#858585]  cursor-pointer flex flex-shrink-0 w-fit `}
              key={index}
            >
              {item}
            </span>
          );
        })}
      </div>

      {itemClick === 0 ? (
        <div className="flex flex-col md:flex-row py-8 md:pl-8 gap-8 ">
          <section className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <span className="text-[#767676]">Logo</span>
              <figure className="border flex rounded justify-center w-full md:w-[200px] h-[150px] border-[#AFAFAF] ">
                <img src="/assets/svgs/uploadIcon.svg" alt="" />
              </figure>

              <Button
                text="Upload Logo"
                customClassName=" w-full md:w-[200px]"
                variant="black"
              />
              <Button
                text="Remove Logo"
                customClassName="border  w-full md:w-[200px] border-[#AFAFAF]"
                variant="white"
              />
            </div>
            <div className="flex flex-col   gap-2">
              <span className="text-[#767676]">Display Image</span>
              <figure className="border flex rounded  justify-center  w-full md:w-[200px] h-[150px] border-[#AFAFAF] ">
                <img src="/assets/svgs/uploadIcon.svg" alt="" />
              </figure>

              <Button
                text="Upload Photo"
                customClassName=" w-full md:w-[200px]"
                variant="black"
              />
              <Button
                text="Remove Photo"
                customClassName="border  w-full md:w-[200px] border-[#AFAFAF]"
                variant="white"
              />
            </div>
          </section>
          <section className=" w-full md:w-3/5 md:px-8 ">
            <span className="text-[#767676]">Store Details</span>
            <form
              className="flex gap-8  flex-col "
              // onSubmit={handleSubmit(handleLogin)}
            >
              <section className="flex flex-col gap-4">
                <div className="flex flex-col gap-3 ">
                  <label htmlFor="">Store Name</label>
                  <input
                    type="text"
                    className="border rounded-md  border-[#979797]"
                    {...register("storeName", { required: true })}
                  />
                </div>
                <div className="flex flex-col gap-3 ">
                  <label htmlFor="">Email Address</label>
                  <input
                    type="email"
                    className="border rounded-md  border-[#979797]"
                    {...register("email", { required: true })}
                  />
                </div>
                <div className="flex flex-col gap-3 ">
                  <label htmlFor="">Store Description</label>
                  <textarea
                    type="text"
                    className="border rounded-md  border-[#979797]"
                    {...register("businessName", { required: true })}
                  />
                </div>
              </section>

              <section className="flex  justify-between gap-4 flex-wrap">
                <span className="w-full  text-[#767676] ">
                  Social Media Links
                </span>
                <div className="flex gap-3 w-full md:w-[45%] flex-col">
                  <label htmlFor="">Instagram URL</label>
                  <input
                    type="text"
                    className="border rounded-md  border-[#979797]"
                    {...register("instaUrl", { required: true })}
                  />
                </div>
                <div className="flex gap-3 w-full md:w-[45%]  flex-col">
                  <label htmlFor="">Twitter URL</label>
                  <input
                    type="text"
                    className="border rounded-md  border-[#979797]"
                    {...register("twiterUrl", { required: true })}
                  />
                </div>

                <div className="flex gap-3  w-full md:w-[45%] flex-col">
                  <label htmlFor="">Facebook URL</label>
                  <input
                    className="border rounded-md  border-[#979797]"
                    type="email"
                    {...register("fbUrl", { required: true })}
                  />
                </div>
                <div className="flex gap-3 w-full md:w-[45%] flex-col">
                  <label htmlFor="">TikTok URL </label>
                  <input
                    type="text"
                    className="border rounded-md  border-[#979797]"
                  />
                </div>
                <div className="flex gap-3 w-full md:w-[45%] flex-col">
                  <label htmlFor="">Snapchat URL</label>
                  <input
                    type="text"
                    className="border rounded-md  border-[#979797]"
                  />
                </div>
              </section>
              {/* <Button
            type="submit
            text={isSubmitting ? "Loading..." : "Register"}
            variant="black"
            size="large"
          /> */}
            </form>
          </section>
        </div>
      ) : null}
      {itemClick === 1 ? (
        <div className=" md:pl-[7em] py-6 md:w-4/5">
          <span className="font-bold">Reset Password</span>

          <section>
            <form action="" className="flex flex-col gap-4 ">
              <div className="flex flex-col gap-3 ">
                <label htmlFor="">Current Password</label>
                <input
                  type="password"
                  className="border rounded-md  border-[#979797]"
                  {...register("email", { required: true })}
                />
              </div>

              <div className="flex flex-col  gap-3 ">
                <label htmlFor="">New Password</label>
                <div className="flex border pl-1 pr-2 items-center rounded-md w-full  border-[#979797]">
                  <input
                    type="password"
                    className="outline-0  ring-0 ring-white focus:ring-0 border-0 w-full"
                    {...register("storeName", { required: true })}
                  />
                  <span>
                    <img src="/assets/svgs/showpass.svg" alt="" />
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-3 ">
                <label htmlFor="">Confirm Password</label>
                <div className="flex border pl-1 pr-2 items-center rounded-md w-full  border-[#979797]">
                  <input
                    type="password"
                    className="border-0 w-full focus:ring-0 outline-0"
                    {...register("email", { required: true })}
                  />
                  <span>
                    <img src="/assets/svgs/showpass.svg" alt="" />
                  </span>
                </div>
              </div>
            </form>
          </section>
        </div>
      ) : null}

      {itemClick === 2 ? (
        <div className="py-4 flex flex-col gap-4 ">
          <span>Manage your business notifications here.</span>
          <form action="" className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <span className="text-[#858585]">Your Notifications</span>
              <div>
                <CustomCheckbox label="Receive email notifications for every sale." />
              </div>
              <div>
                <CustomCheckbox label="Receive email notifications when product is rated." />
              </div>
              <div>
                <CustomCheckbox label="Receive email notifications for abandoned transactions." />
              </div>
              <div>
                <CustomCheckbox label="Receive email notifications for comments and replies." />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-[#858585]">Custom Notifications</span>
              <div>
                <CustomCheckbox label="Send email receipts to customers for their purchase." />
              </div>
              <div>
                <CustomCheckbox label="Send customer automated follow up emails for abandoned transactions." />
              </div>
            </div>

            <Button
              variant="black"
              customClassName="w-full md:w-fit "
              text="Update"
            />
          </form>
        </div>
      ) : null}
    </main>
  );
};

export default Settings;
