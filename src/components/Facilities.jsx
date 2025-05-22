import React from "react";
import "./Facilities.css";

const Facilities = () => {
  return (
    <section id="facilities" className="facilities">
      <h2>Our Facilities</h2>
      <div className="facility-cards">
        <div className="facility-card">
          <img src={require("../assets/library.jpg")} alt="Library" />
          <h3>Library</h3>
          <p>Thousands of books to help students grow intellectually and creatively.</p>
        </div>
        <div className="facility-card">
          <img src={require("../assets/computer-lab.jpg")} alt="Computer Lab" />
          <h3>Computer Lab</h3>
          <p>Modern computer lab with high-speed internet and latest software.</p>
        </div>
        <div className="facility-card">
          <img src={require("../assets/sports.jpg")} alt="Sports Ground" />
          <h3>Sports Ground</h3>
          <p>Big playground for cricket, football, and other physical activities.</p>
        </div>
      </div>
    </section>
  );
};

export default Facilities;

