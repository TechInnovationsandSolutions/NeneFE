import React from "react";
import { IoClose } from "react-icons/io5";
import { AiOutlinePlus, AiOutlineDelete } from "react-icons/ai";
import { FiEye, FiEdit2, FiEyeOff } from "react-icons/fi";

const MoreOptionsModal = ({
  setShowMoreOptions,
  showMoreOptions,
  handleEditCardData,
  toggleInStock,
  deleteCard,
  inStock,
  index,
  setCardData,
  setInStock,
  cardData,
}) => {
  return (
    <>
      <div className=' absolute -top-2 -right-2 w-52 py-4 bg-white shadow-md z-10'>
        <div className='px-3'>
          <div className='flex items-center justify-between '>
            <p>More options</p>
            <IoClose
              size='24px'
              onClick={() => setShowMoreOptions(!showMoreOptions)}
              className='cursor-pointer'
            />
          </div>
        </div>
        <div className='mt-7 space-y-3'>
          <div className='px-3 py-2 hover:bg-[#F2F2F2]'>
            <div className='flex items-center gap-3 text-grayTableHeader cursor-pointer'>
              <AiOutlinePlus size='20px' />
              <p>View Details</p>
            </div>
          </div>
          <div className='px-3 py-2 hover:bg-[#F2F2F2]'>
            <div
              className='flex items-center gap-3 text-grayTableHeader cursor-pointer'
              onClick={() =>
                handleEditCardData(index, setCardData, setShowMoreOptions)
              }
            >
              <FiEdit2 size='20px' />
              <p>Edit</p>
            </div>
          </div>
          <div className='px-3 py-2 hover:bg-[#F2F2F2]'>
            <div
              className='flex items-center gap-3 text-grayTableHeader cursor-pointer'
              onClick={() =>
                toggleInStock(index, setInStock, inStock, setCardData)
              }
            >
              {inStock ? (
                <>
                  {" "}
                  <FiEye size='20px' />
                  <p>In stock</p>
                </>
              ) : (
                <>
                  {" "}
                  <FiEyeOff size='20px' />
                  <p>Out of stock</p>
                </>
              )}
            </div>
          </div>
          <div className='px-3 py-2 hover:bg-[#F2F2F2]'>
            <div
              className='flex items-center gap-3 text-grayTableHeader cursor-pointer'
              onClick={() => deleteCard(index, setCardData, cardData)}
            >
              <AiOutlineDelete size='20px' />
              <p>Delete</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MoreOptionsModal;
