import React, {useState} from "react";
import "./App.css";
import Countries from "./Countries";
import Country from "./Country";
import SearchBox from './SearchBox';
import RegionSelection from './RegionSelection'

function App() {

const[countryList, setCountryList]= useState(Countries);
const[addInfo, setAddInfo]= useState(false);
const [reg, setReg] = useState("");
const[searchItem, setSearchItem]= useState('');

  function handleFilter(input){
    setCountryList(
      Countries.filter((c) =>
        c.name.toLowerCase().includes(input) || c.capital.toLowerCase().includes(input)
      ).filter(c =>(c.region.toLowerCase().includes(reg)))
    );
    setSearchItem(input);
  }

  function handleRegionFilter(input){
    setCountryList(Countries.filter( r =>r.region.toLowerCase().includes(input)).filter((c) =>
        c.name.toLowerCase().includes(searchItem) || c.capital.toLowerCase().includes(searchItem)
      ));
    setReg(input);
  }

  function countryDetails(c){
    setCountryList([c]);
    setAddInfo(true);
  }

  function handleGoBack(e){
    setAddInfo(false);
    setCountryList(Countries.filter( r =>r.region.toLowerCase().includes(reg)).filter((c) =>
        c.name.toLowerCase().includes(searchItem) || c.capital.toLowerCase().includes(searchItem)
      ));

  }

  return (
    <div className="App">
      <h1 className='topic'>Rest Countries</h1>
      <hr></hr>
      <SearchBox handleFilter={handleFilter}/>
      <hr></hr>
      <RegionSelection countryList ={countryList} handleRegionFilter={handleRegionFilter}/>
      <hr></hr>
      <button className='main-button' onClick={handleGoBack}>Back to Main List</button>
      <hr></hr>
      <div className='card-roper'>
        {countryList.map((c) => (
          <Country c={c} key={c.alpha2Code} countryDetails={countryDetails} addInfo={addInfo} />
      ))}
      </div>
      <hr></hr>
    </div>
  );
}

export default App;
