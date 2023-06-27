import React from "react";

export function Input({
  register,
  label,
  name,
  type,
  errorMessage,
  labelExtra,
  errors,
}) {
  return (
    <>
      <div className='flex flex-col w-full'>
        <label htmlFor={name} className='text-small'>
          {label}
          <span className='text-grayTableHeader ml-2'>{labelExtra}</span>
        </label>

        {type === "number" ? (
          errorMessage ? (
            <input
              type='number'
              id={name}
              className='w-full mt-3 border border-grayDivider/60 h-[44px] focus:border-black focus:ring-0 '
              {...register(name, {
                valueAsNumber: true,
                required: {
                  value: true,
                  message: errorMessage,
                },
              })}
            />
          ) : (
            <input
              type='number'
              id={name}
              className='mt-3 border border-grayDivider/60 h-[44px] focus:border-black focus:ring-0 '
              {...register(name, {
                valueAsNumber: true,
              })}
            />
          )
        ) : errorMessage ? (
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
            type={type}
            id={name}
            className='mt-3 border border-grayDivider/60 h-[44px] focus:border-black focus:ring-0'
            {...register(name, {})}
          />
        )}

        {errors[name]?.message && (
          <p className='text-red-500 text-left mt-2'>{errors[name]?.message}</p>
        )}
      </div>
    </>
  );
}
