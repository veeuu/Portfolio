import React from "react";
import "../App.css";

const Skills = () => {
  const categories = [
    { 
      title: "Languages", 
      tags: [
        "Python", "C/C++", "Java", "JavaScript", "PHP", "HTML/CSS", "SQL", "Bash/Shell"
      ] 
    },
    { 
      title: "Frameworks & Tools", 
      tags: [
        "React", "Flask", "Unity", "LangChain", "Tesseract",
        "Node.js", "Bootstrap", "Figma"
      ] 
    },
    { 
      title: "DB & DevOps", 
      tags: [
        "MySQL", "PostgreSQL", "MongoDB", "SQLite"
      ] 
    },
    { 
      title: "Core", 
      tags: [
        "Backend Development", "Full-Stack Development", "Data Structures & Algorithms", 
        "RAG", "OCR", "Web Scraping", 
        "API Development", "REST APIs", "Problem Solving"
      ] 
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>

        <div className="skill-categories">
          {categories.map((c, idx) => (
            <div className="skill-block" key={idx}>
              <div className="skill-block-title">{c.title}</div>
              <div className="tag-row">
                {c.tags.map((t, i) => (
                  <span className="skill-tag" key={i}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
