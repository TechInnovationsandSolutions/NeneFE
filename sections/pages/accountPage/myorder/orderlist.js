import { useState, useContext } from "react";
import { stateContext } from "@/stateContext/stateProvider";
import Image from "next/image";
import Button from "@/components/button/button";

const OrderList = () => {
  const tabStyles = "text-[18px] leading-6 py-4 cursor-pointer min-w-[107px]";
  const activeTabStyles = "text-black border-b border-black";
  const nonActiveTabStyles = "text-header-gray";

  const [isActiveTab, setIsActiveTab] = useState("delivered");
  const { orders, setOrders } = useContext(stateContext);
  

  const tabData = [
    {
      name: "delivered",
      count: orders.filter((order) => order.status === "delivered").length,
    },
    {
      name: "pending",
      count: orders.filter((order) => order.status === "pending").length,
    },
    {
      name: "failed",
      count: orders.filter((order) => order.status === "failed").length,
    },
  ];


  return (
    <div className="w-full min-h-[60vh] h-auto py-12 px-6 bg-white">
      {/* Tabs */}
      <div className="flex gap-9 border-b border-[#c9c9c9] overflow-x-scroll scrollbar-hide">
        {tabData.map((tab) => {
          return (
            <div
              key={tab.name}
              className={`${tabStyles} ${
                isActiveTab === tab.name ? activeTabStyles : nonActiveTabStyles
              }`}
              onClick={() => setIsActiveTab(tab.name)}
            >
              {" "}
              {tab.name.charAt(0).toUpperCase() + tab.name.slice(1)} (
              {tab.count})
            </div>
          );
        })}
      </div>

      {/* List of Orders */}
      <div className="flex flex-col gap-6 pt-6 w-full max-h-[570px] lg:min-h-[790px] overflow-scroll scrollbar-hide">
        {orders
          .filter((order) => {
            return order.status === isActiveTab;
          })
          .map((order) => {
            return (
              <div
                key={order.orderId}
                className="flex flex-col lg:flex-row gap-4 w-full"
              >
                <Image
                  src={order.productImage}
                  alt=""
                  width={80}
                  height={99.34}
                />
                <div className="flex flex-col gap-4 justify-between w-full lg:flex-row">
                  {/* Order Content Details */}
                  <div className="flex flex-col gap-2 lg:max-w-[60%]">
                    <h3 className="text-[18px] text-black font-bold leading-6">
                      {" "}
                      {order.productTitle}{" "}
                    </h3>
                    <p className="text-[#757575] text-[14px] leading-4">
                      Order {order.orderId}
                    </p>
                    <p className="text-[#757575] text-[14px] leading-4">
                      {isActiveTab === "delivered"
                        ? `Delivered on ${order.orderDate}`
                        : isActiveTab === "pending"
                        ? `Pending delivery on ${order.orderDate}`
                        : `Failed on ${order.orderDate}`}
                    </p>
                  </div>
                  <div className=" flex items-center">
                    <Button
                      text="See details"
                      variant="white"
                      type="button"
                      size="small"
                      customClassName="border border-black text-[#1a1a1a] text leading-5 px-5"
                    />
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default OrderList;
