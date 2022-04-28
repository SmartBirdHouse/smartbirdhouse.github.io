import React, { useState } from "react";
import EkaTab from "./Tabs/Sisalto/EkaTab";
import TokaTab from "./Tabs/Sisalto/TokaTab";
import KolmasTab from "./Tabs/Sisalto/KolmasTab";
import TabNavItem from "./Tabs/TabNavItem";
import TabContent from "./Tabs/TabContent";

//Komponentti luo välilehdet sekä liittää niihin toiminnallisuudet,
//sekä pitää kirjaa aktiivisesta välilehdestä.
const Tabs = () => {
    const [aktiivinenTab, aktivoiTab] = useState("tab1");

  return (
    <div className="Tabs">
        {/*Luodaan kaikki välilehdet ja lähetetään propseina kullekin oleelliset tiedot*/}
        <ul className="tabnav">
            <TabNavItem title="Linnunpönttö 1" id="tab1" aktiivinenTab={aktiivinenTab} aktivoiTab={aktivoiTab}/>
            <TabNavItem title="Linnunpönttö 2" id="tab2" aktiivinenTab={aktiivinenTab} aktivoiTab={aktivoiTab}/>
            <TabNavItem title="Linnunpönttö 3" id="tab3" aktiivinenTab={aktiivinenTab} aktivoiTab={aktivoiTab}/>
        </ul>

        {/*Jokaisen välilehden taakse tallennetaan sille kuuluva komponentti*/}
        <div className="outlet">
            <TabContent id="tab1" aktiivinenTab={aktiivinenTab}>
                <EkaTab/>
            </TabContent>
            <TabContent id="tab2" aktiivinenTab={aktiivinenTab}>
                <TokaTab/>
            </TabContent>
            <TabContent id="tab3" aktiivinenTab={aktiivinenTab}>
                <KolmasTab />
            </TabContent>
      </div>
    </div>
  );
};
export default Tabs;