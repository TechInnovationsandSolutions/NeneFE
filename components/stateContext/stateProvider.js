import { createContext, useState } from "react";

export const stateContext = createContext();

const StateProvider = (props) => {
  const [check, setCheck] = useState();
  return (
    <stateContext.Provider value={[check, setCheck]}>
      {props.children}
    </stateContext.Provider>
  );
};

export default StateProvider;
