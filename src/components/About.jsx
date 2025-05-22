import React from "react";
import "./About.css";
// import schoolPhoto from "../assets/school-building.jpg"; 
import principalPhoto from "../assets/principal.jpeg"; 
import directorPhoto from "../assets/director.jpeg"; 

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <h2>Shree Balaji Public Sr Sec School</h2>

        {/* School Building Image */}
        <div className="school-image">
          {/* <img src={schoolPhoto} alt="Balaji School Campus" /> */}
        </div>

        <p>
          <strong>Balaji public sr. sec. School</strong> is a leading educational institution committed to nurturing excellence, discipline, and values among its students. Established with a vision to provide world-class education in a caring and inclusive environment, the school has been shaping young minds for a brighter future.
        </p>

        <h3>Our Vision</h3>
        <p>To develop confident, responsible, and well-rounded individuals through a balanced academic and co-curricular environment.</p>

        <h3>Our Mission</h3>
        <ul>
          <li>Deliver a quality education that meets global standards.</li>
          <li>Promote innovation, creativity, and character development.</li>
          <li>Create an inclusive, safe, and inspiring learning atmosphere.</li>
        </ul>

        <h3>Courses Offered</h3>
        <ul>
          <li>Pre-Primary (Nursery, LKG, UKG)</li>
          <li>Primary School (Class 1–5)</li>
          <li>Middle School (Class 6–8)</li>
          <li>High School (Class 9–10)</li>
          <li>Senior Secondary (Class 11–12):</li>
          <ul style={{ paddingLeft: "20px" }}>
            <li>Science Stream (Physics, Chemistry, Maths, Biology, Computer Science)</li>
            <li>Commerce Stream (Accountancy, Economics, Business Studies, Maths)</li>
            <li>Arts/Humanities Stream (History, Geography, Political Science, Sociology)</li>
          </ul>
        </ul>

        <h3>Facilities</h3>
        <ul>
          <li>Smart Classrooms</li>
          <li>Science & Computer Labs</li>
          <li>Library & Digital Resources</li>
          <li>Indoor/Outdoor Sports</li>
          <li>Art & Music Room</li>
          <li>Transportation Facility</li>
        </ul>

        <h3>Message from the Principal</h3>
        <p>
          "At Balaji School, we believe that education is not just about academics—it's about preparing students for life. We focus on academic excellence, moral integrity, and social responsibility to help students become valuable members of society."
        </p>

        {/* Principal Image and Name */}
        <div className="staff-profile">
          <img src={principalPhoto} alt="Principal" className="principalPhoto" />
          <p><strong>Mrs. Archana pal</strong><br />Principal, Balaji School</p>
        </div>

        <h3>Message from the Director</h3>
        <p>
          "Our goal is to provide a well-rounded education, fostering creativity, leadership, and character in every student. We aim to inspire a passion for lifelong learning."
        </p>

        {/* Director Image and Name */}
        <div className="staff-profile">
          <img src={directorPhoto} alt="Director"className="directorPhoto" />
          <p><strong>Dr. Rakesh kumar meena</strong><br />Director, Balaji School</p>
        </div>
      </div>
    </section>
  );
};

export default About;
