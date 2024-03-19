import { useEffect } from "react"
export function useModalScrollBar(isOpen){


   useEffect(() => {
   
      function handleScrollbar(){
         if (isOpen){
            document.documentElement.classList.add("scrollbar-hide")
         }
      
         else{
            document.documentElement.classList.remove("scrollbar-hide")
         }
         console.log("body")
      
      }
   handleScrollbar()
     return () => {
      document.body.classList.remove('scrollbar-hide');
     }
   }, [isOpen])
   

}