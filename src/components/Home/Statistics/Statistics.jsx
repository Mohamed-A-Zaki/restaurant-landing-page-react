import React from "react";
import "./Statistics.css";
import data from "../../../json/Api.json";

const Statistics = () => {
  return (
    <div className="Statistics">
      <div className="container">
        {/* Start mapping items */}
        {data.statistics.map(({ id, number, text }) => {
          return (
            <div className="item" key={id}>
              {/* render number */}
              <div className="number">{number}+</div>
              {/* render text */}
              <span>{text}</span>
            </div>
          );
        })}
        {/* End mapping items */}
      </div>
    </div>
  );
};

export default Statistics;
