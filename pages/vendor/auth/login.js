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
    <div className="py-5 px-4 md:p-0  flex flex-col md:flex-row ">
      <main className=" flex flex-col w-3/5 gap-12 md:py-5 md:px-12 " >
        <span className="font-alegreya">Nene</span>

        <div className="flex justify-between">
          <span className="font-bold">Sign In</span>
          <span className=" border border-transparent hover:border box-border  hover:border-solid hover:border-b-black ">
            {" "}
            <Link href="/vendor/auth/register"> Create Account </Link>{" "}
          </span>
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
          <span>
            <Link
              href="/"
              className="border border-transparent hover:border box-border  hover:border-solid hover:border-b-black "
            >
              Forgot Password
            </Link>
          </span>

          <Button
            type="submit"
            text={isSubmitting ? "Loading..." : "Sign In"}
            variant="black"
            size="large"
          />
        </form>
      </main>
      <aside className="w-[49%]" >
        <div className=" ml-auto ">
          <Image
            className="hidden ml-auto object-fill  md:flex md:h-[120vh]"
            src={HeroImg}
            alt="hero image"
          ></Image>
        </div>
      </aside>
      <ToastContainer />
    </div>
  );
};

export default VendorLogin;
