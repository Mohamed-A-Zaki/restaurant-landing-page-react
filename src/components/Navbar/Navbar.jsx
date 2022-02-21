import React, { createRef } from "react";
import "./Navbar.css";
import logo from "../../img/logo.png";

const Navbar = () => {
  const links_ref = createRef();

  return (
    <nav>
      <div className="container">
        <div className="logo">
          <img src={logo} className="img-responsive" alt="logo" />
        </div>
        <div
          className="content"
          onClick={() => links_ref.current.classList.toggle("show")}
        >
          <div className="links" ref={links_ref}>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="#about">About us</a>
              </li>
              <li>
                <a href="#explore">Explor Foods</a>
              </li>
              <li>
                <a href="#reviews">Reviews</a>
              </li>
              <li>
                <a href="#faq">FAQ</a>
              </li>
            </ul>
            <button className="btn">1800 789 123</button>
          </div>
          <div className="icon">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
