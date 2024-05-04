import DeclinedTableRow from "@/sections/pages/admin/declinedAccounts/declinedTablerow";
import DeclinedTablehead from "@/sections/pages/admin/declinedAccounts/declinedTablehead";
import Table from "@/sections/pages/admin/table";
import { useState } from "react";
import { vendor } from "@/sections/pages/admin/vendor";
import Button from "@/components/button/button";
import DeclinedMobile from "@/sections/pages/admin/declinedAccounts/declinedMobile";

function Declined() {
    const [currentItems, setCurrentItems] = useState(null);
    const [selected, setSelected] = useState([])
    const [allSelected, setAllSelected] = useState(false)

    return (  
        <div className="p-5 sm:p-8">
            <div className='flex justify-between items-center'>
                <span className='text-2xl font-bold p-0 m-0'>
                    Declined Accounts 
                    <span className='text-gray-600 ml-2'>({declinedAccountsList.length})</span>
                </span>

                <div className=' gap-2  lg:flex hidden'>
                    <Button text="View Details" variant="white" customClassName="border border-gray-300" />
                    <Button text="Contact Vendor" variant="white" customClassName="border border-gray-300" />
                    <Button text="Delete Account" variant="white" customClassName="border border-gray-300" />
                </div>
            </div>

            <div className='w-full  lg:overflow-x-auto mt-10 lg:block hidden'>
                <Table 
                    tableHead={<DeclinedTablehead   setSelected={setSelected} allLists={declinedAccountsList} setAllSelected={setAllSelected} />}
                    tableRows={<DeclinedTableRow setSelected={setSelected} currentItems={currentItems}  selected={selected} allSelected={allSelected}/>}
                    data={declinedAccountsList}
                    currentItems={currentItems}
                    setCurrentItems={setCurrentItems}
                />
            </div>

            <div className='px-6 grid grid-cols-1 gap-4 lg:hidden my-6'>
                <DeclinedMobile currentItems={currentItems} />
            </div>
        </div>
    );
}

export default Declined;


const declinedAccountsList = [
    {   
        id : 1,
        fullName : "John Doe",
        email : "johndoea@gmail.com",
        businessName : "JD Enterprises Ltd",
        date : "10 Jan, 2023"
    },
    {   
        id : 2,
        fullName : "John Doe",
        email : "johndoeb@gmail.com",
        businessName : "JD Enterprises Ltd",
        date : "10 Jan, 2023"
    },
    {   
        id : 3,
        fullName : "John Doe",
        email : "johndoef@gmail.com",
        businessName : "JD Enterprises Ltd",
        date : "10 Jan, 2023"
    },
    {
        id : 4,
        fullName : "John Doe",
        email : "johndoer@gmail.com",
        businessName : "JD Enterprises Ltd",
        date : "10 Jan, 2023"
    },
    {
        id : 5,
        fullName : "John Doe",
        email : "johndoej@gmail.com",
        businessName : "JD Enterprises Ltd",
        date : "10 Jan, 2023"
    },
    {
        id : 6,
        fullName : "John Doe",
        email : "johndoel@gmail.com",
        businessName : "JD Enterprises Ltd",
        date : "10 Jan, 2023"
    },
    {
        id : 7,
        fullName : "John Doe",
        email : "johndoe@gmail.com",
        businessName : "JD Enterprises Ltd",
        date : "10 Jan, 2023"
    },
    {
        id : 8,
        fullName : "John Doe",
        email : "johndoe@gmail.com",
        businessName : "JD Enterprises Ltd",
        date : "10 Jan, 2023"
    },
]