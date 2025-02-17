import React from "react";
import Link from "next/link";
import ChecboxDeclinedbox from "./checkboxDeclined";

function DeclinedTableRow({ currentItems,role, setSelected, allSelected }) {
  // console.log("table rows now showing");

  return (
    <>
      <tbody className="w-full">
        {currentItems &&
          currentItems.map((cell, i) => (
            <tr
              className="text-sm sm:text-base font-normal hover:bg-[#F6F6F6] w-full"
              key={i}
            >
              <td className="py-8 pr-4  ">
                <ChecboxDeclinedbox
                  setSelected={setSelected}
                  cell={cell}
                  currentItems={currentItems}
                  allSelected={allSelected}
                />
              </td>
              <td className="py-8 px-4 ">
                <Link
                  href={
                    role === "super-admin"
                      ? `/super-admin/vendor/declined/${cell.id}`
                      : `/admin/declined/${cell.id}`
                  }
                >
                  {cell.fullName}
                </Link>
              </td>
              <td className="py-8 px-4 ">{cell.businessName}</td>
              <td className="py-8 px-4 ">{cell.email}</td>
              <td className="py-8 px-4 ">Jan 5, 2013</td>
            </tr>
          ))}
      </tbody>
    </>
  );
}

export default DeclinedTableRow;
