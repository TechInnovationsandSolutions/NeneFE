import React from "react";
import { Input, Select } from "@/components/form-inputs";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

function DeliveryAddressSection() {
  const formMethods = useForm({
    defaultValues: {
      name: "",
      street: "",
      country: ["", ""],
      state: ["", ""],
      postalCode: "",
      phoneNumber: "",
    },
  });

  const { handleSubmit, register, control, formState } = formMethods;
  const { errors } = formState;

  const onSubmit = (data) => {
    // console.log(data);
    // console.log(errors);
  };

  const onError = (errors) => {
    // console.log(errors);
  };

  return (
    <>
      <section className='md:w-[50%] xl:w-[60%]'>
        <div className='md:bg-grayBg md:py-5 md:pl-7 mt-10'>
          <h3 className='text-small font-bold tracking-wider '>
            DELIVERY ADDRESS
          </h3>
        </div>
        {/* Contact Form */}
        <form
          onSubmit={handleSubmit(onSubmit, onError)}
          noValidate
          className='mt-6 md:mt-11'
        >
          <Input
            label='Contact Name'
            name='name'
            type='text'
            errorMessage='Name is required'
            register={register}
            errors={errors}
          />
          <Input
            label='Street Address'
            name='street'
            type='text'
            errorMessage='Street address is required'
            register={register}
            errors={errors}
          />
          <Select
            label='Country'
            name='country'
            options={["option1", "option2"]}
            errorMessage='Country is required'
            register={register}
            errors={errors}
          />
          <Select
            label='State/City'
            name='state'
            options={["option1", "option2"]}
            errorMessage='State is required'
            register={register}
            errors={errors}
          />
          <Input
            label='Postal Code'
            name='postalCode'
            type='text'
            errorMessage='Postal code is required'
            register={register}
            errors={errors}
          />
          <Input
            label='Phone Number'
            name='phoneNumber'
            type='tel'
            errorMessage='Phone number is required'
            register={register}
            errors={errors}
          />
          <button className='py-2 bg-black text-white rounded-[4px] w-full md:w-[212px] font-bold mt-16'>
            Proceed to Billing
          </button>
        </form>
        {/* <DevTool control={control} /> */}
      </section>
    </>
  );
}

export default DeliveryAddressSection;
