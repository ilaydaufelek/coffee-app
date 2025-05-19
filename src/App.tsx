import { Link } from "react-router-dom";
import { useIsMobile } from "./hooks/use-mobile";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip";
import { Button } from "./components/ui/button";



export default function App() {

  
   const mobil=useIsMobile()
 
   
  
 
  return (
   
     <div className="w-screen h-screen relative   " >
    
     
   { mobil ? (
   <img className=" w-full h-full object-center absolute" src="mobilimg.png" alt="description" />
   ):(
    <img className=" w-full h-full object-fill absolute " src='uıimg.png' alt="description" />
    
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
     <Link className="  text-white font-semibold drop-shadow-sm   "  to={'login'} >Login</Link>
     <Link  to={'menu'} >
        
        <TooltipProvider  delayDuration={0}>
      <Tooltip open={!mobil && true} >
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
              <p className="text-[13px] font-medium text-[#1b1d1f]">
              Step into Coffee's
              </p>
              <p className=" text-xs text-white font-semibold ">
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

    <div className="absolute top-0 right-0 flex gap-2 px-4 py-4 items-center justify-center " >
      <div>
        <svg className="text-white"
         xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248a4.623 4.623 0 0 0 0-9.248m0 7.627a3.004 3.004 0 1 1 0-6.008a3.004 3.004 0 0 1 0 6.008"/><circle cx="16.806" cy="7.207" r="1.078" fill="currentColor"/><path fill="currentColor" d="M20.533 6.111A4.6 4.6 0 0 0 17.9 3.479a6.6 6.6 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.6 6.6 0 0 0-2.184.42a4.6 4.6 0 0 0-2.633 2.632a6.6 6.6 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71s0 2.753.056 3.71c.015.748.156 1.486.419 2.187a4.6 4.6 0 0 0 2.634 2.632a6.6 6.6 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.6 6.6 0 0 0 2.186-.419a4.6 4.6 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186c.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.6 6.6 0 0 0-.421-2.217m-1.218 9.532a5 5 0 0 1-.311 1.688a3 3 0 0 1-1.712 1.711a5 5 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055c-2.438 0-2.687 0-3.655-.055a5 5 0 0 1-1.669-.311a3 3 0 0 1-1.719-1.711a5.1 5.1 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654s0-2.686.053-3.655a5 5 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5 5 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a5 5 0 0 1 1.67.311a3 3 0 0 1 1.712 1.712a5.1 5.1 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655s0 2.698-.043 3.654z"/>
        </svg>
      </div>
      <div>
        <svg className="text-white"
         xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22 22 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202z"/></svg>
      </div>
      <div>
        <svg className="text-white"
         xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m4 4l11.733 16H20L8.267 4zm0 16l6.768-6.768m2.46-2.46L20 4"/></svg>
      </div>
    </div>
    
    
</div>
  
  
   
  
  );

}
    
  
