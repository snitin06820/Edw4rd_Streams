import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
import SearchBar from "./SearchBar";

const Navbar = ({ handleSearch }) => { // Accept handleSearch as prop
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="mx-auto flex justify-between items-center">
        <Link to="/movies">
          <h1 className="text-2xl font-bold text-white cursor-pointer">
            Edw4rd_Streams
          </h1>
        </Link>
        <div className="hidden md:flex space-x-4">
          <SearchBar handleSearch={handleSearch} /> {/* Pass handleSearch to SearchBar */}
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none text-xl pt-1"
          >
            <HiMenuAlt3 />
          </button>
        </div>
      </div>
      <div
        className={`transition-all duration-300 ease-in-out transform ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden md:hidden pt-1`}
      >
        <SearchBar handleSearch={handleSearch} /> {/* Pass handleSearch to SearchBar */}
      </div>
    </nav>
  );
};

export default Navbar;
