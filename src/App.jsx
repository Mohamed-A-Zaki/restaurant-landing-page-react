import React from "react";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import ScrollTop from "./components/ScrollTop/ScrollTop";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Footer />
      <ScrollTop />
    </div>
  );
}

export default App;
