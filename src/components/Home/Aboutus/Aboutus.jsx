import React from "react";
import "./Aboutus.css";
import image from "../../../img/about_us.png";

const Aboutus = () => {
  return (
    <div className="about" id="about">
      <div className="container">
        <div className="image wow animate__slideInLeft" data-wow-duration="1s">
          <img src={image} className="img-responsive" alt="" />
        </div>
        <div
          className="content wow animate__slideInRight"
          data-wow-duration="1s"
        >
          <h2>
            We pride ourselves on making real food from the best ingredients.
          </h2>
          <p className="lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
            purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat
            tellus.
          </p>
          <button className="btn">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
