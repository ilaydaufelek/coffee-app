
import  App  from "@/App";
import Dashboard from "@/pages/AdminDashboard";
import Login from "@/pages/login";
import Management from "@/pages/management";
import Menu from "@/pages/menu";
import Overview from "@/pages/Overview";
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
      element: <Management />,
      children:[
        {
         path:'home',
          element:<Dashboard/>
        },
       { 
        path:'settings',
        element:<div>ehehe</div>
      },
     {
      path:'overview',
      element:<Overview/>
     }

      ]
      
    },
    {
      path:'menu',
      element:<Menu/>
        
    }

    
  ])
  export default router