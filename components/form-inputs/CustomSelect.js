import { useState, useRef, useEffect } from "react";
import { BiChevronDown } from "react-icons/bi";
import { Controller } from "react-hook-form";
import { useOutsideClick, renderOptionLists } from "@/utils/vendor-product";

const CustomSelect = ({
  errorMessage,
  optionData,
  label,
  name,
  setValue,
  control,
  errors,
}) => {
  const [searchValue, setSearchValue] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const dropdownRef = useRef(null);

  // Custom blur effect
  const onOutsideClick = () => {
    setIsOpenDropdown(false);
  };

  useOutsideClick(dropdownRef, onOutsideClick);

  // Render select options
  const optionsList = renderOptionLists(
    optionData,
    selectedOption,
    searchValue,
    name,
    setSelectedOption,
    setIsOpenDropdown,
    setSearchValue,
    setValue
  );

  const handleChange = (e) => {
    setSearchValue(e.target.value.toLowerCase());
    setIsOpenDropdown(true);
  };

  const handleClick = () => {
    setSearchValue("");
    setIsOpenDropdown(true);
  };

  return (
    <div className='flex flex-col' ref={dropdownRef}>
      <label htmlFor={name} className='text-small'>
        {label}
      </label>
      <div
        className=' flex items-center justify-between px-2 mt-3 border border-grayDivider/60'
        onClick={handleClick}
      >
        <Controller
          control={control}
          name={name}
          defaultValue=''
          rules={{ required: errorMessage }}
          render={({ field }) => (
            <input
              type='text'
              id={name}
              value={field.value}
              onChange={(e) => {
                field.onChange(e);
                handleChange(e);
              }}
              placeholder={`Enter a ${label.toLowerCase()}`}
              className='border-0 focus:border-black focus:ring-0 w-11/12'
            />
          )}
        />
        <BiChevronDown
          size={24}
          className={`${isOpenDropdown && "rotate-180"} text-lightGray`}
          onClick={() => setIsOpenDropdown(!isOpenDropdown)}
        />
      </div>
      {isOpenDropdown && (
        <ul
          className={`bg-white border-x border-b border-grayDivider/60 max-h-60 overflow-y-auto `}
        >
          {optionsList}
        </ul>
      )}
      {errors[name]?.message && (
        <p className='text-red-500 text-left mt-2'>{errors[name]?.message}</p>
      )}
    </div>
  );
};

export default CustomSelect;
