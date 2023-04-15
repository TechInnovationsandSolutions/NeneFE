import Image from "next/image";
import ProductImg from "../../public/assets/billing/billingImg.png";

const Cart = () => {
  const cartItems = [
    {
      id: 1,
      img: ProductImg,
      title: "Zara Twist Front Textured Slinky Ruched Midi Dress",
      color: "Black",
      size: 6,
      quantity: 1,
      price: "3,000",
    },
    {
      id: 2,
      img: ProductImg,
      title: "Zara Twist Front Skirt",
      color: "Blue",
      size: 4,
      quantity: 1,
      price: "4,000",
    },
    {
      id: 3,
      img: ProductImg,
      title: "Zara Twist Front Textured Top",
      color: "Pink",
      size: 5,
      quantity: 1,
      price: "2,000",
    },
  ];
  return (
    <>
      {/* Individual Order Information */}
      {cartItems.map((item) => {
        return (
          <div key={item.id} className="flex gap-[1.5625rem] pb-[3rem] pr-4 ">
            <Image
              src={item.img}
              width={182}
              height={226}
              className="w-[117px] h-[152px] lg:w-[182px] lg:h-[226px] "
              alt=""
            />
            <div className="flex flex-col pt-4 lg:pt-8 max-w-[40%] lg:max-w-[60%] w-full ">
              <h3 className=" text-[14px] leading-5 lg:text-[18px] font-sans font-normal pb-[12px] lg:pb-[1.875rem] ">
                {item.title}
              </h3>
              {/* Extra Info */}
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-[14px] lg:text-[18px] ">
                    {" "}
                    <span>
                      <b>Color:</b>
                    </span>{" "}
                    {item.color}
                  </p>
                  <p className="text-[14px] lg:text-[18px] ">
                    {" "}
                    <span>
                      {" "}
                      <b>UK Size:</b>
                    </span>{" "}
                    {item.size}
                  </p>
                  <p className="text-[14px] lg:text-[18px] ">
                    {" "}
                    <span>
                      <b>Quantity:</b>
                    </span>{" "}
                    {item.quantity}
                  </p>
                </div>
                {/* Price */}
                <p className="text-[14px] lg:text-[18px] ">N {item.price}</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Cart;
