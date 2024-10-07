import React from "react";
import { Link } from "react-router-dom";
import { useAdmin } from "../context/AdminContext";
import SearchBar from "./SearchBar";

const Navbar = () => {
  const { isAdmin } = useAdmin();

  return (
    <nav className="flex justify-between items-center bg-gray-800 p-4 text-white">
      <Link to="/movies">
        <h1 className="text-2xl font-bold cursor-pointer">Edw4rd_Streams</h1>
      </Link>
      <div className="flex space-x-4">
        {isAdmin ? (
          <Link to="/admin-panel">
            <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md">
              Add Movie
            </button>
          </Link>
        ) : (
          <Link to="/admin-login">
            <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md">
              Admin Login
            </button>
          </Link>
        )}
        <SearchBar />
      </div>
    </nav>
  );
};

export default Navbar;
