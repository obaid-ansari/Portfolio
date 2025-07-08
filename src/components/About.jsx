import React from "react";
import Web from "../assets/aboutpic.webp";

const About = () => {
  return (
    <>
      <h3
        className="py-5 display-5 fw-bold text-center"
        style={{ color: "#1f2937" }}>
        About <span className="gradient">Me</span>
      </h3>
      <div className="container px-3 pb-0 pb-lg-5  text-start">
        <div className="row flex-column-reverse flex-lg-row">
          <div className="col-md-12 col-lg-6 p-lg-4">
            <div
              data-aos="fade-down"
              data-aos-delay="0"
              data-aos-duration="1000"
              data-aos-once="true">
              <h4 className="fs-3 fw-bolder gradient">
                Frontend & React Developer
              </h4>
              <p
                className="fw-semibold"
                style={{ color: "#1f2937", fontSize: "18px" }}>
                As a passionate Frontend and React Developer, I specialize in
                building fast, responsive, and visually appealing websites and
                web applications. With a solid foundation in HTML, CSS,
                JavaScript, and modern frameworks like React.js and Bootstrap, I
                create seamless user experiences that work across all devices.
              </p>
            </div>
            <div
              className="shade"
              data-aos="fade-down"
              data-aos-delay="200"
              data-aos-duration="1000"
              data-aos-once="true">
              <h4 className="fs-4 fw-bold gradient">Web Development</h4>
              <p
                className="fw-semibold"
                style={{ color: "#1f2937", fontSize: "18px" }}>
                Skilled in creating responsive websites that blend performance
                with design, focusing on clean code, accessibility, and
                compatibility across all browsers.
              </p>
            </div>
            <div
              className="shade"
              data-aos="fade-down"
              data-aos-delay="400"
              data-aos-duration="1000"
              data-aos-once="true">
              <h4 className="fs-4 fw-bold gradient">React Expertise</h4>
              <p className="fw-semibold" style={{ color: "#1f2937", fontSize: "18px" }}>
                Experienced in React.js, building scalable single-page apps with
                reusable components, hooks, and smooth, user-focused
                interactions.
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
