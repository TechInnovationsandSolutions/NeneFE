import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import productData from "@/mockData/productData.json";
import {
  handleEditCardData,
  toggleInStock,
  deleteCard,
  handleFieldChange,
  handleInputBlur,
  toggleShowMoreOptions,
} from "./cardFunctions";
import MoreOptionsModal from "./MoreOptionsModal";

const ProductCard = ({ productCardClass }) => {
  const initialCardData = [...productData]
    .slice(0, 10)
    .map((product, index) => ({
      id: index,
      name: product.product_name,
      image: product.image,
      quantity: product.quantity,
      price: product.price,
      status: product.status,
      isEditing: false,
      tempData: {
        name: product.product_name,
        quantity: product.quantity,
        price: product.price,
      },
    }));

  const [cardData, setCardData] = useState(initialCardData);
  const [showMoreOptions, setShowMoreOptions] = useState(false);
  const [clickedProductIndex, setClickedProductIndex] = useState(0);
  const [inStock, setInStock] = useState(true);
  const nameInputRef = useRef(null);
  const quantityInputRef = useRef(null);
  const priceInputRef = useRef(null);

  // useEffect(() => {
  //   const handleOutsideClick = (e) => {
  //     if (
  //       nameInputRef.current &&
  //       quantityInputRef.current &&
  //       priceInputRef.current
  //     ) {
  //       handleInputBlur(clickedProductIndex, setCardData);
  //       console.log("true");
  //     } else {
  //       console.log("false");
  //     }
  //   };

  //   document.addEventListener("click", handleOutsideClick);

  //   return () => document.removeEventListener("click", handleOutsideClick);
  // }, []);

  const productLists = cardData.map((card) => {
    const { id, name, image, quantity, price, status, isEditing, tempData } =
      card;
    const index = id;

    return (
      <div
        className='group relative px-4 py-3 border border-[#e4e4e4] hover:bg-[#F2F2F2]'
        key={name + index}
      >
        {/* Render Modal */}
        {showMoreOptions && clickedProductIndex === index ? (
          <MoreOptionsModal
            deleteCard={deleteCard}
            handleEditCardData={handleEditCardData}
            setShowMoreOptions={setShowMoreOptions}
            toggleInStock={toggleInStock}
            inStock={inStock}
            cardData={cardData}
            index={index}
            setCardData={setCardData}
            setInStock={setInStock}
            showMoreOptions={showMoreOptions}
          />
        ) : (
          ""
        )}
        {/* Cards */}
        <div className='flex items-center justify-between '>
          <div className='flex items-center gap-3'>
            <div className='relative w-9 h-9'>
              <Image src={image} fill alt={name} className='-z-10' />
            </div>
            {isEditing ? (
              <input
                type='text'
                name='name'
                defaultValue={tempData.name}
                onChange={(e) => handleFieldChange(index, e, setCardData)}
                onBlur={() => handleInputBlur(index, setCardData)}
                className='w-fit text-center border-0 focus:ring-0 '
                ref={nameInputRef}
              />
            ) : (
              <p>{name}</p>
            )}
          </div>
          <div
            className='flex flex-col items-center justify-center gap-1 rounded-full w-8 h-8 border border-[#f4f4f4] cursor-pointer hover:scale-110 hover:border-gray-400'
            onClick={() =>
              toggleShowMoreOptions(
                index,
                setShowMoreOptions,
                setClickedProductIndex,
                showMoreOptions
              )
            }
          >
            <span className=' bg-black rounded-full p-[1.7px]'></span>
            <span className=' bg-black rounded-full p-[1.7px]'></span>
            <span className=' bg-black rounded-full p-[1.7px]'></span>
          </div>
        </div>

        <div className='flex items-center justify-start gap-5 mt-8'>
          <p>
            {isEditing ? (
              <input
                type='text'
                name='quantity'
                defaultValue={tempData.quantity}
                onChange={(e) => handleFieldChange(index, e, setCardData)}
                onBlur={() => handleInputBlur(index, setCardData)}
                className='w-20 text-center border-0 focus:ring-0 '
                ref={quantityInputRef}
              />
            ) : (
              quantity
            )}
            <span className='text-xSmall text-grayTableHeader ml-1'>
              units left
            </span>
          </p>
          <p>
            <span className='text-xSmall text-grayTableHeader mr-1'>$</span>
            {isEditing ? (
              <input
                type='text'
                name='price'
                defaultValue={tempData.price}
                onChange={(e) => handleFieldChange(index, e, setCardData)}
                onBlur={() => handleInputBlur(index, setCardData)}
                className='w-20 text-center border-0 focus:ring-0 '
                ref={priceInputRef}
              />
            ) : (
              price
            )}
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
      <section className={productCardClass}>{productLists}</section>
    </>
  );
};

export default ProductCard;
