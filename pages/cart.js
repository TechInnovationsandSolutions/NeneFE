import ProductCard from "@/components/productCard/productCard";
import Button from "@/components/button/button";
import CartItem from "@/components/cart/cartItem";
import Link from "next/link";
import { useState } from "react";

function Cart() {
  const [cart, setCart] = useState([
    {
      name: "Zara Twist Cute Dress",
      price: 3000,
      img: "/assets/images/dress4.webp",
      quantity: 1,
      code: "0836752D",
    },
    {
      name: "Zara Twist Cute Dress",
      price: 3000,
      img: "/assets/images/dress2.webp",
      quantity: 1,
      code: "T3FDG45O",
    },
  ]);

  const removeItem = (id) => {
    setCart(cart.filter((product) => product.code !== id));
  };

  const getTotal = () => {
    let total = 0;

    cart.forEach((product) => {
      total += product.price;
    });

    return total;
  };

  return (
    <div className="px-10 py-8">
      <div className="max-w-[1240px] mx-auto">
        <h2 className="text-xl sm:text-2xl font-semibold text-center mb-5 sm:mb-8">
          Shopping Bag
        </h2>

        {cart.length > 0 ? (
          <div className="w-full">
            <div className="bg-[#E8E8E8] hidden sm:grid grid-cols-7 px-8 py-4 text-lg font-semibold">
              <p className="col-span-4 md:col-span-3">ITEM</p>
              <p>QTY</p>
              <p>PRICE</p>
              <p className="col-span-1 md:col-span-2 text-end">TOTAL PRICE</p>
            </div>

            {cart.map((product) => {
              return (
                <CartItem
                  img={product.img}
                  name={product.name}
                  code={product.code}
                  price={product.price.toLocaleString()}
                  total={product.price.toLocaleString()}
                  quantity={product.quantity}
                  color="black"
                  size={6}
                  cart={cart}
                  key={product.code}
                  id={product.code}
                  handleClick={removeItem}
                />
              );
            })}

            <div className="sm:px-8 py-5">
              <p className="text-end mb-5 text-lg">
                TOTAL:
                <span className="ml-3 text-3xl font-semibold">
                  N {getTotal().toLocaleString()}
                </span>
              </p>
            </div>
          </div>
        ) : (
          <h2 className="text-center text-lg font-semibold mb-3">
            There are no items in your shopping bag.
          </h2>
        )}

        <div
          className={`flex max-sm:flex-col justify-center sm:${
            cart.length > 0 ? "justify-end" : "justify-center"
          }`}
        >
          {cart.length > 0 && (
            <Link href="#">
              <Button
                text="Checkout"
                variant="black"
                customClassName="rounded font-medium max-sm:w-full max-sm:mb-3"
              />
            </Link>
          )}

          <Link href="/">
            <Button
              text="Continue Shopping"
              variant="white"
              customClassName="rounded border border-gray-600 text-[#585757] font-medium sm:ml-5 max-sm:w-full"
            />
          </Link>
        </div>

        <div className="mt-10 md:mt-20">
          <h3 className="text-xl font-medium max-sm:text-center mb-3">
            You Recently Viewed
          </h3>
          <div className="flex flex-wrap max-sm:justify-center">
            {[3, 1, 3].map((i) => (
              <ProductCard
                name={products[i].name}
                img={products[i].img}
                price={products[i].price}
                key={i}
                customClass="sm:mr-5 md:mr-8 mb-10"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;

const products = [
  {
    name: "Zara Twist Cute Dress",
    price: "3,000",
    img: "/assets/images/dress1.webp",
  },
  {
    name: "Zara Twist Cute Dress",
    price: "3,000",
    img: "/assets/images/dress2.webp",
  },
  {
    name: "Zara Twist Cute Dress",
    price: "3,000",
    img: "/assets/images/dress3.webp",
  },
  {
    name: "Zara Twist Cute Dress",
    price: "3,000",
    img: "/assets/images/dress4.webp",
  },
  {
    name: "Zara Twist Cute Dress",
    price: "3,000",
    img: "/assets/images/dress1.webp",
  },
  {
    name: "Zara Twist Cute Dress",
    price: "3,000",
    img: "/assets/images/dress2.webp",
  },
  {
    name: "Zara Twist Cute Dress",
    price: "3,000",
    img: "/assets/images/dress3.webp",
  },
  {
    name: "Zara Twist Cute Dress",
    price: "3,000",
    img: "/assets/images/dress4.webp",
  },
];
