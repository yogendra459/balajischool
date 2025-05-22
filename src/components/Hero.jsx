import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to Balaji School</h1>
        <p>Empowering students for a brighter future</p>
        <a href="/about" className="hero-button">Learn More</a>
      </div>
    </section>
  );
};

export default Hero;
