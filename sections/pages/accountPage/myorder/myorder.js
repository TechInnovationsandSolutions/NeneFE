import Image from "next/image";
import { stateContext } from "@/stateContext/stateProvider";
import { useContext } from "react";
import MyOrderImg from "@/public/assets/account/my_orders.svg";
import NoOrder from "./noorder";
import OrderList from "./orderlist";

const MyOrder = () => {
  const { isOrders, setIsOrders } = useContext(stateContext);

  return (
    <div className="flex flex-col gap-8 w-full-h-auto">
      <div className="w-full h-[200px] px-6 pt-[44px] bg-white">
        <Image src={MyOrderImg} alt="" width={44} height={44} />
        <h2 className="uppercase w-full pt-3 font-bold text-[1.5rem]">
          MY ORDERS
        </h2>
      </div>
      {isOrders ? <OrderList /> : <NoOrder />}
    </div>
  );
};

export default MyOrder;
