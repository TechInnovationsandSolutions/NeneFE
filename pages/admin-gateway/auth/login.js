import { useForm } from "react-hook-form";
import Button from "@/components/button/button";
import { VendLogin } from "@/store/vendorSlice";
import { useState } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import Link from "next/link";
import Image from "next/image";
import HeroImg from "@/public/assets/vendor-onboard/login2bg.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const VendorLogin = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const [submit, setSubmit] = useState(false);
  async function handleLogin(data) {
    try {
      const action = await dispatch(VendLogin(data));
      if (action.payload) {
        toast.success("Login Successful", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
        });
        router.push("/vendor/product");
        reset();
      } else {
        console.log(action);
        toast.error("Login Failed", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
        });
      }
    } catch (error) {
      console.log(error);
      toast.error("An error occurred", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
      });
    }
  }
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();
  return (
    <div className="py-5 px-4 md:p-0  ">
      <main className=" flex flex-col md:w-1/2 m-auto gap-12 md:py-5 md:px-12 ">
        <span className="font-alegreya">Nene</span>

        <div className="flex justify-between">
          <span className="font-bold">Log In</span>
        </div>

        <form
          className="flex flex-col gap-8"
          onSubmit={handleSubmit(handleLogin)}
        >
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
            <input
              placeholder="Enter Password"
              className="border rounded-md border-[#979797]"
              type="password"
              {...register("password", { required: true })}
            />
          </div>
          <Button
            type="submit"
            text={isSubmitting ? "Loading..." : "Log In"}
            variant="black"
            size="large"
          />

          <span className="text-center">
            <Link
              href="/"
              className="border border-transparent hover:border box-border  hover:border-solid hover:border-b-black "
            >
              Forgot Password ? Report.
            </Link>
          </span>
        </form>
      </main>
      <ToastContainer />
    </div>
  );
};

export default VendorLogin;
