import React from 'react'
import Search from '@/section/pages/helpPage/search&help'
import HelpInfo from '@/section/pages/helpPage/helpInfo'
import HelpbottomSection from '@/section/pages/helpPage/helpbottomSection'

const Help = () => {
  return (
    <>
    <article className='text-sm mx-[30px] lg:mx-24 font-sans font-[400]'>
      <Search />
      <HelpInfo />
    </article>
    <HelpbottomSection />
    </>
  )
}

export default Help