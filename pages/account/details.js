import AccountPageLayout from "@/layout/account-pages";
import MyDetails from "@/sections/pages/accountPage/mydetails";


const Details = () => <MyDetails />;

Details.getLayout = (Page) => <AccountPageLayout>{Page}</AccountPageLayout>;

export default Details;
