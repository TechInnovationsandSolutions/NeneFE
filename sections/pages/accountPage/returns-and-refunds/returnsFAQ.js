import { carretRightIcon } from "@/public/assets/svgs";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { stateContext } from "@/context/accountProvider";
import Link from "next/link";

const ReturnsFAQ = () => {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const { returnsFaqList, setReturnsFaqList } = useContext(stateContext);

  // Load initial set of items
  useEffect(() => {
    const initialItems = returnsFaqList.slice(0, itemsPerPage);
    setItems(initialItems);
  }, [returnsFaqList]);

  // Handle Load More Button
  const handleLoadMoreBtnClick = () => {
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const newItems = returnsFaqList.slice(startIndex, endIndex);
    setItems((prevItems) => [...prevItems, ...newItems]);

    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="flex flex-col w-full h-auto">
      {/* Returns FAQ List Display */}
      <section className="flex flex-col w-full h-auto mb-5">
        {items.map((item) => {
          return (
            <Link
              href={`/account/returns-and-refunds/${item.link}`}
              key={item.faqTitle}
              className="bg-white flex justify-between px-6 py-10 border-b border-[#d8d8d8] cursor-pointer"
            >
              <p className="text-[14px] lg:text-[18px] leading-[23px]">
                {item.faqTitle}
              </p>
              <Image
                src={carretRightIcon}
                alt=""
                className="w-auto h-auto"
                width={24}
                height={24}
              />
            </Link>
          );
        })}
      </section>
      {/* Load More Section */}
      <section className="flex flex-col w-full h-auto ">
        <div className="bg-white flex flex-col w-full items-center gap-6 justify-center px-6 py-10">
          <p className="text-[14px] lg:text-[18px] leading-[23px]">
            {items.length} of {returnsFaqList.length}
          </p>
          <button
            onClick={handleLoadMoreBtnClick}
            className="py-[13px] w-[50%] border border-[#afafaf]"
          >
            Load More
          </button>
        </div>
      </section>{" "}
    </div>
  );
};

export default ReturnsFAQ;
