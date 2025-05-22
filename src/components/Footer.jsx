import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-column">
          <h3>🏫 Balaji public sr. sec. School</h3>
          <p>Empowering students with knowledge and values for a better future.</p>
        </div>

        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#facilities">Facilities</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#admissions">Admissions</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Contact Info</h4>
          <p>55,Goverdhan Nagar, Jaipur, Rajasthan</p>
          <p>Phone: +91 9929858545</p>
          <p>Email: info@balajischool.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Balaji School. All rights reserved.</p>
          <div className="social-icons">
    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
  </div>
      </div>
    </footer>
  );
};

export default Footer;
