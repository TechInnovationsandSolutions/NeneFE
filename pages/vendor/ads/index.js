import React, { useState } from "react";
import vendImg1 from "@/public/assets/svgs/vendorads1.svg";
import vendImg2 from "@/public/assets/svgs/vendorads2.svg";
import vendImg3 from "@/public/assets/svgs/vendorads3.svg";
import Button from "@/components/button/button";
import ModalContainer from "@/components/modal/modalContainer";
import { useForm } from "react-hook-form";

const Rates = () => {
  const rates = [
    { display: "5 times per month", price: "$500" },
    { display: "6 times per month", price: "$600" },
    { display: "8 times per month", price: "$800" },
    { display: "10 times per month", price: "$1000" },
  ];
  return (
    <section className="flex flex-col gap-4">
      <span className="font-bold">All Rates</span>
      <div>
        <div className="bg-vendorBoxGray text-[#3E3E3E] py-2 px-8 md:justify-around flex justify-between">
          <span>DISPLAY</span>
          <span>PRICE</span>
        </div>
        <div>
          <ul className=" flex gap-2 flex-col ">
            {rates.map((rate, index) => {
              return (
                <li
                  className="py-2 pl-2 py-4 border-b border-[#D1D1D1] md:justify-around  pr-6 justify-between flex"
                  key={index}
                >
                  <span>{rate.display}</span>
                  <span>{rate.price}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};
const AdsModal = ({ closeModal }) => {
  function handleCloseModal() {
    // router.push("/vendor/auth/login");
  }
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  return (
    <div className="bg-white p-4 gap-4 w-[90%] md:w-[40%]  h-fit flex flex-col justify-self-center self-center ">
      <div className="flex justify-between">
        <span>Enable Ads</span>
        <span onClick={closeModal}>
          {" "}
          <svg
            className=""
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="21"
          >
            <g fill="#717171" fill-rule="evenodd">
              <path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z" />
              <path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z" />
            </g>
          </svg>{" "}
        </span>
      </div>
      <form
        className="flex flex-col gap-6"
        // onSubmit={handleSubmit(handleLogin)}
      >
        <div className="flex flex-col">
          <label htmlFor="">Category</label>
          <select
            className="border text-[#979797] rounded-md border-[#979797]"
            {...register("category", { required: true })}
          >
            <option value="" selected disabled>
              {" "}
              Select a category{" "}
            </option>
          </select>
          {errors.email && (
            <span style={{ color: "red" }}>*Email* is mandatory </span>
          )}
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Name</label>
          <select
            className="border text-[#979797] rounded-md border-[#979797]"
            {...register("name", { required: true })}
          >
            <option value="" selected disabled>
              {" "}
              Select a Product{" "}
            </option>
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Location</label>
          <select
            className="border text-[#979797] rounded-md border-[#979797]"
            {...register("location", { required: true })}
          >
            <option value="" selected disabled>
              Choose Ads Location{" "}
            </option>
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Rate</label>
          <select
            className="border text-[#979797] rounded-md border-[#979797]"
            {...register("rate", { required: true })}
          >
            <option value="" selected disabled>
              {" "}
              Select a Rate{" "}
            </option>
          </select>
        </div>

        <span></span>

        <Button
          type="submit"
          text={isSubmitting ? "Loading..." : "Promote"}
          variant="black"
          size="large"
        />
      </form>
    </div>
  );
};

const VendorAds = () => {
  const [showRates, setShowRates] = useState(false);
  const [promoteModalShow, setPromoteModalShow] = useState(false);
  return (
    <main className="px-8 flex flex-col py-4 gap-4">
      <h1 className="text-2xl font-bold">Enable Ads</h1>

      <section className="flex flex-col w-full md:justify-between  md:flex-row gap-2">
        <div className=" flex w-full flex-col items-center py-8 gap-2 bg-vendorBoxGray">
          <img src={vendImg1.src} alt="" />
          <div className="flex flex-col gap-2">
            <span className="text-center">TOTAL VIEWS</span>
            <span className="text-center text-3xl">500,000</span>
          </div>
        </div>
        <div className="flex flex-col w-full items-center py-8 gap-2 bg-vendorBoxGray">
          <img src={vendImg2.src} alt="" />
          <div className="flex flex-col gap-2">
            <span>VIEWS BY ADS</span>
            <span className="text-center text-3xl">400,000</span>
          </div>
        </div>
        <div className="flex flex-col w-full items-center py-8 gap-2 bg-vendorBoxGray">
          <img src={vendImg3.src} alt="" />
          <div className="flex flex-col gap-2">
            <span>CLICKS VIA ADS</span>
            <span className="text-center text-3xl">300,000</span>
          </div>
        </div>
      </section>

      {showRates ? (
        <div
          className="flex gap-2 cursor-pointer items-center w-fit "
          onClick={() => setShowRates(false)}
        >
          <span className=" text-2xl font-bold"> &lt;</span>
          <span className="font-bold">Back</span>
        </div>
      ) : (
        <section className="flex flex-col md:gap-4">
          <span className="font-bold">Your uploads</span>
          <div className="flex justify-between gap-8 relative flex-col md:flex-row  ">
            <div className="w-[60%] flex   px-2 bg-transparent md:bg-vendorBoxGray">
              {" "}
              <input
                type="search"
                className="bg-inherit hidden md:flex  border-none outline-none w-full "
                placeholder="Search"
              />
              <button className="absolute md:static right-0 -top-5 ">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11V11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z"
                    fill="#585757"
                  />
                </svg>
              </button>
            </div>

            <div className="flex w-full md:w-2/5 gap-4 justify-between ">
              <button
                onClick={() => setPromoteModalShow(true)}
                className="px-1 text-sm w-1/2  py-1 rounded bg-black text-white "
              >
                Promote a Product{" "}
              </button>
              <button
                onClick={() => setShowRates(true)}
                className="px-2 py-2 w-1/2  text-sm rounded border border-[#AFAFAF] bg-white text-black "
              >
                View all rates{" "}
              </button>
            </div>
          </div>
        </section>
      )}

      {showRates ? (
        <Rates />
      ) : (
        <section className="mt-5 flex flex-col gap-4 ">
          <p className="text-[#5C5C5C]">
            Select a product from the categories to promote
          </p>

          <div className="flex flex-col md:justify-between gap-4 md:flex-row flex-wrap">
            <span className="border  md:w-[48%] py-4 text-center border-[#B5B5B5]">
              ACCESSORIES
            </span>
            <span className="border md:w-[48%] py-4 text-center border-[#B5B5B5]">
              DRESSES
            </span>
            <span className="border md:w-[48%] py-4 text-center border-[#B5B5B5]">
              SHOES
            </span>
          </div>
        </section>
      )}
      {promoteModalShow ? (
        <ModalContainer
          content={<AdsModal closeModal={() => setPromoteModalShow(false)} />}
        />
      ) : null}
    </main>
  );
};

export default VendorAds;
