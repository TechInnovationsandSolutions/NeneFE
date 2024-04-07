import React from 'react'

const AdminSuspendedAccountsPage = () => {
  return (
    <main className=" relative flex flex-col gap-8 px-5 py-8">
      <div className="flex justify-between items-center ">
        <span className="font-bold md:text-2xl ">
          {" "}
          Suspended Accounts (12){" "}
        </span>

        <button className="border p-1 md:p-3 rounded-md border-[#AAAAAA] ">
          Suspend Account
        </button>
      </div>
    </main>
  )
}

export default AdminSuspendedAccountsPage