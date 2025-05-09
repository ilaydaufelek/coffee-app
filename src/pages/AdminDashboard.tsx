import { RadioGroupItem,RadioGroup } from "@/components/ui/radio-group"
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
    const [populer,setPopuler]=useState(false)
    const [type,setType]=useState('hot')

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const data = {
        name: addCoffe,
        uid: user,
        img: image,
        price: price,
        populer: populer,
        type:type

      };
    
  
      try {
        await addCoffeData(data); 
        toast('New product added successfully.'); 
      } catch (error) {
        toast.error('Failed to add product.'); 
      }
      
    };
  
    

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
               type="text" name="urunadı" id="urunadı" className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6  " placeholder="Cappuccino"/>
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
       <button
       type="button"
       onClick={()=>setPopuler(prev=>!prev)}
        className="block text-sm/6 font-medium text-gray-900 lg:mt-2  items-center justify-center " >
       Is Popular? <Switch/>
       </button>

       <RadioGroup 
       onValueChange={setType}
        className="grid-cols-3 lg:mt-2 " defaultValue="hot">
      {/* hot */}
      <div className=" h-[100px] border-input has-data-[state=checked]:border-primary/50 has-focus-visible:border-ring has-focus-visible:ring-ring/50 relative flex cursor-pointer flex-col items-center gap-3 rounded-md border px-2 py-3 text-center shadow-xs transition-[color,box-shadow] outline-none has-focus-visible:ring-[3px]">
        <RadioGroupItem id="hot" value="hot" className="sr-only" />
        <svg 
        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5 3H20C21.1046 3 22 3.89543 22 5V8C22 9.10457 21.1046 10 20 10H18V13C18 15.2091 16.2091 17 14 17H8C5.79086 17 4 15.2091 4 13V4C4 3.44772 4.44772 3 5 3ZM18 5V8H20V5H18ZM2 19H20V21H2V19Z">
          </path></svg>
        <label
         htmlFor="hot"
          className="text-foreground cursor-pointer text-xs leading-none font-medium after:absolute after:inset-0"
        >
          Hot
        </label>
      </div>
      {/* cold */}
      <div className=" h-[100px] border-input has-data-[state=checked]:border-primary/50 has-focus-visible:border-ring has-focus-visible:ring-ring/50 relative flex cursor-pointer flex-col items-center gap-3 rounded-md border px-2 py-3 text-center shadow-xs transition-[color,box-shadow] outline-none has-focus-visible:ring-[3px]">
        <RadioGroupItem id="cold" value="cold" className="sr-only" />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M14 2H6.20495C5.6091 2 5.09608 2.42057 4.97923 3.00485L4.1802 7H2V9H4.10875H19.8912H22V7H19.8198L19.0208 3.00485C18.9039 2.42057 18.3909 2 17.795 2H16V0H14V2ZM19.6605 11H4.33952L5.48105 20.8933C5.55383 21.524 6.08789 22 6.72281 22H17.2772C17.9121 22 18.4462 21.524 18.5189 20.8933L19.6605 11Z">
          </path></svg>
        <label
          htmlFor='cold'
          className="text-foreground cursor-pointer text-xs leading-none font-medium after:absolute after:inset-0"
        >
         Cold
        </label>
      </div>
      {/* dessert */}
      <div className=" h-[100px] border-input has-data-[state=checked]:border-primary/50 has-focus-visible:border-ring has-focus-visible:ring-ring/50 relative flex cursor-pointer flex-col items-center gap-3 rounded-md border px-2 py-3 text-center shadow-xs transition-[color,box-shadow] outline-none has-focus-visible:ring-[3px]">
        <RadioGroupItem id='dessert' value="dessert" className="sr-only" />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 2C17.433 2 19 3.567 19 5.5C19 5.72679 18.9784 5.94854 18.9372 6.16332L18.9223 6.22941C20.7106 6.82471 22 8.51178 22 10.5C22 12.3741 20.8544 13.9806 19.2253 14.6574L18.1393 21.1644C18.0589 21.6466 17.6417 22 17.1529 22H6.84713C6.35829 22 5.9411 21.6466 5.86073 21.1644L4.832 14.994C3.24892 14.9037 2 13.5977 2 12C2 10.6926 2.83627 9.5806 4.00306 9.16963L4 9C4 5.68629 6.68629 3 10 3C10.9216 3 11.7947 3.20779 12.575 3.57908C13.1988 2.62827 14.276 2 15.5 2ZM11 15H9V20H11V15ZM15 15H13V20H15V15ZM17.5 13C18.8807 13 20 11.8807 20 10.5C20 9.11929 18.8807 8 17.5 8C17.1643 8 16.8417 8.06519 16.5442 8.18959L16.3688 8.27129C15.4021 8.76932 14.2253 8.40165 13.7059 7.46716L13.6362 7.32984C12.9876 5.92108 11.5778 5 10 5C7.8578 5 6.10892 6.68397 6.0046 8.76748L5.99967 8.96394L6.00273 9.13357C6.0173 9.94127 5.54534 10.6726 4.8166 10.9967L4.6675 11.056C4.27121 11.1956 4 11.5722 4 12C4 12.5523 4.44772 13 5 13H17.5Z">
        </path></svg>
        <label
          htmlFor='dessert'
          className="text-foreground cursor-pointer text-xs leading-none font-medium after:absolute after:inset-0"
        >
          Dessert
        </label>
      </div>
    </RadioGroup>
       
      

            <button 
            type="submit"
            disabled={!addCoffe || !image || !price }
             className="bg-indigo-600 rounded-md  py-2 mt-4 px-2  flex items-center disabled:bg-indigo-300 justify-center text-white font-semibold text-[14px] absolute right-0 " > New Product</button>
            
           
 
    
          </form>
         <Toaster/>
        </div>
        
        
    )
    
}