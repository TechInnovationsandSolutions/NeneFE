import { createContext, useState } from "react";
import { orderList } from "@/mockData/orders";


export const stateContext = createContext();

const StateProvider = (props) => {
  const [isSignin, setIsSignin] = useState(false);
  const [isOrders, setIsOrders] = useState(true);
  const [orders, setOrders] = useState(orderList);

  return (
    <stateContext.Provider
      value={{
        isSignin,
        setIsSignin,
        isOrders,
        setIsOrders,
        orders,
        setOrders,
      }}
    >
      {props.children}
    </stateContext.Provider>
  );
};

export default StateProvider;
