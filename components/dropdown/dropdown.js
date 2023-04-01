import { useState } from "react";

function Dropdown({ children, name }) {
  const [isOpen, setIsOpen] = useState(false);

  // function to toggle the dropdown
  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="inline-flex relative h-10">
      {/* The dropdown button */}
      <button
        className="flex justify-between items-center border border-gray-400 rounded px-3"
        onClick={handleClick}
      >
        <span>{name}</span>
        <img
          src={
            isOpen
              ? "/assets/svgs/chevronUp.svg"
              : "/assets/svgs/chevronDown.svg"
          }
          alt=""
          className="ml-20"
        />
      </button>

      {/* The contents of the dropdown when it is opened */}
      {isOpen && <div className="absolute top-[100%]">{children}</div>}
    </div>
  );
}

export default Dropdown;
