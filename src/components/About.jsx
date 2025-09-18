import React from "react";
import Web from "../assets/aboutpic.webp";

const About = () => {
  return (
    <>
      <h3
        className="py-5 display-5 fw-bold text-center"
        style={{ color: "#f5f4ed" }}>
        About <span className="gradient">Me</span>
      </h3>
      <div className="container px-4 pb-0 pb-lg-5  text-start">
        <div className="row flex-column-reverse flex-lg-row">
          <div className="col-md-12 col-lg-6 p-lg-4">
            <div
              data-aos="fade-down"
              data-aos-delay="0"
              data-aos-duration="1000"
              data-aos-once="true">
              <span className="fs-3 fw-bolder gradient  fst-italic">
                Frontend & MERN
              
                 Stack Developer
              </span>
              <p
                className="fw-semibold"
                style={{ color: "#f5f4ed", fontSize: "18px" }}>
                As a passionate developer, I specialize in building dynamic,
                scalable, and high-performance web applications. With expertise
                in MongoDB, Express.js, React.js, and Node.js, I create
                full-stack solutions that seamlessly integrate robust backends
                with responsive, modern frontends.
              </p>
            </div>
            <div
              className="shade"
              data-aos="fade-down"
              data-aos-delay="200"
              data-aos-duration="1000"
              data-aos-once="true">
              <span className="fs-4 fw-bold gradient  fst-italic">
                Web Development
              </span>
              <p
                className="fw-semibold"
                style={{ color: "#f5f4ed", fontSize: "18px" }}>
                Experienced in developing responsive websites that combine
                performance with clean, accessible design, ensuring
                compatibility across all browsers and devices.
              </p>
            </div>
            <div
              className="shade"
              data-aos="fade-down"
              data-aos-delay="400"
              data-aos-duration="1000"
              data-aos-once="true">
              <span className="fs-4 fw-bold gradient fst-italic">
                MERN Expertise
              </span>
              <p
                className="fw-semibold"
                style={{ color: "#f5f4ed", fontSize: "18px" }}>
                Skilled in building end-to-end applications using the MERN stack
                developing RESTful APIs, managing databases with MongoDB,
                creating reusable React components, and deploying secure,
                scalable solutions with Node.js and Express.js.
              </p>
            </div>
          </div>
          <div
            className="img-container mb-4 col-md-12 rounded-5 col-lg-5 p-0"
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="1000"
            data-aos-once="true">
            <img
              className="img"
              src={Web}
              alt="A laptop on desk"
              loading="lazy"
            />
            <div className="shine"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
