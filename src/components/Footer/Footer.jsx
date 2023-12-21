import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">Your Logo</div>
        <div className="footer-links">
          <Link to="/home">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div className="footer-social">
        <Link to="#"><i className="fab fa-facebook"></i></Link>
        <Link to="#"><i className="fab fa-twitter"></i></Link>
        <Link to="#"><i className="fab fa-instagram"></i></Link>
      </div>
      <div className="footer-text">
        <p>&copy; 2023 Your Company Name</p>
      </div>
    </footer>
  );
};

export default Footer;
