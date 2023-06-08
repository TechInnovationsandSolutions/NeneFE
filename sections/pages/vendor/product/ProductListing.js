import React, { useMemo, useState, useRef, useEffect } from "react";
import { plus } from "@/public/assets/svgs";
import Image from "next/image";
import ProductTable from "./ProductTable";
import ProductCard from "./ProductCard";
import axios from "axios";

const baseURL = "https://staging.nene.ng/api";
const payload = "";
const token = "";
const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${token}`,
};

function ProductListing() {
  // try {
  //   const vendorProducts = axios(`${baseURL}/products/my-products`, payload, {
  //     headers,
  //   });
  //   console.log(vendorProducts);
  // } catch (error) {
  //   console.log(error);
  // }

  return (
    <>
      <section className=''>
        <div className='w-11/12 mx-auto mt-[52px] lg:mt-9 mb-5'>
          <div className='md:flex items-center justify-between'>
            <p className='text-xl lg:text-2xl font-medium'>Product listing</p>
            <div className='absolute bottom-[10%] right-[5%] md:relative md:bottom-0 md:right-0 md:w-[233px] flex items-center justify-evenly bg-black text-white w-[52px] h-[52px] rounded-full md:rounded-[4px] cursor-pointer'>
              <Image src={plus} alt='' className='w-4 h-4' />
              <p className='hidden md:block '>Create New Product</p>
            </div>
          </div>

          {/* Table */}
          <ProductTable tableClass='hidden lg:table w-full mt-10 ' />
          <ProductCard productCardClass=' mt-10 space-y-5 lg:hidden' />
        </div>
      </section>
    </>
  );
}

export default ProductListing;
