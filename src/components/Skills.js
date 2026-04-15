import React from "react";
import { FaCode, FaTools, FaDatabase, FaBrain, FaServer, FaCloud } from "react-icons/fa";
import "../App.css";

const Skills = () => {
  const allSkills = [
    // Programming
    { name: "Python", category: "Programming", icon: "🐍" },
    { name: "JavaScript", category: "Programming", icon: "⚡" },
    { name: "Java", category: "Programming", icon: "☕" },
    { name: "C/C++", category: "Programming", icon: "⚙️" },
    { name: "PHP", category: "Programming", icon: "🌐" },

    // Backend
    { name: "Flask", category: "Backend", icon: "🌶️" },
    { name: "FastAPI", category: "Backend", icon: "🚀" },
    { name: "REST APIs", category: "Backend", icon: "🔌" },
    { name: "Microservices", category: "Backend", icon: "🧩" },

    // Frontend
    { name: "HTML5", category: "Frontend", icon: "🌐" },
    { name: "CSS3", category: "Frontend", icon: "🎨" },
    { name: "JavaScript", category: "Frontend", icon: "⚡" },
    { name: "React.js", category: "Frontend", icon: "⚛️" },

    // Cloud
    { name: "AWS EC2", category: "Cloud", icon: "☁️" },
    { name: "AWS S3", category: "Cloud", icon: "🪣" },
    { name: "AWS Lambda", category: "Cloud", icon: "λ" },
    { name: "Cloud Deployment", category: "Cloud", icon: "🚀" },

    // DevOps
    { name: "Git", category: "DevOps", icon: "🌿" },
    { name: "Docker", category: "DevOps", icon: "🐳" },
    { name: "CI/CD", category: "DevOps", icon: "🔄" },

    // AI/ML
    { name: "LangChain", category: "AI/ML", icon: "🔗" },
    { name: "RAG", category: "AI/ML", icon: "📚" },
    { name: "Gemini", category: "AI/ML", icon: "✨" },
    { name: "OpenAI", category: "AI/ML", icon: "🤖" },
    { name: "OCR", category: "AI/ML", icon: "👁️" },
    { name: "OpenCV", category: "AI/ML", icon: "📷" },

    // Databases
    { name: "MongoDB", category: "Database", icon: "🍃" },
    { name: "MySQL", category: "Database", icon: "🐬" },
    { name: "PostgreSQL", category: "Database", icon: "🐘" },
    { name: "SQL", category: "Database", icon: "🗃️" },

    // Automation
    { name: "BeautifulSoup", category: "Automation", icon: "🕷️" },
    { name: "Requests", category: "Automation", icon: "📡" },
    { name: "Playwright", category: "Automation", icon: "🎭" },

    // Core CS
    { name: "Data Structures", category: "Core CS", icon: "🏗️" },
    { name: "DBMS", category: "Core CS", icon: "🗄️" },
    { name: "System Design", category: "Core CS", icon: "📐" },
  ];

  const categories = [
    { name: "Programming", icon: <FaCode />, color: "var(--accent-primary)" },
    { name: "Backend", icon: <FaServer />, color: "var(--accent-tertiary)" },
    { name: "Frontend", icon: <FaTools />, color: "var(--accent-secondary)" },
    { name: "Cloud", icon: <FaCloud />, color: "var(--accent-success)" },
    { name: "DevOps", icon: <FaTools />, color: "var(--accent-pink)" },
    { name: "AI/ML", icon: <FaBrain />, color: "var(--accent-warning)" },
    { name: "Database", icon: <FaDatabase />, color: "var(--accent-quaternary)" },
    { name: "Automation", icon: <FaTools />, color: "var(--text-secondary)" },
    { name: "Core CS", icon: <FaCode />, color: "var(--accent-primary)" },
  ];

  const getSkillsByCategory = (categoryName) => {
    return allSkills.filter(skill => skill.category === categoryName);
  };

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="skills-header">
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-description">
            Technologies I work with to build amazing digital experiences
          </p>
        </div>

        <div className="skills-container">
          <div className="skills-categories">
            {categories.map((category, index) => {
              const categorySkills = getSkillsByCategory(category.name);
              if (categorySkills.length === 0) return null;
              
              return (
                <div key={index} className="skill-category-card">
                  <div className="category-header">
                    <div 
                      className="category-icon" 
                      style={{ backgroundColor: category.color }}
                    >
                      {category.icon}
                    </div>
                    <h3 className="category-name">{category.name}</h3>
                  </div>
                  
                  <div className="skills-tags">
                    {categorySkills.map((skill, skillIndex) => (
                      <div 
                        key={skillIndex} 
                        className="skill-tag"
                        style={{ borderColor: category.color }}
                      >
                        <span className="skill-emoji">{skill.icon}</span>
                        <span className="skill-name">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="skills-summary">
            <div className="summary-card">
              <h3>Quick Stats</h3>
              <div className="stats-grid">
                <div className="stat-item">
                  <span className="stat-number">{allSkills.length}</span>
                  <span className="stat-label">Technologies</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">{categories.length}</span>
                  <span className="stat-label">Categories</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">1</span>
                  <span className="stat-label">Years</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">∞</span>
                  <span className="stat-label">Learning</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
