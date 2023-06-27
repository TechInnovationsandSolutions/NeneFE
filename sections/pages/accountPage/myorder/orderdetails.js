import Image from "next/image";
import MyOrderImg from "@/public/assets/account/my_orders.svg";
import {
  longarrowleft,
  orderProcessing,
  orderDispatched,
  orderEnroute,
  orderDelivered,
  orderCancelled,
} from "@/public/assets/svgs";
import Link from "next/link";
import { useState, useContext } from "react";
import Button from "@/components/button/button";

const OrderDetails = ({ currentOrder }) => {
  const [isActiveTab, setIsActiveTab] = useState("order processing");

  const tabData = [
    {
      name: "order processing",
      icon: orderProcessing,
      message:
        "Your order is being processed with care. We're working diligently to review and prepare your items for shipment. We'll notify you once your order is ready to be shipped.",
    },
    {
      name: "order dispatched",
      icon: orderDispatched,
      message:
        "Great news! Your order has been dispatched and is on its way to you. We've carefully packaged your items and handed them over to our trusted shipping partner",
    },
    {
      name: "en route",
      icon: orderEnroute,
      message:
        "Exciting news! Your order is currently en route to its destination. Sit tight and get ready to receive your purchase",
    },
    {
      name: "delivered ",
      icon: orderDelivered,
      message:
        "Congratulations! Your order has been successfully delivered. We hope you're delighted with your purchase. If you have any feedback or need assistance, our dedicated support team is here to help.",
    },
  ];

  return (
    <div className="flex flex-col gap-8 w-full-h-auto">
      {/* Header */}
      <div className="w-full h-[200px] px-6 pt-[44px] bg-white">
        <Image src={MyOrderImg} alt="" width={44} height={44} />
        <h2 className="uppercase w-full pt-3 font-bold text-[1.5rem]">
          MY ORDERS
        </h2>
      </div>

      {/* Sub Header */}
      <div className="w-full min-h-[60vh] h-auto py-12 px-6 bg-white">
        <div className="flex items-center flex-col lg:flex-row w-full gap-5">
          <Link
            href="/account/my-orders"
            className="flex items-center w-full gap-12 text-[24px] font-bold leading-[31px]"
          >
            {" "}
            <Image src={longarrowleft} alt="" width={24} height={24} /> Order
            details{" "}
          </Link>
          <h3 className="text-base w-full text-black font-bold">
            <span className="text-[#757575]">Estimated between</span> 24th May &
            27th May
          </h3>
        </div>

        {/* Main Order Details */}
        {currentOrder?.status === "cancelled" ? (
          <div className="flex flex-col w-full pt-9 h-auto ">
            {/* Cancelled status notification box */}
            <div className="flex gap-4 w-full bg-[#f5f5f5]  p-8">
              <Image src={orderCancelled} alt="" width={36} height={36} />
              <h4>
                Your order has been successfully cancelled as per your request.
                We&apos;re sorry for any inconvenience caused.
              </h4>
            </div>
            {/* End of Cancelled status notification box */}

            {/* Items Details */}
            <div className="flex flex-col w-full pt-9 opacity-50">
              <h5 className="uppercase text-black">Items Ordered</h5>
              <div className="flex flex-col lg:flex-row justify-between mt-3 border border-[#c7c7c7] p-6 items-center">
                <div className="flex flex-col lg:flex-row gap-4 items-center">
                  <Image
                    src={currentOrder?.productImage}
                    alt=""
                    width={88}
                    height={109.27}
                  />
                  <h3 className="text-[18px] max-w-full text-center lg:text-left text-black font-bold leading-6 lg:max-w-[50%]">
                    {" "}
                    {currentOrder?.productTitle}{" "}
                  </h3>
                  <div className="flex gap-4 lg:flex-col">
                    <p className="text-[#757575] text-base">Size: 6</p>
                    <p className="text-[#757575] text-base">Color: Black</p>
                    <p className="text-[#757575] text-base">
                      Quantity: {currentOrder?.quantity}
                    </p>
                  </div>
                </div>
                <h4 className="font-bold">$1,500</h4>
              </div>
            </div>
            {/* End of item details */}

            {/* Delivery Details */}
            <div className="flex flex-col w-full pt-9">
              <h5 className="uppercase text-black">Delivery Details</h5>
              <div className="flex flex-col lg:flex-row gap-4 justify-between mt-3 border border-[#d3d3d3] p-6 ">
                <div className="flex flex-col">
                  <h4 className="text-[#757575] text-base">Delivery Method</h4>
                  <p className="text-base text-black">Door Delivery</p>
                </div>
                <div className="flex flex-col">
                  <h4 className="text-[#757575] text-base">Delivery Address</h4>
                  <p className="text-base text-black max-w-[50%]">
                    Nene Myers Union city, mokola, Ibadan, Oyo state.
                  </p>
                </div>
              </div>
            </div>

            {/* End Details */}
            <div className="flex flex-col gap-4 lg:flex-row border-t justify-between border-[#d5d5d5] w-full py-9">
              <div className="flex flex-col gap-2 w-full">
                <div className="flex justify-between">
                  <p>Number of items</p> <span> {currentOrder?.quantity} </span>
                </div>
                <div className="flex justify-between">
                  <p>Subtotal</p> <span> $1,500 </span>
                </div>
                <div className="flex justify-between">
                  <p>Delivery</p> <span> $200 </span>
                </div>
                <div className="flex justify-between">
                  <p className="text-black font-bold">Total</p>{" "}
                  <span className="text-black font-bold"> $1700 </span>
                </div>
              </div>

              <div className="flex flex-col items-end gap-4 w-full">
                <Button
                  text="Buy again"
                  variant="black"
                  type="button"
                  size="big"
                  customClassName="border border-[#AAAAAA] text-[#1a1a1a] text leading-5 max-w-[68%]"
                  onClick={() => {}}
                />
                <Button
                  text="Continue shopping"
                  variant="white"
                  type="button"
                  size="big"
                  customClassName="border border-[#AAAAAA] text-[#1a1a1a] text leading-5  max-w-[68%]"
                  onClick={() => {}}
                />
              </div>
            </div>
            <Link href="/" className="w-full text-center underline pt-4">
              Need help?
            </Link>
          </div>
        ) : (
          <main className="flex flex-col pt-9 gap-6 w-full h-auto">
            {/* Tabs for Order Details */}
            <div className="flex gap-9 border-b w-full border-[#c9c9c9] overflow-x-scroll scrollbar-hide">
              {tabData.map((tab) => {
                return (
                  <div
                    key={tab.name}
                    className={`${tabStyles} ${
                      isActiveTab === tab.name
                        ? activeTabStyles
                        : nonActiveTabStyles
                    }`}
                    onClick={() => setIsActiveTab(tab.name)}
                  >
                    {" "}
                    {tab.name.charAt(0).toUpperCase() + tab.name.slice(1)}
                  </div>
                );
              })}
            </div>

            {/* Tab Details for a particular order */}
            <div className="flex flex-col w-full h-auto ">
              {/* Order status notification box */}
              {tabData
                .filter((tabInfo) => {
                  return tabInfo.name === isActiveTab;
                })
                .map((tab) => {
                  return (
                    <div
                      key={tab.name}
                      className="flex gap-4 w-full bg-[#f5f5f5]  p-8"
                    >
                      <Image src={tab.icon} alt="" width={36} height={36} />
                      <h4>{tab.message}</h4>
                    </div>
                  );
                })}

              {/* Items Details */}
              <div className="flex flex-col w-full pt-9">
                <h5 className="uppercase text-black">Items Ordered</h5>
                <div className="flex flex-col lg:flex-row justify-between mt-3 border border-[#c7c7c7] p-6 items-center">
                  <div className="flex flex-col lg:flex-row gap-4 items-center">
                    <Image
                      src={currentOrder?.productImage}
                      alt=""
                      width={88}
                      height={109.27}
                    />
                    <h3 className="text-[18px] max-w-full text-center lg:text-left text-black font-bold leading-6 lg:max-w-[50%]">
                      {" "}
                      {currentOrder?.productTitle}{" "}
                    </h3>
                    <div className="flex gap-4 lg:flex-col">
                      <p className="text-[#757575] text-base">Size: 6</p>
                      <p className="text-[#757575] text-base">Color: Black</p>
                      <p className="text-[#757575] text-base">
                        Quantity: {currentOrder?.quantity}
                      </p>
                    </div>
                  </div>
                  <h4 className="font-bold">$1,500</h4>
                </div>
              </div>

              {/* Delivery Details */}
              <div className="flex flex-col w-full pt-9">
                <h5 className="uppercase text-black">Delivery Details</h5>
                <div className="flex flex-col lg:flex-row gap-4 justify-between mt-3 border border-[#d3d3d3] p-6 ">
                  <div className="flex flex-col">
                    <h4 className="text-[#757575] text-base">
                      Delivery Method
                    </h4>
                    <p className="text-base text-black">Door Delivery</p>
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-[#757575] text-base">
                      Delivery Address
                    </h4>
                    <p className="text-base text-black max-w-[50%]">
                      Nene Myers Union city, mokola, Ibadan, Oyo state.
                    </p>
                  </div>
                </div>
              </div>

              {/* End Details */}
              <div className="flex flex-col gap-4 lg:flex-row border-t justify-between border-[#d5d5d5] w-full py-9">
                <div className="flex flex-col gap-2 w-full">
                  <div className="flex justify-between">
                    <p>Number of items</p>{" "}
                    <span> {currentOrder?.quantity} </span>
                  </div>
                  <div className="flex justify-between">
                    <p>Subtotal</p> <span> $1,500 </span>
                  </div>
                  <div className="flex justify-between">
                    <p>Delivery</p> <span> $200 </span>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-black font-bold">Total</p>{" "}
                    <span className="text-black font-bold"> $1700 </span>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-4 w-full">
                  <Button
                    text="Buy again"
                    variant="black"
                    type="button"
                    size="big"
                    customClassName="border border-[#AAAAAA] text-[#1a1a1a] text leading-5 px-5 max-w-[60%]"
                    onClick={() => {}}
                  />
                  {isActiveTab === "order dispatched" ||
                  isActiveTab === "en route" ? (
                    <Button
                      text="Buy similar items"
                      variant="white"
                      type="button"
                      size="big"
                      customClassName="border border-[#AAAAAA] text-[#1a1a1a] text leading-5 px-5 max-w-[60%]"
                      onClick={() => {}}
                    />
                  ) : isActiveTab === "order processing" ? (
                    <Button
                      text="Cancel order"
                      variant="white"
                      type="button"
                      size="big"
                      customClassName="border border-[#AAAAAA] text-[#1a1a1a] text leading-5 px-5 max-w-[60%]"
                      onClick={() => {}}
                    />
                  ) : (
                    <Button
                      text="Request refund"
                      variant="white"
                      type="button"
                      size="big"
                      customClassName="border border-[#AAAAAA] text-[#1a1a1a] text leading-5 px-5 max-w-[60%]"
                      onClick={() => {}}
                    />
                  )}
                </div>
              </div>
            </div>
            <Link href="/" className="w-full text-center underline pt-4">
              Need help?
            </Link>
          </main>
        )}
      </div>
    </div>
  );
};

export default OrderDetails;

const tabStyles = "text-[18px] leading-6 py-4 cursor-pointer min-w-[107px]";
const activeTabStyles = "text-black border-b border-black";
const nonActiveTabStyles = "text-header-gray";
