import React from "react";
import FormWrapper from "./FormWrapper";
import { Input, MultiSelectDropdown } from "@/components/form-inputs";

const options = ["Option 1", "Option 2", "Option 3"];

function ShippingInformation({ register, errors, control, setValue }) {
  const description =
    "Specify shipping details such as weight, dimensions, and shipping options.";

  // const handleSelectionChange = (selectedOptions) => {
  //   console.log("Selected options:", selectedOptions);
  //   // Perform any necessary actions with the selected options
  // };

  return (
    <FormWrapper title='Shipping Information' description={description}>
      <Input
        label='Product weight (kg)'
        name='productWeight'
        type='number'
        errorMessage='Product weight is required'
        register={register}
        errors={errors}
      />
      <MultiSelectDropdown
        label='Select shipping options'
        options={options}
        control={control}
        name='shippingOptions'
        errorMessage='Shipping option is required'
        errors={errors}
        setValue={setValue}
      />
    </FormWrapper>
  );
}

export default ShippingInformation;
