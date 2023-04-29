import SideBar from "../section/pages/accountPage/sidebar";
import { stateContext } from "../components/stateContext/stateProvider";
import { useContext } from "react";
import MyOrder from "../section/pages/accountPage/myorder";
import MyAccount from "../section/pages/accountPage/myaccount";
import MyDetails from "@/section/pages/accountPage/mydetails";

const Account = () => {
  const [accountTab, setAccountTab] = useContext(stateContext);

  return (
    <div className="w-full h-full flex flex-col bg-medGray px-5 py-5 lg:px-[100px] lg:py-[80px]">
      <div className=" w-full h-auto flex gap-[5%] bg-medGray ">
        <div className="w-[30%] h-auto">
          <SideBar />
        </div>
        <div className="w-[65%] bg-medGray">
          {accountTab === "Account overview" ? (
            <MyAccount />
          ) : accountTab === "My orders" ? (
            <MyOrder />
          ) : accountTab === "My details" ? (
            <MyDetails />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Account;
