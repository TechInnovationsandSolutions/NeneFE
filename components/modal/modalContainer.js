const ModalContainer = ({content}) => {
   return ( 
      <>
         <div className="fixed w-full grid inset-0 bg-[#000000BA]  " >
{content}
         </div>
      </>
    );
}
 
export default ModalContainer;