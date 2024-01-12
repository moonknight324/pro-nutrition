import React, { useState } from 'react';

const Search = ({ onSearch }) => {
  const [search, setsearch] = useState('');

  const handleSearchBox = () => {
    onSearch(search);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setsearch(e.target.value)}
      />
      <button onClick={handleSearchBox}>Search</button>
    </div>
  );
};

export default Search;
