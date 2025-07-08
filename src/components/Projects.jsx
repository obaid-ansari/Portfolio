import React, { useState, useEffect } from "react";
import { motion, LayoutGroup, AnimatePresence } from "framer-motion";
import SafaS from "../assets/safaS.webp";
import OnleedS from "../assets/onleedS.webp";
import AllprojectS from "../assets/AllProjectSmall.webp";
import SafaL from "../assets/safaL.webp";
import OnleedL from "../assets/onleedL.webp";
import AllprojectL from "../assets/AllProjectSmall.webp";
import { FaLink } from "react-icons/fa6";
import "../css/Main.css";

const projects = [
  {
    id: "safa",
    title: "Safa Tours and Travels",
    desc: "A user-friendly platform offering flight bookings, hotel stays, visas, holiday packages, forex, and religious tours like Hajj and Umrah, with direct Gmail inquiries for easy communication.",
    Simage: SafaS,
    Limage: SafaL,
    link: "https://safatour.netlify.app/",
    colorText: "#291f06",
  },
  {
    id: "onleed",
    title: "Onleed Media",
    desc: "Onleed Media is a digital marketing agency specializing in sales optimization, targeted ads (Google, Meta, LinkedIn), and website development. We help businesses grow online with innovative strategies.",
    Simage: OnleedS,
    Limage: OnleedL,
    link: "https://www.onleedmedia.com/",
    colorText: "#000",
  },
  {
    id: "all",
    title: "All Projects",
    desc: "A showcase of my personal and client projects, built with modern web tech and a focus on clean design and usability.",
    Simage: AllprojectS,
    Limage: AllprojectL,
    link: "https://allprojectsinone.netlify.app/",
    colorText: "#000",
  },
];

const Projects = () => {
  const [selectedId, setSelectedId] = useState(null);

  // 🔄 Preload large images for smoother transition
  useEffect(() => {
    projects.forEach((project) => {
      const img = new Image();
      img.src = project.Limage;
    });
  }, []);

  return (
    <div className="projects-section container py-5">
      <h2 className="text-center mb-4 fw-bold display-5">
        My <span className="gradient">Projects</span>
      </h2>

      <LayoutGroup>
        <motion.div className="row mt-4 justify-content-center p-2">
          {projects.map((project) => (
            <motion.div
              layoutId={project.id}
              key={project.id}
              className="col-12 col-md-5 col-lg-3 m-2"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              onClick={() => setSelectedId(project.id)}
              style={{ cursor: "pointer" }}>
              <motion.div
                className="card shadow border-0 rounded-4"
                style={{
                  backgroundImage: `url(${project.Simage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  overflow: "hidden",
                  minHeight: "450px",
                  position: "relative",
                  willChange: "transform",
                }}
                layoutId={`image-${project.id}`}>
                <div
                  style={{
                    color: project.colorText,
                    position: "absolute",
                    top: 0,
                    left: 0,
                  }}>
                  <motion.p className="fw-bold ps-3 pt-1 fs-2">
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
                background: "rgba(0, 0, 0, 0.3)",
                backdropFilter: "blur(5px)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 10000,
              }}
              onClick={() => setSelectedId(null)}>
              <motion.div
                key={selectedId}
                initial={{ opacity: 0, y: 50, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 50, scale: 0.96 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                onClick={(e) => e.stopPropagation()}
                className="text-light rounded-4 shadow d-flex flex-column align-items-start"
                style={{
                  width: "90%",
                  maxWidth: "600px",
                  background: "#222",
                  willChange: "transform, opacity",
                  transform: "translateZ(0)",
                }}>
                {(() => {
                  const project = projects.find((p) => p.id === selectedId);
                  return (
                    <>
                      <img
                        src={project.Limage}
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
                        className="pt-3 fw-bold fs-4 px-3 d-flex align-items-center text-decoration-none text-light">
                        {project.title} <FaLink className="ms-2" />
                      </motion.a>
                      <motion.p className="px-3 m-0 pt-1 pb-3">
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
    </div>
  );
};

export default Projects;
