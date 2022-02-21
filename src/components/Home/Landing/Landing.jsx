import React from "react";
import "./Landing.css";

const Landing = () => {
  return (
    <div className="landing">
      <div className="container">
        <div
          className="content wow animate__slideInLeft"
          data-wow-duration="1s"
        >
          <h1>Good food choices are good investments.</h1>
          <p className="lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
            purus a odio finibus bibendum amet leo.
          </p>
          <button className="btn">
            Order Now <i className="fa-solid fa-basket-shopping"></i>{" "}
          </button>
          <button className="btn">
            Learn More
            <i className="fa-solid fa-angle-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
