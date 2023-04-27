import SideBar from "@/section/pages/accountPage/sidebar";

const Account = () => {
  return (
    <div className="w-full min-h-screen flex gap-[5%] bg-medGray px-[100px] py-[80px]">
      <div className="w-[30%] min-h-screen">
        <SideBar />
      </div>
      <div className="w-[65%] bg-lightGray min-h-screen">Hello</div>
    </div>
  );
};

export default Account;
