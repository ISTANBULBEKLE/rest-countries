import React from "react";
import List from "./List";

const Country = ({ c }) => {
  return (
    <div className="card mb-3  card-container">
      <div className="row no-gutters row-container">
        <div className="col-md-4">
          <img src={c.flag} className="card-img" alt="country-flag" />
        </div>
        <div className="col-md-2">
          <div className="card-body">
            <h2 className="card-title"> {c.name}</h2>
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
                <List item={c.currencies} title="Currencies:" />{" "}
              </small>
            </p>
            <p>
              <small className="text-muted">
                <List item={c.languages} title="Languages: " />
              </small>
            </p>
            <p>
              <small className="text-muted">
                <List item={c.borders} title="Border Countries:" />{" "}
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Country;
