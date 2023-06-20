import OrderFaqLayout from "@/layout/order-faq";
import ReturnsFAQ from "@/sections/pages/accountPage/returns-and-refunds/returnsFAQ";

const ReturnsAndRefunds = () => {
  return <ReturnsFAQ />;
};

ReturnsAndRefunds.getLayout = (Page) => <OrderFaqLayout>{Page}</OrderFaqLayout>;
export default ReturnsAndRefunds;
