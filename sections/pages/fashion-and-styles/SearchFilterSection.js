import React, { useState } from "react";

const SearchFilter = () => {
  const [searchParameters, setSearchParameters] = useState({
    sort: "",
    category: "",
    search: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setSearchParameters((prevSearchParameters) => {
      return {
        ...prevSearchParameters,
        [name]: value,
      };
    });
  };

  return (
    <>
      <section className='w-full'>
        <div className='w-11/12 mt-5 mx-auto flex flex-col items-center justify-center space-y-5 '>
          {/* Search bar */}
          <div
            className='relative flex items-center justify-between rounded-3xl border border-lightGray overflow-hidden'
            style={{
              width: "clamp(20.9rem, 1rem + 70vw, 44.6rem)",
            }}
          >
            <input
              type='text'
              name='search'
              onChange={handleChange}
              value={searchParameters.search}
              placeholder='Search for article'
              className='px-4 py-2 w-[93%] rounded-0 border-0 placeholder:text-lightGray focus:ring-black'
            />

            <button className='mx-4'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5 '
                fill='none'
                viewBox='0 0 24 24'
                stroke='#8B8282'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                />
              </svg>
            </button>
          </div>
          {/* Sort and Category */}
          <div
            className='flex space-x-4'
            style={{
              width: "clamp(20rem, 1rem + 50vw, 25rem)",
            }}
          >
            <select
              id='sort'
              name='sort'
              value={searchParameters.sort}
              onChange={handleChange}
              className='w-full pl-3 pr-2 rounded-[3px]'
            >
              <option value=''>Sort</option>
              <option value='sort1'>Sort1</option>
            </select>
            <select
              id='category'
              name='category'
              value={searchParameters.category}
              onChange={handleChange}
              className='w-full pl-3 pr-2 rounded-[3px]'
            >
              <option value=''>Category</option>
              <option value='category1'>Category1</option>
            </select>
          </div>
        </div>
      </section>
    </>
  );
};

export default SearchFilter;
