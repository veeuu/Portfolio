import React from "react";
import { FaCode, FaBrain, FaGlobe, FaHeart } from "react-icons/fa";
import "../App.css";

const About = () => {
  const skills = [
    "AI & Machine Learning",
    "Full-Stack Development", 
    "React & Node.js",
    "Python & JavaScript",
    "Database Design",
    "API Development"
  ];

  const interests = [
    // { icon: <FaCode />, text: "Coding" },
    { icon: <FaBrain />, text: "AI Research" },
    { icon: <FaGlobe />, text: "Travel" },
    { icon: <FaHeart />, text: "Music" }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-content">
            <h2 className="about-title">About Me</h2>
            <p className="about-description">
              I'm Vidhisha Kamble, a passionate AI developer and full-stack engineer 
              based in India. I love creating innovative solutions that bridge the gap 
              between complex technology and user-friendly experiences.
            </p>
            <p className="about-description">
              Currently working at ProPlus Data, I specialize in building intelligent 
              systems and modern web applications. I'm always excited to take on new 
              challenges and learn emerging technologies.
            </p>
            
            <div className="about-interests">
              <h3>When I'm not coding</h3>
              <div className="interests-list">
                {interests.map((item, index) => (
                  <div key={index} className="interest-item">
                    <span className="interest-icon">{item.icon}</span>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="about-skills">
            <h3>Technical Skills</h3>
            <div className="skills-list">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  {skill}
                </div>
              ))}
            </div>
            

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;