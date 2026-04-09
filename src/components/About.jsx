import React from "react";
import Web from "../assets/aboutpic.webp";
import "../css/App.css";

const About = () => {
  return (
    <section id="about" className="py-4">
      {/* Heading */}
      <h3 className="pt-5 pb-4 display-5 fw-bold text-center">
        About <span className="gradient-text">Me</span>
      </h3>

      <div className="container px-4 pb-lg-5">
        <div className="row justify-content-center align-items-center flex-column-reverse flex-lg-row">
          {/* Text Section */}
          <div className="col-12 col-lg-6 ry p-lg-4">
            <div data-aos="fade-up" data-aos-offset="100">
              <span className="fs-3 fw-bolder gradient-text fst-italic">
                Full Stack Developer
              </span>

              <p className="fw-semibold">
                I am a Full Stack Developer specializing in building scalable
                web applications from frontend to backend. I work with
                technologies such as React, Node.js, Express, and MongoDB to
                develop responsive user interfaces, RESTful APIs, and secure
                backend systems. I focus on writing maintainable code,
                optimizing performance, and delivering reliable full-stack
                solutions.
              </p>
            </div>
            <div className="shade" data-aos="fade-up" data-aos-offset="100">
              <span className="fs-4 fw-bold gradient-text fst-italic">
                Web Development
              </span>
              <p className="fw-semibold">
                Experienced in developing responsive websites that combine
                performance with clean, accessible design, ensuring
                compatibility across all browsers and devices.
              </p>
            </div>

            <div className="shade" data-aos="fade-up" data-aos-offset="100">
              <span className="fs-4 fw-bold gradient-text fst-italic">
                MERN Expertise
              </span>
              <p className="fw-semibold">
                Skilled in building end-to-end applications using the MERN stack
                developing RESTful APIs, managing databases with MongoDB,
                creating reusable React components, and deploying secure,
                scalable solutions with Node.js and Express.js.
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div className="img-container mb-3 col-12 col-lg-5 rounded-5 p-0">
            <img
              className="img "
              src={Web}
              alt="A laptop on desk"
              loading="lazy"
            />
            <div className="shine"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
