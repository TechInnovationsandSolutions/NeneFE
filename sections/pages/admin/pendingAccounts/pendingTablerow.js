import React from "react";
import Link from "next/link";
import ChecboxPendingbox from "./checkboxPending";

function PendingTableRow({ currentItems, setSelected, allSelected,role }) {
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
                <ChecboxPendingbox
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
                      ? `/super-admin/vendor/pending/${cell.id}`
                      : `/admin/pending/${cell.id}`
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

export default PendingTableRow;
