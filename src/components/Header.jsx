import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../css/Header.css";

const Header = () => {
  const [isToggled, setIsToggled] = useState(false);
  const navRef = useRef(null);

  const handleOutsideClick = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setIsToggled(false);
      removeBlur();
    }
  };

  useEffect(() => {
    if (isToggled) {
      document.addEventListener("click", handleOutsideClick);
    } else {
      document.removeEventListener("click", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isToggled]);

  const blurrybg = () => {
    const nav = document.querySelector(".navbar");
    let nextElements = nav ? nav.nextElementSibling : null;
    while (nextElements) {
      // nextElements.style.filter = "blur(10px)";
      nextElements = nextElements.nextElementSibling;
    }
  };

  const removeBlur = () => {
    const nav = document.querySelector(".navbar");
    let nextElements = nav ? nav.nextElementSibling : null;
    while (nextElements) {
      nextElements.style.filter = "none";
      nextElements = nextElements.nextElementSibling;
    }
  };

  return (
    <nav
      id="nav"
      className="navbar navbar-expand-lg w-100 py-3 px-2"
      style={{
        backdropFilter: "blur(20px)",
        backgroundColor: "hsla(0, 0%, 0%, 0.85)",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      }}
      data-bs-theme="dark"
      ref={navRef}
      data-aos="fade"
      data-aos-delay="0"
      data-aos-duration="1000"
      data-aos-once="true">
      <div className="container d-flex align-items-center justify-content-between">
        {/* Logo Left */}
        <a href="/" className="nav-brand gradient fs-2">
          Obaid Ansari
        </a>

        {/* Toggler for mobile */}
        <button
          className="d-lg-none border border-black rounded-1"
          type="button"
          onClick={() => {
            setIsToggled(!isToggled);
            isToggled ? removeBlur() : blurrybg();
          }}>
          <span className="navbar-toggler-icon  fs-4 bg-black rounded-1"></span>
        </button>

        {/* Center Nav Links */}
        <div
          className={`collapse navbar-collapse justify-content-center ${
            isToggled ? "show" : ""
          }`}>
          <ul
            className="navbar-nav mb-2 mb-lg-0"
            onClick={(e) => {
              if (!e.target.closest(".dropdown")) setIsToggled(false);
            }}>
            {["home", "about", "skills", "projects"].map((section) => (
              <li className="nav-item" key={section}>
                <a
                  className="nav-link fs-4 mx-2 text-center"
                  href={`#${section}`}
                  onClick={removeBlur}>
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}

            {/* CTA Button (Visible on small screens) */}
            <li className="nav-item d-block d-lg-none text-center mt-2">
              <a
                href="#contact"
                className="gradient-btn w-100 text-center text-decoration-none fw-semibold fs-5 p-1 px-3 rounded-3"
                onClick={removeBlur}>
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* CTA Button (Visible on large screens) */}
        <div className="d-none d-lg-block ms-auto">
          {/* <a
            href="#contact"
            className="btn btn-light fw-semibold fs-5 p-1 px-3 rounded-3"
            onClick={removeBlur}>
            Contact
          </a> */}
          <a
            href="#contact"
            className="gradient-btn w-100 text-center text-decoration-none fw-semibold fs-5 py-1 px-3 rounded-3"
            onClick={removeBlur}>
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
