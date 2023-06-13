import React from "react";
import { flexRender } from "@tanstack/react-table";

const ProductTable = ({ tableClass, table }) => {
  return (
    <>
      <table className={tableClass}>
        <thead className=''>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr
              key={headerGroup.id}
              className='border-b border-mediumGray hover:border-0'
            >
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className='relative pb-5 hover:border-r border-r-grayBg text-grayTableHeader hover:opacity-100'
                  {...{
                    style: {
                      width: header.getSize(),
                    },
                  }}
                >
                  <div
                    {...{
                      className: `flex item-center justify-center  ${
                        header.column.getCanSort()
                          ? "cursor-pointer select-none"
                          : ""
                      }
                            `,
                      onClick: header.column.getToggleSortingHandler(),
                    }}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                    {header.column.getCanSort() && (
                      <div className='flex items-center justify-center '>
                        <p
                          className={`rotate-90 -mr-3 text-xs ${
                            header.column.getIsSorted() === "desc"
                              ? "text-priBlack"
                              : "text-grayTableHeader"
                          }`}
                        >
                          &#10230;
                        </p>
                        <p
                          className={`-rotate-90 text-xs ${
                            header.column.getIsSorted() === "asc"
                              ? "text-priBlack"
                              : "text-grayTableHeader"
                          }`}
                        >
                          &#10230;
                        </p>
                      </div>
                    )}
                  </div>
                  <div
                    {...{
                      onMouseDown: header.getResizeHandler(),
                      onTouchStart: header.getResizeHandler(),
                      className: ` absolute right-0 top-0 h-full w-1 bg-lightGray cursor-col-resize select-none touch-none opacity-0 ${
                        header.column.getIsResizing()
                          ? "bg-grayBg opacity-100"
                          : ""
                      }`,
                    }}
                  />
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows?.map((row) => (
            <tr key={row.id} className='group hover:bg-[#F2F2F2]'>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className='align-top text-center py-6'>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ProductTable;
