import React from "react";

const TabNavItem = ({ id, title, aktiivinenTab, aktivoiTab }) => {
 
 const handleClick = () => {
   aktivoiTab(id);
 };
 
return (
   <li onClick={handleClick} className={aktiivinenTab === id ? "active" : ""}>
     { title }
   </li>
 );
};

export default TabNavItem;