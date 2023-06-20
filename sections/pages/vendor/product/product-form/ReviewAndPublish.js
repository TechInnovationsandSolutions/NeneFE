import React, { useState } from "react";
import FormWrapper from "./FormWrapper";
import Image from "next/image";

function ReviewAndPublish({ getValues, goToPage }) {
  const [imageToDisplay, setImageToDisplay] = useState(
    getValues("productImages")[0]
  );
  const description =
    "Specify shipping details such as weight, dimensions, and shipping options.";

  const sizesBoxesList = getValues("productSizes").map((size, i) => {
    return (
      <div
        key={size + i}
        className={`w-8 h-8 border flex items-center justify-center border-[#979797]`}
      >
        {size}
      </div>
    );
  });

  const colorBoxesList = getValues("productColors").map((colorObj, i) => {
    const boxStyle = {
      backgroundColor: colorObj.hex,
    };

    return <div key={colorObj.hex + i} style={boxStyle} className='w-8 h-8' />;
  });

  const imagesList = getValues("productImages").map((imageObj, i) => {
    const { url: imageUrl, name: imageName } = imageObj;

    const handleDisplayImage = () => {
      if (imageToDisplay.url !== imageUrl) {
        setImageToDisplay(imageObj);
      }
    };

    return (
      <div
        className={`w-[87px] h-[83px] flex items-center justify-center p-2 cursor-pointer sm:w-[110px] sm:h-[110px]  ${
          imageToDisplay.url === imageUrl ? "border border-grayTableHeader" : ""
        }`}
        key={imageToDisplay.name + i}
        onClick={handleDisplayImage}
      >
        <div className='relative w-[79px] h-[75px] sm:w-[100px] sm:h-[100px]'>
          <Image
            src={imageUrl}
            alt={imageName}
            fill
            className='object-cover object-top'
          />
        </div>
      </div>
    );
  });

  return (
    <FormWrapper title='Review and Publish' description={description}>
      {/* Basic Information */}
      <section className='mt-3'>
        <div className='flex items-center justify-between'>
          <h2 className='text-black font-bold text-xl'>Basic Information</h2>
          <p
            className='text-black font-bold underline cursor-pointer'
            onClick={() => goToPage(0)}
          >
            Change
          </p>
        </div>
        <div className='mt-6 space-y-4'>
          <div className=''>
            <h3 className='text-grayTableHeader'>Product Name</h3>
            <p className='mt-2 text-black'>{getValues("productName")}</p>
          </div>
          <div className=''>
            <h3 className='text-grayTableHeader'>Product Category </h3>
            <p className='mt-2 text-black'> {getValues("productCategory")}</p>
          </div>
          <div className=''>
            <h3 className='text-grayTableHeader'>Product Sub-category </h3>
            <p className='mt-2 text-black'>{getValues("productSubCategory")}</p>
          </div>
          <div className=''>
            <h3 className='text-grayTableHeader'>Product Brand </h3>
            <p className='mt-2 text-black'> {getValues("productBrand")} </p>
          </div>
          <div className=''>
            <h3 className='text-grayTableHeader'>Product Description </h3>
            <p className='mt-2 text-black'>{getValues("productDescription")}</p>
          </div>
          <div className=''>
            <h3 className='text-grayTableHeader'>Additional Instructions </h3>
            <p className='mt-2 text-black'>{getValues("instructions")}</p>
          </div>
        </div>
      </section>
      {/* Product Attribute */}
      <section className='mt-3'>
        <div className='flex items-center justify-between'>
          <h2 className='text-black font-bold text-xl'>Product Attributes</h2>
          <p
            className='text-black font-bold underline cursor-pointer'
            onClick={() => goToPage(1)}
          >
            Change
          </p>
        </div>
        <div className='mt-6'>
          <h3 className='text-grayTableHeader'>Available Sizes</h3>
          <div className='grid grid-cols-[repeat(auto-fill,minmax(36px,1fr))] gap-3 mt-4 '>
            {sizesBoxesList}
          </div>
        </div>
        <div className='mt-6'>
          <h3 className='text-grayTableHeader'>Available Colors</h3>
          <div className='grid grid-cols-[repeat(auto-fill,minmax(36px,1fr))] gap-3 mt-4 '>
            {colorBoxesList}
          </div>
        </div>
      </section>
      {/* Price & Inventory */}
      <section className='mt-3'>
        <div className='flex items-center justify-between'>
          <h2 className='text-black font-bold text-xl'>Pricing & Inventory</h2>
          <p
            className='text-black font-bold underline cursor-pointer'
            onClick={() => goToPage(2)}
          >
            Change
          </p>
        </div>
        <div className='mt-6'>
          <div className='flex items-center justify-between'>
            <div className=''>
              <h3 className='text-grayTableHeader'>Price (N)</h3>
              <p className='mt-3'> {getValues("productPrice")}</p>
            </div>
            <div className=''>
              <h3 className='text-grayTableHeader'>Available Quantity</h3>
              <p className='mt-3'>{getValues("productQuantity")}</p>
            </div>
          </div>
          <div className='flex items-center justify-between mt-4'>
            <div className=''>
              <h3 className='text-grayTableHeader'>Min Order Quantity</h3>
              <p className='mt-3'>{getValues("minOrder")}</p>
            </div>
            <div className=''>
              <h3 className='text-grayTableHeader'>Max Order Quantity</h3>
              <p className='mt-3'>{getValues("maxOrder")}</p>
            </div>
          </div>
        </div>
      </section>
      {/* Product Images */}
      <section className='mt-3'>
        <div className='flex items-center justify-between'>
          <h2 className='text-black font-bold text-xl'>Product Images</h2>
          <p
            className='text-black font-bold underline cursor-pointer'
            onClick={() => goToPage(3)}
          >
            Change
          </p>
        </div>
        <div className='flex flex-col items-center justify-center mt-6 sm:flex-row sm:items-start sm:justify-between'>
          <div className='relative w-[335px] h-[360px] sm:w-[418px] sm:h-[495px]'>
            <Image
              src={imageToDisplay.url}
              alt={imageToDisplay.name}
              fill
              className='object-cover object-top'
            />
          </div>
          <div className='w-full grid grid-cols-[repeat(auto-fit,minmax(87px,1fr))] gap-3 mt-2 sm:grid-cols-1 sm:w-1/4 sm:mt-0 sm:place-items-end '>
            {imagesList}
          </div>
        </div>
      </section>
      {/* Shipping Information */}
      <section className='mt-3'>
        <div className='flex items-center justify-between'>
          <h2 className='text-black font-bold text-xl'>Shipping Information</h2>
          <p
            className='text-black font-bold underline cursor-pointer'
            onClick={() => goToPage(4)}
          >
            Change
          </p>
        </div>

        <div className='mt-6 '>
          <div className=''>
            <h3 className='text-grayTableHeader'>Product Weight (Kg)</h3>
            <p className='mt-3'>{getValues("productWeight")}g</p>
          </div>
          <div className='mt-4'>
            <h3 className='text-grayTableHeader'>Shipping options</h3>
            <div className='flex items-center'>
              {getValues("shippingOptions").map((shippingOption, i) => (
                <p className='mt-3 w-full' key={shippingOption + i}>
                  {shippingOption}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>
    </FormWrapper>
  );
}

export default ReviewAndPublish;
