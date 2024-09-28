import React from "react";

const SearchBar = () => {
  return (
    <div className="flex items-center">
      <input
        type="text"
        placeholder="Search..."
        className="p-2 rounded-md bg-gray-700 text-white"
      />
      <button className="p-2 rounded-md">Search</button>
    </div>
  );
};

export default SearchBar;
