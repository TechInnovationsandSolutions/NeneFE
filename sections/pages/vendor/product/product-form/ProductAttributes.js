import React, { useEffect, useReducer } from "react";
import { Controller } from "react-hook-form";
import FormWrapper from "./FormWrapper";
import { sizesData, colors2 } from "@/mockData";
import { ColorModal } from "@/sections/pages/vendor/product";
import { SketchPicker } from "react-color";
import {
  initialState,
  reducer,
} from "@/utils/vendor-product/reducer-actions-state/reducerAndState";
import {
  setColorsPicked,
  setDisplayColorPicker,
  setColor,
  setColorsPickedNameAndHex,
  setColorBoxesList,
} from "@/utils/vendor-product/reducer-actions-state/actions";
import { renderSizes, renderColors } from "@/utils/vendor-product";

function ProductAttributes({ control, setValue, errors, getValues }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    selectedColors,
    colorsPicked,
    displayColorPicker,
    color,
    colorsPickedNameAndHex,
    colorBoxesList,
    selectedSizes,
  } = state;

  const description =
    "Select the relevant attributes for your product, such as size, color, and material, to help customers find and purchase your product with ease.";

  const sizeBoxesList = renderSizes(sizesData, state, dispatch);

  useEffect(() => {
    const colorBoxes = renderColors(
      [...colorsPickedNameAndHex, ...colors2],
      state,
      dispatch
    );

    dispatch(setColorBoxesList(colorBoxes));
    setValue("productColors", selectedColors);
    setValue("productSizes", selectedSizes);
  }, [selectedColors, displayColorPicker, selectedSizes]);

  const numOfColorsSelected = selectedColors?.length;

  const toggleColorModal = () => {
    dispatch(setDisplayColorPicker(!displayColorPicker));
  };

  const handleChangeComplete = (color) => {
    const colorHexValue = color.hex;

    dispatch(setColor(colorHexValue));

    if (colorsPicked.includes(colorHexValue)) {
      const removeColor = colorsPicked.filter((c) => c !== colorHexValue);
      dispatch(setColorsPicked(removeColor));
    } else {
      const addColor = [...colorsPicked, colorHexValue];
      dispatch(setColorsPicked(addColor));
    }
  };

  const handleClose = () => {
    const constructNameAndHex = colorsPicked.map((colorPicked, i) => {
      const colorName = "color" + (i + 1);

      return {
        name: colorName,
        hex: colorPicked,
      };
    });

    dispatch(setColorsPickedNameAndHex(constructNameAndHex));
    dispatch(setDisplayColorPicker(false));
  };

  return (
    <>
      <FormWrapper title='Product Attribute' description={description}>
        <section className=''>
          <div className=''>
            <p>Select available sizes</p>
            <div className='grid grid-cols-[repeat(auto-fit,minmax(36px,1fr))] gap-[14px] mt-6'>
              {sizeBoxesList}
            </div>
          </div>
          <div className='mt-10 '>
            <div className='flex items-center justify-between'>
              <p>Select available colors</p>
              <p>
                {numOfColorsSelected || 0}
                <span className='ml-1 text-grayTableHeader'>{`color${
                  numOfColorsSelected > 1 ? "s" : ""
                } selected`}</span>
              </p>
            </div>
            <div className='grid grid-cols-[repeat(auto-fit,minmax(36px,1fr))] gap-[14px] mt-4 md:mt-6'>
              {colorBoxesList}
            </div>
            <div
              className='w-fit mt-4 pb-[2px] border-b border-black cursor-pointer'
              onClick={toggleColorModal}
            >
              <p className=''>Or select a custom color</p>
            </div>
          </div>
        </section>
      </FormWrapper>
      <Controller
        control={control}
        name='productColors'
        defaultValue=''
        rules={{ required: "Product color is required" }}
        render={({ field }) => (
          <input
            type='text'
            id='productColors'
            value={field.value}
            readOnly
            // onChange={(e) => {
            //   field.onChange(e);
            //   handleChange(e);
            // }}
            placeholder={`Select color`}
            className='hidden '
          />
        )}
      />
      {errors?.productColors?.message && (
        <p className='text-red-500 text-left mt-2'>
          {errors?.productColors?.message}
        </p>
      )}
      {displayColorPicker && (
        <ColorModal>
          <div className=''>
            <div className='fixed inset-0' onClick={handleClose} />
            <SketchPicker
              onChangeComplete={handleChangeComplete}
              color={color}
              styles={{
                picker: {
                  width: "285px",
                  height: "375px",
                  padding: "10px",
                  borderRadius: "px",
                  background: "white",
                  textAlign: "center",
                  boxShadow:
                    "rgba(0, 0, 0, 0.15) 0px 0px 0px 1px, rgba(0, 0, 0, 0.15) 0px 8px 16px",
                },
              }}
            />
          </div>
        </ColorModal>
      )}
    </>
  );
}

export default ProductAttributes;
