import React from "react";
import Sidebar from "../Sidebar/index.js";
import List from "../List/index.js";

const SideArticles = props => {
  return (
    <Sidebar className="w-75 d-flex mx-auto mb-5">
      <List list={props.list} />
    </Sidebar>
  );
};

export default SideArticles;
