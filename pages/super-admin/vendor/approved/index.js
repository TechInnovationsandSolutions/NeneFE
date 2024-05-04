import Table from "@/sections/pages/admin/table";
import ApprovedTableRow from "@/sections/pages/admin/approvedAccounts/approvedTablerow";
import ApprovedTablehead from "@/sections/pages/admin/approvedAccounts/approvedTablehead";
import { list } from "@/sections/pages/admin/pagination";
import Button from "@/components/button/button";
import { useEffect, useState } from "react";
import ApproveMobile from "@/sections/pages/admin/approvedAccounts/approvedMobile";

function Approved() {
  const [currentItems, setCurrentItems] = useState(null);
  const [selected, setSelected] = useState([]);
  const [allSelected, setAllSelected] = useState(false);

  return (
    <div className="p-5 sm:p-8">
      <div className="flex flex-col sm:flex-row justify-between  lg:items-center gap-4">
        <p className="text-2xl font-bold p-0 m-0">
          Approved Accounts
          <span className="text-gray-600 ml-2">({accountsList.length})</span>
        </p>

        <div className="flex flex-nowrap gap-3">
          <Button
            text="View Details"
            variant="white"
            customClassName={`${
              selected.length == 1 && "lg:block"
            } border border-gray-300 py-1 max-sm:py-2 max-sm:px-4   hidden`}
          />
          <Button
            text="Suspend Account"
            variant="white"
            customClassName={`${
              selected.length >= 1 && "lg:block"
            } border border-gray-300 py-1 max-sm:py-2 max-sm:px-4  hidden`}
          />
          <Button
            text="Delete Account"
            variant="white"
            customClassName={`${
              selected.length >= 1 && "lg:block"
            } border border-gray-300 py-1 max-sm:py-2 max-sm:px-4  hidden`}
          />
        </div>
      </div>

      <div className="lg:block hidden lg:overflow-x-auto mt-10">
        <Table
          tableHead={
            <ApprovedTablehead
              setSelected={setSelected}
              allLists={accountsList}
              setAllSelected={setAllSelected}
            />
          }
          tableRows={
            <ApprovedTableRow
              setSelected={setSelected}
              currentItems={currentItems}
              selected={selected}
              allSelected={allSelected}
            />
          }
          data={accountsList}
          currentItems={currentItems}
          setCurrentItems={setCurrentItems}
        />
      </div>
      <div className="px-6 grid grid-cols-1 gap-4 lg:hidden my-6">
        <ApproveMobile currentItems={currentItems} />
      </div>
    </div>
  );
}

const accountsList = [
  {
    name: "John Snow",
    email: "johnsnowa@gmail.com",
    date: "Jan 1, 2023",
    fulfilledOrders: 14,
    failedOrders: 3,
  },
  {
    name: "John Snow",
    email: "johnsnowz@gmail.com",
    date: "Jan 1, 2023",
    fulfilledOrders: 14,
    failedOrders: 3,
  },
  {
    name: "John Snow",
    email: "johnsnowb@gmail.com",
    date: "Jan 1, 2023",
    fulfilledOrders: 14,
    failedOrders: 3,
  },
  {
    name: "John Snow",
    email: "johnsnowc@gmail.com",
    date: "Jan 1, 2023",
    fulfilledOrders: 14,
    failedOrders: 3,
  },
  {
    name: "John Snow",
    email: "johnsnowd@gmail.com",
    date: "Jan 1, 2023",
    fulfilledOrders: 14,
    failedOrders: 3,
  },
  {
    name: "John Snow",
    email: "johnsnowe@gmail.com",
    date: "Jan 1, 2023",
    fulfilledOrders: 14,
    failedOrders: 3,
  },
  {
    name: "John Snow",
    email: "johnsnowy@gmail.com",
    date: "Jan 1, 2023",
    fulfilledOrders: 14,
    failedOrders: 3,
  },
  {
    name: "John Snow",
    email: "johnsnowf@gmail.com",
    date: "Jan 1, 2023",
    fulfilledOrders: 14,
    failedOrders: 3,
  },
  {
    name: "John Snow",
    email: "johnsnowg@gmail.com",
    date: "Jan 1, 2023",
    fulfilledOrders: 14,
    failedOrders: 3,
  },
  {
    name: "John Snow",
    email: "johnsnowx@gmail.com",
    date: "Jan 1, 2023",
    fulfilledOrders: 14,
    failedOrders: 3,
  },
  {
    name: "John Snow",
    email: "johnsnoww@gmail.com",
    date: "Jan 1, 2023",
    fulfilledOrders: 14,
    failedOrders: 3,
  },
  {
    name: "John Snow",
    email: "johnsnowh@gmail.com",
    date: "Jan 1, 2023",
    fulfilledOrders: 14,
    failedOrders: 3,
  },
  {
    name: "John Snow",
    email: "johnsnowi@gmail.com",
    date: "Jan 1, 2023",
    fulfilledOrders: 14,
    failedOrders: 3,
  },
];

export default Approved;
