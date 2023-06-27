import React from "react";
import { Controller } from "react-hook-form";

function FileInput({
  control,
  name,
  errorMessage,
  label,
  handleFileUpload,
  isMultiple,
  errors,
}) {
  return (
    <>
      <div className='w-[335px] h-[244px] border-dashed border-2 flex items-center justify-center'>
        <label
          htmlFor='file-upload'
          className='pb-2 border-b border-b-black font-medium cursor-pointer'
        >
          {label}
        </label>
        <Controller
          control={control}
          name={name}
          defaultValue=''
          // rules={{ required: errorMessage }}
          render={({ field }) => (
            <input
              id='file-upload'
              type='file'
              className='hidden'
              accept='image/*'
              multiple={isMultiple}
              onChange={(e) => {
                field.onChange(e);
                handleFileUpload(e);
              }}
            />
          )}
        />
      </div>
      {errors[name]?.message && (
        <p className='text-red-500 text-left mt-2'>{errors[name]?.message}</p>
      )}
    </>
  );
}

export default FileInput;
