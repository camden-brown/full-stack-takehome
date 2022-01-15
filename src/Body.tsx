import React from "react";
import Table from "./Table";
import './Body.css'
const Body = ({ displayTableState }: { displayTableState: boolean }) => {
  return <div className="body" id="body">{displayTableState ? <Table /> : null}</div>;
};

export default Body;
