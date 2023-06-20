import React from "react";

function FormWrapper({ title, description, children }) {
  return (
    <>
      <h2 className='mt-8 text-[32px] lg:text-[40px] font-medium '>{title}</h2>
      <p className='text-grayTableHeader mt-4'>{description}</p>
      <div className='mt-9 lg:mt-12 space-y-9'>{children}</div>
    </>
  );
}

export default FormWrapper;
