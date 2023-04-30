import { createContext, useState } from "react";

export const stateContext = createContext();

const StateProvider = (props) => {
  const [accountTab, setAccountTab] = useState("Account overview");
  const [isSignin, setIsSignin] = useState(false);

  return (
    <stateContext.Provider
      value={{ accountTab, setAccountTab, isSignin, setIsSignin }}
    >
      {props.children}
    </stateContext.Provider>
  );
};

export default StateProvider;
