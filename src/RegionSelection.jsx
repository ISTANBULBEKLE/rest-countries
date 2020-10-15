import React, {useState} from "react";

const  RegionSelection = ({countryList, handleRegionFilter}) => {

console.log(countryList);

const [inputRegionValue, setInputRegionValue] = useState("");

  function handleRegionSearch(e) {
    setInputRegionValue();
    handleRegionFilter(e.target.value.toLowerCase());
  }

  return (
     <div className='region-box'>
        <input
            size='45'
            className='input-element'
            value={inputRegionValue}
            onChange={handleRegionSearch}
            type="text"
            placeholder="SEARCH FOR REGIONS"
     />
    </div>
  );
};

export default  RegionSelection;