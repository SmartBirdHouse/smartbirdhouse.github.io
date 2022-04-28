import React from "react";

//Komponentti hoitaa välilehtien näyttämisen käyttöliittymässä.
//Komponentti saa propsit Tabs.js -tiedostolta.

const TabNavItem = ({ id, title, aktiivinenTab, aktivoiTab }) => {
 
 const handleClick = () => {
   aktivoiTab(id);
 };
 
return (
  //Kun valitaan välilehti, kutsutaan tapahtumankäsittelijää,
  //joka tallentaan kyseisen välilehden id:n aktiiviseksi. 
   <li onClick={handleClick} className={aktiivinenTab === id ? "active" : ""}>
     { title }
   </li>
 );
};

export default TabNavItem;