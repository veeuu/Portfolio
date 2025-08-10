import React from "react";
import "../App.css";

// Import images from assets
import pixelChar from "../assets/pixel-char.png";
import aiInterview from "../assets/ai-interview.jpg";
import aiStudy from "../assets/ai-study.jpg";
import translation from "../assets/translation.png";
import webImg from "../assets/web.jpg";

const Projects = () => {
  const projectList = [
    {
      title: "Pixel Art Platformer Game",
      desc: "A 2D Mario-style game with custom characters, obstacles, and collectibles. Built with Unity and C.",
      tech: ["GameMaker","C","Piskel","Figma"],
      link: "https://github.com/veeuu/2D-PixelGame-MarioStyle",
      img: pixelChar
    },
    {
      title: "VocalEdge : Your Personal Interview Trainer",
      desc: "AI-powered mock interview tool with TTS & STT, dynamic question generation and feedback scoring.",
      tech: ["React","PHP","Google Gemini 2.5","SQL","CNN","RAG","LLM","Langchain"],
      link: "https://github.com/veeuu/AI-Interview-Assistant",
      img: aiInterview
    },
    {
      title: "AI Study Helper",
      desc: "Generates quizzes and answers from uploaded study documents using RAG pipelines.",
      tech: ["React","Java","RAG","LLM","Langchain","Tesseract OCR"],
      link: "https://github.com/veeuu/AI-Study-Helper",
      img: aiStudy
    },
    {
      title: "Translatron",
      desc: "Multilingual text & document translation web app with PDF generation support.",
      tech: ["React","Python","Flask","MongoDB","Google Translate","Tesseract OCR"],
      link: "https://github.com/veeuu/Translatron",
      img: translation
    },
    {
      title: "Web Scraping Automation",
      desc: "Automated data extraction pipeline for scraping and structuring large datasets.",
      tech: ["Python","BeautifulSoup","Pandas","Excel","Playwright","Mistral AI","Google Gemini","Tesseract OCR"],
      link: "https://github.com/veeuu/Web-Scraping",
      img: webImg
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projectList.map((p, i) => (
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
                  View Details (Git Repo)
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
