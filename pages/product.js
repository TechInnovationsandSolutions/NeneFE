import ProductCard from '@/components/productCard/productCard'
import Image from 'next/image';
import React from 'react'
import Button from '../components/button/button'
import img1 from "../public/assets/homePage1/s1.png"
import dbress from '../public/assets/homePage1/bdress.png';
import anger from '../public/assets/svgs/anger.svg'
import WI from '../public/assets/svgs/Like.svg'
import close from '../public/assets/svgs/close icon.svg'

function Product() {
  console.log(typeof img1);
  return (
    <article className='text-lg mx-[8%] lg:mx-24 font-sans font-[400]'>
      <section>
        <div>
          <div>
            <h3>Shopping Bag (1)</h3>
            <Image src={close} />
          </div>
          <div>
            <div className='max-w-[100px]'>
                <Image src={dbress} width={100} height={100} />
            </div>
            <div>
              <p>Zara Twist Front Textured Slinky Ruched Midi Dress </p>
              <p>Color: Black</p>
              <p>UK Size: 6</p>
              <div>
                <p>Quantity: 1</p>
                <h5>N 3,000</h5>
              </div>
            </div>
            <div></div>
            <div>
              <p>Total</p>
              <h4>N 3,000</h4>
            </div>
            <Button type={'button'} customClassName={'text-xs'} variant={'black'} text='Checkout'/>
            <Button type={'button'} customClassName={'text-xs'} variant={'white'} text='View Bag'/>
          </div>
        </div>
      </section>
        <p className='max-w-[650px] m-auto mt-9 mb-16'><span className='text-[#7D7878]'>Home / Clothes / Dresses /</span> Zara Twist Front Textured Slinky Ruched Midi Dress </p>
      <section>
        <div className='flex flex-col md:flex-row  my-9  gap-6 text-[#3E3E3E]' >
          <div className='flex md:flex-row flex-col-reverse gap-6'>
            <div className='flex md:flex-col gap-4 m-auto md:m-0'>
              <div className='min-w-[50px] max-w-[100px]'>
                <Image src={dbress} width={100} height={100} />
              </div>
              <div className='min-w-[50px] max-w-[100px]'>
                <Image src={dbress} width={100} height={100} />
              </div>
              <div className='min-w-[50px] max-w-[100px]'>
                <Image src={dbress} width={100} height={100} />
              </div>
              <div className='min-w-[50px] max-w-[100px]'>
                <Image src={dbress} width={100} height={100} />
              </div>
            </div>
            <div className='min-w-[280px] min-h-[400px] m-auto md:m-0'>
              <Image src={dbress}  />
            </div>
          </div>
          <div>
            <p> Zara Twist Front Textured Slinky Ruched Midi Dress </p>
            <p className='text-sm text-[#7D7878]'>Product Code: 3B33R4T6</p>
            <p className='my-7 text-3xl font-bold'>N 3,000</p>
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
            <div className='mt-5'>
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
                  <Image src={anger} />
                  <p className='text-sm min-w-[119px]'>What's My Size?</p>
                </div>
              </div>
            </div>
            <div className='mt-5'>
              <p className='font-bold my-2'>Quantity:</p>
              <div className='p-1 w-20 h-9 border-black border flex justify-center'>8</div>
            </div>
            <div className='mt-5 flex gap-10'>
              <Button type={'button'} customClassName={'text-xs  md:text-base '} variant={'black'} text='Add To Shopping Bag'/>
              <Image src={WI}/>
            </div>
          </div>
        </div>
      </section>
      <section className='my-12'>
        <div>
          <h5 className='font-bold mt-5'>Description:</h5>
          <p className='text-[#616161]'>Fabric with cotton. Shirt-style. Lapel-collar. Long sleeve with buttoned cuffs. Loops. Adjustable belt. Side pockets. Decorative pleats at front. Concealed button fastening. Inner lining.
          </p>
        </div>
        <div>
          <h5 className='font-bold mt-5'>Size:</h5>
          <p className='text-[#616161]'>Model wears: UK 8/ EU 36/ US 4
          Model's height: 173cm/5'8"</p>
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
                <Image src={img1} />
              </div>
              <p className='text-sm text-[#3E3E3E] w-[280px]'>Zara Twist Front Textured Slinky Ruched Midi Dress </p>
              <h4 className='font-bold'>N 3,000</h4>
            </div>
          </div>
          <div className='mt-16'>
            <h3 className='font-medium text-2xl mb-6 text-center sm:text-left'>You Might Also Like</h3>
            <div className='gap-3 flex flex-col'>
              <div className=''>
                <Image src={img1} />
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
                  <Image src={img1} />
                </div>
                <p className='text-sm text-[#3E3E3E] w-[280px]'>Zara Twist Front Textured Slinky Ruched Midi Dress </p>
                <h4 className='font-bold'>N 3,000</h4>
              </div>
              <div className='gap-3 flex flex-col'>
                <div className=''>
                  <Image src={img1} />
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