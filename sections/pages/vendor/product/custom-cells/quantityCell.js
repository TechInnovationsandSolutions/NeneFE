import { useState, useEffect } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

const quantityCellRenderer = (info) => {
  const {
    getValue,
    row: { index },
    column: { id },
    table,
  } = info;

  const QuantityCell = () => {
    const initialValue = getValue();
    const [quantity, setQuantity] = useState(initialValue);
    const [inStock, setInStock] = useState(true);

    const { isCellEditing, handleEditCellData, updateData } =
      table.options.meta;

    const onBlur = () => {
      updateData(index, id, quantity);
      handleEditCellData();
    };

    useEffect(() => {
      setQuantity(initialValue);
    }, [initialValue]);

    const toggleInStock = () => {
      setInStock(!inStock);
      inStock ? setQuantity(0) : setQuantity(initialValue);
    };

    return (
      <div className='flex flex-col items-center justify-center space-y-5'>
        <div>
          {isCellEditing ? (
            <input
              type='text'
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className='w-fit text-center  border-0 focus:ring-0 '
              onBlur={onBlur}
            />
          ) : (
            quantity
          )}
        </div>
        <div
          className='hidden group-hover:flex items-center justify-center bg-white py-1 px-4 rounded-3xl space-x-2 cursor-pointer'
          onClick={toggleInStock}
        >
          {inStock ? (
            <>
              <FiEyeOff className='text-lightGray' />
              <p className='text-sm'> In stock</p>
            </>
          ) : (
            <>
              {" "}
              <FiEye className='text-lightGray' />
              <p className='text-sm'> Out of stock</p>
            </>
          )}
        </div>
      </div>
    );
  };

  return <QuantityCell />;
};

export default quantityCellRenderer;
