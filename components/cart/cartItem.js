import Image from "next/image";

function CartItem({
  name,
  code,
  img,
  quantity,
  price,
  total,
  color,
  size,
  handleClick,
  id,
}) {
  return (
    <>
      <div className="flex flex-col sm:grid grid-cols-7 p-1 md:p-8 border-b border-b-gray-400">
        <div className="col-span-4 md:col-span-3 flex flex-col max-sm:w-full">
          <h3 className="flex sm:hidden text-sm font-medium mb-3">ITEM</h3>

          <div className="flex max-sm:mb-2">
            <div className="h-[152px] w-[117px] md:h-[226px] md:w-[182px] overflow-hidden relative mr-3">
              <Image
                src={img}
                fill
                alt="product image"
                className="absolute object-cover"
              />
            </div>
            <div className="sm:py-2 flex flex-col justify-between">
              <p className="">{name}</p>
              <p className="text-[#979797] text-sm">Product Code: {code}</p>
              <div>
                {color && (
                  <p className="text-sm">
                    <span className="font-semibold">Color:</span> {color}
                  </p>
                )}
                {size && (
                  <p className="text-sm">
                    <span className="font-semibold">UK Size:</span> {size}
                  </p>
                )}
              </div>
              <button
                className="flex items-center"
                onClick={() => handleClick(id)}
              >
                <Image
                  src="/assets/svgs/deleteIcon.svg"
                  height={16}
                  width={16}
                  className="mr-2"
                  alt="remove"
                />
                <span className="max-sm:text-xs font-medium">REMOVE</span>
              </button>
            </div>
          </div>
        </div>

        <div className="flex max-sm:justify-between max-sm:w-full max-sm:items-center">
          <h3 className="font-medium sm:hidden text-sm">QTY</h3>
          <div className="h-7 sm:h-8 flex items-center px-5 border border-gray-300 font-semibold text-lg">
            {quantity}
          </div>
        </div>
        <div className="flex max-sm:justify-between max-sm:w-full max-sm:items-center">
          <h3 className="font-medium sm:hidden text-sm">PRICE</h3>
          <p className="font-semibold text-lg">N {price}</p>
        </div>
        <div className="col-span-1 md:col-span-2 flex max-sm:justify-between sm:justify-end max-sm:w-full max-sm:items-center">
          <h3 className="font-medium sm:hidden text-sm">TOTAL PRICE</h3>
          <p className="font-semibold text-lg text-end">N {total}</p>
        </div>
      </div>
    </>
  );
}

export default CartItem;
