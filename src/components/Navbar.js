import React, { useState, useEffect } from "react";
import { FaSun, FaMoon, FaCode } from "react-icons/fa";
import "../App.css";

const Navbar = ({ darkMode, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav-wrap ${scrolled ? "nav-shadow" : ""}`}>
      <div className="container nav-inner">
        <div className="brand">
          <FaCode className="brand-icon" />
          <span className="brand-text">vidhisha.dev</span>
          <span className="brand-status">✨ online</span>
        </div>
        
        <div className="nav-actions">
          <button 
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;