import React from "react";

//Komponentti näyttää kunkin välilehden sisällön,
//riippuen siitä, onko kyseinen välilehti valittuna. 
 
const TabContent = ({id, aktiivinenTab, children}) => {
 return (
   aktiivinenTab === id ? <div className="TabContent">
     { children }
   </div>
   : null
 );
};
 
export default TabContent;