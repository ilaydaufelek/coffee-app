import { register } from "@/firebase";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Toaster } from "sonner";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user = register(email, password);
    console.log(user, "user");
  };

  return (
  <>
    <div className="grid min-h-svh lg:grid-cols-2">
    <div className="flex flex-col gap-4 p-6 md:p-10">
      
      <div className="flex flex-1 items-center justify-center">
        <div className="w-full max-w-xs">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm lg:order-1  ">
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900  ">
       <span  className="text-[#8B4701]"> Coffee time!</span> Are you ready?
        </h2>
        <div className="mt-10 ">
          <form onSubmit={handleSubmit} className="space-y-6  " action="#" method="POST">
            <div>
              <label className="block text-sm/6 font-medium text-gray-900 ">Email address</label>
              <div className="mt-2 relative  ">
                <input
                  type="email"
                  name="email"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)
                  
                  }
                  required
                  className="block w-full rounded-md  bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#533A1F] sm:text-sm/6"
                
                />
                
                {email && email.length>12 &&(
                  <div className="text-[#C6852B] absolute right-2 top-2 flex items-center justify-center" > 
                  <svg
                  className="flex items-center justify-center"
                   xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m0-1.2a8.8 8.8 0 1 0 0-17.6a8.8 8.8 0 0 0 0 17.6m-1.172-6.242l5.809-5.808l.848.849l-5.95 5.95a1 1 0 0 1-1.414 0L7 12.426l.849-.849l2.98 2.98z"/></svg></div>
                )}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label className="block text-sm/6 font-medium text-gray-900 ">Password</label>
              </div>
              <div className="mt-2">
                <input
                  type="password"
                  name="password"
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#533A1F] sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={!email || !password}
                className="flex disabled:bg-[#3f1801be] cursor-pointer  w-full justify-center rounded-md bg-[#3F1801] px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                Sign Up
              </button>
              
            </div>
            <p className="text-[16px] font-semibold hover:underline text-right text-[#8B4701]" > <Link to='/login'>Log İn</Link></p>
          </form>
        </div>
      </div>

        </div>
      </div>
    </div>
    <div className="relative hidden lg:block ">
      <img
        src="https://videos.openai.com/vg-assets/assets%2Ftask_01jrwr65c4eweb8pht929gb609%2Fimg_0.webp?st=2025-04-15T11%3A06%3A01Z&se=2025-04-21T12%3A06%3A01Z&sks=b&skt=2025-04-15T11%3A06%3A01Z&ske=2025-04-21T12%3A06%3A01Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=SnQ9oHR1AwQYigi%2F6xws3dG16XK8sm3WaS9Io7JJAdc%3D&az=oaivgprodscus"
        alt="Image"
        className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] rounded-l-2xl dark:grayscale"
      />
    </div>
  </div>
  <Toaster/>
  </>
  );
}