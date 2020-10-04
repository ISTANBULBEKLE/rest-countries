import React from "react";
import "./App.css";
import Countries from "./Countries";
import CountryCard from "./CountryCard";

function App() {
  
  console.log(Countries);
  return (
    <div className="App">
      <h1>Rest Countries</h1>
      {Countries.map((country) => (
        <h2>{country.name}</h2>
      ))}
      <CountryCard />
    </div>
  );
}

export default App;
