import React from "react";
import Aboutus from "./Aboutus/Aboutus";
import Explore from "./Explore/Explore";
import Faq from "./Faq/Faq";
import Features from "./Features/Features";
import Landing from "./Landing/Landing";
import OurStory from "./OurStory/OurStory";
import Passion from "./Passion/Passion";
import Statistics from "./Statistics/Statistics";
import Subscribe from "./Subscribe/Subscribe";

const Home = () => {
  return (
    <div>
      <Landing />
      <Statistics />
      <Aboutus />
      <Features />
      <OurStory />
      <Explore />
      <Passion />
      <Faq />
      <Subscribe />
    </div>
  );
};

export default Home;
