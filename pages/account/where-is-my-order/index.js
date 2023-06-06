import OrderFaqLayout from "@/layout/order-faq";

const WhereIsMyOrder = () => {
  return <h1>Where is MyOrder</h1>;
};

WhereIsMyOrder.getLayout = (Page) => <OrderFaqLayout>{Page}</OrderFaqLayout>;
export default WhereIsMyOrder;
