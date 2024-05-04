import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

const SuperAdminLandingPage = () => {
  const accountsArray = [
    {
      id: 1,
      name: "Admin1",
      user: "Jibu Jobes",
      email: "dibuJones@gmail.com",
      date: "Jan 1 2023",
    },
    {
      id: 2,
      name: "Admin1",
      user: "Jibu Jobes",
      email: "dibuJones@gmail.com",
      date: "Jan 1 2023",
    },
    {
      id: 3,
      name: "Admin1",
      user: "Jibu Jobes",
      email: "dibuJones@gmail.com",
      date: "Jan 1 2023",
    },
    {
      id: 4,
      name: "Admin1",
      user: "Jibu Jobes",
      email: "dibuJones@gmail.com",
      date: "Jan 1 2023",
    },
    {
      id: 5,
      name: "Admin1",
      user: "Jibu Jobes",
      email: "dibuJones@gmail.com",
      date: "Jan 1 2023",
    },
    {
      id: 6,
      name: "Admin1",
      user: "Jibu Jobes",
      email: "dibuJones@gmail.com",
      date: "Jan 1 2023",
    },
  ];
  const suspendedAccounts = [
    {
      id: 1,
      name: "Admin3",
      user: "Jill Douglas",
      email: "DillDouglas@gmail.com",
      date: "Jan 1 2023",
    },
    {
      id: 1,
      name: "Admin3",
      user: "James Eku",
      email: "JamesEkus@gmail.com",
      date: "Jan 1 2023",
    },
    {
      id: 1,
      name: "Admin3",
      user: "James Eku",
      email: "JamesEkus@gmail.com",
      date: "Jan 1 2023",
    },
    {
      id: 1,
      name: "Admin3",
      user: "James Eku",
      email: "JamesEkus@gmail.com",
      date: "Jan 1 2023",
    },
    {
      id: 1,
      name: "Admin3",
      user: "James Eku",
      email: "JamesEkus@gmail.com",
      date: "Jan 1 2023",
    },
    {
      id: 1,
      name: "Admin3",
      user: "James Eku",
      email: "JamesEkus@gmail.com",
      date: "Jan 1 2023",
    },
    {
      id: 1,
      name: "Admin3",
      user: "James Eku",
      email: "JamesEkus@gmail.com",
      date: "Jan 1 2023",
    },
    {
      id: 1,
      name: "Admin3",
      user: "James Eku",
      email: "JamesEkus@gmail.com",
      date: "Jan 1 2023",
    },
    {
      id: 1,
      name: "Admin3",
      user: "James Eku",
      email: "JamesEkus@gmail.com",
      date: "Jan 1 2023",
    },
    {
      id: 1,
      name: "Admin3",
      user: "James Eku",
      email: "JamesEkus@gmail.com",
      date: "Jan 1 2023",
    },
  ];
  const deletedAccounts = [
    {
      id: 1,
      name: "Admin3",
      user: "Jill Douglas",
      email: "DillDouglas@gmail.com",
      date: "Jan 1 2023",
    },
    {
      id: 1,
      name: "Admin3",
      user: "Jill Douglas",
      email: "DillDouglas@gmail.com",
      date: "Jan 1 2023",
    },
    {
      id: 1,
      name: "Admin3",
      user: "Jill Douglas",
      email: "DillDouglas@gmail.com",
      date: "Jan 1 2023",
    },
    {
      id: 1,
      name: "Admin3",
      user: "Jill Douglas",
      email: "DillDouglas@gmail.com",
      date: "Jan 1 2023",
    },
    {
      id: 1,
      name: "Admin3",
      user: "Jill Douglas",
      email: "DillDouglas@gmail.com",
      date: "Jan 1 2023",
    },
    {
      id: 1,
      name: "Admin3",
      user: "Jill Douglas",
      email: "DillDouglas@gmail.com",
      date: "Jan 1 2023",
    },
    {
      id: 1,
      name: "Admin3",
      user: "Jill Douglas",
      email: "DillDouglas@gmail.com",
      date: "Jan 1 2023",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [linesToShow, setLinesToShow] = useState(5);

  const status = useSelector((state) => state.superAdmin.adminStatus);
  const itemStartInShow = (currentPage - 1) * linesToShow + 1;
  const itemEndInShow = itemStartInShow + (linesToShow - 1);

  const accountsTotal =
    status === "Active"
      ? accountsArray
      : status === "Suspended"
      ? suspendedAccounts
      : status === "Deleted"
      ? deletedAccounts
      : null;

  function accountInView() {
    const splicedAccount = accountsTotal.slice(
      itemStartInShow - 1,
      itemEndInShow
    );
    return splicedAccount;
  }
  useEffect(() => {
    setCurrentPage(1);
    setLinesToShow(5);
  }, [status]);

  const accountsToShow = accountInView();
  const noOfPages = Math.ceil(accountsTotal.length / linesToShow);

  const renderNavigation = () => {
    const pages = [];
    for (let i = 1; i <= noOfPages; i++) {
      pages.push(
        <button
          className={` px-3 ${currentPage === i ? "bg-grayBg font-bold " : ""}`}
          key={i}
          onClick={() => setCurrentPage(i)}
        >
          {i}
        </button>
      );
    }
    return pages;
  };
  function handlePagesNoChange(e) {
    e.target.value <= accountsTotal.length && e.target.value >= 1
      ? setLinesToShow(e.target.value)
      : null;
  }

  const router = useRouter();
  return (
    <main className=" relative flex flex-col gap-8 px-5 py-8">
      <div className="flex justify-between items-center ">
        <span className="font-bold md:text-2xl ">
          {" "}
          {status} Accounts ({accountsTotal.length}){" "}
        </span>

        <button className="border p-1 md:p-3 rounded-md border-[#AAAAAA] ">
          + Create New Admin
        </button>
      </div>
      <section>
        {accountsTotal.length > 0 ? (
          <>
            <table className="w-full">
              <thead>
                <tr className="grid border-b text-sm text-header-gray border-[#D7D7D7] pb-4  grid-cols-4">
                  <th className="text-left">USERNAME</th>
                  <th>NAME</th>
                  <th>EMAIL ADDRESS</th>
                  <th className="flex justify-center gap-1">
                    DATE JOINED{" "}
                    <span>
                      <img src="/assets/svgs/ArrowsDownUp.svg" alt="" />
                    </span>{" "}
                  </th>
                </tr>
              </thead>
              <tbody className="flex flex-col ">
                {accountsToShow.map((acc, index) => {
                  return (
                    <tr
                      onClick={() =>
                        router.push(`${router.pathname}/${acc.id}`)
                      }
                      className="grid cursor-pointer hover:bg-[#F2F2F2] grid-cols-4 px-4 py-6  "
                      key={index}
                    >
                      <td className=""> {acc.user} </td>
                      <td className="text-center"> {acc.name} </td>
                      <td className="text-center break-all"> {acc.email} </td>
                      <td className="text-center"> {acc.date} </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            <div className=" border absolute inset-x-0 gap-2 md:gap-0 flex flex-col md:flex-row justify-between items-center px-8 py-4 border-[#E5E5E5]">
              <div className="flex flex-col md:flex-row items-center gap-2 md:gap-8">
                <div className="flex items-center gap-2 ">
                  <span>Show</span>
                  <input
                    type="number"
                    onChange={handlePagesNoChange}
                    className=" w-[40px] h-[30px] p-2 border rounded "
                    value={linesToShow}
                  />
                  <span>lines</span>
                </div>
                <span>
                  {" "}
                  Showing {itemStartInShow} to {itemEndInShow} of{" "}
                  {accountsTotal.length} results.
                </span>
              </div>

              <div>
                <div className="flex gap-3 ">
                  <button>
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.85068 12L14.9257 21.075L12.3333 23.6673L0.666016 12L12.3333 0.332642L14.9257 2.92498L5.85068 12Z"
                        fill="#787878"
                      />
                    </svg>
                  </button>
                  <div className="flex gap-2">{renderNavigation()}</div>

                  <button>
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.14922 12L0.0742188 2.92498L2.66655 0.332642L14.3339 12L2.66655 23.6673L0.0742188 21.075L9.14922 12Z"
                        fill="#787878"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="flex mt-[6em] justify-center">
            <p className="text-xl">
              There are no {status.toLowerCase()} accounts.{" "}
            </p>
          </div>
        )}{" "}
      </section>
    </main>
  );
};

export default SuperAdminLandingPage;
