import AccountPageLayout from "@/layout/account-pages";
import SocialAccount from "@/sections/pages/accountPage/socialaccount";

const Social = () => <SocialAccount />;

Social.getLayout = (Page) => <AccountPageLayout>{Page}</AccountPageLayout>;

export default Social;
