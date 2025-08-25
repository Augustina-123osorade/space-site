import { Link } from '@tanstack/react-router'
// import imageDesktop from '@/assets/home/background-home-desktop.jpg'
import logo from '@/assets/shared/logo.svg'

export const NavBar = () => {
  return (
    // <div
    //   className="h-screen w-full bg-cover bg-center "
    //   style={{ backgroundImage: `url(${imageDesktop})` }}
    // >
      <div className="p-2 flex justify-between items-center mr-7">
  {/* Logo on the left */}
  <img
    src={logo}
    alt="Logo"
    className="border border-amber-300 rounded-full w-12 h-12"
  />

  {/* Links on the right */}
  <div className="flex gap-6">
    <Link to="/" className="[&.active]:font-bold">
      00 Home
    </Link>
    <Link to="/destination" className="[&.active]:font-bold">
      01 Destination
    </Link>
    <Link to="/crew" className="[&.active]:font-bold">
      02 Crew
    </Link>
    <Link to="/technology" className="[&.active]:font-bold">
      03 Technology
    </Link>
  </div>
</div>

//     </div>
  )
}