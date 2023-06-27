import React, { useEffect } from "react";
import { setSelectedSizes } from "@/utils/vendor-product/reducer-actions-state/actions";

function SizeBoxes({ sizesData, state, dispatch }) {
  const { selectedSizes } = state;

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const formValues = JSON.parse(localStorage.getItem("formValues"));
      dispatch(setSelectedSizes(formValues?.productSizes));
    }
  }, [dispatch]);

  const handleSelectedSizes = (size) => {
    if (selectedSizes.includes(size)) {
      const newSelectedSizes = selectedSizes.filter(
        (selectedSize, i) => size !== selectedSize
      );
      dispatch(setSelectedSizes(newSelectedSizes));
    } else {
      const addSizeToSelectedSizes = [...selectedSizes, size];
      dispatch(setSelectedSizes(addSizeToSelectedSizes));
    }
  };

  return sizesData.map((size, i) => {
    const isSelected = selectedSizes.includes(size);

    return (
      <div
        key={size}
        className={`w-8 h-8 border flex items-center justify-center cursor-pointer ${
          isSelected ? "border-4 border-black" : "border-[#979797]"
        }`}
        onClick={() => handleSelectedSizes(size)}
      >
        {size}
      </div>
    );
  });
}

function renderSizes(sizesData, state, dispatch) {
  return <SizeBoxes sizesData={sizesData} state={state} dispatch={dispatch} />;
}

export default renderSizes;
