import AccountPageLayout from "@/layout/account-pages";
import PaymentMethod from "@/sections/pages/accountPage/payment-methods/payment-method";

const Payment = () => <PaymentMethod />;

Payment.getLayout = (Page) => <AccountPageLayout>{Page}</AccountPageLayout>;

export default Payment;
