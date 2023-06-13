import React, { useState } from "react";

const SearchFilter = () => {
  const defaultSearchParameters = {
    sort: "",
    category: "",
    search: "",
  };

  const [searchParameters, setSearchParameters] = useState(
    defaultSearchParameters
  );

  const handleChange = (event) => {
    const { name, value } = event.target;

    setSearchParameters((prevSearchParameters) => {
      return {
        ...prevSearchParameters,
        [name]: value,
      };
    });
  };

  const clearSearch = () => {
    setSearchParameters(defaultSearchParameters);
  };

  return (
    <>
      <section className='w-full'>
        <div className='w-11/12 mt-5 mx-auto flex flex-col items-center justify-center space-y-5 '>
          {/* Search bar */}
          <div
            className='relative flex items-center justify-between'
            style={{
              width: "clamp(20.9rem, 1rem + 70vw, 44.6rem)",
            }}
          >
            <div className='relative w-[85%] md:w-[95%] '>
              <input
                type='text'
                name='search'
                onChange={handleChange}
                value={searchParameters.search}
                placeholder='Search for article'
                className='w-full px-4 py-2 text-priBlack border border-lightGray placeholder:text-lightGray rounded-l-3xl focus:border-priBlack focus:outline-0 focus:ring-priBlack'
              />
              {searchParameters.search && (
                <button
                  className='absolute top-1/2 right-3 transform -translate-y-1/2 text-priBlack hover:text-gray-600'
                  onClick={clearSearch}
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='w-5 h-5'
                  >
                    <path d='M18 6L6 18M6 6l12 12'></path>
                  </svg>
                </button>
              )}
            </div>
            <button
              className={`w-[15%] md:w-[10%] h-[42px] border border-l-0 border-lightGray rounded-r-3xl`}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5 mx-auto'
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
              className='w-full pl-3 pr-2 rounded-[3px] focus:border-priBlack focus:outline-0 focus:ring-priBlack'
            >
              <option value=''>Sort</option>
              <option value='sort1'>Sort1</option>
            </select>
            <select
              id='category'
              name='category'
              value={searchParameters.category}
              onChange={handleChange}
              className='w-full pl-3 pr-2 rounded-[3px] focus:border-priBlack focus:outline-0 focus:ring-priBlack'
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
