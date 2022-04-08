import React, { useState } from "react";
import EkaTab from "./Tabs/Sisalto/EkaTab";
import TokaTab from "./Tabs/Sisalto/TokaTab";
import KolmasTab from "./Tabs/Sisalto/KolmasTab";
import TabNavItem from "./Tabs/TabNavItem";
import TabContent from "./Tabs/TabContent";

const Tabs = () => {
    const [aktiivinenTab, aktivoiTab] = useState("tab1");

    {/*const avaaTab1 = () => {
        aktivoiTab("tab1");
    }

    const avaaTab2 = () => {
        aktivoiTab("tab2");
    }*/}

  return (
    <div className="Tabs">
        <ul className="tabnav">
            <TabNavItem title="Linnunpönttö 1" id="tab1" activeTab={aktiivinenTab} setActiveTab={aktivoiTab}/>
            <TabNavItem title="Linnunpönttö 2" id="tab2" activeTab={aktiivinenTab} setActiveTab={aktivoiTab}/>
            <TabNavItem title="Linnunpönttö 3" id="tab3" activeTab={aktiivinenTab} setActiveTab={aktivoiTab}/>
        </ul>

        <div className="outlet">
            <TabContent id="tab1" activeTab={aktiivinenTab}>
                <EkaTab/>
            </TabContent>
            <TabContent id="tab2" activeTab={aktiivinenTab}>
                <TokaTab/>
            </TabContent>
            <TabContent id="tab3" activeTab={aktiivinenTab}>
                <KolmasTab />
            </TabContent>
      </div>
    </div>
  );
};
export default Tabs;