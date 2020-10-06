import React from "react";
import "./App.css";
import Countries from "./Countries";

function App() {
  console.log(Countries);
  return (
    <div className="App">
      <h1>Rest Countries</h1>
      {Countries.map((c) => (
        <div className="card mb-3 ">
          <div className="row no-gutters container">
            <div className="col-md-4">
              <img src={c.flag} className="card-img" alt="country-flag" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h2 className="card-title"> {c.name}</h2>
                <p class="card-text">
                  <small className="text-muted">
                    Native Name: {c.nativeName}
                  </small>
                </p>
                <p>
                  <small className="text-muted">
                    Population: {c.population}
                  </small>
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
                    Currencies: {c.currencies.map((i) => i.name)}
                  </small>
                </p>
                <p>
                  <small className="text-muted">Languages:{c.languages.map((a) => (a.name))} </small>
                </p>
                <p>
                  <small className="text-muted">Border Countries:</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
