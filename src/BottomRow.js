import React, {useState} from "react";
import "./App.css";
import App from "./App";

const BottomRow = () => {
  const [down,setDown] = useState(1);
  const [yards,setYards] = useState(10);
  const [location, setLocation] = useState(50);
  const [quarter, setQuarter] = useState(1);
  return (
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Down</h3>
        <div className="down__value">{down}</div>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        <div className="toGo__value">{yards}</div>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
        <div className="ballOn__value">{location}</div>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
        <div className="quarter__value">{quarter}</div>
      </div>
    </div>
  );
};

export default BottomRow;
export function setDown(){};
