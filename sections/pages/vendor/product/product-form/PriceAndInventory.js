import React from "react";
import FormWrapper from "./FormWrapper";
import { Input } from "@/components/form-inputs";

function PriceAndInventory({ register, errors }) {
  const description =
    "Set the price for your product and specify the minimum and maximum order quantities. You can also manage your inventory levels here.";

  return (
    <FormWrapper title='Price and Inventory' description={description}>
      <Input
        label='Product price (N)'
        name='productPrice'
        type='number'
        errorMessage='Product price is required'
        register={register}
        errors={errors}
      />
      <Input
        label='Product quantity'
        name='productQuantity'
        type='number'
        errorMessage='Product quantity is required'
        register={register}
        errors={errors}
      />
      <div className='flex items-center justify-between gap-4'>
        <Input
          label='Min order quantity'
          name='minOrder'
          type='number'
          errorMessage='Min order is required'
          register={register}
          errors={errors}
        />
        <Input
          label='Max order quantity'
          name='maxOrder'
          type='number'
          errorMessage='Max order is required'
          register={register}
          errors={errors}
        />
      </div>
    </FormWrapper>
  );
}

export default PriceAndInventory;
