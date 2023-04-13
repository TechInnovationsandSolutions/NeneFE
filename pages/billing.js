import Button from "@/components/button/button";
import ProductImg from "../public/assets/billing/billingImg.png";
import Image from "next/image";

const Billing = () => {
  const cartItems = [
    {
      id: 1,
      img: ProductImg,
      title: "Zara Twist Front Textured Slinky Ruched Midi Dress",
      color: "Black",
      size: 6,
      quantity: 1,
      price: "3,000",
    },
    {
      id: 2,
      img: ProductImg,
      title: "Zara Twist Front Skirt",
      color: "Blue",
      size: 4,
      quantity: 1,
      price: "4,000",
    },
    {
      id: 3,
      img: ProductImg,
      title: "Zara Twist Front Textured Top",
      color: "Pink",
      size: 5,
      quantity: 1,
      price: "2,000",
    },
  ];
  return (
    <div className="w-full h-auto flex flex-col px-[6.25rem] justify-center items-center ">
      <h1 className="font-sans font-bold text-[1.5rem] leading-8 text-center py-[2.5rem] text-[#3E3E3E] w-full ">
        Billing & Payment
      </h1>
      <div className="w-full h-auto flex flex-col gap-[6.5625rem] lg:flex-row ">
        {/* Adrress Section */}
        <section className="w-full h-auto flex flex-col">
          {/* Delivery Adrress Section */}
          <h2 className={sectionHeadingStyle}>Delivery Address</h2>
          <div className="flex flex-col px-[1.875rem] pt-[1.875rem] pb-[3.125rem] ">
            <p className={paraText}>Feranmi Olowookere</p>
            <p className={paraText}>56, Promise Road, Ikeja, Lagos</p>
            <p className={paraText}>Lagos, Nigeria</p>
            <p className={paraText}>+2348129086629</p>
          </div>
          {/* Billing Adrress Section */}
          <h2 className={sectionHeadingStyle}>Billing Address</h2>
          <form className="flex flex-col w-full gap-[25px] pt-[2.8125rem] pb-[3.125rem] ">
            {/* Name */}
            <div className="flex flex-col">
              <label className="text-[#3E3E3E] text-[1.125rem] font-normal pb-[10px] ">
                Contact Name
              </label>
              <input
                className="w-full pt-[0.75rem] pb-[0.6875rem] px-[1.25rem] border rounded-md placeholder-black"
                type="text"
                placeholder="Feranmi Olowookere"
              />
            </div>
            {/* Street Address */}
            <div className="flex flex-col">
              <label className="text-[#3E3E3E] text-[1.125rem] font-normal pb-[10px] ">
                Street Address
              </label>
              <input
                className="w-full pt-[0.75rem] pb-[0.6875rem] px-[1.25rem] border rounded-md placeholder-black"
                type="text"
                placeholder="56, Promise Road, Ikeja, Lagos, Nigeria
                10001"
              />
            </div>
            {/* Country */}
            <div className="flex flex-col">
              <label className="text-[#3E3E3E] text-[1.125rem] font-normal pb-[10px] ">
                Country
              </label>
              <input
                className="w-full pt-[0.75rem] pb-[0.6875rem] px-[1.25rem] border rounded-md placeholder-black"
                type="text"
                placeholder="Nigeria"
              />
            </div>
            {/* Phone Number */}
            <div className="flex flex-col">
              <label className="text-[#3E3E3E] text-[1.125rem] font-normal pb-[10px] ">
                Phone Number
              </label>
              <input
                className="w-full pt-[0.75rem] pb-[0.6875rem] px-[1.25rem] border rounded-md placeholder-black"
                type="number"
                placeholder="+2348129086629"
              />
            </div>
          </form>
        </section>
        {/* Order Summary Section */}
        <section className="w-full h-auto flex flex-col">
          <div className="w-full h-auto py-[0.4375rem] px-[1.875rem] bg-[#E8E8E8] flex justify-between items-center">
            {/* Section Heading */}
            <h2 className="font-bold text-[1.125rem] text-[#3E3E3E]">
              Order Summary
            </h2>
            <Button
              text="Edit Bag"
              variant="black"
              type="button"
              size="small"
            />
          </div>
          {/* All Order Infos */}
          <div className="w-full max-h-[350px] overflow-y-scroll pt-[2rem] ">
            {/* Individual Order Information */}
            {cartItems.map((item) => {
              return (
                <div
                  key={item.id}
                  className="flex gap-[1.5625rem] pb-[3rem] pr-4 "
                >
                  <Image src={item.img} width={182} height={226} alt="" />
                  <div className="flex flex-col pt-8 max-w-[60%] w-full ">
                    <h3 className="text-[18px] font-sans font-normal pb-[1.875rem] ">
                      {item.title}
                    </h3>
                    {/* Extra Info */}
                    <div className="flex justify-between items-end">
                      <div className="">
                        <p>
                          {" "}
                          <span>
                            <b>Color:</b>
                          </span>{" "}
                          {item.color}
                        </p>
                        <p>
                          {" "}
                          <span>
                            {" "}
                            <b>UK Size:</b>
                          </span>{" "}
                          {item.size}
                        </p>
                        <p>
                          {" "}
                          <span>
                            <b>Quantity:</b>
                          </span>{" "}
                          {item.quantity}
                        </p>
                      </div>
                      {/* Price */}
                      <p>N {item.price}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Billing;

const sectionHeadingStyle =
  "w-full h-auto py-[1.1875rem] px-[1.875rem] bg-[#E8E8E8] font-bold text-[1.125rem] text-[#3E3E3E] ";
const paraText =
  "font-sans font-normal text-[1.125rem] leading-[1.4375rem] text-[ #3E3E3E] pb-4 ";
