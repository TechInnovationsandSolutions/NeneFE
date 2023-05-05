import React from "react";
import Search from "@/sections/pages/helpPage/search&help";
import HelpInfo from "@/sections/pages/helpPage/helpInfo";
import HelpbottomSection from "@/sections/pages/helpPage/helpbottomSection";

const Help = () => {
  return (
    <>
      <article className='text-sm mx-[30px] lg:mx-24 font-sans font-[400]'>
        <Search />
        <HelpInfo />
      </article>
      <HelpbottomSection />
    </>
  );
};

export default Help;
