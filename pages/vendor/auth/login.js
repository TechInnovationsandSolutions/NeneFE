import { useForm } from "react-hook-form";
import Button from "@/components/button/button";
import { VendLogin } from "@/store/vendorSlice";
import { useDispatch } from "react-redux";
import Link from "next/link";
import Image from "next/image";
import HeroImg from "@/public/assets/vendor-onboard/login2bg.png";

const VendorLogin = () => {
  console.log(useForm);
  const dispatch = useDispatch();
  function handleLogin(data) {
    dispatch(VendLogin(data)).then((res) => console.log(res));
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div className="py-5 px-4 md:p-0    flex flex-col md:gap-5 md:grid grid-cols-2 ">
      <main className=" flex flex-col gap-8 md:py-5 md:px-8">
        <span className="font-alegreya">Nene</span>

        <div className="flex justify-between">
          <span className="font-bold">Sign In</span>
          <span className=" border border-transparent hover:border box-border  hover:border-solid hover:border-b-black ">
            {" "}
            <Link href="/vendor/auth/register"> Create Account </Link>{" "}
          </span>
        </div>

        <form
          className="flex flex-col gap-4"
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
            <Link href="/">Forgot Password</Link>
          </span>

          <Button type="submit" text="Sign In" variant="black" size="large" />
        </form>
      </main>
      <aside>
        <div className="col-span-3">
          <Image
            className="hidden md:flex md:h-[120vh] lg:h-[120vh] "
            objectFit="contain"
            src={HeroImg}
            alt="hero image"
          ></Image>
        </div>
      </aside>
    </div>
  );
};

export default VendorLogin;
