import Head from 'next/head'
import React from 'react'

const Logo = () => {
  return (
    <>
      <Head>
        <title>Nene</title>
        <meta name="description" content="Nene Web App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className='bg-[#FFD058] h-screen w-screen flex justify-center items-center font-alegreya text-white'>
          <div>
            <h1 className='font-semibold text-4xl sm:text-[150px] text-center'>Nene</h1>
            <p className='font-medium text-xl sm:text-4xl mt-12'>Coming Soon . . .</p>
          </div>
        </div>
      </main>
   </> 
  )
}

export default Logo