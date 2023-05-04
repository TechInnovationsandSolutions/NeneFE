import React from 'react'
import close from '../../../public/assets/svgs/close icon.svg'
import Button from '../../../components/button/button'
import Image from 'next/image';

const ProductModal = ({isOpen, closeModal, currentPic}) => {
  return (
    <section className={` fixed ${isOpen ? 'flex': 'hidden' }    justify-center items-center md:justify-end md:items-start inset-0`}  >
      <div className='fixed bg-black/[0.5] inset-0 z-10' onClick={closeModal}></div>
      <div className='z-20 w-[330px] sm:w-[474px] px-4 py-4 md:px-8 md:py-10 bg-white absolute'>
        <div className='flex justify-between mb-10'>
          <h3 className='font-bold text-2xl'>Shopping Bag (1)</h3>
          <Image src={close} width={20} alt='close' onClick={closeModal}/>
        </div>
        <div className='flex items-center gap-4 text-sm sm:text-base'>
          <div className='w-[117px] h-[152px]'>
              <Image src={currentPic} alt='dress' />
          </div>
          <div>
            <p className='text-[#3E3E3E] sm:text-lg'>Zara Twist Front Textured Slinky Ruched Midi Dress </p>
            <p className='text-[#979797] mt-1 sm:mt-4 text-sm'>Color: Black</p>
            <p className='text-[#979797] mt-1 sm:mt-4 text-sm'>UK Size: 6</p>
            <div className='flex flex-col sm:flex-row justify-between'>
              <p className='text-[#979797] mt-1 sm:mt-4 text-sm'>Quantity: 1</p>
              <h5 className='mt-3 sm:mt-4  font-bold'>N 3,000</h5>
            </div>
          </div>
        </div>
        <div className='flex justify-between my-8 py-4 border-t border-[#979797]'>
          <p className='text-[#3E3E3E] text-sm sm:text-base items-center align-middle'>Total</p>
          <h4 className='text-lg font-bold sm:text-4xl'>N 3,000</h4>
        </div>
        <div className='flex flex-col gap-4'>
          <Button type={'button'} customClassName={'w-full'} variant={'black'} text='Checkout'/>
          <Button type={'button'} customClassName={'w-full border border-black'} variant={'white'} text='View Bag'/>
        </div>
      </div>
    </section>
  )
}

export default ProductModal