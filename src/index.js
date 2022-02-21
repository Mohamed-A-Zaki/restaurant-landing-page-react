import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// import fontawesome library
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
// import normalize.css
import "../node_modules/normalize.css/normalize.css";
// import animate.css
import "../node_modules/animate.css/animate.min.css";
// import wow.js library
import "../node_modules/wow.js/dist/wow.min";
// import jquery library
import "../node_modules/jquery.nicescroll/dist/jquery.nicescroll";
// import main.js file
import "../src/js/main";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
