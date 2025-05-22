import React from "react";
import Hero from "./Hero";
import About from "./About";
import Facilities from "./Facilities";
import Gallery from "./Gallery";
import Admissions from "./Admissions";
import Contact from "./Contact";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Facilities />
      <Gallery />
      <Admissions />
      <Contact />
    </div>
  );
};

export default Home;
