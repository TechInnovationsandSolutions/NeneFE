import { isArray, isObject } from "@/utils/vendor-product/checkObjectOrArray";

const renderOptionLists = (
  optionData,
  selectedOption,
  searchValue,
  name,
  setSelectedOption,
  setIsOpenDropdown,
  setSearchValue,
  setValue
) => {
  if (isObject(optionData)) {
    return Object.keys(optionData)?.map((option) => {
      const optionValue = optionData[option];

      const selectedOptionStyle =
        optionValue?.toLowerCase() === selectedOption.toLowerCase() &&
        "bg-grayBg";

      const showOrHideOptionTrayStyle = optionValue
        ?.toLowerCase()
        .startsWith(searchValue)
        ? "block"
        : "hidden";

      const trimmedOption =
        optionValue && optionValue?.length > 25
          ? optionValue?.substring(0, 25) + "..."
          : optionValue;

      const isSelectedOptionMatch =
        optionValue?.toLowerCase() === selectedOption.toLowerCase();

      return (
        <li
          key={option}
          className={`optionList py-4 px-5 text-sm cursor-pointer ${selectedOptionStyle} ${showOrHideOptionTrayStyle} `}
          onClick={() => {
            if (!isSelectedOptionMatch) {
              setSelectedOption(optionValue);
              setIsOpenDropdown(false);
              setSearchValue(trimmedOption);
              setValue(name, optionValue);
            }
          }}
        >
          {optionValue}
        </li>
      );
    });
  } else if (isArray(optionData)) {
    return optionData?.map((option) => {
      const selectedOptionStyle =
        option?.toLowerCase() === selectedOption.toLowerCase() && "bg-grayBg";

      const showOrHideOptionTrayStyle = option
        ?.toLowerCase()
        .startsWith(searchValue)
        ? "block"
        : "hidden";

      const trimmedOption =
        option && option?.length > 25
          ? option?.substring(0, 25) + "..."
          : option;

      const isSelectedOptionMatch =
        option?.toLowerCase() === selectedOption.toLowerCase();

      return (
        <li
          key={option}
          className={`optionList py-4 px-5 text-sm hover:bg-[#F5F5F5] cursor-pointer ${selectedOptionStyle} ${showOrHideOptionTrayStyle}`}
          onClick={() => {
            if (!isSelectedOptionMatch) {
              setSelectedOption(option);
              setIsOpenDropdown(false);
              setSearchValue(trimmedOption);
              setValue(name, option);
            }
          }}
        >
          {option}
        </li>
      );
    });
  }

  return null;
};

export default renderOptionLists;
