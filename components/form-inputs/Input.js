import React from "react";

export function Input({ register, label, name, type, errorMessage, errors }) {
  return (
    <>
      <div className='flex flex-col mt-6'>
        <label htmlFor={name} className='text-small'>
          {label}
        </label>
        {type !== "number" ? (
          <input
            type={type}
            id={name}
            className='mt-3 border border-grayDivider/60 h-[44px] focus:border-black focus:ring-0'
            {...register(name, {
              required: errorMessage,
            })}
          />
        ) : (
          <input
            type='number'
            id={name}
            className='mt-3 border border-grayDivider/60 h-[44px] focus:border-black focus:ring-0'
            {...register(name, {
              valueAsNumber: true,
              required: {
                value: true,
                message: errorMessage,
              },
            })}
          />
        )}
        <p className='text-red-500 text-left mt-2'>{errors[name]?.message}</p>
      </div>
    </>
  );
}
