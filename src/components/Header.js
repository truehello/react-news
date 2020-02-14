import React, { useState } from "react";
import { format } from "date-fns";
import Sidebar from "./Sidebar";
import DarkModeToggle from "./DarkModeToggle";
import CountryPicker from "./CountryPicker";

const Header = ({ setCategory, setCountry, country }) => {
  const [isExpanded, toggleMenu] = useState(false);

  return (
    <nav className="nav lg:flex lg:flex-col lg:justify-center w-full lg:items-center justify-between p-4 lg:py-1 fixed w-full z-40 top-0">
      <div className="flex justify-between">
        <h1 className="logo__text font-semibold uppercase text-xl lg:text-4xl tracking-tight md:tracking-normal ">
          Extra Extra{" "}
          <span className="text-xs lg:text-lg">read all about it</span>
        </h1>

        <div className="block md:hidden">
          <button
            type="button"
            onClick={() => toggleMenu(!isExpanded)}
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
        className={`${
          isExpanded ? `menuOpen` : `menuClosed`
        } flex flex-col items-center lg:w-full`}
      >
        <Sidebar
          setCategory={setCategory}
          toggleMenu={toggleMenu}
          isExpanded={isExpanded}
        />

        <div className="masthead flex flex-row items-center justify-between w-full py-2">
          <p className="date italic tracking-tight">
            {format(new Date(), "dddd MMMM,DD YYYY.")}
          </p>

          <div className="flex flex-row">
            <CountryPicker
              country={country}
              setCountry={setCountry}
              toggleMenu={toggleMenu}
              isExpanded={isExpanded}
            />

            <DarkModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
