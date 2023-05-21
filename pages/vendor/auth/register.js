import { useForm, Controller } from "react-hook-form";
import Button from "@/components/button/button";
import Link from "next/link";
import { useDispatch } from "react-redux";
import Image from "next/image";
import HeroImg from "@/public/assets/vendor-onboard/vendorloginBIG.png";
import { VendRegister } from "@/store/vendorSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ModalContainer from "@/components/modal/modalContainer";
import { useState } from "react";

const RegisterModal = ({ closeModal }) => {
  return (
    <div className="bg-white p-4 gap-4 w-[40%] h-fit flex flex-col justify-self-center self-center ">
      <div className="flex justify-between">
        <span>Account Pending</span>
        <span> X </span>
      </div>

      <p>
        Thank you for signing up with us. Your account is currently being
        reviewed and will be approved within 24 hours. You will receive an email
        notification once your account is approved.
      </p>
      <Button variant="black" onClick={closeModal} text="Okay" />
    </div>
  );
};

const VendorRegister = () => {
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();
  function handleLogin(data) {
    delete data.confirmPassword;
    dispatch(VendRegister(data))
      .then((res) => {
        console.log(res);
        toast.success(res?.payload?.data?.msg, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
        });
        res?.type.includes("fulfilled") && setShowModal(true);
      })
      .catch((err) => {
        console.log(err);
        toast.error(err, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000, // Duration in milliseconds
        });
      });
  }
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm();
  return (
    <div className="py-5 px-4 md:p-0 relative max-h-fit  flex flex-col md:gap-x-5 md:grid grid-cols-2 ">
      <main className=" flex flex-col gap-8 md:py-5 md:px-8">
        <span className="font-alegreya">Nene</span>
        <div className="flex justify-between">
          <span className="font-bold">Create Account</span>
          <span className=" border border-transparent hover:border box-border  hover:border-solid hover:border-b-black ">
            {" "}
            <Link href="/vendor/auth/login"> Sign In </Link>{" "}
          </span>
        </div>

        <form
          className="flex flex-col gap-4"
          onSubmit={handleSubmit(handleLogin)}
        >
          <div className="flex flex-col">
            <label htmlFor="">First Name</label>
            <input
              type="text"
              className="border rounded-md border-[#979797]"
              placeholder="Enter First Name"
              {...register("firstName", { required: true })}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Last Name</label>
            <input
              type="text"
              className="border rounded-md border-[#979797]"
              placeholder="Enter Last Name"
              {...register("lastName", { required: true })}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Name of Business</label>
            <input
              type="text"
              className="border rounded-md border-[#979797]"
              placeholder="Enter Business Name"
              {...register("businessName", { required: true })}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Address</label>
            <input
              type="text"
              className="border rounded-md border-[#979797]"
              placeholder="Enter Address"
              {...register("address", { required: true })}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Phone No.</label>
            <input
              type="tel"
              className="border rounded-md border-[#979797]"
              placeholder="Enter Phone Number"
              {...register("phone", { required: true })}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="">Email Address</label>
            <input
              placeholder="Enter Email Address"
              className="border rounded-md border-[#979797]"
              type="email"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span style={{ color: "red" }}>*Email* is mandatory </span>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Password</label>
            <Controller
              control={control}
              name="password"
              rules={{
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters long",
                },
              }}
              render={({ field }) => (
                <input
                  type="password"
                  placeholder="Enter Password"
                  className="border rounded-md border-[rgb(151,151,151)]"
                  {...field}
                />
              )}
            />
            {errors.password && (
              <p style={{ color: "red" }}>{errors.password.message}</p>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Confirm Password</label>
            <Controller
              name="confirmPassword"
              control={control}
              rules={{
                required: "Passwords do not match",
                validate: (value) => {
                  return (
                    value === watch("password") || "The passwords do not match"
                  );
                },
              }}
              render={({ field }) => (
                <input
                  type="password"
                  className="border rounded-md border-[#979797]"
                  placeholder="Confirm Password"
                  {...field}
                />
              )}
            />
            {errors.confirmPassword && (
              <p style={{ color: "red" }}>{errors.confirmPassword.message}</p>
            )}
          </div>
          <p>
            By creating an account, you agree to Nene’s Privacy Policy and
            &nbsp;<strong>Terms of Use</strong>
          </p>

          <Button type="submit" text="Register" variant="black" size="large" />
        </form>
      </main>
      <aside className="relative">
        <Image
          className="hidden w-full md:flex md:h-[150vh]  lg:h-[155vh] "
          // objectFit="contain"
          src={HeroImg}
          alt="hero image"
        ></Image>
      </aside>
      <ToastContainer />
      {showModal ? (
        <ModalContainer
          content={<RegisterModal closeModal={() => setShowModal(false)} />}
        />
      ) : null}
    </div>
  );
};

export default VendorRegister;
