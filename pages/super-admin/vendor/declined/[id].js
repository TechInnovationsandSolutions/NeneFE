import Button from "@/components/button/button";
import AccountDetails from "@/sections/pages/admin/accountDetails";
import { vendor } from "@/sections/pages/admin/vendor";
import { useRouter } from "next/router";

function AccountDetailsPage() {
    const router = useRouter();

    return (  
        <div className="p-4 sm:p-6 md:p-8">
            <div className='flex items-center'>
                <button className="mr-3 px-1" onClick={() => router.back()}>
                        <picture>
                            <img src="/assets/svgs/arrow-left.svg" className="h-[20px]" alt="" />
                        </picture>
                    </button>
                <p className='text-lg font-semibold'>
                        <span className='text-gray-500 font-normal'>Declined Accounts / </span>
                        Vendor Details
                </p>
            </div>
            <div className='my-16 flex gap-4'>
                <div className='rounded-full  bg-[#FFEEDB] p-3 mr-2 w-12 h-12 flex justify-center items-center'>
                    <div className='bg-[#FF8000] p-1 w-5 h-5 flex items-center justify-center rounded-full'>!</div>
                </div>
                <div className='flex  flex-col'>
                    <h3 className='text-2xl font-semibold'>This vendor account has been declined</h3>
                    <ul className='text-gray-500 text-lg ml-[24px] list-disc'>
                        <li>Mismatched information</li>
                        <li>Lack of relevant documents</li>
                    </ul>
                </div>
                
            </div>
            <div className="flex flex-col gap-2 my-12 text-gray-500">
                <span>Do you wish to restore this account?</span>
                <Button text="Reverse Decision" variant="black" customClassName="border border-gray-300" />
            </div>
            <AccountDetails vendor={vendor} color={"#F5F5F5"} />
        </div>
    );
}

export default AccountDetailsPage;