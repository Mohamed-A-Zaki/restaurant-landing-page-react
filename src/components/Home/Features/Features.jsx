import React from "react";
import "./Features.css";
import image from "../../../img/features.png";

const Features = () => {
  return (
    <div className="features">
      <div className="container">
        <div className="content wow animate__slideInLeft" data-wow-duration="1s">
          <h2>
            We make everything by hand with the best possible ingredients.
          </h2>
          <p className="lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
            purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat
            tellus.Far far away, behind the word mountains, far from the
            countries Vokalia and Consonantia, there live the blind texts.
          </p>
          <ul>
            <li>Etiam sed dolor ac diam volutpat.</li>
            <li>Erat volutpat aliquet imperdiet.</li>
            <li>purus a odio finibus bibendum.</li>
          </ul>
          <button className="btn">Learn More</button>
        </div>
        <div className="image wow animate__slideInRight" data-wow-duration="1s">
          <img src={image} className="img-responsive" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Features;
