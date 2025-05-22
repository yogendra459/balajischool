import React from "react";
import "./Gallery.css";

const Gallery = () => {
  const images = [
    require("../assets/student1.jpg"),
    require("../assets/student2.jpg"),
    require("../assets/campus1.jpg"),
    require("../assets/campus2.jpg"),
    require("../assets/activity1.jpg"),
    require("../assets/activity2.jpg"),
    require("../assets/activity3.jpg"),
    require("../assets/activity4.jpg"),
  ];

  return (
    <section id="gallery" className="gallery">
      <h2>School Gallery</h2>
      <div className="gallery-grid">
        {images.map((img, index) => (
          <img key={index} src={img} alt={`Gallery ${index + 1}`} />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
