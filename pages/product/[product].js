import React, { useState } from 'react'
import img1 from "../../public/assets/homePage1/s1.png"
import dress1 from '../../public/assets/images/dress1.webp'
import dress2 from '../../public/assets/images/dress2.webp'
import dress4 from '../../public/assets/images/dress4.webp'
import ProductDescription from '@/section/pages/productPage/productDescription';
import ProductInfo from '@/section/pages/productPage/productInfo';
import ProductModal from '@/section/pages/productPage/productModal';
import RelatedProduct from '@/section/pages/productPage/relatedProduct';

function Product() {
  
  const [isOpen, setIsOpen] = useState(false)
  const closeModal = () => setIsOpen(prevState => !prevState)
  const picArray = [dress1,dress2,dress4,img1]
  const [currentPic, setCurrentPic] = useState(picArray[0])

  return (
    <article className='text-lg mx-[30px] lg:mx-24 font-sans font-[400]'>
      <ProductModal isOpen={isOpen} closeModal={closeModal} currentPic={currentPic} />
      <p className='max-w-[650px] m-auto mt-9 mb-16'><span className='text-[#7D7878]'>Home / Clothes / Dresses /</span> Zara Twist Front Textured Slinky Ruched Midi Dress </p>
      <ProductInfo currentPic={currentPic} setCurrentPic={setCurrentPic} picArray={picArray} closeModal={closeModal} />
      <ProductDescription />
      <RelatedProduct />
    </article>
  )
}

export default Product