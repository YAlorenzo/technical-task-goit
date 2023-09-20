import { NavLink } from "react-router-dom";
import { navLinks } from "../constants";
import PropTypes from 'prop-types';


function MobileMenu({ active }) {
  return (
     <div className={`${active ? 'menuOpen' : 'menuClose'} w-full h-full bg-blue z-10 fix-container sm:hidden`} >
         <ul className="mt-5">
            {navLinks.map((link) => (
              <li key={link.name}>
               <NavLink to={link.path} className="text-white leading-normal text-2xl cursor-pointer mt-6 
              sm:mt-7 sm:text-4xl uppercase opacity-80 hover:opacity-100 transition-opacity">
                    {link.name}
              </NavLink>
            </li>
            ))}
          </ul>
     </div>
  )
}
MobileMenu.propTypes = {
  active: PropTypes.bool
};
export default MobileMenu