import React, { useState } from 'react';
import { FaSearch, FaSort } from 'react-icons/fa';

const Searchbar = ({onSort}) => {
  const [searchText, setSearchText] = useState('');

  // Capture search input
  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSearchSubmit = () => {
    // Perform search handling here
    console.log('Searching for:', searchText);
  };

  return (
    <div className="fixed top-0 left-0 right-0 flex justify-center py-2 px-4">
      <div className="relative flex items-center rounded-full font-sans text-black shadow-md">
        <button
          className="absolute left-1 bg-white text-gray-600 rounded-full p-2"
          onClick={onSort}
        >
          <FaSort />
        </button>
        <input
          type="text"
          placeholder="Search..."
          value={searchText}
          onChange={handleSearchChange}
          className="py-2 pl-10 pr-4 border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-green-500"
        />
        <button
          className="absolute right-1 bg-white text-gray-600 rounded-full p-2"
          onClick={handleSearchSubmit}
        >
          <FaSearch />
        </button>
      </div>
    </div>
  );
};

export default Searchbar;
