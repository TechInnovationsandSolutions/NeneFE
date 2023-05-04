import Button from '@/components/button/button'
import Image from 'next/image'
import React, { useState } from 'react'
import img1 from "../../public/assets/homePage1/s1.png"
import dress1 from '../../public/assets/images/dress1.webp'
import dress2 from '../../public/assets/images/dress2.webp'
import dress4 from '../../public/assets/images/dress4.webp'

const data = [
  {id:1, color:'black', img: dress1, code:'3B33R4T6', description: 'Zara Twist Front Textured Slinky Ruched Midi Dress'},
  {id:2, color:'red', img: dress2, code:'3B33RF76', description: 'Zara Twist Front Textured Slinky Ruched Midi Dress'},
  {id:3, color:'pink', img: dress4, code:'3B44R4T6', description: 'Zara Twist Front Textured Slinky Ruched Midi Dress'},
]

const WishList = () => {
  return (
   <article className='mx-[20px] text-sm md:text-base lg:mx-24 font-sans font-[400]'>
    <h2 className='text-center my-5 font-medium text-xl md:font-bold md:text-2xl'>WishList</h2>
    {data.map(item => (
      <section key={item.id}>
        <div className='flex flex-col sm:flex-row sm:justify-center gap-6  my-9 max-w-[1057px]'>
          <div className='flex justify-center items-center gap-3 md:gap-6 text-[#3E3E3E] max-w-[580px]' >
            <div className=' min-w-[117px] md:w-[287px] md:h-[317px] h-[194px] '>
              <Image src={item.img} alt='' style={{objectFit:'fill',objectPosition:'top', width:'100%' ,height:'100%'}} className quality={100} />
            </div>
            <div className=''>
              <p> {item.description} </p>
              <p className='text-sm text-[#7D7878] mt-1 mb-4'>Product Code: {item.code}</p>
              <div>
                <p><span className='font-bold'>Color:</span> {item.color}</p>
              </div>
              <div className='mt-3 lg:mt-5'>
                <p className='font-bold my-2'>UK Size:</p>
                <div className='flex gap-3 lg:flex-row flex-col'>
                  <div className='flex gap-2'>
                    <div className='p-[0.5px] md:p-1 w-7 h-7  md:w-9 md:h-9 border-black border flex justify-center'>6</div>
                    <div className='p-[0.5px] md:p-1 w-7 h-7 md:w-9 md:h-9 border-black border flex justify-center'>7</div>
                    <div className='p-[0.5px] md:p-1 w-7 h-7  md:w-9 md:h-9 border-black border flex justify-center'>8</div>
                    <div className='p-[0.5px] md:p-1 w-7 h-7  md:w-9 md:h-9 border-black border flex justify-center'>9</div>
                    <div className='p-[0.5px] md:p-1 w-7 h-7  md:w-9 md:h-9 border-black border flex justify-center'>10</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Button type={'button'} customClassName={'text-xs w-full sm:self-end sm:mb-2 md:mb-14 sm:w-[240px] lg:text-sm h-[47px]'} variant={'black'} text='Add To Shopping Bag'/>
        </div>
      </section>
    ))}
   </article>
  )
}

export default WishList