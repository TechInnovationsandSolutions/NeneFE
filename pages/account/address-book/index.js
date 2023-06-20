import Button from "@/components/button/button";
import { stateContext } from "@/context/accountProvider";
import AccountPageLayout from "@/layout/account-pages";
// import { addressBookDetails } from "@/mockData/addressBookData";
import { AddressBookImg } from "@/public/assets/account";
import { pencilIcon, trashIcon } from "@/public/assets/svgs";
import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";

const AddressBook = () => {
  const [defaultBook, setDefaultBook] = useState(null);
  const { addressBook, setAddressBook } = useContext(stateContext);

  return (
    <div className="w-full min-h-auto lg:min-h-[920px]  flex flex-col">
      {/* Header Section */}
      <div className="w-full px-6 pt-[44px] pb-[72.3px] mb-4 bg-white ">
        <Image src={AddressBookImg} alt="" width={44} height={44} />
        <h2 className="uppercase w-full pt-5 font-bold text-[1.5rem]">
          ADDRESS BOOK
        </h2>
        <p className="w-full pt-4">
          Feel free to edit any of your details below.
        </p>
      </div>

      {/* Address Book Details */}
      <div className="w-full h-auto min-h-auto lg:min-h-[931px] flex flex-col gap-5 bg-white py-12 px-6">
        {addressBook.length !== 0 ? (
          addressBook.map((bookDetail) => {
            return (
              <div
                key={bookDetail.id}
                className="w-full border border-[#c2c2c2] flex flex-col gap-6 py-5 px-6"
              >
                <section className="w-full h-auto flex flex-col lg:grid lg:grid-cols-4 gap-5 justify-between ">
                  <p className={textStyles}>{bookDetail.name}</p>
                  <p className={textStyles}>{bookDetail.company}</p>
                  <p className={textStyles}>{bookDetail.address}</p>
                  <div className="w-full flex flex-col gap-3 text-base lg:text-lg text-black justify-self-end items-center ">
                    <Link
                      href="/"
                      className="w-full flex gap-3 items-center lg:justify-end underline"
                    >
                      Edit Address
                      <Image src={pencilIcon} alt="" width={20} height={20} />
                    </Link>
                    <button
                      onClick={() => {
                        const index = addressBook.indexOf(bookDetail);
                        setAddressBook((addressBook) => {
                          let removedItem = addressBook.splice(index, 1);
                          let newAddressBook = addressBook.filter(
                            (item) => item !== removedItem
                          );

                          return newAddressBook;
                        });
                      }}
                      className="w-full flex gap-3 lg:justify-end items-center underline"
                    >
                      Remove
                      <Image src={trashIcon} alt="" width={20} height={20} />
                    </button>
                  </div>
                </section>
                {defaultBook === bookDetail.id ? (
                  <p className="text-[15px] font-bold leading-5">
                    Preferred shipping address
                  </p>
                ) : (
                  <Button
                    text="Set as default"
                    variant="white"
                    type="button"
                    size="small"
                    onClick={() => setDefaultBook(bookDetail.id)}
                    customClassName="border border-black"
                  />
                )}
              </div>
            );
          })
        ) : (
          <h2 className="text-center text-lg font-bold">
            No Address Added yet
          </h2>
        )}
        <Button
          text="Add address +"
          variant="black"
          type="button"
          size="small"
        />
      </div>
    </div>
  );
};

AddressBook.getLayout = (Page) => <AccountPageLayout>{Page}</AccountPageLayout>;

export default AddressBook;

const textStyles = "text-base lg:text-lg text-black";
