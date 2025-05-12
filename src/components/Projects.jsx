import React from "react";
import Safa from "../assets/safa.webp";
import Onleed from "../assets/onleed.webp";
import AllProjects from "../assets/allProjects.webp";
import { FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  return (
    <>
      <h3 className="pt-5 display-5 fw-bold text-center mb-4">
        My <span className="gradient">Projects</span>
      </h3>
      <div className="container text-center px-4 p-lg-0">
        <div className="row d-flex align-items-stretch">
          <div className="col-12 col-lg-3 m-3">
            <div
              className="cards cards-1 h-100 p-3 rounded-4 d-flex flex-column shadow"
              data-aos="fade-up"
              data-aos-delay="0"
              data-aos-duration="1000"
              data-aos-once="ture">
              <img
                src={Safa}
                alt="Safa Tours And Travels"
                className="company-logo mb-3 rounded-3"
              />
              <p className="fw-semibold">
                <span className="fw-bolder">Safa Tours and Travels</span> - A
                user-friendly platform offering flight bookings, hotel stays,
                visas, holiday packages, forex, and religious tours like Hajj
                and Umrah, with direct Gmail inquiries for easy communication.
              </p>
              <a
                href="https://safatour.netlify.app/"
                target="_blank"
                className="btn btn-dark mt-auto rounded-3 shadow  fw-bold text-decoration-none d-flex">
                Safa Tours and Travels <FaExternalLinkAlt className="ms-2 align-self-center"/>
              </a>
            </div>
          </div>

          <div className="col-12 col-lg-3 m-3">
            <div
              className="cards cards-2 h-100 p-3 rounded-4 d-flex flex-column shadow"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1000"
              data-aos-once="ture">
              <img
                src={Onleed}
                alt="Onleeds Media"
                className="company-logo mb-3 rounded-3"
              />
              <p className="fw-semibold">
                <span className="fw-bolder">Onleed Media</span> - Founded in
                August 2024, Onleed Media is a digital marketing agency
                specializing in sales optimization, lead generation, targeted
                ads (Google, Meta, LinkedIn), and website development. We help
                businesses grow online with innovative strategies.
              </p>
              <a
                href="https://www.onleedmedia.com/"
                target="_blank"
                className="btn mt-auto rounded-3 btn-dark shadow fw-bold text-decoration-none d-flex">
                Onleeds Media <FaExternalLinkAlt className="ms-2 align-self-center"/>
              </a>
            </div>
          </div>

          <div className="col-12 col-lg-3 m-3">
            <div
              className="cards cards-3 h-100 p-3 rounded-4 d-flex flex-column shadow"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="1000"
              data-aos-once="ture">
              <img
                src={AllProjects}
                alt="Onleeds Media"
                className="company-logo mb-3 rounded-3"
              />
              <p className="fw-semibold">
                <span className="fw-bolder">All Projects</span> - A showcase of
                my personal and client projects, built with modern web tech and
                a focus on clean design and usability.
              </p>
              <a
                href="https://allprojectsinone.netlify.app/"
                target="_blank"
                className="btn mt-auto rounded-3 btn-dark shadow  fw-bold text-decoration-none d-flex">
                See All Projects <FaExternalLinkAlt className="ms-2 align-self-center"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
