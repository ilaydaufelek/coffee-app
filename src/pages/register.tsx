
import { register } from "@/firebase"
import { useState } from "react"

export default  function Register (){
    const [email,setEmail]=useState('')
    const [password, setPassword]=useState('')
  
    const  handleSubmit= (e:React.FormEvent<HTMLFormElement>)=>{
      e.preventDefault()
      const user=  register(email,password)
      console.log(user,'user');
      
    }
    return(
        <div className="flex min-h-full flex-col  px-6 py-12 lg:px-8  lg:h-screen lg:justify-center  lg:items-center ">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Sign in to your account</h2>
        </div>
      
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit}  className="space-y-6" action="#" method="POST">
            <div>
              <label  className="block text-sm/6 font-medium text-gray-900">Email address</label>
              <div className="mt-2">
                <input type="email" name="email" id="email"  onChange={e=>setEmail(e.target.value)}  required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#533A1F] sm:text-sm/6"/>
              </div>
            </div>
      
            <div>
              <div className="flex items-center justify-between">
                <label  className="block text-sm/6 font-medium text-gray-900">Password</label>
                
              </div>
              <div className="mt-2">
                <input type="password" name="password" id="password" onChange={e=>setPassword(e.target.value)}  required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#533A1F] sm:text-sm/6"/>
              </div>
            </div>
      
            <div>
              <button type="submit" disabled={!email || !password} className="flex disabled:bg-[#976f4594] w-full justify-center rounded-md bg-[#976F45] px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs  focus-visible:outline-2 focus-visible:outline-offset-2 ">Sign in</button>
            </div>
          </form>
      
         
        </div>

      </div>
    )
}