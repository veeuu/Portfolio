import React, { useState, useEffect } from "react";
import "../App.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav-wrap ${scrolled ? "nav-shadow" : ""}`}>
      <div className="container nav-inner">
        <div className="brand">Vidhisha Rajani Kamble (Portfolio)</div>
        {/* Removed nav-links */}
      </div>
    </header>
  );
};

export default Navbar;
