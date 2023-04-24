import React from 'react'
import WI from '../../../public/assets/svgs/complete-like.svg'
import anger from '../../../public/assets/svgs/anger.svg'
import Button from '../../../components/button/button'
import Image from 'next/image';

const ProductInfo = ({currentPic, setCurrentPic, picArray, closeModal}) => {
  return (
    <section>
      <div className='flex flex-col md:flex-row md:items-center max-w-[1057px] md:justify-center  my-9  gap-6 text-[#3E3E3E]' >
        <div className='flex md:flex-row md:self-start flex-col-reverse gap-3 '>
          <div className='flex md:flex-col gap-2 m-auto md:m-0'>
            {picArray.map((item, i) => (
              <div className={`p-1 ${currentPic == item && 'border border-black'}`} key={i}>
                <div className='lg:w-[110px] lg:h-[110px] sm:w-[90px] sm:h-[90px] w-[50px] h-[50px] min-[400px]:w-[70px] min-[400px]:h-[70px] cursor-pointer' onClick={() => setCurrentPic(item)} >
                  <Image src={item} style={{objectFit:"cover",objectPosition: 'top', width:'100%', height:'100%', }} alt='' quality={100} />
                </div>
              </div>
            ))}
          </div>
          <div className=' lg:min-w-[370px] lg:max-w-[474px] m-auto md:m-0 md:min-w-[350px] max-h-[600px]'>
            <Image src={currentPic} alt=''style={{objectFit:"cover", width:'100%', height:'100%'}} quality={100} />
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
                <div className='w-full h-full bg-black cursor-pointer'></div>
              </div>
              <div className='p-1 w-9 h-9 '>
                <div className='w-full h-full bg-[#B81919] cursor-pointer'></div>
              </div>
              <div className='p-1 w-9 h-9'>
                <div className='w-full h-full bg-[#AFF9F4] cursor-pointer'></div>
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
  )
}

export default ProductInfo