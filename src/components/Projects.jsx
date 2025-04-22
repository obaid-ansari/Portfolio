import React from "react";
import Safa from "../assets/safa.webp";
import Onleed from "../assets/onleed.webp";
import AllProjects from "../assets/allProjects.webp";

const Projects = () => {
  return (
    <>
      <h3 className="pt-5 display-5 fw-bold text-center mb-4">
        My <span className="gradient">Projects</span>
      </h3>
      <div class="container text-center px-4 p-lg-0">
        <div class="row d-flex align-items-stretch">
          <div class="col-12 col-lg-3 m-3">
            <div class="cards h-100 p-3 rounded-4 d-flex flex-column shadow">
              <img
                src={Safa}
                alt="Safa Tours And Travels"
                class="company-logo mb-3 rounded-3"
              />
              <p class="fw-semibold">
                <span class="fw-bolder">Safa Tours and Travels</span> - A
                user-friendly platform offering flight bookings, hotel stays,
                visas, holiday packages, forex, and religious tours like Hajj
                and Umrah, with direct Gmail inquiries for easy communication.
              </p>
              <a
                href="https://safatour.netlify.app/"
                target="_blank"
                class="btn mt-auto rounded-3 bg-light text-black shadow fw-bold text-decoration-none">
                Safa Tours and Travels
              </a>
            </div>
          </div>

          <div class="col-12 col-lg-3 m-3">
            <div class="cards h-100 p-3 rounded-4 d-flex flex-column shadow">
              <img
                src={Onleed}
                alt="Onleeds Media"
                class="company-logo mb-3 rounded-3"
              />
              <p class="fw-semibold">
                <span class="fw-bolder">Onleed Media</span> - Founded in August
                2024, Onleed Media is a digital marketing agency specializing in
                sales optimization, lead generation, targeted ads (Google, Meta,
                LinkedIn), and website development. We help businesses grow
                online with innovative strategies.
              </p>
              <a
                href="https://www.onleedmedia.com/"
                target="_blank"
                class="btn mt-auto rounded-3 bg-light text-black shadow fw-bold text-decoration-none">
                Onleeds Media
              </a>
            </div>
          </div>

          <div class="col-12 col-lg-3 m-3">
            <div class="cards h-100 p-3 rounded-4 d-flex flex-column shadow">
              <img
                src={AllProjects}
                alt="Onleeds Media"
                class="company-logo mb-3 rounded-3"
              />
              <p className="fw-semibold">
                <span className="fw-bolder">All Projects</span> - A showcase of
                my personal and client projects, built with modern web tech and
                a focus on clean design and usability.
              </p>
              <a
                href="https://allprojectsinone.netlify.app/"
                target="_blank"
                class="btn mt-auto rounded-3 bg-light text-dark shadow  fw-bold text-decoration-none">
                See All Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
