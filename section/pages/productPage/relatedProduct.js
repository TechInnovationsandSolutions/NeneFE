import React from 'react'
import Image from 'next/image';
import img1 from "../../../public/assets/homePage1/s1.png"

const RelatedProduct = () => {
  return (
    <section>
      <div className='my-9'>
        <div className='mt-16'>
          <h3 className='font-medium text-2xl mb-6 text-center sm:text-left'>Similar Pieces</h3>
          <div className='gap-3 flex flex-col'>
            <div className=''>
              <Image src={img1} alt='' />
            </div>
            <p className='text-sm text-[#3E3E3E] w-[280px]'>Zara Twist Front Textured Slinky Ruched Midi Dress </p>
            <h4 className='font-bold'>N 3,000</h4>
          </div>
        </div>
        <div className='mt-16'>
          <h3 className='font-medium text-2xl mb-6 text-center sm:text-left'>You Might Also Like</h3>
          <div className='gap-3 flex flex-col'>
            <div className=''>
              <Image src={img1} alt='' />
            </div>
            <p className='text-sm text-[#3E3E3E] w-[280px]'>Zara Twist Front Textured Slinky Ruched Midi Dress </p>
            <h4 className='font-bold'>N 3,000</h4>
          </div>
        </div>
        <div className='mt-16'>
          <h3 className='font-medium text-2xl mb-6 text-center sm:text-left'>Complete Your Outfit</h3>
          <div className='flex flex-col sm:flex-row gap-5'>
            <div className='gap-3 flex flex-col'>
              <div className=''>
                <Image src={img1} alt='' />
              </div>
              <p className='text-sm text-[#3E3E3E] w-[280px]'>Zara Twist Front Textured Slinky Ruched Midi Dress </p>
              <h4 className='font-bold'>N 3,000</h4>
            </div>
            <div className='gap-3 flex flex-col'>
              <div className=''>
                <Image src={img1} alt='' />
              </div>
              <p className='text-sm text-[#3E3E3E] w-[280px]'>Zara Twist Front Textured Slinky Ruched Midi Dress </p>
              <h4 className='font-bold'>N 3,000</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RelatedProduct