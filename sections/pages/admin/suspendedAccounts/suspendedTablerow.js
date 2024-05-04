import Link from "next/link";
import ChecboxSuspendedbox from "./checkboxSuspended";

function SuspendedTableRow({ currentItems, role, setSelected, allSelected }) {
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
                <ChecboxSuspendedbox
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
                      ? `/super-admin/vendor/suspended/${cell.id}`
                      : `/admin/suspended/${cell.id}`
                  }
                >
                  {cell.fullName}
                </Link>
              </td>
              <td className="py-8 px-4 ">{cell.businessName}</td>
              <td className="py-8 px-4 ">{cell.email}</td>
            </tr>
          ))}
      </tbody>
    </>
  );
}

export default SuspendedTableRow;
