import { useState } from "react";

const HelpAccordion = ({ helpItem }) => {
  const [showAccordion, setShowAccordion] = useState(false);

  const handleClick = () => {
    setShowAccordion(!showAccordion);
  };
  return (
    <div className="flex flex-col gap-3">
      <button
        onClick={handleClick}
        className="w-full flex justify-between items-center py-5 text-black text-base leading-5 border-b border-[#bebebe] "
      >
        {helpItem.title}{" "}
        <span className="text-2xl">{showAccordion ? "-" : "+"}</span>
      </button>
      <p
        className={
          showAccordion
            ? "flex text-base leading-5 transform translate-y-0 ease-linear duration-1000"
            : "text-base leading-5 transform -translate-y-10 hidden ease-linear duration-1000"
        }
      >
        {helpItem.response}
      </p>
    </div>
  );
};

export default HelpAccordion;
