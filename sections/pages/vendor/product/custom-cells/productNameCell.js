import { useState, useEffect } from "react";
import { FiEdit2 } from "react-icons/fi";

const productNameCellRender = (info) => {
  const {
    getValue,
    row: { index },
    column: { id },
    table,
  } = info;

  const ProductNameCell = () => {
    const initialValue = getValue();
    const [productName, setProductName] = useState(initialValue);

    const { isCellEditing, handleEditCellData, updateData } =
      table.options.meta;

    const onBlur = () => {
      updateData(index, id, productName);
      handleEditCellData();
    };

    useEffect(() => {
      setProductName(initialValue);
    }, [initialValue]);

    return (
      <div className='flex flex-col items-center justify-center space-y-5'>
        <div>
          {isCellEditing ? (
            <input
              type='text'
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              className='w-fit text-center border-0 focus:ring-0 '
              onBlur={onBlur}
            />
          ) : (
            productName
          )}
        </div>
        <div
          className='hidden group-hover:flex items-center justify-center bg-white py-1 px-4 rounded-3xl space-x-2 cursor-pointer'
          onClick={handleEditCellData}
        >
          <FiEdit2 className='text-lightGray' />
          <p className='text-sm'> Edit</p>
        </div>
      </div>
    );
  };

  return <ProductNameCell />;
};

export default productNameCellRender;
