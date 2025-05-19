import {  useSelector } from "react-redux"
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarInset, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Home, Inbox, Settings, } from "lucide-react"
import { Separator } from "@radix-ui/react-separator"
import { Link, Outlet, useLocation } from "react-router-dom"
import NavUser from "@/components/navUser"

import { RootState } from "@/store"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb"





// Menu items.
const items = [
    {
      title: "Home",
      url: "home",
      icon: Home,
    },
    {
      title: "Overview",
      url: "overview",
      icon: Inbox,
    },
    
    {
      title: "Settings",
      url: "settings",
      icon: Settings,
    },
  ]
   





export default function Management(){
  const user = useSelector((state: RootState) => state.auth.user)
console.log(user,'userr');

  const location = useLocation()
  const path =location.pathname.split('/').filter(Boolean)
  const pageName = (path.pop() ) as string;
    return(
        <SidebarProvider className="flex" >
      
        <Sidebar className="flex" collapsible="icon">
       
        <SidebarContent>
       
          <SidebarGroup>
           
         
            <SidebarGroupLabel>Application</SidebarGroupLabel>
            <SidebarGroupContent>
           
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link to={item.url} >
                      <item.icon/>
                      {item.title}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          
        </SidebarContent>
        <NavUser user={user} />
        <SidebarFooter />
        
      </Sidebar>
      
    
      
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                <Link to={'home'}>
                  <BreadcrumbLink  >
                   Home
                  </BreadcrumbLink>
                  </Link>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                { pageName !== 'home' && pageName && (
                  <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink  href={`/${[...path, pageName].join("/")}`}>
                  {pageName.charAt(0).toUpperCase() + pageName.slice(1)}
                  </BreadcrumbLink>
                </BreadcrumbItem>
                )}
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
       <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min m-2 " >
      <div className="ml-4" >
      <Outlet/>
      </div>
       </div>
      
        
      </SidebarInset>
     
        
      </SidebarProvider>
      
        
    )
}