import React from "react";
// Import Fa icons as before
import { FaLinkedin, FaGithub, FaEnvelope, FaInstagram } from "react-icons/fa";
// Import the Fiverr icon from the Simple Icons set
import { SiFiverr } from "react-icons/si"; 
import "../App.css";

import profile from "../assets/PROFILE.jpg";
import resume from "../assets/Vidhisha_Resume.pdf";

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="container hero-inner">
        <div className="hero-card">
          
          {/* Profile Picture */}
          <div className="profile-wrap">
            {profile ? (
              <img src={profile} alt="Vidhisha" className="profile-pic" />
            ) : (
              <div className="avatar-fallback">VK</div>
            )}
          </div>

          {/* Name & Role */}
          <h1 className="hero-title">Vidhisha Kamble</h1>
          <p className="hero-role">
            AI Intern (ProPlus Data Prospect Intelligence) <span className="sep">|</span> Freelancer
          </p>
          <p className="hero-tag">
            Innovating. Coding. Creating.
          </p>

          {/* Social Links */}
          <div className="hero-socials">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/vidhisha-kamble-435b73213"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
            {/* GitHub */}
            <a href="https://github.com/veeuu" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            {/* Email */}
            <a href="mailto:veeekamble@gmail.com">
              <FaEnvelope />
            </a>
            {/* Instagram */}
            <a href="https://www.instagram.com/veeeuu/" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
            {/* Fiverr - Now using SiFiverr */}
            <a href="https://www.fiverr.com/sellers/vidhisha24" target="_blank" rel="noreferrer">
              <SiFiverr />
            </a>
          </div>

          {/* Resume Button */}
          <div className="hero-cta">
            <a
              className="btn btn-primary"
              href={resume}
              target="_blank"
              rel="noreferrer"
            >
              View Resume
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;