import OrderFaqLayout from "@/layout/order-faq";
import OrderFAQ from "@/sections/pages/accountPage/where-is-my-order/orderFAQ";

const WhereIsMyOrder = () => {
  return <OrderFAQ />;
};

WhereIsMyOrder.getLayout = (Page) => <OrderFaqLayout>{Page}</OrderFaqLayout>;
export default WhereIsMyOrder;
