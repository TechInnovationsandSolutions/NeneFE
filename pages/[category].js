import Pill from "@/components/pill/pill";
import ProductCard from "@/components/productCard/productCard";
import Button from "@/components/button/button";
import { useState } from "react";
import Image from "next/image";
import Dropdown from "@/components/dropdown/dropdown";

function Category() {
  const [numberOfProducts, setNumberOfProducts] = useState(328);
  const [currentNumber, setCurrentNumber] = useState(8);
  const [progressPercentage, setProgressPercentage] = useState(
    (currentNumber / numberOfProducts) * 100
  );

  return (
    <div>
      <div className="flex h-[300px] sm:h-[400px] gap-0">
        <div className="w-1/2 h-full overflow-hidden relative">
          <Image
            src="/assets/images/unsplash2.webp"
            fill
            alt="dress"
            className="object-cover"
          />
        </div>
        <div className="w-1/2 bg-[#FFC0CB] flex flex-col justify-center items-center gap-3">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-semibold">
            Dresses
          </h2>
          <h5 className="text-sm sm:text-base font-medium">
            Elegant and stylish
          </h5>
        </div>
      </div>

      <div className="text-center px-5 md:px-14 lg:px-20 py-5 box-content">
        <p className="text-lg my-5 font-medium text-[#3E3E3E]">
          When it comes to finding a wear on a nightout, the options are
          endless. Certain outfits flatter certain body types, weather and
          occasion, so it can be overwhelming to try and tackle the choices
          alone.
        </p>
        <div className="flex sm:block overflow-x-auto scrollbar-hide">
          {[4, 5, 6, 5, 5, 5, 5, 5, 5, 5, 5].map((e, i) => (
            <Pill text="Beautiful Dresses" key={i} />
          ))}

          <Pill text="Top notch Native Attires" />
        </div>
      </div>

      <div className="flex flex-wrap bg-gray-100 py-6 px-5 md:px-14 lg:px-20">
        {filters.map((filter, index) => {
          return <Dropdown name={filter} key={index}></Dropdown>;
        })}
      </div>

      <div className="px-5 md:px-14 lg:px-20 py-5 text-center">
        <h3 className="text-lg text-gray-600 font-medium">322 Products</h3>
        <div className="flex justify-center flex-wrap py-2">
          {products.map((product, index) => {
            return (
              <ProductCard
                img={product.img}
                name={product.name}
                price={product.price}
                key={index}
              />
            );
          })}
        </div>
      </div>

      <div className="p-2 flex flex-col items-center">
        <p className="text-[15px] font-medium mb-3">
          Showing {currentNumber} of {numberOfProducts} products
        </p>
        <div className="inline-flex w-80 h-1 bg-gray-300 mb-3">
          <div
            className={`bg-black h-full`}
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
        <Button
          text="Load More Products"
          variant="white"
          customClassName="border-2 border-gray-400 rounded font-medium"
        />
      </div>

      <div className="flex flex-col items-center gap-5 px-5 md:px-14 lg:px-16 my-10">
        <h3 className="text-lg text-[#3E3E3E] font-medium text-center">
          Brands
        </h3>
        <div className="flex justify-center flex-wrap gap-8 px-10">
          {brands.map((brand) => {
            return (
              <Image
                src={`/assets/images/${brand}.png`}
                className="h-20 w-auto"
                alt={brand}
                width={200}
                height={200}
                key={brand}
              />
            );
          })}
        </div>
        <Button
          text="See More"
          variant="white"
          customClassName="border border-gray-400 rounded font-medium m-auto"
        />
      </div>
    </div>
  );
}

export default Category;


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

const filters = [
  "Sort",
  "Category",
  "Product Type",
  "Style",
  "Brand",
  "Size",
  "Body Fit",
  "Colour",
  "Range",
];

const brands = [
  "brand-1",
  "brand-2",
  "brand-3",
  "brand-4",
  "brand-5",
  "brand-6",
  "brand-7",
  "brand-8",
  "brand-9",
];
