import React, { useState, useRef, useEffect } from "react";
import "../css/Header.css";

const Header = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const navRef = useRef(null);

  // Close navbar on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        navRef.current &&
        !navRef.current.contains(event.target) &&
        !event.target.classList.contains("navbar-toggler")
      ) {
        setIsCollapsed(true);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Toggle collapse on button click
  const toggleNavbar = () => {
    setIsCollapsed((prev) => !prev);
  };

  // Collapse on link click
  const closeNavbar = () => {
    setIsCollapsed(true);
  };

  return (
    <header>
      <nav
        className="navbar shadow navbar-expand-lg bg-white w-100"
        ref={navRef}>
        <div className="container px-3">
          <a className="nav-brand display-5 gradient">Obaid Ansari</a>
          <button
            className="navbar-toggler text-white border border-white"
            type="button"
            onClick={toggleNavbar}
            aria-expanded={!isCollapsed}
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className={`collapse navbar-collapse ${!isCollapsed ? "show" : ""}`}
            id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto text-center mb-0 mb-lg-0">
              {["home", "about", "skills", "projects", "contact"].map(
                (section) => (
                  <li className="nav-item" key={section}>
                    <a
                      className="nav-link fs-5 px-3"
                      href={`#${section}`}
                      onClick={closeNavbar}>
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
