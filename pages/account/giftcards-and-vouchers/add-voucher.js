import AccountPageLayout from "@/layout/account-pages";
import AddVoucher from "@/sections/pages/accountPage/giftcards/addvoucher";

const AddGiftVouchers = () => <AddVoucher />;

AddGiftVouchers.getLayout = (Page) => (
  <AccountPageLayout>{Page}</AccountPageLayout>
);

export default AddGiftVouchers;
