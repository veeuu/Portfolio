import React from "react";
import { FaGithub, FaExternalLinkAlt, FaDownload } from "react-icons/fa";
import "../App.css";

// Import images from assets
import pixelChar from "../assets/pixel-char.png";
import aiStudy from "../assets/ai-study.jpg";
import translation from "../assets/translation.png";
import webImg from "../assets/web.jpg";
import gymAppImg from "../assets/GymApp.webp";

// **Updated Image Imports**
import ecstasyVenturesImg from "../assets/ecstasy-ventures.jpg"; // Placeholder for EcstasyVentures image
import vta5Img from "../assets/vta5.jpg"; // Placeholder for VTA5 image
// Separating the two AI project images
import freelanceAiToolImg from "../assets/ai-tool.jpg"; // New image for the Freelance AI Tool
import vocalEdgeImg from "../assets/ai-interview.jpg"; // Original image for VocalEdge (Personal Project)
import founderIntelligenceImg from "../assets/founder_intelligence.webp";
import emailMarketingImg from "../assets/email_marketing.webp";
import sqlDungeonImg from "../assets/image1.png";
import browserGamesImg from "../assets/image.png";

const Projects = () => {
  // -----------------------------------------------------------------
  // FREELANCING PROJECTS
  // -----------------------------------------------------------------
  const freelanceProjects = [
    {
      title: "Ecstasy Ventures Startup Website & Dashboard",
      desc: "Developed the complete startup company website and an administrative dashboard. Technologies include a modern full-stack setup for a dynamic user experience.",
      tech: ["React Native", "Node.js", "MongoDB", "Express"],
      // Removed: link: "https://github.com/EcstasyVentures/EcstasyVentures",
      website: "https://ecstasyventures.com/",
      img: ecstasyVenturesImg
    },
    {
      title: "VTA5 (Virtual Trading Arena 5) Launch Page",
      desc: "Designed and developed the launching page for VTA5, a virtual trading arena. Built with a focus on responsiveness and performance, deployed on Google Cloud Platform.",
      tech: ["React Native", "Node.js", "Firebase", "GCP"],
      // Removed: link: "https://github.com/veeuu/VTA5",
      website: "https://vta5.com",
      img: vta5Img
    },
    {
      // Updated to reflect the distinct Freelancing project
      title: "AI-Interview-Tool",
      desc: "A comprehensive AI-powered interview tool providing preparation and real-time feedback for theoretical, coding, and behavioral questions to help users crack any interview.",
      tech: ["React Native", "Electron", "Google Gemini 2.5", "OpenAI", "RAG", "LLM", "Python","FastAPI","Node.js"],
      // Removed the link property entirely for this project
      img: freelanceAiToolImg
    },
    {
      title: "Founder Intelligence System",
      desc: "Multi-agent AI pipeline that transforms raw signals — transcripts, competitor data, app reviews, and Reddit threads — into structured product insights and founder-ready answers.",
      tech: ["Python", "LangChain", "RAG", "OpenAI", "Multi-Agent", "FastAPI", "Apify", "Hugging Face", "Google Gemini", "Qwen", "Ollama"],
      img: founderIntelligenceImg
    }
  ];

  // -----------------------------------------------------------------
  // PERSONAL PROJECTS
  // -----------------------------------------------------------------
  const personalProjects = [
    {
      title: "SQL Dungeon",
      desc: "Turns learning SQL into a game. Progress through 15–100 levels of AI-generated SQL challenges, compete in real-time duo battles, and earn points mastering everything from basic SELECT queries to recursive CTEs.",
      tech: ["SQL", "AI", "JavaScript", "React"],
      website: "https://veeuu.github.io/SQL-Game/",
      img: sqlDungeonImg
    },
    {
      title: "Translatron",
      desc: "Multilingual text & document translation web app with PDF generation support.",
      tech: ["React", "Python", "Flask", "MongoDB", "Google Translate", "Tesseract OCR"],
      website: "https://veeuu.github.io/Translatron/",
      img: translation
    },
    {
      title: "Browser Games Collection",
      desc: "A collection of interactive browser games built with vanilla HTML, CSS, and JavaScript — no frameworks, no dependencies. Features touch/swipe support and an auto-solver using the algorithm.",
      tech: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
      website: "https://veeuu.github.io/Games/",
      img: browserGamesImg
    },
    {
      title: "Flutter Gym Management System",
      desc: "A Flutter-based fitness management system for gym trainers, featuring secure authentication, client management, and an intuitive Material Design dashboard powered by Provider state management.",
      tech: ["Flutter", "Dart", "Provider", "SharedPreferences", "Material Design", "Image Picker"],
      link: "https://github.com/veeuu/GymApp",
      apk: "/app-release.apk",
      img: gymAppImg
    },
    {
      title: "Web Scraping Automation",
      desc: "Automated data extraction pipeline for scraping and structuring large datasets.",
      tech: ["Python", "BeautifulSoup", "Pandas", "Excel", "Playwright", "Mistral AI", "Google Gemini", "Tesseract OCR"],
      link: "https://github.com/veeuu/Web-Scraping",
      img: webImg
    },
    {
      title: "Email Marketing System",
      desc: "Automated email marketing pipeline for sending personalized campaigns, managing subscriber lists, and tracking engagement metrics at scale.",
      tech: ["Python", "Automation", "SMTP", "REST APIs"],
      website: "https://emailautomation-production-2930.up.railway.app/",
      img: emailMarketingImg
    },
    {
      title: "VocalEdge : Your Personal Interview Trainer",
      desc: "AI-powered mock interview tool with TTS & STT, dynamic question generation and feedback scoring.",
      tech: ["React", "PHP", "Google Gemini 2.5", "SQL", "CNN", "RAG", "LLM", "Langchain"],
      link: "https://github.com/veeuu/AI-Interview-Assistant",
      img: vocalEdgeImg
    },
    {
      title: "Pixel Art Platformer Game",
      desc: "A 2D Mario-style game with custom characters, obstacles, and collectibles. Built with Unity and C.",
      tech: ["GameMaker", "C", "Piskel", "Figma"],
      link: "https://github.com/veeuu/2D-PixelGame-MarioStyle",
      img: pixelChar
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
            {/* Conditional rendering for Git Repo link */}
            {p.link && (
              <a className="btn btn-outline" href={p.link} target="_blank" rel="noreferrer">
                <FaGithub />
                View Code
              </a>
            )}
            
            {/* Conditional rendering for website link */}
            {p.website && (
              <a 
                className="btn btn-outline" 
                href={p.website} 
                target="_blank" 
                rel="noreferrer" 
                style={{ marginLeft: p.link ? '10px' : '0' }}
              >
                <FaExternalLinkAlt />
                Live Demo
              </a>
            )}
            {/* Conditional rendering for APK download */}
            {p.apk && (
              <a className="btn btn-outline" href={p.apk} download>
                <FaDownload />
                Download APK
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
        <div className="projects-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-description">
            A showcase of my recent work in AI development, full-stack applications, and client projects
          </p>
        </div>

        <div className="projects-section">
          <h3 className="projects-category-title">Client Projects</h3>
          {renderProjects(freelanceProjects)}
        </div>

        <div className="projects-section">
          <h3 className="projects-category-title">Personal Projects</h3>
          {renderProjects(personalProjects)}
        </div>

      </div>
    </section>
  );
};

export default Projects;