import ActiveAcoountList from "@/sections/pages/admin/activeAccount";


//default to Approved page
const AdminLandingPage = () => {
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

  
  return (
    <main className=" relative flex flex-col gap-8 px-5 py-8">
      <div className="flex justify-between items-center ">
        <span className="font-bold md:text-2xl ">
          {" "}
          Approved Accounts ({accountsArray.length}){" "}
        </span>

        <button className="border p-1 md:p-3 rounded-md border-[#AAAAAA] ">
          Suspend Account
        </button>
      </div>
      <ActiveAcoountList />
    </main>
  );
};

export default AdminLandingPage;
