import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../Images/Logo.jpg";

import "./Navbar.css";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav className="bg-white fixed w-full z-20 top-0 left-0 overflow-hidden border-b border-gray-200 dark:border-gray-600">
        <ul className="navigation max-w-[90vw] flex flex-wrap justify-between items-center relative mx-auto py-8">
          <a href="/"  className="logo">
          <img src={Logo} alt="" className="lg:pl-16" />
          </a>

          <input type="checkbox" id="check" />

          <div className="menu flex [&>li]:pl-8 [&>li>a]:text-center [&>li>a]:relative [&>li>a]:transition [&>li>a]:duration-200 [&>li>a]:ease-in-out [&>li>a]:font-medium [&>li>a]:text-lg">
            <a
              href="/"
              className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-[#c59058]  text-lg font-medium m-2 mr-4"
            >
              Home
            </a>
        
              <a
                href="/about"
                className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-[#c59058]  text-lg font-medium m-2 mr-4"
              >
                About
                </a>
       
              <a
                href="/service"
                className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-[#c59058]  text-lg font-medium m-2 mr-4"
              >
                Service
              </a>
    

              <a
                href="/contact"
                className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-[#c59058]  text-lg font-medium m-2"
              >
                Contact
              </a>
            

            <label htmlFor="check" className="close-menu">
              X
            </label>
          </div>

          <label htmlFor="check" className="open-menu" onClick={toggleNavbar}>
            <FontAwesomeIcon icon={faBars} className="icons" />
          </label>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
