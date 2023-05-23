import Button from "@/components/button/button";
import NoOrderImg from "../../../../public/assets/account/no_orders.svg";
import Image from "next/image";

const NoOrders = () => {
    return (
      <div className="w-full h-auto gap-16 pt-12 pb-16 flex flex-col justify-center items-center bg-white">
        <Image src={NoOrderImg} alt="" width={100} height={100} />
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
    );
}
 
export default NoOrders;