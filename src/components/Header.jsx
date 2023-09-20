import { NavLink } from "react-router-dom";
import { logo } from "../assets";
import { navLinks } from "../constants";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";
import MobileMenu from "./MobileMenu";



function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <>
    <header>
      <div className="fix-container bg-blue md:rounded-3xl  md:mt-5 p-5 md:p-8 flex justify-between items-center">
              <img src={logo} alt="logo" className="w-36 md:w-[200px]" />
              <nav className="hidden sm:block">
              {navLinks.map((link) => (
                <NavLink key={link.name} to={link.path} className="uppercase text-white 
                   opacity-80 hover:opacity-100 transition-opacity sm:text-sm md:text-base lg:text-xl font-bold mr-7 last:mr-0">
                        {link.name}
                   </NavLink>
              ))}
              </nav>
              <div className="block sm:hidden" onClick={() => setMobileMenu((prev) => !prev)}> 
            {mobileMenu ? (<CloseIcon sx={{ color: "white", width: "50px", height: "50px" }} />)
              : ( <MenuIcon sx={{ color: "white", width: "50px", height: "50px" }} /> )}
              </div>     
          </div>
    </header>
      <MobileMenu active={mobileMenu} />
    </>
    
  )
}

export default Header