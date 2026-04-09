import React, { useState, useEffect } from "react";
import { motion, LayoutGroup, AnimatePresence } from "framer-motion";
import { FaLink } from "react-icons/fa6";
import Safa from "../assets/safa.webp";
import Futuride from "../assets/futuride.webp";
import Krewlnax from "../assets/Krewlanxs.webp";
import Onleed from "../assets/onleed.webp";
import Weather from "../assets/weatherapp.webp";
import Curruency from "../assets/currency.webp";
import "../css/App.css";

const projects = [
  {
    id: "futuride",
    title: "Futuride",
    desc: "Futuride is your personalized career navigator designed to support students, freshers, and professionals looking to switch careers. It helps you explore the most suitable professions by aligning your interests, strengths, and academic background.",
    image: Futuride,
    link: "https://futuride.netlify.app/",
    delay: 50,
  },
  {
    id: "krewlanx",
    title: "Krewlanx Tech",
    desc: "Krewlanx Tech offers web development, UI/UX design, and digital growth solutions. Our goal is to deliver clean, user first technology that works and scales.",
    image: Krewlnax,
    link: "https://www.krewlanxtech.me/",
    delay: 100,
  },
  {
    id: "safa",
    title: "Safa Tours",
    desc: "A user-friendly platform offering flight bookings, hotel stays, visas, holiday packages, forex, and religious tours like Hajj and Umrah, with direct Gmail inquiries for easy communication.",
    image: Safa,
    link: "https://safatour.netlify.app/",
    delay: 200,
  },
  {
    id: "Onleeds",
    title: "Onleeds Media",
    desc: "Founded in August 2024, Onleed Media is a digital marketing agency specializing in sales optimization, lead generation, targeted ads (Google, Meta, LinkedIn), and website development. We help businesses grow online with innovative strategies.",
    image: Onleed,
    link: "https://onleedmedia.com/",
    delay: 50,
  },
  {
    id: "weather",
    title: "Weather App",
    desc: "A simple weather app created by me that shows real-time temperature, humidity, wind speed, and weather conditions of any city using live API data.",
    image: Weather,
    link: "https://checkweatherinfoapp.netlify.app/",
    delay: 100,
  },

  {
    id: "Currency",
    title: "Currency Converter",
    desc: "A handy tool to convert between major global currencies using live exchange rates. Designed for ease of use with real-time updates and a clean UI.",
    image: Curruency,
    link: "https://currencyconverterp.netlify.app/",
    delay: 200,
  },
];

const Projects = () => {
  const [selectedId, setSelectedId] = useState(null);

  // 🔄 Preload large images for smoother transition
  useEffect(() => {
    projects.forEach((project) => {
      const img = new Image();
      img.src = project.image;
    });
  }, []);

  return (
    <section id="projects" className="pt-4">
      <div className="container">
        <h3 className="pt-5 display-5 fw-bold text-center">
          My <span className="gradient-text">Projects</span>
        </h3>

        <LayoutGroup>
          <motion.div className="row mt-4 justify-content-center">
            {projects.map((project) => (
              <motion.div
                layoutId={project.id}
                key={project.id}
                className="col-12 col-md-5 col-lg-3 mx-2 my-3"
                onClick={() => setSelectedId(project.id)}
                style={{ cursor: "pointer" }}
                data-aos="fade-up"
                data-aos-delay={project.delay}
                data-aos-offset="100"
              >
                <motion.div
                  className="card shadow border-0 rounded-4"
                  style={{
                    backgroundImage: `url(${project.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    overflow: "hidden",
                    minHeight: "350px",
                    position: "relative",
                    willChange: "transform",
                  }}
                  layoutId={`image-${project.id}`}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      height: "80px",
                      width: "100%",
                      background:
                        "linear-gradient(rgba(0, 0, 0,0.7),transparent)",
                      color: "white",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <motion.p className="fw-bold ps-3 fs-3 d-flex">
                      {project.title}
                    </motion.p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Modal Detail View */}
          <AnimatePresence>
            {selectedId && (
              <motion.div
                className="modal-backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                style={{
                  position: "fixed",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: "rgba(200, 200, 200, 0.4)",
                  backdropFilter: "blur(15px)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  zIndex: 1000,
                }}
                onClick={() => setSelectedId(null)}
              >
                <motion.div
                  key={selectedId}
                  initial={{ opacity: 0, y: 50, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 50, scale: 0.96 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  onClick={(e) => e.stopPropagation()}
                  className="rounded-4 shadow d-flex flex-column align-items-start bg-white overflow-hidden"
                  style={{
                    width: "90%",
                    maxWidth: "600px",
                    willChange: "transform, opacity",
                    transform: "translateZ(0)",
                  }}
                >
                  {(() => {
                    const project = projects.find((p) => p.id === selectedId);
                    return (
                      <>
                        <img
                          src={project.image}
                          alt={project.title}
                          className="rounded-top-4"
                          style={{
                            width: "100%",
                            height: "350px",
                            objectFit: "cover",
                          }}
                        />
                        <motion.a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="pt-3 text-black fw-bold fs-4 px-3 d-flex align-items-center text-decoration-none"
                        >
                          {project.title} <FaLink className="ms-2" />
                        </motion.a>
                        <motion.p className="px-3 m-0 pt-1 pb-3 text-black">
                          {project.desc}
                        </motion.p>
                      </>
                    );
                  })()}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </LayoutGroup>
        <div className="d-flex justify-content-center my-4">
          <a
            href="https://allprojectsinone.netlify.app/"
            target="main"
            className="btn gradient-btn btn-lg fw-bold text-white"
          >
            See All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
