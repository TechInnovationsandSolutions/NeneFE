const ModalContainer = ({content}) => {
   return ( 
      <>
         <div className="fixed w-full z-[99999] grid inset-0 bg-[#000000BA]  " >
{content}
         </div>
      </>
    );
}
 
export default ModalContainer;