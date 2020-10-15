import React, {useState} from "react";
import "./App.css";
import Countries from "./Countries";
import Country from "./Country";
import SearchBox from './SearchBox';

function App() {
const[countryList, setCountryList]= useState(Countries);

  function handleFilter(input) {
    setCountryList(
      Countries.filter((c) =>
        c.name.toLowerCase().includes(input) || c.capital.toLowerCase().includes(input)
      )
    );
  }
  return (
    <div className="App">
      <h1 className='topic'>Rest Countries</h1>
      <hr></hr>
      <SearchBox handleFilter={handleFilter}/>
      <hr></hr>
      {countryList.map((c) => (
        <Country c={c} />
      ))}
      <hr></hr>
    </div>
  );
}

export default App;
