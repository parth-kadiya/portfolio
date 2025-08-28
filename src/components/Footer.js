import React from 'react';
import './Footer.css';
import './Footer_m.css';

import '../styles/ScrollAnimation.css'; // Scroll animation CSS
import useScrollAnimation from '../hooks/useScrollAnimation'; // Custom hook

export default function Footer() {
  const [footerRef, isVisible] = useScrollAnimation();

  return (
    <footer
      className={`footer-section scroll-animate ${isVisible ? 'visible' : ''}`}
      id="footer-section"
      ref={footerRef}
    >
      <div className="footer-container">

        {/* Left: Contact Information */}
        <div className="footer-column">
          <h3>Contact Information</h3>
          <p>
            <a href="tel:+919081818478" className="footer-link">
              <i className="fas fa-phone"></i> +91 90818 18478
            </a>
          </p>
          <p>
            <a href="mailto:kadiyaparth612@gmail.com" className="footer-link">
              <i className="fas fa-envelope"></i> kadiyaparth612@gmail.com
            </a>
          </p>
        </div>

        {/* Center: Follow Me */}
        <div className="footer-column">
          <h3>Follow Me</h3>
          <p>
            <a href="https://www.linkedin.com/in/parth-kadiya" className="footer-link" target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin-in"></i> parth-kadiya
            </a>
          </p>
          <p>
            <a href="https://github.com/parth-kadiya" className="footer-link" target="_blank" rel="noreferrer">
              <i className="fab fa-github"></i> parth-kadiya
            </a>
          </p>
          <p>
            <a href="https://www.instagram.com/parth_kadiya_612" className="footer-link" target="_blank" rel="noreferrer">
              <i className="fab fa-instagram"></i> parth_kadiya_612
            </a>
          </p>
          <p>
            <a href="https://www.facebook.com/parth.kadiya.612" className="footer-link" target="_blank" rel="noreferrer">
              <i className="fab fa-facebook-f"></i> parth.kadiya.612
            </a>
          </p>
        </div>

        {/* Right: Profile Summary */}
        <div className="footer-column">
          <h3>Parth Kadiya</h3>
          <p>
            Creative Frontend Developer based in Ahmedabad, passionate about crafting seamless digital experiences using React, JavaScript, and modern UI/UX design.
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>All Rights Reserved 2025</p>
        <p>
          <a href="#parth">Terms & Condition</a> - <a href="#parth">Privacy Policy</a>
        </p>
      </div>
    </footer>
  );
}
