import React from "react";

const SearchForm = ({ handleGetRequest }) => {
  return (
    <form onSubmit={handleGetRequest}>
      <input
        type="text"
        autoComplete="false"
        name="searchQuery"
        placeholder="Search Here"
      />
      <button>Search</button>
    </form>
  );
};
export default SearchForm;
