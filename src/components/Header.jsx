import React, { useEffect } from "react";
import "../css/App.css";
const Header = () => {
  useEffect(() => {
    const navbar = document.getElementById("navbarNav");

    // Close when clicking nav links
    const navLinks = document.querySelectorAll(
      "#navbarNav .nav-link, #navbarNav .btn",
    );

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navbar.classList.remove("show");
      });
    });

    // Close when clicking outside
    const handleOutsideClick = (event) => {
      const isInsideNavbar =
        navbar.contains(event.target) ||
        event.target.closest(".navbar-toggler");

      if (!isInsideNavbar) {
        navbar.classList.remove("show");
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <header
      className="d-flex justify-content-center w-100 top-0"
      style={{ position: "fixed", zIndex: "10000" }}
    >
      <nav
        className="navbar navbar-expand-lg d-flex justify-content-center w-100"
        style={{ maxWidth: "1100px" }}
      >
        <div
          className="container rounded-5 px-4 p-2 my-1 mx-3 shadow"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.3)",
            backdropFilter: "blur(15px)",
          }}
          data-aos="fade-down"
          data-aos-offset="0"
        >
          {/* Brand */}
          <a
            className="navbar-brand fw-bold fs-4 gradient-text fw-bolder"
            href="#"
          >
            Obaid Ansari
          </a>

          {/* Toggle Button */}
          <button
            className="navbar-toggler border border-0 pe-0"
            style={{ color: "transparent" }}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
          >
            <span className="navbar-toggler-icon text-white"></span>
          </button>

          {/* Nav Links */}
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav align-items-lg-center gap-lg-3">
              <li className="nav-item">
                <a
                  className="nav-link fs-5 text-black fw-semibold"
                  href="#home"
                >
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link fs-5 text-black fw-semibold"
                  href="#about"
                >
                  About
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link fs-5 text-black fw-semibold"
                  href="#skills"
                >
                  Skills
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link fs-5 text-black fw-semibold"
                  href="#projects"
                >
                  Projects
                </a>
              </li>

              {/* Contact Button */}
              <li className="nav-item pb-2 pb-lg-0">
                <a
                  href="#contact"
                  className="btn text-white px-4 fs-5 fw-bold gradient-btn rounded-5 w-100"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
