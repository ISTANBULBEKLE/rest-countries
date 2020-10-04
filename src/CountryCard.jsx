import React from "react";
import CountryFlag from "./CountryFlag";
import CountryInfo from "./CountryInfo";

const CountryCard = () => {
  return (
    <div class="card mb-3">
      <div class="row no-gutters">
        <CountryFlag />
        <CountryInfo />
      </div>
    </div>
  );
};
export default CountryCard;
