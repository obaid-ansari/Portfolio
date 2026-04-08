import React from "react";
import { FaFacebookSquare, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import "../css/App.css";
import { ReactTyped } from "react-typed";
import resume from "../assets/obaid's_resume.pdf";

const Hero = () => {
  const roles = [
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "MERN Stack Developer",
    "Web Developer",
  ];

  return (
    <section className="hero-image d-flex justify-content-center" id="home">
      <div className="container mt-5 text-dark h-100 d-flex justify-content-center flex-column align-items-center">
        {/* Dynamic Role */}
        <h1 className="display-6 fst-italic text-center fw-bold mb-4">
          I'm a{" "}
          <span>
            <ReactTyped
              strings={roles}
              typeSpeed={60}
              backSpeed={40}
              backDelay={1000}
              loop
            />
          </span>
        </h1>

        {/* Description */}
        <h2 className="fs-1 fst-italic text-center fw-bold mb-4">
          I build responsive, user-friendly websites and turn ideas into
          seamless digital experiences.
        </h2>

        {/* Action Buttons */}
        <div>
          <a
            href={resume}
            download
            className="btn px-4 py-2 fs-5 rounded-4 shadow m-3 fw-bold gradient-btn text-white"
          >
            Download CV
          </a>
          <a
            href="#projects"
            className="d-none d-sm-inline-block btn px-4 py-2 fs-5 rounded-4 shadow m-3 fw-bold btn-dark bg-dark"
          >
            My Work
          </a>
        </div>

        {/* Social Links Grid */}
        <div className="row w-100 justify-content-center mt-5">
          {/* Facebook */}
          <div className="col-5 col-sm-6 col-md-5 col-lg-2 m-2">
            <a
              href="https://www.facebook.com/obaidansari01/"
              className="d-flex flex-column align-items-center text-dark justify-content-center text-decoration-none"
            >
              <FaFacebookSquare size={32} />
              <span className="fw-bold fs-4 mt-2">Facebook</span>
            </a>
          </div>

          {/* GitHub */}
          <div className="col-5 col-sm-6 col-md-5 col-lg-2 m-2">
            <a
              href="https://github.com/obaid-ansari"
              className="d-flex flex-column align-items-center text-dark justify-content-center text-decoration-none"
            >
              <FaGithub size={32} />
              <span className="fw-bold fs-4 mt-2">GitHub</span>
            </a>
          </div>

          {/* LinkedIn */}
          <div className="col-5 col-sm-6 col-md-5 col-lg-2 m-2">
            <a
              href="https://www.linkedin.com/in/obaid-ansari/"
              className="d-flex flex-column align-items-center text-dark justify-content-center text-decoration-none"
            >
              <FaLinkedin size={32} />
              <span className="fw-bold fs-4 mt-2">LinkedIn</span>
            </a>
          </div>

          {/* Gmail */}
          <div className="col-5 col-sm-6 col-md-5 col-lg-2 m-2">
            <a
              href="mailto:ansari.ubaid.1020@gmail.com"
              className="d-flex flex-column align-items-center text-dark justify-content-center text-decoration-none"
            >
              <SiGmail size={32} />
              <span className="fw-bold fs-4 mt-2">Mail</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
