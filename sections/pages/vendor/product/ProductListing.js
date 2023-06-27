import React, { useMemo, useState } from "react";
import {
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { plus } from "@/public/assets/svgs";
import Image from "next/image";
import ProductTable from "./ProductTable";
import ProductCard from "./ProductCard";
import axios from "axios";
import productData from "@/mockData/productData.json";
import { COLUMNS } from "./columns";
import Link from "next/link";

const baseURL = "https://staging.nene.ng/api";
const payload = "";
const token = "";
const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${token}`,
};

function ProductListing() {
  const columns = useMemo(() => COLUMNS, []);
  const [data, setData] = useState(() => [...productData].slice(0, 10));
  const [sorting, setSorting] = useState();
  const [isCellEditing, SetIsCellEditing] = useState(false);

  // try {
  //   const vendorProducts = axios(`${baseURL}/products/my-products`, payload, {
  //     headers,
  //   });
  //   console.log(vendorProducts);
  // } catch (error) {
  //   console.log(error);
  // }

  const table = useReactTable({
    data,
    columns,
    columnResizeMode: "onChange",
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    getCoreRowModel: getCoreRowModel(),
    meta: {
      updateData: (rowIndex, columnId, value) => {
        setData((old) =>
          old.map((row, index) => {
            if (index === rowIndex) {
              return {
                ...old[rowIndex],
                [columnId]: value,
              };
            }
            return row;
          })
        );
      },
      isCellEditing,
      SetIsCellEditing,
      handleEditCellData: () => {
        SetIsCellEditing(!isCellEditing);
      },
      deleteRow: (rowIndex) => {
        setData(data.filter((product, i) => i !== rowIndex));
      },
    },
  });

  return (
    <>
      <section className=''>
        <div className='w-11/12 mx-auto mt-[52px] lg:mt-9 mb-5'>
          <div className='md:flex items-center justify-between'>
            <p className='text-xl lg:text-2xl font-medium'>Product listing</p>
            <Link
              href='/vendor/product/create-product'
              className='absolute bottom-[10%] right-[5%] flex items-center justify-evenly bg-black text-white w-[52px] h-[52px] rounded-full z-10 md:relative md:bottom-0 md:right-0 md:w-[233px] md:rounded-[4px] cursor-pointer'
            >
              <Image src={plus} alt='plus icon' className='w-4 h-4' />
              <p className='hidden md:block '>Create New Product</p>
            </Link>
          </div>

          {/* Table */}
          <ProductTable
            tableClass='hidden lg:table w-[1000px] xl:w-full mt-10 overflow-x-auto'
            table={table}
          />
          <ProductCard
            productCardClass=' mt-10 space-y-5 lg:hidden'
            table={table}
          />
        </div>
      </section>
    </>
  );
}

export default ProductListing;
