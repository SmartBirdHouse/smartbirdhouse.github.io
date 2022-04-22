import React from "react";
import { useState, useEffect } from 'react'
import axios from 'axios'
import Video from "../../Video";
import EkaData from "./EkaData";
import ruuviTagData from "../../../Services/ruuviTagData";

const EkaTab = () => {
  const [ruuvidata, uusiRuuvidata] = useState([])

  useEffect(() => {
    ruuviTagData
    .haeData()
    .then(response => {
      uusiRuuvidata(response.data)
    })
  }, [])

  return (
    <div className="ekaTab">
      <ul className="ponttodata">
        {ruuvidata.map(ruuvidata => 
          <EkaData key={ruuvidata.id} ruuvidata={ruuvidata} />
        )}
      </ul>
      <div>
        <Video videoId="E7wJTI-1dvQ" />
     </div>
    </div>
  );
};
export default EkaTab;