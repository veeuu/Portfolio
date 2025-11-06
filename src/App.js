import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  useEffect(() => {
    // Set light theme permanently
    document.documentElement.setAttribute('data-theme', 'light');
    // Clean up any existing theme preference
    localStorage.removeItem('theme');
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
