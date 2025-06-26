import React from 'react';

const SearchBar = ({ value, onChange }) => {
  return (
    <input
      type="text"
      placeholder="🔍 Search blogs..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full md:w-80 px-4 py-2 border rounded-xl dark:bg-gray-800 dark:border-gray-600 dark:text-white"
    />
  );
};

export default SearchBar;
