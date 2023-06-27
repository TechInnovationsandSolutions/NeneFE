import { createContext, useState } from "react";
import { orderList } from "@/mockData/orders";
import { faqDataList } from "@/mockData/faqHelpData";
import { addressBookDetails } from "@/mockData/addressBookData";
import { returnsFaqDataList } from "@/mockData/returnsFaqData";
import { paymentMethodDetails } from "@/mockData/paymentMethodData";

export const stateContext = createContext();

const StateProvider = (props) => {
  const [isSignin, setIsSignin] = useState(false);
  const [isOrders, setIsOrders] = useState(true);
  const [isGiftCards, setIsGiftCards] = useState(false);
  const [orders, setOrders] = useState(orderList);
  const [faqList, setFaqList] = useState(faqDataList);
  const [returnsFaqList, setReturnsFaqList] = useState(returnsFaqDataList);
  const [addressBook, setAddressBook] = useState(addressBookDetails);
  const [paymentDetails, setPaymentDetails] = useState(paymentMethodDetails);
  const [details, setDetails] = useState({
    firstName: "John",
    lastName: "Smith",
    address: "Lakeside view, Atlanta",
    email: "johnsmith@gmail.com",
    confirmEmail: "johnsmith@gmail.com",
    password: "1234567890",
  });

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
        details,
        setDetails,
        addressBook,
        setAddressBook,
        returnsFaqList,
        setReturnsFaqList,
        paymentDetails,
        setPaymentDetails,
      }}
    >
      {props.children}
    </stateContext.Provider>
  );
};

export default StateProvider;
