import React from "react";
import "./App.css";
import Countries from "./Countries";

function App() {
  console.log(Countries);
  return (
    <div className="App">
      <h1>Rest Countries</h1>
      {Countries.map((c) => (
        <div className="card-container">
          <div class="row no-gutters col-md-4">
            <img src={c.flag} className="card-img" alt="country-flag" />
          </div>
          <h2> {c.name}</h2>
          <div className="card-body info-container">
            <p class="card-text">
              <small className="text-muted">Native Name: {c.nativeName}</small>
            </p>
            <p>
              <small className="text-muted">Population: {c.population}</small>
            </p>
            <p>
              <small className="text-muted">Region: {c.region}</small>
            </p>
            <p>
              <small className="text-muted">Capitol: {c.capital}</small>
            </p>
            <p>
              <small className="text-muted">
                Top Level Domain: {c.topLevelDomain}
              </small>
            </p>
            <p>
              <small className="text-muted">
                Currencies: {c.currencies.name}
              </small>
            </p>
            <p>
              <small className="text-muted">Languages: </small>
            </p>
            <p>
              <small className="text-muted">Border Countries:</small>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
