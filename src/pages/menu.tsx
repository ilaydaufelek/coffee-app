
import { RootState } from "@/store";
import { useState } from "react";
import { useSelector } from "react-redux";


export default function Menu() {

    const coffees=useSelector((state:RootState)=>state.coffees.coffees)
    const [activeType,setActiveType]=useState<'hot' | 'cold' | 'dessert'>('hot')
    const filterItems=coffees.filter((item)=>item.type === activeType)
    return (
      <div className="relative">
      
        <img
          className="w-full h-[300px] sm:h-[400px] object-cover"
          src="bg-cafe.jpg"
          alt=""
        />
  
        
        <div className="flex justify-center mt-[-80px] sm:mt-[-100px] ">
          <div className="bg-white w-[90%] sm:w-[400px] md:w-[600px] lg:w-[1000px] 
            rounded-2xl shadow-lg p-6 relative ">
              <div className="relative flex items-center justify-center  " >
                <div className=" m-4 ">
                  <p className="text-center  text-[2rem] text-[#1b1d1f] font-semibold " >Our Menu</p>
                <p className="text-center font-medium text-[1rem] text-[#919395] " >
                   We are delighted to present our fresh and delicious flavors,<br/> 
                      <span className="" >each crafted with care just for you.</span>
                </p>
                </div>
                <div className="absolute right-1 top-0  md:right-1/3 md:top-bottom md:ml-2 lg:right-1/3  xl:right-1/3 xl:top-bottom xl:mb-4  " >
                   <img className="w-40 h-20 z-40   " src="vector.svg" alt="" />
                </div>
                </div>
              <div className="flex items-center justify-center gap-4 mb-4 " >
              <button onClick={()=>setActiveType('hot')}  className="w-[100px] h-[34px] rounded-md bg-[#1b1d1f] text-white font-semibold cursor-pointer " >Hot</button>
              <button onClick={()=>setActiveType('cold')} className="w-[100px] h-[34px] rounded-md bg-[#1b1d1f] text-white font-semibold cursor-pointer " >Cold</button>
              <button onClick={()=>setActiveType('dessert')} className="w-[100px] h-[34px] rounded-md bg-[#1b1d1f] text-white font-semibold cursor-pointer " >Dessert</button>
             
              </div>
               
              
               
             
              <div className="grid grid-cols-1 gap-2  lg:grid lg:grid-cols-3 lg:gap-6    ">
              {filterItems.map(coffee=>(
                  <div key={coffee.id} className=" w-[300px] relative my-4 " >
                    <img className="w-full h-[150px] rounded-2xl object-cover " src={coffee.img} alt="" />
                   {coffee.populer && (
                     <svg  className="absolute top-1 left-0.5  "
                     width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path
                 d="M10.3072 7.21992C10.9493 5.61924 11.2704 4.81889 11.7919 4.70797C11.9291 4.6788 12.0708 4.6788 12.208 4.70797C12.7295 4.81889 13.0506 5.61924 13.6927 7.21992C14.0578 8.1302 14.2404 8.58535 14.582 8.89491C14.6778 8.98174 14.7818 9.05907 14.8926 9.12582C15.2874 9.3638 15.7803 9.40794 16.7661 9.49623C18.4348 9.64568 19.2692 9.7204 19.524 10.1961C19.5768 10.2947 19.6127 10.4014 19.6302 10.5118C19.7146 11.0448 19.1012 11.6028 17.8744 12.719L17.5338 13.0289C16.9602 13.5507 16.6735 13.8116 16.5076 14.1372C16.4081 14.3325 16.3414 14.5429 16.3101 14.7598C16.258 15.1215 16.342 15.5 16.5099 16.257L16.5699 16.5275C16.8711 17.885 17.0217 18.5638 16.8337 18.8974C16.6649 19.1971 16.3538 19.389 16.0102 19.4054C15.6277 19.4236 15.0887 18.9844 14.0107 18.106C13.3005 17.5273 12.9454 17.238 12.5512 17.1249C12.191 17.0216 11.8089 17.0216 11.4487 17.1249C11.0545 17.238 10.6994 17.5273 9.98917 18.106C8.91119 18.9844 8.37221 19.4236 7.98968 19.4054C7.64609 19.389 7.33504 19.1971 7.16617 18.8974C6.97818 18.5638 7.12878 17.885 7.42997 16.5275L7.48998 16.257C7.65794 15.5 7.74191 15.1215 7.6898 14.7598C7.65854 14.5429 7.59182 14.3325 7.49232 14.1372C7.32645 13.8116 7.03968 13.5507 6.46613 13.0289L6.12546 12.719C4.89867 11.6028 4.28527 11.0448 4.36975 10.5118C4.38724 10.4014 4.42312 10.2947 4.47589 10.1961C4.73069 9.7204 5.56507 9.64568 7.23384 9.49623C8.21962 9.40794 8.71251 9.3638 9.10735 9.12582C9.2181 9.05907 9.32211 8.98174 9.41793 8.89491C9.75954 8.58535 9.94211 8.1302 10.3072 7.21992Z" 
                 fill="#f8cb67" stroke="#f8cb67" strokeWidth="3"></path>
                 </svg>
                   )}
                 
                    <div className="flex items-center justify-between mt-2 " >
                    <div className="font-semibold text-[1rem]" >{coffee.name}</div>
                    <div className="w-[49px] h-[24px] bg-[#bee3cc] rounded-md font-semibold flex items-center justify-center   " >{coffee.price}$</div>
                    </div>
                  

                  </div>
                ))}
        
        
             </div>
                
           
          </div>
        </div>
      </div>
    );
  }
  