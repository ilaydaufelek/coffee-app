
import  App  from "@/App";
import Dashboard from "@/pages/AdminDashboard";
import Login from "@/pages/login";
import Management from "@/pages/management";
import Register from "@/pages/register";

import { createBrowserRouter } from "react-router-dom";
  const router= createBrowserRouter([
    {
        path:'/',
        element:<App/>
    },
    {
        path:'/register',
        element:<Register/>
    },
    {
        path:'/login',
        element:<Login/>
    },
    {
      path:'/management/',
      element:<Management/>,
      children:[
        {
         path:'home',
          element:<Dashboard/>
        },
       { 
        path:'settings',
        element:<div>ehehe</div>
      }
      ]
    }

    
  ])
  export default router