import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaInstagram, FaHeart } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";
import "../App.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-main">
            <h3 className="footer-title">Let's Connect</h3>
            <p className="footer-description">
              I'm always open to discussing new opportunities, 
              collaborations, or just having a chat about technology.
            </p>
            
            <div className="footer-socials">
              <a 
                href="https://www.linkedin.com/in/vidhisha-kamble-435b73213" 
                target="_blank" 
                rel="noreferrer" 
                className="social-link"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a 
                href="https://github.com/veeuu" 
                target="_blank" 
                rel="noreferrer" 
                className="social-link"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a 
                href="mailto:veeekamble@gmail.com" 
                className="social-link"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
              <a 
                href="https://www.instagram.com/veeeuu/" 
                target="_blank" 
                rel="noreferrer" 
                className="social-link"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a 
                href="https://www.fiverr.com/sellers/vidhisha24" 
                target="_blank" 
                rel="noreferrer" 
                className="social-link"
                aria-label="Fiverr"
              >
                <SiFiverr />
              </a>
            </div>
          </div>
          
          <div className="footer-info">
            <div className="footer-status">
              <div className="status-indicator">
                <span className="status-dot"></span>
                <span>Available for freelance work</span>
              </div>
            </div>
            
            <div className="footer-location">
              <p>Based in India</p>
              <p>Working globally</p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} Vidhisha Kamble. Made with <FaHeart className="heart-icon" /> 
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
