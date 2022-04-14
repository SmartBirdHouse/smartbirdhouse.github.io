import React from "react";
 
const TabContent = ({id, aktiivinenTab, children}) => {
 return (
   aktiivinenTab === id ? <div className="TabContent">
     { children }
   </div>
   : null
 );
};
 
export default TabContent;