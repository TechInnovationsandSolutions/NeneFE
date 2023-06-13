import React from "react";

export function Select({
  register,
  options,
  name,
  label,
  errorMessage,
  errors,
}) {
  return (
    <div className='flex flex-col mt-6'>
      <label htmlFor={name} className='text-small'>
        {label}
      </label>
      <select
        {...register(name, {
          required: errorMessage,
        })}
        className='mt-3 border border-grayDivider/60 h-[44px] focus:border-black focus:ring-0'
      >
        {options.map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
      <p className='text-red-500 text-left mt-2'>{errors[name]?.message}</p>
    </div>
  );
}
