import React, { useEffect } from "react";
import { setSelectedColors } from "@/utils/vendor-product/reducer-actions-state/actions";

function ColorBoxes({ colorsData, state, dispatch }) {
  const { selectedColors } = state;

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const formValues = JSON.parse(localStorage.getItem("formValues"));
      dispatch(setSelectedColors(formValues?.productColors));
    }
  }, [dispatch]);

  const handleSelectedColors = (colorObj) => {
    const isColorSelected = selectedColors.some(
      (color) => color.hex === colorObj.hex
    );

    if (isColorSelected) {
      const newSelectedColors = selectedColors.filter(
        (color) => color.hex !== colorObj.hex
      );
      dispatch(setSelectedColors(newSelectedColors));
    } else {
      const addColorToSelectedColors = [...selectedColors, colorObj];
      dispatch(setSelectedColors(addColorToSelectedColors));
    }
  };

  return colorsData.map((colorObj, i) => {
    const colorName = colorObj.name;
    const colorHexValue = colorObj.hex;

    const isSelected = selectedColors.some(
      (color) => color.hex === colorHexValue
    );

    const boxStyle = {
      backgroundColor: colorHexValue,
    };

    return (
      <div
        className={`w-11 h-11 border ${
          isSelected ? "border-black" : "border-transparent"
        } flex items-center justify-center cursor-pointer`}
        key={colorName + i}
        onClick={() => handleSelectedColors(colorObj)}
        // onClick={() => handleSelectedColors(colorHexValue)}
      >
        <div style={boxStyle} className='w-8 h-8' />
      </div>
    );
  });
}

function renderColors(colorsData, state, dispatch) {
  return (
    <ColorBoxes colorsData={colorsData} state={state} dispatch={dispatch} />
  );
}

export default renderColors;
