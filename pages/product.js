import ProductCard from '@/components/productCard/productCard'
import Image from 'next/image';
import React, { useState } from 'react'
import Button from '../components/button/button'
import img1 from "../public/assets/homePage1/s1.png"
import dbress from '../public/assets/homePage1/bdress.png';
import anger from '../public/assets/svgs/anger.svg'
import WI from '../public/assets/svgs/complete-like.svg'
import close from '../public/assets/svgs/close icon.svg'

function Product() {
  const [isOpen, setIsOpen] = useState(false)
  const closeModal = () => setIsOpen(prevState => !prevState)

  return (
    <article className='text-lg mx-[8%] lg:mx-24 font-sans font-[400]'>
      <section className={` fixed ${isOpen ? 'flex': 'hidden' }    justify-center items-center md:justify-end md:items-start inset-0`}  >
        <div className='fixed bg-black/[0.5] inset-0 z-10' onClick={closeModal}></div>
        <div className='z-20 w-[330px] sm:w-[474px] px-4 py-4 md:px-8 md:py-10 bg-white absolute'>
          <div className='flex justify-between mb-10'>
            <h3 className='font-bold text-2xl'>Shopping Bag (1)</h3>
            <Image src={close} width={20} alt='close' onClick={closeModal}/>
          </div>
          <div className='flex gap-4 text-sm sm:text-base'>
            <div className='w-[200px]'>
                <Image src={dbress} alt='dress' />
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
        <p className='max-w-[650px] m-auto mt-9 mb-16'><span className='text-[#7D7878]'>Home / Clothes / Dresses /</span> Zara Twist Front Textured Slinky Ruched Midi Dress </p>
      <section>
        <div className='flex flex-col md:flex-row md:items-center  my-9  gap-6 text-[#3E3E3E]' >
          <div className='flex md:flex-row md:self-start flex-col-reverse gap-3 '>
            <div className='flex md:flex-col gap-2 m-auto md:m-0'>
              <div className='p-1 border border-black'>
                <div className={`lg:w-[110px] lg:h-[110px] sm:w-[90px] sm:h-[90px] w-[50px] h-[50px] min-[400px]:w-[70px] min-[400px]:h-[70px] relative ${isOpen && 'opacity-0 md:opacity-50' }`}>
                  <Image src={dbress} fill style={{objectFit:"fill"}} alt='' />
                </div>
              </div>
              <div className='p-1 '>
                <div className={`lg:w-[110px] lg:h-[110px] sm:w-[90px] sm:h-[90px] w-[50px] h-[50px] min-[400px]:w-[70px] min-[400px]:h-[70px] relative ${isOpen && 'opacity-0 md:opacity-50' }`}>
                  <Image src={dbress} fill style={{objectFit:"fill"}} alt='' />
                </div>
              </div>
              <div className='p-1'>
                <div className={`lg:w-[110px] lg:h-[110px] sm:w-[90px] sm:h-[90px] w-[50px] h-[50px] min-[400px]:w-[70px] min-[400px]:h-[70px] relative ${isOpen && 'opacity-0 md:opacity-50' }`}>
                  <Image src={dbress} fill style={{objectFit:"fill"}} alt='' />
                </div>
              </div>
              <div className='p-1'>
                <div className={`lg:w-[110px] lg:h-[110px] sm:w-[90px] sm:h-[90px] w-[50px] h-[50px] min-[400px]:w-[70px] min-[400px]:h-[70px] relative ${isOpen && 'opacity-0 md:opacity-50' }`}>
                  <Image src={dbress} fill style={{objectFit:"fill"}} alt='' />
                </div>
              </div>
            </div>
            <div className=' lg:min-w-[370px] lg:max-w-[474px] md:min-h-[400px] m-auto md:m-0 md:min-w-[350px] max-w-[350px]'>
              <Image src={dbress} alt=''  />
            </div>
          </div>
          <div className=''>
            <p> Zara Twist Front Textured Slinky Ruched Midi Dress </p>
            <p className='text-sm text-[#7D7878]'>Product Code: 3B33R4T6</p>
            <p className='my-3 lg:my-7 text-3xl font-bold'>N 3,000</p>
            <div>
              <p><span className='font-bold'>Color:</span> Black</p>
              <div className='flex gap-4 mt-2'>
                <div className='p-1 border w-9 h-9 border-black'>
                  <div className='w-full h-full bg-black'></div>
                </div>
                <div className='p-1 w-9 h-9 '>
                  <div className='w-full h-full bg-[#B81919]'></div>
                </div>
                <div className='p-1 w-9 h-9'>
                  <div className='w-full h-full bg-[#AFF9F4]'></div>
                </div>
              </div>
            </div>
            <div className='mt-3 lg:mt-5'>
              <p className='font-bold my-2'>UK Size:</p>
              <div className='flex gap-3 lg:flex-row flex-col'>
                <div className='flex gap-2'>
                  <div className='p-1 w-9 h-9 border-black border flex justify-center'>6</div>
                  <div className='p-1 w-9 h-9 border-black border flex justify-center'>7</div>
                  <div className='p-1 w-9 h-9 border-black border flex justify-center'>8</div>
                  <div className='p-1 w-9 h-9 border-black border flex justify-center'>9</div>
                  <div className='p-1 w-9 h-9 border-black border flex justify-center'>10</div>
                </div>
                <div className='flex gap-1 items-center my-2 md:my-0'>
                  <Image src={anger} alt='' />
                  <p className='text-sm min-w-[119px]'>What&#39;s My Size?</p>
                </div>
              </div>
            </div>
            <div className='mt-3 lg:mt-5'>
              <p className='font-bold my-2'>Quantity:</p>
              <div className='p-1 w-20 h-9 border-black border flex justify-center'>8</div>
            </div>
            <div className='mt-5 flex gap-6'>
              <Button type={'button'} customClassName={'text-xs  lg:text-sm'} variant={'black'} text='Add To Shopping Bag' onClick={closeModal}/>
              <Image src={WI} alt='' />
            </div>
          </div>
        </div>
      </section>
      <section className='my-12 text-sm lg:text-lg'>
        <div>
          <h5 className='font-bold mt-5'>Description:</h5>
          <p className='text-[#616161]'>Fabric with cotton. Shirt-style. Lapel-collar. Long sleeve with buttoned cuffs. Loops. Adjustable belt. Side pockets. Decorative pleats at front. Concealed button fastening. Inner lining.
          </p>
        </div>
        <div>
          <h5 className='font-bold mt-5'>Size:</h5>
          <p className='text-[#616161]'>Model wears: UK 8/ EU 36/ US 4
          Model&#39;s height: 173cm/5&#39;8&#34;</p>
        </div>
        <div>
          <h5 className='font-bold mt-5'>Material and washing instructions:</h5>
          <p className='text-[#616161]'>Composition: 98% cotton,2% elastane. Lining: 80% polyester,20% cotton</p>
        </div>
      </section>
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
    </article>
  )
}

export default Product