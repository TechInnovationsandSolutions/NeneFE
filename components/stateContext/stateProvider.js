import { createContext, useState } from "react";

export const stateContext = createContext();

const StateProvider = (props) => {
  const [accountTab, setAccountTab] = useState("Account overview");

  return (
    <stateContext.Provider value={[accountTab, setAccountTab]}>
      {props.children}
    </stateContext.Provider>
  );
};

export default StateProvider;
