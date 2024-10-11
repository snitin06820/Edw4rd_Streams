import React, { useState } from "react";

const SearchBar = ({ handleSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const onSearch = () => {
    handleSearch(query); // Call handleSearch passed from Home
  };

  return (
    <div className="flex items-center">
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleInputChange}
        className="p-2 rounded-md bg-gray-700 text-white mr-4"
      />
      <button
        className="p-3 bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md"
        onClick={onSearch}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
