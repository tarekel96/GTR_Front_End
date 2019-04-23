import React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

const PaginCom = () => {
  return (
    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
      <Tab eventKey="Featured Articles" title="Featured Articles" />
      <Tab className="align-self-right" eventKey="Extras" title="Extras" />
    </Tabs>
  );
};

export default PaginCom;
