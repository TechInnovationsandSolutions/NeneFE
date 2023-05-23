import { useState, useContext } from "react";
import { stateContext } from "@/stateContext/stateProvider";

const OrderList = () => {
  const tabStyles = "text-[18px] leading-6 py-4 cursor-pointer";
  const activeTabStyles = "text-black border-b border-black";
  const nonActiveTabStyles = "text-header-gray";

  const tabData = [
    {
      name: "Delivered",
      count: 4,
    },
    {
      name: "Pending",
      count: 6,
    },
    {
      name: "Failed",
      count: 3,
    },
  ];

    const [isActiveTab, setIsActiveTab] = useState("Delivered");
    const { orders, setOrders } = useContext(stateContext); //use orders to continue development tomorrow

  return (
      <div className="w-full h-[60vh] pt-12 px-6 bg-white">
          
      {/* Tabs */}
      <div className="flex gap-9 border-b border-[#c9c9c9] ">
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
            {tab.name} ({tab.count})
          </div>
          )
        })}
          </div>
          
        {/* List of Orders */}
    </div>
  );
};

export default OrderList;
