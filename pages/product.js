import ProductCard from '@/components/productCard/productCard'
import Image from 'next/image';
import React from 'react'
import Button from '../components/button/button'
import img1 from "../public/assets/homePage1/s1.png"
import dbress from '../public/assets/homePage1/bdress.png';
import anger from '../public/assets/svgs/anger.svg'
import WI from '../public/assets/svgs/Like.svg'

function Product() {
  console.log(typeof img1);
  return (
    <article className='text-lg mx-5 md:mx-24 font-sans'>
        <p className='max-w-[650px] m-auto my-9'><span className='text-[#7D7878]'>Home / Clothes / Dresses /</span> Zara Twist Front Textured Slinky Ruched Midi Dress </p>
      <section>
        <div className='flex flex-col md:flex-row  my-9  gap-6' >
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
            <div className='min-width-[355px] min-h-[400px] m-auto md:m-0'>
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
              <div className='flex gap-3 md:flex-row flex-row'>
                <div className='flex gap-2'>
                  <div className='p-1 w-9 h-9 border-black border flex justify-center'>6</div>
                  <div className='p-1 w-9 h-9 border-black border flex justify-center'>7</div>
                  <div className='p-1 w-9 h-9 border-black border flex justify-center'>8</div>
                  <div className='p-1 w-9 h-9 border-black border flex justify-center'>9</div>
                  <div className='p-1 w-9 h-9 border-black border flex justify-center'>10</div>
                </div>
                <div className='flex gap-1 items-center'>
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
              <Button type={'button'} variant={'black'} text='Add To Shopping Bag'/>
              <Image src={WI}/>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div>
          <h5>Description:</h5>
          <p>Fabric with cotton. Shirt-style. Lapel-collar. Long sleeve with buttoned cuffs. Loops. Adjustable belt. Side pockets. Decorative pleats at front. Concealed button fastening. Inner lining.
          </p>
        </div>
        <div>
          <h5>Size:</h5>
          <p>Model wears: UK 8/ EU 36/ US 4
          Model's height: 173cm/5'8"</p>
        </div>
        <div>
          <h5>Material and washing instructions:</h5>
          <p>Composition: 98% cotton,2% elastane. Lining: 80% polyester,20% cotton</p>
        </div>
      </section>
      <section>
        <div>
          <div>
            <h3>Similar Pieces</h3>
            <div>
              <Image src={img1} />
            </div>
            <p>Zara Twist Front Textured Slinky Ruched Midi Dress </p>
            <h4>N 3,000</h4>
          </div>
          <div>
            <h3>You Might Also Like</h3>
            <div>
              <Image src={img1} />
            </div>
            <p>Zara Twist Front Textured Slinky Ruched Midi Dress </p>
            <h4>N 3,000</h4>
          </div>
          <div>
            <h3>Complete Your Outfit</h3>
            <div>
              <Image src={img1} />
            </div>
            <p>Zara Twist Front Textured Slinky Ruched Midi Dress </p>
            <h4>N 3,000</h4>
          </div>
        </div>
      </section>
    </article>
  )
}

export default Product