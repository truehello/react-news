import React, { useState, useEffect } from "react";

import Sidebar from "./Sidebar";
import DarkModeToggle from "./DarkModeToggle";

const Header = ({ setCategory }) => {
  const [menuIsOpen, setMenuOpen] = useState(true);

  function toggleMenu() {
    menuIsOpen ? setMenuOpen(false) : setMenuOpen(true);
  }

  // Fire off effect that opens/closes the mobile menu
  useEffect(
    () => {
      const element = window.document.getElementById("nav__links");

      if (menuIsOpen) {
        //console.log("menu buttton OPEN. add close attribute" );
        //element.setAttribute('menu-theme', 'menu-closed');
        element.style.height = 0;
        element.style.top = `-25rem`;
      } else {
        // console.log("menu is CLOSED. remove close attribute to open menu" );
        //element.removeAttribute('menu-theme');
        element.style.height = `20.5rem`;
        element.style.top = 0;
      }
      //console.log(element);
    },
    [menuIsOpen] // Only re-call effect when value changes
  );

  return (
    <nav className="nav lg:flex lg:items-stretch w-full lg:items-center justify-between p-4 fixed w-full z-40 shadow top-0">
      <div className="flex justify-between">
        <h1 className="logo__text font-semibold text-2xl md:text-4xl tracking-tight md:tracking-normal italic">
          Extra Extra <span className="text-lg">read all about it</span>
        </h1>

        <div className="block lg:hidden">
          <button
            type="button"
            onClick={toggleMenu}
            className="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-200 hover:text-gray-600 hover:border-gray-600"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
      </div>

      <div
        id="nav__links"
        className="flex flex-col lg:flex-row items-center lg:w-auto lg:flex lg:mt-6"
      >
        <Sidebar setCategory={setCategory} />

        <DarkModeToggle />
      </div>
    </nav>
  );
};

export default Header;
