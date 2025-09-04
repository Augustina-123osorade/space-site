import { Link } from "@tanstack/react-router";
import { useState } from "react";
import closeIcon from "@/assets/shared/icon-close.svg";
import menuIcon from "@/assets/shared/icon-hamburger.svg";

import logo from "@/assets/shared/logo.svg";



export const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className="p-2 flex justify-between items-center m-10 text-white font-barlowCondensed ">
        
        <img src={logo} alt="Logo" />
        <div className="lg:flex-grow border-t border-white/25 "></div>

        
        <div className="hidden md:flex gap-6 border border-white/25 px-8 py-4 bg-white/5 backdrop-blur-lg">
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

        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          <img
            src={isOpen ? closeIcon : menuIcon}
            alt="menu toggle"
            
          />
        </button>
      </div>

      {isOpen && (
        <div className="fixed top-0 right-0 w-2/3 h-full bg-white/5 backdrop-blur-lg border-l border-white/25 flex flex-col gap-6 p-8 lg:hidden text-white font-barlowCondensed ">
            <button
            className="self-end p-2"
            onClick={() => setIsOpen(false)}
          >
            <img src={closeIcon} alt="close menu" />
          </button>
          <Link to="/" className="[&.active]:font-bold" onClick={() => setIsOpen(false)}>
            00 Home
          </Link>
          <Link to="/destination" className="[&.active]:font-bold" onClick={() => setIsOpen(false)}>
            01 Destination
          </Link>
          <Link to="/crew" className="[&.active]:font-bold" onClick={() => setIsOpen(false)}>
            02 Crew
          </Link>
          <Link to="/technology" className="[&.active]:font-bold" onClick={() => setIsOpen(false)}>
            03 Technology
          </Link>
        </div>
      )}
         
    </div>
  );
};
