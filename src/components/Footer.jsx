import React from 'react';
import '../styles/Footer.css';
import { FaGithub, FaLinkedinIn, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-grid">
          <div className="footer-info">
            <h3>Aryan Gautam</h3>
            <p>
              A passionate Full Stack Developer specializing in MERN Stack and Java Development.
              Building digital experiences that make a difference.
            </p>
            <div className="footer-social">
              <a
                href="https://github.com/aryan88111"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/aryan-gautam-33a820233/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://twitter.com/AryanGa78153590"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="mailto:aryansdatia88111@gmail.com"
                className="social-icon"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Services</h4>
            <ul>
              <li><a href="#web-development">Web Development</a></li>
              <li><a href="#app-development">Software Development</a></li>
              <li><a href="#backend-development">Backend Development</a></li>
              <li><a href="#database-design">Database Design</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Contact Info</h4>
            <ul>
              <li>INDIA</li>
              <li>
                <a href="mailto:aryansdatia88111@gmail.com">
                  aryansdatia88111@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+919301610719">+91 9301610719</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {currentYear} Aryan Gautam. All rights reserved. Built with{' '}
            <span role="img" aria-label="heart">
              ❤️
            </span>{' '}
            using React.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
