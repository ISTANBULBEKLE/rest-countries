import React, {useState} from "react";

const SearchBox = ({ handleFilter }) => {

const [inputValue, setInputValue] = useState("");

  function handleSearch(e) {
    setInputValue();
    handleFilter(e.target.value.toLowerCase());
  }
  return (
    <div className='search-box'>
        <input
            
            value={inputValue}
            onChange={handleSearch}
            type="text"
            placeholder="search for country name and capitol"
      />
    </div>
  );
};

export default SearchBox;