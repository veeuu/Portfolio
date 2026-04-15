import React, { useState, useEffect } from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaInstagram, FaDownload, FaRocket } from "react-icons/fa";
import { SiFiverr } from "react-icons/si"; 
import "../App.css";

import profile from "../assets/PROFILE.jpg";
import resume from "../assets/VidhishaResume.pdf";

const roles = ["AI Developer", "Full-Stack Engineer", "Freelancer", "Problem Solver", "Tech Enthusiast"];

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    let currentIndex = 0;
    
    const typeInterval = setInterval(() => {
      if (currentIndex <= currentRole.length) {
        setTypedText(currentRole.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [currentRoleIndex]);

  return (
    <section id="hero" className="hero">
      <div className="hero-bg-elements">
        <div className="geometric-shape"></div>
      </div>
      
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
          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">Vidhisha</span>
          </h1>
          
          <div className="hero-role-container">
            <span className="role-prefix">I'm a </span>
            <span className="typed-role">{typedText}</span>
            <span className="cursor">|</span>
          </div>
          
          <p className="hero-description">
            AI Developer building scalable systems and AI-driven applications with a focus on performance, reliability, and clean architecture. Skilled in Python, REST APIs, and automation, delivering impactful solutions end-to-end.
          </p>

          {/* Stats */}
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">11+</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">1+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">35+</span>
              <span className="stat-label">Technologies</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">4</span>
              <span className="stat-label">Client Projects</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="hero-socials">
            <a href="https://www.linkedin.com/in/vidhisha-kamble-435b73213" target="_blank" rel="noreferrer" className="social-link linkedin">
              <FaLinkedin />
            </a>
            <a href="https://github.com/veeuu" target="_blank" rel="noreferrer" className="social-link github">
              <FaGithub />
            </a>
            <a href="mailto:veeekamble@gmail.com" className="social-link email">
              <FaEnvelope />
            </a>
            <a href="https://www.instagram.com/veeeuu/" target="_blank" rel="noreferrer" className="social-link instagram">
              <FaInstagram />
            </a>
            <a href="https://www.fiverr.com/sellers/vidhisha24" target="_blank" rel="noreferrer" className="social-link fiverr">
              <SiFiverr />
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="hero-cta">
            <a className="btn btn-primary" href={resume} target="_blank" rel="noreferrer">
              <FaDownload />
              Download Resume
            </a>
            <a className="btn btn-secondary" href="#projects">
              <FaRocket />
              View Projects
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;