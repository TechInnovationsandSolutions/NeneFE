import AccountPageLayout from "@/layout/account-pages";
import GiftAndVouchers from "@/sections/pages/accountPage/giftcards/giftcards-and-vouchers";

const GiftcardsAndVouchers = () => <GiftAndVouchers />;

GiftcardsAndVouchers.getLayout = (Page) => (
  <AccountPageLayout>{Page}</AccountPageLayout>
);

export default GiftcardsAndVouchers;
