import React, { useState } from "react";
import Image from "next/image";
import productData from "@/mockData/productData.json";
import { IoClose } from "react-icons/io5";
import { AiOutlinePlus, AiOutlineDelete } from "react-icons/ai";
import { FiEye, FiEdit2 } from "react-icons/fi";

const ProductCard = ({ productCardClass }) => {
  const [showMoreOptions, setShowMoreOptions] = useState(false);
  const [clickedProductIndex, setClickedProductIndex] = useState(0);

  const toggleShowMoreOptions = (index) => {
    setShowMoreOptions(!showMoreOptions);
    setClickedProductIndex(index);
  };

  const productLists = productData.map((product, index) => {
    const { product_name, image, quantity, price, views, status } = product;

    return (
      <div
        className='group relative px-4 py-3 border border-[#e4e4e4] hover:bg-[#F2F2F2]'
        key={product_name + index}
      >
        {showMoreOptions && clickedProductIndex === index ? (
          <div className=' absolute -top-2 -right-2 w-52 px-3 py-4 bg-white shadow-md z-10'>
            <div className='flex items-center justify-between'>
              <p>More options</p>
              <IoClose
                size='24px'
                onClick={toggleShowMoreOptions}
                className='cursor-pointer'
              />
            </div>
            <div className='mt-7 space-y-7'>
              <div className='flex items-center gap-3 text-grayTableHeader'>
                <AiOutlinePlus size='20px' />
                <p>View Details</p>
              </div>
              <div className='flex items-center gap-3 text-grayTableHeader'>
                <FiEdit2 size='20px' />
                <p>Edit</p>
              </div>
              <div className='flex items-center gap-3 text-grayTableHeader'>
                <FiEye size='20px' />
                <p>Out of stock</p>
              </div>
              <div className='flex items-center gap-3 text-grayTableHeader'>
                <AiOutlineDelete size='20px' />
                <p>Delete</p>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        <div className='flex items-center justify-between '>
          <div className='flex items-center gap-3'>
            <div className='relative w-9 h-9'>
              <Image src={image} fill alt={product_name} className='-z-10' />
            </div>
            <p>{product_name}</p>
          </div>
          <div
            className='flex flex-col items-center justify-center gap-1  rounded-full w-8 h-8 border border-[#f4f4f4] cursor-pointer hover:scale-110 '
            onClick={() => toggleShowMoreOptions(index)}
          >
            <span className=' bg-black rounded-full p-[1.7px]'></span>
            <span className=' bg-black rounded-full p-[1.7px]'></span>
            <span className=' bg-black rounded-full p-[1.7px]'></span>
          </div>
        </div>

        <div className='flex items-center justify-start gap-5 mt-8'>
          <p>
            {quantity}{" "}
            <span className='text-xSmall text-grayTableHeader'>units left</span>
          </p>
          <p>
            <span className='text-xSmall text-grayTableHeader'>$</span>
            {price}
          </p>
          <div
            className={`rounded-md py-2 px-4 font-bold w-fit group-hover:bg-white ${
              status == "Available"
                ? "bg-[#DAF7E9] text-[#007E41]"
                : "bg-[#FCE8E8] text-[#CA1E1E]"
            }`}
          >
            <span className='text-xSmall'>{status}</span>
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      <section className={productCardClass}>{productLists.slice(0, 5)}</section>
    </>
  );
};

export default ProductCard;
