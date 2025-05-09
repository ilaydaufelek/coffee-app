import { Link } from "react-router-dom";
import { useIsMobile } from "./hooks/use-mobile";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip";
import { Button } from "./components/ui/button";


export default function App() {
  const mobil=useIsMobile()
  return (
    <div className="w-screen h-screen relative  " >
    
     
   { mobil ? (
   <img className=" w-full h-full object-center absolute  " src="mobilimg.png" alt="description" />
   ):(
    <img className=" w-full h-full object-fill absolute   " src="uıimg.png" alt="description" />
   )}
    <div className="absolute top-0 left-0 flex gap-2 px-4 py-4 items-center justify-center " >
      <Link to={'#'}>
      <svg 
      width={20}
      height={20}
      className="text-white"
      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
     <path
     fill="currentColor"
      d="M96 64c0-17.7 14.3-32 32-32l320 0 64 0c70.7 0 128 57.3 128 128s-57.3 128-128 128l-32 0c0 53-43 96-96 96l-192 0c-53 0-96-43-96-96L96 64zM480 224l32 0c35.3 0 64-28.7 64-64s-28.7-64-64-64l-32 0 0 128zM32 416l512 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 480c-17.7 0-32-14.3-32-32s14.3-32 32-32z"/></svg>
      </Link>
     <Link className="  text-white font-semibold drop-shadow-sm  "  to={'login'} >Login</Link>
     <Link  to={'menu'} >
        
        <TooltipProvider  delayDuration={0}>
      <Tooltip  >
        <TooltipTrigger asChild>
          <Button  variant="ghost" size="sm">
           Menü
          </Button>
        </TooltipTrigger>
        <TooltipContent className="py-3 px-4">
          <div className="space-y-2">
            <img
              className=" rounded"
              src="menu1.png"
              width={282}
              height={116}
              alt="Content image"
            />
            <div className="space-y-1">
              <p className="text-[13px] font-medium text-[#5c3e2f]">
              Step into Coffee's
              </p>
              <p className=" text-xs text-white">
              Where freshness meets flavor in every bite.
              </p>
            </div>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
       
       </Link>
     <Link className="text-white font-semibold drop-shadow-sm"
     to={'#'}
      >Contact Us</Link>
      </div>

    

    
    
</div>
  
    
  )
}