import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent,  AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { deleteDocument } from "@/firebase"
import Modal from "@/modals/modal"
import { RootState } from "@/store"
import { _setModal } from "@/store/modal/action"
import { useModal } from "@/store/modal/hooks"
import { useState } from "react"
import {   useSelector } from "react-redux"

export default function Overview() {
 
    const coffees=useSelector((state:RootState)=>state.coffees.coffees)
    const [activeType,setActiveType]=useState<'hot' |'cold' | 'dessert' | 'all'>('all')
    const filterTypes=activeType=== 'all'? coffees :coffees.filter((item)=>item.type ===activeType)
    
 
 const modal=useModal()
 console.log("modal:", modal)
 
   
  return (
    
   <div className="m-4" >
    <Select onValueChange={(e)=>setActiveType(e as 'hot' | 'cold' | 'dessert' | 'all')} >
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Filter by type" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem  value="hot">Hot</SelectItem>
    <SelectItem value="cold">Cold</SelectItem>
    <SelectItem value="dessert">Dessert</SelectItem>
    <SelectItem value="all">All</SelectItem>
  </SelectContent>
</Select>
     <div className="grid grid-cols-1 gap-2 md:grid-cols-3 md:gap-6  lg:grid-cols-3 xl:grid-cols-4 xl:gap-6 ">
      
     {modal.name && <Modal />}
        {filterTypes.map(item=>(
          
            <div key={item.id} className=" max-w-[300px] w-full relative my-4 " >
             
            <img className="w-full h-[150px] rounded-2xl object-cover  " src={item.img} alt="" />
           
             <div 
             className="absolute top-1 right-2 text-white cursor-pointer ">
            
              <Popover>
            <PopoverTrigger>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
             <path fill="currentColor" fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12m8.5-4.5A1.5 1.5 0 0 1 12 6h.01a1.5 1.5 0 0 1 1.5 1.5v.01a1.5 1.5 0 0 1-1.5 1.5H12a1.5 1.5 0 0 1-1.5-1.5zm1.5 3a1.5 1.5 0 0 0-1.5 1.5v.01a1.5 1.5 0 0 0 1.5 1.5h.01a1.5 1.5 0 0 0 1.5-1.5V12a1.5 1.5 0 0 0-1.5-1.5zm0 4.5a1.5 1.5 0 0 0-1.5 1.5v.01a1.5 1.5 0 0 0 1.5 1.5h.01a1.5 1.5 0 0 0 1.5-1.5v-.01a1.5 1.5 0 0 0-1.5-1.5z" clip-rule="evenodd"/>
             </svg>
             </PopoverTrigger>
           <PopoverContent className="" >
            
              <button className="text-left rounded-md p-1 hover:bg-[#d3d2d2] w-full font-semibold "
             onClick={()=>_setModal('EditModal',item)} >Edit</button>
             <AlertDialog>
              <div 
              className="text-left rounded-md p-1 hover:bg-red-600 w-full hover:text-white font-semibold" > 
              <AlertDialogTrigger>Delete</AlertDialogTrigger></div>
 
          <AlertDialogContent>
          <AlertDialogHeader>
           <AlertDialogTitle>Are you absolutely sure you want to delete it?</AlertDialogTitle>
     
         </AlertDialogHeader>
     <AlertDialogFooter>
      <AlertDialogCancel  >Cancel</AlertDialogCancel>
       <AlertDialogAction onClick={async()=>await deleteDocument(item.id)} >Delete</AlertDialogAction>
         </AlertDialogFooter>
         </AlertDialogContent>
      </AlertDialog>
   
   
       </PopoverContent>

        </Popover>

             </div>
            {item.populer && (
             <svg  className="absolute top-1 left-0.5  "
             width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path
         d="M10.3072 7.21992C10.9493 5.61924 11.2704 4.81889 11.7919 4.70797C11.9291 4.6788 12.0708 4.6788 12.208 4.70797C12.7295 4.81889 13.0506 5.61924 13.6927 7.21992C14.0578 8.1302 14.2404 8.58535 14.582 8.89491C14.6778 8.98174 14.7818 9.05907 14.8926 9.12582C15.2874 9.3638 15.7803 9.40794 16.7661 9.49623C18.4348 9.64568 19.2692 9.7204 19.524 10.1961C19.5768 10.2947 19.6127 10.4014 19.6302 10.5118C19.7146 11.0448 19.1012 11.6028 17.8744 12.719L17.5338 13.0289C16.9602 13.5507 16.6735 13.8116 16.5076 14.1372C16.4081 14.3325 16.3414 14.5429 16.3101 14.7598C16.258 15.1215 16.342 15.5 16.5099 16.257L16.5699 16.5275C16.8711 17.885 17.0217 18.5638 16.8337 18.8974C16.6649 19.1971 16.3538 19.389 16.0102 19.4054C15.6277 19.4236 15.0887 18.9844 14.0107 18.106C13.3005 17.5273 12.9454 17.238 12.5512 17.1249C12.191 17.0216 11.8089 17.0216 11.4487 17.1249C11.0545 17.238 10.6994 17.5273 9.98917 18.106C8.91119 18.9844 8.37221 19.4236 7.98968 19.4054C7.64609 19.389 7.33504 19.1971 7.16617 18.8974C6.97818 18.5638 7.12878 17.885 7.42997 16.5275L7.48998 16.257C7.65794 15.5 7.74191 15.1215 7.6898 14.7598C7.65854 14.5429 7.59182 14.3325 7.49232 14.1372C7.32645 13.8116 7.03968 13.5507 6.46613 13.0289L6.12546 12.719C4.89867 11.6028 4.28527 11.0448 4.36975 10.5118C4.38724 10.4014 4.42312 10.2947 4.47589 10.1961C4.73069 9.7204 5.56507 9.64568 7.23384 9.49623C8.21962 9.40794 8.71251 9.3638 9.10735 9.12582C9.2181 9.05907 9.32211 8.98174 9.41793 8.89491C9.75954 8.58535 9.94211 8.1302 10.3072 7.21992Z" 
         fill="#f8cb67" stroke="#f8cb67" strokeWidth="3"></path>
         </svg>
           )}
         
            <div className="flex items-center justify-between mt-2 " >
            <div className="font-semibold text-[1rem]" >{item.name}</div>
            <div className="w-[49px] h-[24px] bg-[#bee3cc] rounded-md font-semibold flex items-center justify-center   " >{item.price}$</div>
            </div>
          

          </div>
        ))}
         
     
    </div>
    
   </div>
    
  )
}
