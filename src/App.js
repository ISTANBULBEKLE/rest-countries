import React, {useState} from "react";
import "./App.css";
import Countries from "./Countries";
import Country from "./Country";
import SearchBox from './SearchBox';
import RegionSelection from './RegionSelection'

function App() {

const[countryList, setCountryList]= useState(Countries);

  function handleFilter(input) {
    setCountryList(
      Countries.filter((c) =>
        c.name.toLowerCase().includes(input) || c.capital.toLowerCase().includes(input)
      )
    );
  }

  function handleRegionFilter (input){
    setCountryList(Countries.filter( r =>r.region.toLowerCase().includes(input)));
  }

  return (
    <div className="App">
      <h1 className='topic'>Rest Countries</h1>
      <hr></hr>
      <SearchBox handleFilter={handleFilter}/>
      <hr></hr>
      <RegionSelection countryList ={countryList} handleRegionFilter={handleRegionFilter}/>
       <hr></hr>
      <div className='card-roper'>
        {countryList.map((c) => (
          <Country c={c} />
      ))}
      </div>
      <hr></hr>
    </div>
  );
}

export default App;
