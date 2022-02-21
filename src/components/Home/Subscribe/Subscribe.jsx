import React from "react";
import "./Subscribe.css";

const Subscribe = () => {
  return (
    <div className="subscribe">
      <div className="container">
        <h2>
          Hurry up! Subscribe our newsletter <br /> and get 25% Off
        </h2>
        <p className="lead">Limited time offer for this month. No credit card required.</p>
        <form>
          <input type="email" placeholder="Email Address here" required />
          <input type="submit" className="btn" value="Subscribe" />
        </form>
      </div>
    </div>
  );
};

export default Subscribe;
