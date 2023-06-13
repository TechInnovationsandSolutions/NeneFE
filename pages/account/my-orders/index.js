import AccountPageLayout from "@/layout/account-pages";
import MyOrder from "@/sections/pages/accountPage/myorder/myorder";

const MyOrders = () => <MyOrder />;

MyOrders.getLayout = (Page) => <AccountPageLayout>{Page}</AccountPageLayout>;

export default MyOrders;
