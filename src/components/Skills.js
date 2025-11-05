import React from "react";
import { FaCode, FaTools, FaDatabase, FaBrain, FaServer, FaCloud } from "react-icons/fa";
import "../App.css";

const Skills = () => {
  const allSkills = [
    // Programming Languages
    { name: "Python", category: "Languages", icon: "🐍" },
    { name: "JavaScript", category: "Languages", icon: "⚡" },
    { name: "Java", category: "Languages", icon: "☕" },
    { name: "C/C++", category: "Languages", icon: "⚙️" },
    { name: "PHP", category: "Languages", icon: "🌐" },
    { name: "SQL", category: "Languages", icon: "🗃️" },
    
    // Frameworks & Tools
    { name: "React", category: "Frontend", icon: "⚛️" },
    { name: "Node.js", category: "Backend", icon: "🟢" },
    { name: "Flask", category: "Backend", icon: "🌶️" },
    { name: "FastAPI", category: "Backend", icon: "🚀" },
    { name: "Unity", category: "Game Dev", icon: "🎮" },
    { name: "Bootstrap", category: "Frontend", icon: "🎨" },
    
    // Databases & Cloud
    { name: "MySQL", category: "Database", icon: "🐬" },
    { name: "PostgreSQL", category: "Database", icon: "🐘" },
    { name: "MongoDB", category: "Database", icon: "🍃" },
    { name: "Firebase", category: "Cloud", icon: "🔥" },
    { name: "GCP", category: "Cloud", icon: "☁️" },
    
    // AI & Specializations
    { name: "Machine Learning", category: "AI/ML", icon: "🤖" },
    { name: "LangChain", category: "AI/ML", icon: "🔗" },
    { name: "RAG Systems", category: "AI/ML", icon: "📚" },
    { name: "OCR Technology", category: "AI/ML", icon: "👁️" },
    { name: "Web Scraping", category: "Tools", icon: "🕷️" },
    { name: "API Development", category: "Backend", icon: "🔌" }
  ];

  const categories = [
    { name: "Languages", icon: <FaCode />, color: "var(--accent-primary)" },
    { name: "Frontend", icon: <FaTools />, color: "var(--accent-secondary)" },
    { name: "Backend", icon: <FaServer />, color: "var(--accent-tertiary)" },
    { name: "Database", icon: <FaDatabase />, color: "var(--accent-quaternary)" },
    { name: "Cloud", icon: <FaCloud />, color: "var(--accent-success)" },
    { name: "AI/ML", icon: <FaBrain />, color: "var(--accent-warning)" },
    { name: "Tools", icon: <FaTools />, color: "var(--accent-pink)" },
    { name: "Game Dev", icon: <FaTools />, color: "var(--text-secondary)" }
  ];

  const getSkillsByCategory = (categoryName) => {
    return allSkills.filter(skill => skill.category === categoryName);
  };

  const getCategoryColor = (categoryName) => {
    const category = categories.find(cat => cat.name === categoryName);
    return category ? category.color : "var(--accent-primary)";
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
                  <span className="stat-number">1+</span>
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
