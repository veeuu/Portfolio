import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaInstagram } from "react-icons/fa";
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
            <a
              href="https://www.linkedin.com/in/vidhisha-kamble-435b73213"
              target="_blank"
              rel="noreferrer"
            >
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
