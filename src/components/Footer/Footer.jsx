import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="links">
          <a href="#">Register</a>
          <a href="#">Forum</a>
          <a href="#">Affiliate</a>
          <a href="#">FAQ</a>
        </div>
        <div className="social">
          <i className="fa-brands fa-facebook-f"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-youtube"></i>
          <i className="fa-solid fa-basketball"></i>
          <i className="fa-brands fa-linkedin"></i>
          <i className="fa-brands fa-instagram-square"></i>
        </div>
        <div className="copy-right">
          &copy; 2021. Foodera. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
