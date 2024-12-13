


import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { HiMenuAlt2 } from "react-icons/hi";
import { motion } from "framer-motion";
import clubLogo from '../Images/logo-chai.png'; 
import { navBarList } from "../constants/index";
import { Link } from "react-router-dom";

const Header = () => {
  const [showMenu, setShowMenu] = useState(true);
  const [sidenav, setSidenav] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const responsiveMenu = () => {
      setShowMenu(window.innerWidth >= 768); 
    };

    responsiveMenu();

    window.addEventListener("resize", responsiveMenu);

    return () => {
      window.removeEventListener("resize", responsiveMenu);
    };
  }, []);

  const activeLinkStyle = {
    color: "red", // Set your desired color here
  };

  return (
    <div className="w-full h-20 bg-[#000] sticky top-0 z-40 border-b-[1px] border-b-gray-200">
      <nav className="h-full px-4 py-2 max-w-7xl mx-auto relative">
        <div className="flex text-white items-center justify-between h-full">
          <HiMenuAlt2
            onClick={() => setSidenav(!sidenav)}
            className="inline-block md:hidden cursor-pointer w-8 h-6 absolute top-6 right-4"
          />

        
         <Link to="/">
         <img
            src={clubLogo}
            alt="Club Logo"
            className="w-32"
            
          />
         </Link>

          {showMenu && (
            <motion.ul
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="hidden md:flex items-center w-auto z-50 p-0"
            >
              {navBarList.map(({ _id, title, link }) => (
                <NavLink
                  key={_id}
                  className={`flex   font-normal hover:font-bold w-50 h-6 justify-center items-center px-12 text-lg text-white hover:underline underline-offset-[4px] decoration-[1px] hover:text-[#FFFF00] md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0 ${location.pathname === link ? 'text-yellow-300' : ''}`}
                  to={link}
                  state={{ data: location.pathname.split("/")[1] }}
                  activeStyle={activeLinkStyle} // Apply activeLinkStyle
                >
                  {title}
                </NavLink>
              ))}
            </motion.ul>
          )}

          <div className="hidden md:flex items-center">
           
          </div>

          {sidenav && (
            <div className="fixed top-0 left-0 w-full h-screen bg-black text-gray-200 bg-opacity-80 z-50">
              <motion.div
                initial={{ x: -300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="w-[80%] h-full relative"
              >
                <div className="w-full h-full bg-primeColor p-6">
                
                  <img
                    src={clubLogo}
                    alt="Club Logo"
                    className="w-28 mb-6"
                  />

                  <ul className="text-gray-200 flex flex-col">
                    {navBarList.map((item) => (
                      <li
                        className="text-sm font-normal hover:font-bold items-center text-lg text-gray-200 hover:underline underline-offset-[4px] decoration-[1px] hover:text-white md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0"
                        key={item._id}
                      >
                        <NavLink
                          to={item.link}
                          state={{ data: location.pathname.split("/")[1] }}
                          onClick={() => setSidenav(false)}
                          activeStyle={activeLinkStyle} // Apply activeLinkStyle
                        >
                          {item.title}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
                <span
                  onClick={() => setSidenav(false)}
                  className="w-8 h-8 border-[1px] border-gray-300 absolute top-2 -right-10 text-gray-300 text-2xl flex justify-center items-center cursor-pointer hover:border-red-500 hover:text-red-500 duration-300"
                >
                  <MdClose />
                </span>
              </motion.div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
