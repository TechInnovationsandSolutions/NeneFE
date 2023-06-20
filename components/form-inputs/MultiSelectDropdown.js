import React, { useState, useRef, useEffect } from "react";
import { BiChevronDown } from "react-icons/bi";
import { Controller } from "react-hook-form";
import { useOutsideClick } from "@/utils/vendor-product";

const MultiSelectDropdown = ({
  options,
  control,
  name,
  errorMessage,
  errors,
  label,
  setValue,
}) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const formValues = JSON.parse(localStorage.getItem("formValues"));
      setSelectedOptions(formValues?.shippingOptions);
    }
  }, []);

  const handleOptionToggle = (option) => {
    const selectedIndex = selectedOptions.indexOf(option);
    let updatedSelection = [];

    if (selectedIndex === -1) {
      // If the option is not selected, add it to the selection
      updatedSelection = [...selectedOptions, option];
    } else {
      // If the option is already selected, remove it from the selection
      updatedSelection = selectedOptions.filter((item) => item !== option);
    }

    setSelectedOptions(updatedSelection);
    setValue("shippingOptions", updatedSelection);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useOutsideClick(dropdownRef, () => setIsOpen(false));

  const listOfSelectedOptions = selectedOptions.map((selectedOpt, i) => {
    return (
      <div
        className='space-x-3 border border-grayTableHeader rounded-md py-1 px-2'
        key={selectedOpt + i}
      >
        <span>{selectedOpt}</span>
        <span
          className='border-l border-l-black pl-2 text-lightGray cursor-pointer'
          onClick={() => handleOptionToggle(selectedOpt)}
        >
          X
        </span>
      </div>
    );
  });

  return (
    <div className='flex flex-col' ref={dropdownRef}>
      <label className='text-lg'>{label}</label>
      <div
        className='flex items-center justify-between p-2 mt-3 border border-grayDivider/60 text-small min-h-[50px]'
        onClick={toggleDropdown}
      >
        {selectedOptions.length > 0 && (
          <div className='flex items-center gap-3'>{listOfSelectedOptions}</div>
        )}

        <BiChevronDown
          size={24}
          className={`${isOpen && "rotate-180"} text-lightGray ml-auto`}
          onClick={toggleDropdown}
        />
      </div>
      {isOpen && (
        <ul className='bg-white border-x border-b border-grayDivider/60 max-h-60 overflow-y-auto '>
          {options.map((option) => (
            <Controller
              key={option}
              control={control}
              name={name}
              rules={{ required: errorMessage }}
              render={({ field }) => (
                <>
                  <li
                    id={name}
                    className={`optionList py-4 px-5 text-sm cursor-pointer ${
                      selectedOptions.includes(option) ? "bg-grayBg" : ""
                    }`}
                    onClick={() => handleOptionToggle(option)}
                  >
                    {option}
                  </li>
                </>
              )}
            />
          ))}
        </ul>
      )}
      {errors[name]?.message && (
        <p className='text-red-500 text-left mt-2'>{errors[name]?.message}</p>
      )}
    </div>
  );
};

export default MultiSelectDropdown;
