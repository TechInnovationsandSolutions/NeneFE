import SideBar from "@/sections/pages/accountPage/sidebar";



const AccountPageLayout = ({ children }) => {
  return (
    <div className="w-full h-full flex flex-col bg-medGray px-5 py-5 lg:px-[100px] lg:py-[80px]">
      <h1 className="text-[24px] font-bold text-center pb-16">MY ACCOUNT</h1>
      <div className=" w-full h-auto flex gap-[5%] bg-medGray ">
        <div className="w-[30%] h-auto">
          <SideBar />
        </div>
        <div className="w-[65%] bg-medGray">{children}</div>
      </div>
    </div>
  );
};

export default AccountPageLayout;
