import { NavBar } from '@/pages/NavBar'
import { createRootRoute, Outlet } from '@tanstack/react-router'



export const Route = createRootRoute({
  component: () => (
    <>
    
      <NavBar />
      
      <Outlet />
      
    </>
  ),
})