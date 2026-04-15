import {
  FaCode, FaServer, FaCloud, FaDatabase, FaBrain, FaTools, FaDocker, FaGitAlt, FaAws
} from "react-icons/fa";
import {
  SiPython, SiJavascript, SiPhp, SiFlask, SiFastapi,
  SiReact, SiHtml5, SiCss3,
  SiMongodb, SiMysql, SiPostgresql,
  SiLangchain, SiOpenai, SiGooglegemini, SiHuggingface,
  SiDocker, SiGit
} from "react-icons/si";
import { DiJava } from "react-icons/di";
import "../App.css";

const Skills = () => {
  const categories = [
    {
      name: "Programming",
      icon: <FaCode />,
      color: "var(--accent-primary)",
      skills: [
        { name: "Python",     icon: <SiPython     style={{ color: "#3776AB" }} /> },
        { name: "JavaScript", icon: <SiJavascript style={{ color: "#F7DF1E" }} /> },
        { name: "Java",       icon: <DiJava       style={{ color: "#007396" }} /> },
        { name: "C/C++",      icon: <FaCode       style={{ color: "#00599C" }} /> },
        { name: "PHP",        icon: <SiPhp        style={{ color: "#777BB4" }} /> },
      ],
    },
    {
      name: "Backend",
      icon: <FaServer />,
      color: "var(--accent-tertiary)",
      skills: [
        { name: "Flask",         icon: <SiFlask   style={{ color: "#000000" }} /> },
        { name: "FastAPI",       icon: <SiFastapi style={{ color: "#009688" }} /> },
        { name: "REST APIs",     icon: <FaServer  style={{ color: "#6366f1" }} /> },
        { name: "Microservices", icon: <FaTools   style={{ color: "#8b5cf6" }} /> },
      ],
    },
    {
      name: "Frontend",
      icon: <FaCode />,
      color: "var(--accent-secondary)",
      skills: [
        { name: "React.js",   icon: <SiReact      style={{ color: "#61DAFB" }} /> },
        { name: "HTML5",      icon: <SiHtml5      style={{ color: "#E34F26" }} /> },
        { name: "CSS3",       icon: <SiCss3       style={{ color: "#1572B6" }} /> },
        { name: "JavaScript", icon: <SiJavascript style={{ color: "#F7DF1E" }} /> },
      ],
    },
    {
      name: "Cloud",
      icon: <FaCloud />,
      color: "var(--accent-success)",
      skills: [
        { name: "AWS EC2",          icon: <FaAws  style={{ color: "#FF9900" }} /> },
        { name: "AWS S3",           icon: <FaAws  style={{ color: "#FF9900" }} /> },
        { name: "AWS Lambda",       icon: <FaAws  style={{ color: "#FF9900" }} /> },
        { name: "Cloud Deployment", icon: <FaCloud style={{ color: "#4285F4" }} /> },
      ],
    },
    {
      name: "DevOps",
      icon: <FaTools />,
      color: "var(--accent-pink)",
      skills: [
        { name: "Git",    icon: <SiGit    style={{ color: "#F05032" }} /> },
        { name: "Docker", icon: <SiDocker style={{ color: "#2496ED" }} /> },
        { name: "CI/CD",  icon: <FaTools  style={{ color: "#22c55e" }} /> },
      ],
    },
    {
      name: "AI/ML",
      icon: <FaBrain />,
      color: "var(--accent-warning)",
      skills: [
        { name: "LangChain",    icon: <SiLangchain    style={{ color: "#1C3C3C" }} /> },
        { name: "OpenAI",       icon: <SiOpenai       style={{ color: "#412991" }} /> },
        { name: "Google Gemini",icon: <SiGooglegemini style={{ color: "#4285F4" }} /> },
        { name: "Hugging Face", icon: <SiHuggingface  style={{ color: "#FFD21E" }} /> },
        { name: "RAG",          icon: <FaBrain        style={{ color: "#f59e0b" }} /> },
        { name: "OpenCV",       icon: <FaCode         style={{ color: "#5C3EE8" }} /> },
        { name: "OCR",          icon: <FaCode         style={{ color: "#64748b" }} /> },
      ],
    },
    {
      name: "Database",
      icon: <FaDatabase />,
      color: "var(--accent-quaternary)",
      skills: [
        { name: "MongoDB",    icon: <SiMongodb    style={{ color: "#47A248" }} /> },
        { name: "MySQL",      icon: <SiMysql      style={{ color: "#4479A1" }} /> },
        { name: "PostgreSQL", icon: <SiPostgresql style={{ color: "#336791" }} /> },
        { name: "SQL",        icon: <FaDatabase   style={{ color: "#6366f1" }} /> },
      ],
    },
    {
      name: "Automation",
      icon: <FaTools />,
      color: "var(--text-secondary)",
      skills: [
        { name: "BeautifulSoup", icon: <SiPython     style={{ color: "#3776AB" }} /> },
        { name: "Playwright",    icon: <SiJavascript style={{ color: "#2EAD33" }} /> },
        { name: "Requests",      icon: <FaServer        style={{ color: "#64748b" }} /> },
      ],
    },
    {
      name: "Core CS",
      icon: <FaCode />,
      color: "var(--accent-primary)",
      skills: [
        { name: "Data Structures", icon: <FaCode  style={{ color: "#0969da" }} /> },
        { name: "DBMS",            icon: <FaDatabase style={{ color: "#8250df" }} /> },
        { name: "System Design",   icon: <FaTools style={{ color: "#1a7f37" }} /> },
      ],
    },
  ];

  const totalSkills = categories.reduce((sum, c) => sum + c.skills.length, 0);

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="skills-header">
          <h2 className="section-title">Skills &amp; Technologies</h2>
          <p className="section-description">
            Technologies I work with to build amazing digital experiences
          </p>
        </div>

        <div className="skills-container">
          <div className="skills-categories">
            {categories.map((category, index) => (
              <div key={index} className="skill-category-card">
                <div className="category-header">
                  <div className="category-icon" style={{ backgroundColor: category.color }}>
                    {category.icon}
                  </div>
                  <h3 className="category-name">{category.name}</h3>
                </div>

                <div className="skills-tags">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="skill-tag" style={{ borderColor: category.color }}>
                      <span className="skill-emoji" style={{ display: "flex", alignItems: "center", fontSize: "1.1rem" }}>
                        {skill.icon}
                      </span>
                      <span className="skill-name">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="skills-summary">
            <div className="summary-card">
              <h3>Quick Stats</h3>
              <div className="stats-grid">
                <div className="stat-item">
                  <span className="stat-number">{totalSkills}</span>
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
