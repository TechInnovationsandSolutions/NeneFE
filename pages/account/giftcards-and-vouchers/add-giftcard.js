import AccountPageLayout from "@/layout/account-pages";
import AddGiftCard from "@/sections/pages/accountPage/giftcards/addgiftcard";

const AddGiftCards = () => <AddGiftCard />;

AddGiftCards.getLayout = (Page) => (
  <AccountPageLayout>{Page}</AccountPageLayout>
);

export default AddGiftCards;
