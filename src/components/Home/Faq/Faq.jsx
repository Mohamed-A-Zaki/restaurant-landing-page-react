import React from "react";
import "./Faq.css";
import data from "../../../json/Api.json";

const Faq = () => {
  return (
    <div className="faq" id="faq">
      <div className="container">
        <div className="heading">
          <h2>Frequently Asked Questions</h2>
        </div>
        <div className="content wow animate__zoomIn" data-wow-duration="1s">
          {data.faq.map(({ id, title, text }) => {
            return (
              <div className="item" key={id}>
                <h3>{title}</h3>
                <p className="lead">{text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Faq;
