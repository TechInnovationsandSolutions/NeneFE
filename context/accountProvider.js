import { createContext, useState } from "react";
import { orderList } from "@/mockData/orders";
import { faqDataList } from "@/mockData/faqHelpData";

export const stateContext = createContext();

const StateProvider = (props) => {
  const [isSignin, setIsSignin] = useState(false);
  const [isOrders, setIsOrders] = useState(true);
  const [isGiftCards, setIsGiftCards] = useState(false);
  const [orders, setOrders] = useState(orderList);
  const [faqList, setFaqList] = useState(faqDataList);

  return (
    <stateContext.Provider
      value={{
        isSignin,
        setIsSignin,
        isOrders,
        setIsOrders,
        orders,
        setOrders,
        isGiftCards,
        setIsGiftCards,
        faqList,
        setFaqList,
      }}
    >
      {props.children}
    </stateContext.Provider>
  );
};

export default StateProvider;
