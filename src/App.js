import React from "react";
import "./App.css";
import Countries from "./Countries";
import Country from "./Country";

function App() {
  return (
    <div className="App">
      <h1>Rest Countries</h1>
      <hr></hr>
      {Countries.map((c) => (
        <Country c={c} />
      ))}
    </div>
  );
}

export default App;
