import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaInstagram, FaHeart } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";
import "../App.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-socials">
          <a href="https://www.linkedin.com/in/vidhisha-kamble-435b73213" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/veeuu" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="mailto:veeekamble@gmail.com">
            <FaEnvelope />
          </a>
          <a href="https://www.instagram.com/veeeuu/" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.fiverr.com/sellers/vidhisha24" target="_blank" rel="noreferrer">
            <SiFiverr />
          </a>
        </div>
        <p>
          Made with <FaHeart style={{ color: '#ec4899', margin: '0 4px' }} /> by Vidhisha Kamble
        </p>
        <p style={{ fontSize: '0.9rem', marginTop: '10px', opacity: 0.7 }}>
          © 2025 All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
