import React from "react";

export function TextArea({ register, label, name, errorMessage, errors }) {
  return (
    <>
      <div className='flex flex-col'>
        <label htmlFor={name} className='text-small'>
          {label}
        </label>
        <textarea
          id={name}
          className='mt-3 border border-grayDivider/60 min-h-[225px] focus:border-black focus:ring-0 overflow-y-scroll'
          {...register(name, {
            required: errorMessage,
          })}
        />
      </div>
    </>
  );
}
