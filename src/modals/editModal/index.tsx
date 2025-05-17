
import { updateCoffeeData } from "@/firebase";

import { _removeModal } from "@/store/modal/action";
import { FormEvent, useState } from "react";


type EditModalProps = {
  data: {
    id: string;
    name: string;
    price: number;
    img: string;
   
  };
};


export default function EditModal({data}:EditModalProps) {
   
const [updateName,setUpdateName]=useState('')
const [updateImg,setUpdateImg]=useState('')
const [updatePrice,setUpdatePrice]=useState('')
 
const handleSubmit=(e: FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    updateCoffeeData(data.id,{
        name:updateName,
        img:updateImg,
        price:updatePrice
        

    })
}

    return (
        <div className="  w-[400px] h-[400px] lg:w-[500px] lg:h-[500px] md:w-[500px] md:h-[450px] bg-white rounded-md shadow-sm px-4 py-4 relative ">
            <form onSubmit={handleSubmit}>
               <div className="sm:col-span-4">
          <label form="urunadı" className="block text-sm/6 font-medium text-gray-900">Edit Name</label>
          <div className="mt-2  ">
            <div className="flex items-center rounded-md bg-white lg:w-[400px]   pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
            
              <input
              onChange={e=>setUpdateName(e.target.value)}
               type="text" name="urunadı" id="urunadı" className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6  "
                placeholder={data.name}/>
            </div>
          </div>
        </div>
                  <div className="col-span-full mt-4">
          <label form="cover-photo" className="block text-sm/6 font-medium text-gray-900 lg:mt-2">Edit Photo</label>
          <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10 lg:w-[400px] ">
            <div className="text-center">
           
              <div className="mt-4 flex text-sm/6">
                <label  className=" ">
                 
                  <input type="text" 
                  onChange={e=>setUpdateImg(e.target.value)}
                    className="focus:outline-hidden border border-gray-300 rounded-sm px-2 "
                   
                    placeholder={data.img}
                   />
                </label>
               
              </div>
             
            </div>
           
          </div>
        
        </div>
         <div className="mt-4" >
    <label form="cover-photo" className="block text-sm/6 font-medium text-gray-900 lg:mt-2">Edit Price</label>
         <input 
       onChange={e=>setUpdatePrice(e.target.value)}
       className="focus:outline-hidden border border-gray-300 rounded-sm px-2 w-[150px]  "
        type="number" placeholder={data.price.toString()} min="0" step="0.01"/>
     
       </div>

                <div className="absolute bottom-2 right-2 ">
                    <button
                    onClick={_removeModal}  
                    disabled={!updateImg || !updateName || !updatePrice}
                     type="submit" className="bg-[#212222] text-white px-4 py-2 rounded-lg disabled:bg-[#212222a2]">
                        Kaydet
                    </button>
                  
                </div>
            </form>
        </div>
    );
}