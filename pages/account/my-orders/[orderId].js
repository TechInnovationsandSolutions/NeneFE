import AccountPageLayout from "@/layout/account-pages";
import { orderList } from "@/mockData/orders";
import OrderDetails from "@/sections/pages/accountPage/myorder/orderdetails";
import { useRouter } from "next/router";

const OrderInfo = () => {
  const router = useRouter();
  const currentOrderId = router.query.orderId;
  const currentOrder = orderList.find(
    (order) => order.orderId === currentOrderId
  );

  return <OrderDetails currentOrder={currentOrder} />;
};

OrderInfo.getLayout = (Page) => <AccountPageLayout>{Page}</AccountPageLayout>;

export default OrderInfo;
