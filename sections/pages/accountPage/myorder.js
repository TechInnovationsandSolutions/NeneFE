import Image from "next/image";
import MyOrderImg from "../../../public/assets/account/my_orders.svg";
import NoOrder from "../../../public/assets/account/no_orders.svg";
import Button from "../../../components/button/button";

const MyOrder = () => {
  return (
    <div className="flex flex-col gap-8 w-full-h-auto">
      <div className="w-full h-[200px] px-6 pt-[44px] bg-white">
        <Image src={MyOrderImg} alt="" width={44} height={44} />
        <h2 className="uppercase w-full pt-3 font-bold text-[1.5rem]">
          MY ORDERS
        </h2>
      </div>
      <div className="w-full h-auto gap-16 pt-12 pb-16 flex flex-col justify-center items-center bg-white">
        <Image src={NoOrder} alt="" width={100} height={100} />
        <p>You currently have no orders</p>
        <div className="w-[50%]">
          <Button
            text="START SHOPPING"
            variant="black"
            type="button"
            size="big"
          />
        </div>
      </div>
    </div>
  );
};

export default MyOrder;
