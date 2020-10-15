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
            size='45'
            className='input-element'
            value={inputValue}
            onChange={handleSearch}
            type="text"
            placeholder="SEARCH FOR COUNTRY NAME AND CAPITOL"
     />
    </div>
  );
};

export default SearchBox;