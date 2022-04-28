import React from "react";
import { useState, useEffect } from 'react'
import axios from 'axios'
import Video from "../../Video";
import EkaData from "./EkaData";
import ruuviTagData from "../../../Services/ruuviTagData";

//Komponentti vastaa ensimmäisen välilehden sisällöstä. 

const EkaTab = () => {
  const [ruuvidata, uusiRuuvidata] = useState([])

  //Tapahtumankäsittelijäfunktio kutsuu importatun muuttujan ruuviTagData haeData-funktiota sekunnin välein,
  //ja saa olion, joka sisältää koko HTTP-pyynnön vastauksen. Vastauksen data 
  //tallennetaan komponentin uudeksi tilaksi.
  useEffect(() => {
    const interval = setInterval(() => {
    ruuviTagData
    .haeData()
    .then(response => {
      uusiRuuvidata(response.data)
    })
  },1000)
  }, [])

  return (
    <div className="ekaTab">

      {/* Lähetetään palvelimelta saatu data propsina komponentille, joka hoitaa datan esittämisen*/}
      <ul className="ponttodata">
        {ruuvidata.map(ruuvidata => 
          <EkaData key={ruuvidata.id} ruuvidata={ruuvidata} />
        )}
      </ul>

      {/*Lähetetään halutun videon id propsina videon näyttävälle komponentille */}
      <div>
        <Video videoId="E7wJTI-1dvQ" />
     </div>
    </div>
  );
};
export default EkaTab;