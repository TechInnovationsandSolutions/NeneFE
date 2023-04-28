import SideBar from "../section/pages/accountPage/sidebar";

const Account = () => {
  return (
    <div className="w-full h-full flex flex-col bg-medGray px-5 py-5 lg:px-[100px] lg:py-[80px]">
      <div className=" w-full h-full flex gap-[5%] bg-medGray ">
        <div className="w-[30%] h-auto">
          <SideBar />
        </div>
        <div className="w-[65%] bg-lightGray">Hello</div>
      </div>
    </div>
  );
};

export default Account;
