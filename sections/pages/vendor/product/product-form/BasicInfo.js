import React, { useState, useEffect } from "react";
import FormWrapper from "./FormWrapper";
import { Input, TextArea, CustomSelect } from "@/components/form-inputs";
import { productCategoryData, productSubCategoryData } from "@/mockData";

function BasicInfo({ register, errors, control, setValue, watch, getValues }) {
  const description =
    "Please provide accurate and detailed information about your product. Be sure to highlight the unique features and benefits of your product, and use relevant keywords.";

  const [productSubCategoryOptions, setProductSubCategoryOptions] = useState(
    []
  );

  useEffect(() => {
    const subscription = watch((value) => {
      const productCategoryValue = value.productCategory;

      const getProductCategoryKey = () => {
        const foundEntry = Object.entries(productCategoryData).find(
          ([key, val]) => val === productCategoryValue
        );
        return foundEntry ? foundEntry[0] : null;
      };

      setProductSubCategoryOptions(
        productSubCategoryData[getProductCategoryKey()]
      );
    });

    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <FormWrapper title='Basic Information' description={description}>
      <Input
        label='Product Name'
        name='productName'
        type='text'
        errorMessage='Product name is required'
        register={register}
        errors={errors}
      />
      <CustomSelect
        name='productCategory'
        label='Product Category'
        register={register}
        errorMessage='Product category is required'
        optionData={productCategoryData}
        control={control}
        setValue={setValue}
        watch={watch}
        getValues={getValues}
        errors={errors}
      />
      <CustomSelect
        name='productSubCategory'
        label='Product Sub-category'
        register={register}
        errorMessage='Product sub-category is required'
        optionData={productSubCategoryOptions}
        control={control}
        setValue={setValue}
        errors={errors}
      />
      <Input
        label='Product Brand'
        name='productBrand'
        type='text'
        errorMessage='Product brand is required'
        register={register}
        errors={errors}
      />
      <TextArea
        label='Product Description'
        name='productDescription'
        errorMessage='Product brand is required'
        register={register}
        errors={errors}
      />
      <Input
        label='Additional instructions'
        labelExtra='(optional)'
        name='instructions'
        type='text'
        register={register}
        errors={errors}
      />
    </FormWrapper>
  );
}

export default BasicInfo;
