import AccountPageLayout from "@/layout/account-pages";
import MyAccount from "@/sections/pages/accountPage/myaccount";

const AccountOverview = () => <MyAccount />;

AccountOverview.getLayout = (Page) => (
  <AccountPageLayout>{Page}</AccountPageLayout>
);

export default AccountOverview;
