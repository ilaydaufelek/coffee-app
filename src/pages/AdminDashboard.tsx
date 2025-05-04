import { Switch } from "@/components/ui/switch"
import { addCoffeData } from "@/firebase"
import { RootState } from "@/store"
import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { toast, Toaster } from "sonner"

export default function Dashboard(){
    const {user}=useSelector((state:RootState)=>state.auth)
    const [addCoffe ,setAddCoffe]= useState('')
    const [image ,setImage] =useState('')
    const [price,setPrice] =useState('')
    const [preview, setPreview] = useState<string | null>(null);

    const handleSubmit =(e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        addCoffeData({
            name:addCoffe,
            uid:user,
            img:image,
            Price:price

        })
   

    }

    const handleImageChange=(e:ChangeEvent<HTMLInputElement>)=>{
      const url= e.target.value
      if(url && (url.startsWith('http://') || url.startsWith('https://'))){
        setPreview(url) 
        setImage(url)
       

      }else{
        setImage('')
      }

    }
 
    useEffect(()=>{
      if(!image){
        setPreview(null)
      }
      
    },[image])
    return(
        <div className=" relative lg:w-[400px] " >
          <form action="" onSubmit={handleSubmit} >
       <div className=" space-y-12 " >
       <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-4">
          <label form="urunadı" className="block text-sm/6 font-medium text-gray-900">Product Name</label>
          <div className="mt-2  ">
            <div className="flex items-center rounded-md bg-white lg:w-[400px]   pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
            
              <input
              onChange={e=>setAddCoffe(e.target.value)}
               type="text" name="username" id="urunadı" className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6  " placeholder="Cappuccino"/>
            </div>
          </div>
        </div>
        </div>
          </div>

          <div className="col-span-full">
          <label form="cover-photo" className="block text-sm/6 font-medium text-gray-900 lg:mt-2">Add Photo</label>
          <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10 lg:w-[400px] ">
            <div className="text-center">
             {preview ?(
             <div className="flex items-center justify-center">
             <img src={preview} alt="Preview" className="rounded-md w-[70px] h-[70px] object-cover" />
           </div>
             ):(
              <svg className="mx-auto size-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon">
              <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z" clipRule="evenodd" />
            </svg>
             )}
              <div className="mt-4 flex text-sm/6">
                <label  className=" ">
                 
                  <input type="text" 
                    className="focus:outline-hidden border border-gray-300 rounded-sm px-2 "
                    onChange={handleImageChange}
                    placeholder="https://i.pinimg.com/236x/4a/1c/4a/4a1c4a9755e4d3bdfcb45a1c3a58712f.jpg"
                   />
                </label>
               
              </div>
             
            </div>
           
          </div>
        
        </div>
       <div className="mt-4" >
       <input 
       onChange={e=>setPrice(e.target.value)}
       className="focus:outline-hidden border border-gray-300 rounded-sm px-2 w-[150px]  "
        type="number" placeholder="Enter price" min="0" step="0.01"/>
       </div>
       <div className="block text-sm/6 font-medium text-gray-900 lg:mt-2  items-center justify-center " >
       Is Popular?  <Switch />
       </div>
       
      

            <button 
            disabled={!addCoffe || !image || !price}
            onClick={()=> toast('New product added successfully.')}
             className="bg-indigo-600 rounded-md  py-2 mt-4 px-2  flex items-center disabled:bg-indigo-300 justify-center text-white font-semibold text-[14px] absolute right-0 " > New Product</button>
            
          </form>
         <Toaster/>
        </div>
        
        
    )
    
}