import React from "react";
import "./Admissions.css";

const Admissions = () => {
  return (
    <section id="admissions" className="admissions">
      <h2>Admissions</h2>
      <div className="admissions-content">
        <h3>Admission Process</h3>
        <ul>
          <li>1. Fill out the admission form online or from the school office.</li>
          <li>2. Submit necessary documents.</li>
          <li>3. Attend interaction/interview session (if required).</li>
          <li>4. Admission confirmation and fee payment.</li>
        </ul>

        <h3>Age Criteria</h3>
        <p>Nursery: 3+ years as on 31st March of the academic year.</p>
        <p>Kindergarten: 4+ years</p>
        <p>Class 1: 5+ years</p>

        <h3>Documents Required</h3>
        <ul>
          <li>Birth Certificate (original + copy)</li>
          <li>Passport size photographs (4)</li>
          <li>Aadhar Card copy</li>
          <li>Previous school’s Transfer Certificate (if applicable)</li>
        </ul>
      </div>
    </section>
  );
};

export default Admissions;
