import React from 'react';

const CountryFlag =({c})=>{
    return (
        <div>
            <img src={c.flag} className="card-img" alt="country-flag" ></img>
        </div>
    );

}
export default CountryFlag