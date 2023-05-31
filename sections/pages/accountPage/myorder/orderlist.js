import { useState, useContext } from "react";
import { stateContext } from "@/stateContext/stateProvider";
import Image from "next/image";
import Button from "@/components/button/button";
import { useRouter } from "next/router";

const OrderList = () => {
  const tabStyles = "text-[18px] leading-6 py-4 cursor-pointer min-w-[107px]";
  const activeTabStyles = "text-black border-b border-black";
  const nonActiveTabStyles = "text-header-gray";

  const [isActiveTab, setIsActiveTab] = useState("orders");
  const { orders, setOrders } = useContext(stateContext);

  const router = useRouter();

  const tabData = [
    {
      name: "orders",
      count: orders.filter((order) => order.category === "orders").length,
    },
    {
      name: "returns",
      count: orders.filter((order) => order.category === "returns").length,
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
            return order.category === isActiveTab;
          })
          .map((order) => {
            return (
              <div
                key={order.orderId}
                className="flex flex-col lg:flex-row gap-4 w-full border border-[#c7c7c7] p-4"
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
                      <span className="font-bold text-black">
                        {order.status === "delivered"
                          ? `Delivered `
                          : order.status === "in progress"
                          ? `In Progress`
                          : `Cancelled`}
                      </span>
                      {order.status === "delivered"
                        ? ` on ${order.orderDate}`
                        : order.status === "in progress"
                        ? ` `
                        : ` `}
                    </p>
                  </div>
                  <div className=" flex items-center">
                    <Button
                      text="See details"
                      variant="white"
                      type="button"
                      size="small"
                      customClassName="border border-[#AAAAAA] text-[#1a1a1a] text leading-5 px-5"
                      onClick={() => {
                        router.push(`/account/my-orders/${order.orderId}`);
                      }}
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
