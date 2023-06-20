import { useCreateProduct } from "@/utils/vendor-product/useCreateProduct";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  BasicInfo,
  ProductAttributes,
  PriceAndInventory,
  ProductImages,
  ShippingInformation,
  ReviewAndPublish,
} from "@/sections/pages/vendor/product/product-form";
import { DevTool } from "@hookform/devtools";
import axios from "axios";
import { useRouter } from "next/router";

const CreateProduct = () => {
  const [moveToPage, setMoveToPage] = useState(null);
  const router = useRouter();

  if (typeof window !== "undefined" && window.localStorage) {
    const formValues = JSON.parse(localStorage.getItem("formValues"));

    var initialValues = {
      productName: formValues?.productName || "",
      productCategory: formValues?.productCategory || "",
      productSubCategory: formValues?.productSubCategory || "",
      productBrand: formValues?.productBrand || "",
      productDescription: formValues?.productDescription || "",
      instructions: formValues?.instructions || "",
      productSizes: formValues?.productSizes || [],
      productColors: formValues?.productColors || [],
      productPrice: formValues?.productPrice || 0,
      productQuantity: formValues?.productQuantity || 0,
      minOrder: formValues?.minOrder || 0,
      maxOrder: formValues?.maxOrder || 0,
      productImages: formValues?.productImages || [],
      productWeight: formValues?.productWeight || 0,
      shippingOptions: formValues?.shippingOptions || [],
    };
  }

  const {
    handleSubmit,
    register,
    control,
    formState,
    watch,
    setValue,
    getValues,
  } = useForm({
    defaultValues: initialValues,
  });

  const { errors } = formState;

  const formStepsJsx = [
    <BasicInfo
      key={1}
      register={register}
      errors={errors}
      control={control}
      setValue={setValue}
      watch={watch}
      getValues={getValues}
    />,
    <ProductAttributes
      key={2}
      register={register}
      errors={errors}
      setValue={setValue}
      control={control}
      getValues={getValues}
    />,
    <PriceAndInventory key={3} register={register} errors={errors} />,
    <ProductImages
      key={4}
      errors={errors}
      control={control}
      getValues={getValues}
      setValue={setValue}
    />,
    <ShippingInformation
      key={5}
      register={register}
      errors={errors}
      control={control}
      setValue={setValue}
    />,
    <ReviewAndPublish key={6} getValues={getValues} goToPage={moveToPage} />,
  ];

  const {
    currentForm,
    formSteps,
    currentStepIndex,
    isFirstStep,
    prevPage,
    nextPage,
    isLastStep,
    goToPage,
  } = useCreateProduct(formStepsJsx);

  useEffect(() => {
    setMoveToPage(() => goToPage);
  }, []);

  const onSubmit = (data, e) => {
    localStorage.setItem("formValues", JSON.stringify(data));
    console.log(data);
    if (!isLastStep) return nextPage();

    router.push("/vendor/product");
    e.target.reset();
    localStorage.removeItem("formValues");
    // alert("Product created successfully");
  };
  // const onSubmit = async (data, e) => {
  //   localStorage.setItem("formValues", JSON.stringify(data));
  //   console.log(JSON.parse(localStorage.getItem("formValues")));
  //   if (!isLastStep) return nextPage();
  //     try {
  //       // Send the imagesToBeSubmitted array backend
  //       const response = await axios("/vendor/create-product", {
  //         method: "POST",
  //         body: data,
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       });

  //       e.target.reset()
  //       console.log("Product data submitted successfully");
  //     } catch (error) {
  //       console.error("Error submitting product data:", error);
  //     }

  //     localStorage.removeItem("formValues");
  //   alert("Product created successfully");
  // };

  const onError = (errors) => {
    // console.log(errors);
  };

  return (
    <>
      <section className=''>
        <div className='w-11/12 mx-auto mb-44 lg:mb-16'>
          <h2 className='text-2xl font-alegreya mt-5'>Nene</h2>
          <form
            onSubmit={handleSubmit(onSubmit, onError)}
            // noValidate
            className='mt-10 max-w-xl mx-auto lg:mt-16 '
          >
            <div className='font-medium'>
              Step {currentStepIndex + 1} of {formSteps.length}
            </div>
            {currentForm}
            <div className='mt-8 flex flex-col justify-end gap-4 md:flex-row md:justify-start'>
              {!isFirstStep && (
                <button
                  type='button'
                  className='font-medium'
                  onClick={prevPage}
                >
                  Go back
                </button>
              )}
              <button
                type='submit'
                className='w-full bg-black text-white font-medium py-3 md:w-40'
              >
                {isLastStep ? "Finish" : "Save & proceed"}
              </button>
            </div>
          </form>
          {/* <DevTool control={control} /> */}
        </div>
      </section>
    </>
  );
};

export default CreateProduct;
