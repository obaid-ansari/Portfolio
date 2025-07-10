import React, { useState, useEffect } from "react";
import { FaFacebookSquare, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const roles = ["A Web Developer", "A React Developer", "A Front-end Developer"];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationKey((prev) => prev + 1);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % roles.length);
      }, 400);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container text-white mt-5 d-flex flex-column align-items-center justify-content-center min-vh-100">
      {/* Heading */}
      <h1
        className="display-4 fw-light gradient mb-4"
        style={{ display: "inline" }}
        data-aos="fade"
        data-aos-delay="200"
        data-aos-duration="1000"
        data-aos-once="true">
        Obaid Ansari
      </h1>

      {/* Dynamic Role */}
      <h2
        className="fs-1 fw-light mb-4"
        data-aos="fade"
        data-aos-delay="400"
        data-aos-duration="1000"
        data-aos-once="true">
        <span key={animationKey} className="fade-up-text">
          {roles[index]}
        </span>
      </h2>

      {/* Description */}
      <p
        className="display-6 fst-italic text-center fw-bold mb-4"
        data-aos="fade"
        data-aos-delay="600"
        data-aos-duration="1000"
        data-aos-once="true">
        I build responsive, user-friendly websites and turn ideas into seamless
        digital experiences.
      </p>

      {/* Action Buttons */}
      <div
        data-aos="fade"
        data-aos-delay="800"
        data-aos-duration="1000"
        data-aos-once="true">
        <a
          href="./public/obaidresume.pdf"
          download
          className="btn px-4 fs-5 rounded-4 shadow m-3 fw-semibold btn-light">
          Download CV
        </a>
        <a
          href="#projects"
          className="d-none d-sm-inline-block btn btn-outline-light fs-5 rounded-4 shadow m-3 fw-bold">
          My Work
        </a>
      </div>

      {/* Social Links Grid */}
      <div
        className="row w-100 mt-4"
        data-aos="fade"
        data-aos-delay="1000"
        data-aos-duration="1000"
        data-aos-once="true">
        {/* Facebook */}
        <div className="col-5 col-sm-6 col-md-5 col-lg-2 m-2">
          <a
            href="https://www.facebook.com/obaidansari01/"
            className="d-flex flex-column align-items-center justify-content-center text-white text-decoration-none">
            <FaFacebookSquare size={32} />
            <span className="fw-bold fs-4 mt-2">Facebook</span>
          </a>
        </div>

        {/* GitHub */}
        <div className="col-5 col-sm-6 col-md-5 col-lg-2 m-2">
          <a
            href="https://github.com/obaid-ansari"
            className="d-flex flex-column align-items-center justify-content-center text-white text-decoration-none">
            <FaGithub size={32} />
            <span className="fw-bold fs-4 mt-2">GitHub</span>
          </a>
        </div>

        {/* LinkedIn */}
        <div className="col-5 col-sm-6 col-md-5 col-lg-2 m-2">
          <a
            href="https://www.linkedin.com/in/obaid-ansari-a37b60278/"
            className="d-flex flex-column align-items-center justify-content-center text-white text-decoration-none">
            <FaLinkedin size={32} />
            <span className="fw-bold fs-4 mt-2">LinkedIn</span>
          </a>
        </div>

        {/* Gmail */}
        <div className="col-5 col-sm-6 col-md-5 col-lg-2 m-2">
          <a
            href="mailto:ansari.ubaid.1020@gmail.com"
            className="d-flex flex-column align-items-center justify-content-center text-white text-decoration-none">
            <SiGmail size={32} />
            <span className="fw-bold fs-4 mt-2">Mail</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
