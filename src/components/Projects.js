import React from "react";
import "../App.css";

// Import images from assets
import pixelChar from "../assets/pixel-char.png";
import aiStudy from "../assets/ai-study.jpg";
import translation from "../assets/translation.png";
import webImg from "../assets/web.jpg";

// **Updated Image Imports**
import ecstasyVenturesImg from "../assets/ecstasy-ventures.jpg"; // Placeholder for EcstasyVentures image
import vta5Img from "../assets/vta5.jpg"; // Placeholder for VTA5 image
// Separating the two AI project images
import freelanceAiToolImg from "../assets/ai-tool.jpg"; // New image for the Freelance AI Tool
import vocalEdgeImg from "../assets/ai-interview.jpg"; // Original image for VocalEdge (Personal Project)

const Projects = () => {
  // -----------------------------------------------------------------
  // FREELANCING PROJECTS
  // -----------------------------------------------------------------
  const freelanceProjects = [
    {
      title: "Ecstasy Ventures Startup Website & Dashboard",
      desc: "Developed the complete startup company website and an administrative dashboard. Technologies include a modern full-stack setup for a dynamic user experience.",
      tech: ["React Native", "Node.js", "MongoDB", "Express"],
      link: "https://github.com/EcstasyVentures/EcstasyVentures",
      website: "https://ecstasyventures.com/",
      img: ecstasyVenturesImg
    },
    {
      title: "VTA5 (Virtual Trading Arena 5) Launch Page",
      desc: "Designed and developed the launching page for VTA5, a virtual trading arena. Built with a focus on responsiveness and performance, deployed on Google Cloud Platform.",
      tech: ["React Native", "Node.js", "Firebase", "GCP"],
      link: "https://github.com/veeuu/VTA5",
      website: "https://vta5.com",
      img: vta5Img
    },
    {
      // Updated to reflect the distinct Freelancing project
      title: "AI-Interview-Tool",
      desc: "A comprehensive AI-powered interview tool providing preparation and real-time feedback for theoretical, coding, and behavioral questions to help users crack any interview.",
      tech: ["React Native", "Electron", "Google Gemini 2.5", "OpenAI", "RAG", "LLM", "Python","FastAPI","Node.js"],
      link: "https://github.com/veeuu/AI-Interview-Tool",
      img: freelanceAiToolImg // Using the new, distinct image variable
    }
  ];

  // -----------------------------------------------------------------
  // PERSONAL PROJECTS
  // -----------------------------------------------------------------
  const personalProjects = [
    {
      // Re-added the original personal project
      title: "VocalEdge : Your Personal Interview Trainer",
      desc: "AI-powered mock interview tool with TTS & STT, dynamic question generation and feedback scoring.",
      tech: ["React", "PHP", "Google Gemini 2.5", "SQL", "CNN", "RAG", "LLM", "Langchain"],
      link: "https://github.com/veeuu/AI-Interview-Assistant", // Note: This is the original repo link
      img: vocalEdgeImg
    },
    {
      title: "Pixel Art Platformer Game",
      desc: "A 2D Mario-style game with custom characters, obstacles, and collectibles. Built with Unity and C.",
      tech: ["GameMaker", "C", "Piskel", "Figma"],
      link: "https://github.com/veeuu/2D-PixelGame-MarioStyle",
      img: pixelChar
    },
    {
      title: "AI Study Helper",
      desc: "Generates quizzes and answers from uploaded study documents using RAG pipelines.",
      tech: ["React", "Java", "RAG", "LLM", "Langchain", "Tesseract OCR"],
      link: "https://github.com/veeuu/AI-Study-Helper",
      img: aiStudy
    },
    {
      title: "Translatron",
      desc: "Multilingual text & document translation web app with PDF generation support.",
      tech: ["React", "Python", "Flask", "MongoDB", "Google Translate", "Tesseract OCR"],
      link: "https://github.com/veeuu/Translatron",
      img: translation
    },
    {
      title: "Web Scraping Automation",
      desc: "Automated data extraction pipeline for scraping and structuring large datasets.",
      tech: ["Python", "BeautifulSoup", "Pandas", "Excel", "Playwright", "Mistral AI", "Google Gemini", "Tesseract OCR"],
      link: "https://github.com/veeuu/Web-Scraping",
      img: webImg
    }
  ];

  // Utility function to render a project list
  const renderProjects = (projects) => (
    <div className="projects-grid">
      {projects.map((p, i) => (
        <article className="project-card" key={i}>
          <div className="project-image">
            <img src={p.img} alt={p.title} />
          </div>
          <div className="project-body">
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <div className="tech-row">
              {p.tech.map((t, idx) => (
                <span className="tech-chip" key={idx}>{t}</span>
              ))}
            </div>
          </div>
          <div className="project-footer">
            <a className="btn btn-outline" href={p.link} target="_blank" rel="noreferrer">
              View Git Repo
            </a>
            {/* Conditional rendering for website link */}
            {p.website && (
              <a className="btn btn-secondary" href={p.website} target="_blank" rel="noreferrer" style={{ marginLeft: '10px' }}>
                View Website
              </a>
            )}
          </div>
        </article>
      ))}
    </div>
  );

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>

        {/* -------------------------------------------------- */}
        {/* FREELANCING SECTION */}
        {/* -------------------------------------------------- */}
        <h3 className="section-subtitle">Freelancing Projects</h3>
        {renderProjects(freelanceProjects)}

        {/* -------------------------------------------------- */}
        {/* PERSONAL PROJECTS SECTION */}
        {/* -------------------------------------------------- */}
        <h3 className="section-subtitle" style={{ marginTop: '40px' }}>Personal Projects</h3>
        {renderProjects(personalProjects)}

      </div>
    </section>
  );
};

export default Projects;