import Head from 'next/head'
import React, { useState } from 'react'
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';


const Logo = () => {
  const [loading, setLoading] = useState(false)


  const EmailSchema = Yup.object().shape({
    email: Yup.string().email().required(),
  });



  const {
    reset,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(EmailSchema),
  });




  const onSubmitForm = (data) => {
    setLoading(true)
    console.log(data)
   setLoading(false)
   reset()
  }

  return (
    <>
      <Head>
        <title>Nene</title>
        <meta name="description" content="Nene Web App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className='p-4 bg-[#FFD058] h-screen w-screen flex  justify-evenly items-center flex-col font-alegreya text-white m-0'>
          <div>
            <h1 className='font-semibold text-4xl sm:text-[150px] text-center'>Nene</h1>
            <p className='font-medium text-xl sm:text-4xl sm:mt-12'>Coming Soon . . .</p>
          </div>
          <div className='justify-self-end bg-white text-black max-w-[600px] rounded-md shadow p-6  '>
            <form onSubmit={handleSubmit(onSubmitForm)}>
              <p className='text-center'>If you are interested in finding out more about our product or being notified when we launch, Subcribe to our email newsletter here.</p>
              <div className='flex flex-col space-y-1 mb-2 mt-4'>
                <input type="text" className={` border border-[#FFD058] rounded outline-none py-2 px-4  ${errors.email ? 'focus:border-red-500': 'focus:border-[#FFD058]'}`} placeholder="Your email address"  {...register('email')}  />
              </div>
              <button type='submit' className={`w-full rounded-md py-2 flex items-center justify-center gap-3 bg-[#FFD058] font-semibold text-white text-xl  cursor-pointer mt-4 `}>Submit Email</button>
            </form>
          </div>
        </div>
      </main>
   </> 
  )
}

export default Logo