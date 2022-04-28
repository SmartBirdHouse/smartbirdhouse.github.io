import React from "react";

//Komponentti ottaa props:eina koko ruuvidatan ja tulostaa vain kolme haluttua mittaustulosta.

const EkaData = ({ ruuvidata }) => {
  const temperature = ruuvidata.temperature
  const humidity = ruuvidata.humidity
    return (
      <li className="ruuvidata">
        <div className="dataNimi">lämpötila:</div><div className="data">{temperature.toFixed(1)} &deg;C</div>
        <div className="dataNimi">ilmankosteus:</div><div className="data">{humidity.toFixed(2)} % </div>
        <div className="dataNimi">ilmanpaine:</div><div className="data">{ruuvidata.pressure} hPa </div>
      </li>
    )
  }
  
  export default EkaData