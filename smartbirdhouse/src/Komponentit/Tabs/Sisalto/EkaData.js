import React from "react";

const EkaData = ({ ruuvidata }) => {
    return (
      <li>lämpötila: {ruuvidata.temperature} C <br/>
      ilmankosteus: {ruuvidata.humidity} % <br/>
      ilmanpaine: {ruuvidata.pressure} hPa</li>
    )
  }
  
  export default EkaData