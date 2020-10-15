import React from "react";

const BasicCountryInfo = ({c}) => {

  return (
    <div className='basic-country-info'>
        <h4 className='native-name' >Native name: </h4>
        <span>{c.nativeName}</span>
        <h4 className='population' >Population: </h4>
        <span>{c.population}</span>
        <h4 className='region'> Region: </h4>
        <span>{c.region}</span>
        <h4 className='capitol'>Capitol: </h4>
        <span>{c.capital}</span>
        <h4 className='top-level-domain'>Top Level Domain: </h4>
        <span>{c.topLevelDomain}</span>
    </div>

  );
};

export default BasicCountryInfo;