import { useState } from "react";
import Image from "next/image";

function Dropdown({ children, name }) {
  const [isOpen, setIsOpen] = useState(false);

  // function to toggle the dropdown
  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="inline-flex relative h-10 mx-3 my-2">
      {/* The dropdown button */}
      <button
        className="flex justify-between items-center border border-gray-400 rounded px-3"
        onClick={handleClick}
      >
        <span>{name}</span>
        <Image
          src={
            isOpen
              ? "/assets/svgs/chevronUp.svg"
              : "/assets/svgs/chevronDown.svg"
          }
          height={12}
          width={12}
          alt="chevron"
          className="ml-10 md:ml-20"
        />
      </button>

      {/* The contents of the dropdown when it is opened */}
      {isOpen && <div className="absolute top-[100%]">{children}</div>}
    </div>
  );
}

export default Dropdown;
