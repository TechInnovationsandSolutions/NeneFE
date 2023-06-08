import { useState, useEffect } from "react";
import { AiOutlineDelete } from "react-icons/ai";

const priceCellRender = (info) => {
  const {
    getValue,
    row: { index },
    column: { id },
    table,
  } = info;

  const PriceCell = () => {
    const initialValue = getValue();
    const [price, setPrice] = useState(initialValue);

    const { isCellEditing, handleEditCellData, updateData, deleteRow } =
      table.options.meta;

    const onBlur = () => {
      updateData(index, id, price);
      handleEditCellData();
    };

    useEffect(() => {
      setPrice(initialValue);
    }, [initialValue]);

    return (
      <div className='flex flex-col items-center justify-center space-y-5'>
        <div>
          {isCellEditing ? (
            <input
              type='text'
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className='w-fit text-center border-0 focus:ring-0 '
              onBlur={onBlur}
            />
          ) : (
            price
          )}
        </div>
        <div className='hidden group-hover:flex items-center justify-center bg-white py-1 px-4 rounded-3xl space-x-2 cursor-pointer'>
          <AiOutlineDelete className='text-lightGray' />
          <p className='text-sm' onClick={() => deleteRow(index)}>
            {" "}
            Delete
          </p>
        </div>
      </div>
    );
  };

  return <PriceCell />;
};

export default priceCellRender;
