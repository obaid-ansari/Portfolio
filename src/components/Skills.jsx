// import React from "react";
// import "../css/App.css";
// import {
//   FaHtml5,
//   FaCss3Alt,
//   FaJs,
//   FaBootstrap,
//   FaGitAlt,
//   FaGithub,
//   FaReact,
//   FaNpm,
//   FaNode,
// } from "react-icons/fa";

// import {
//   SiMongodb,
//   SiExpress,
//   SiRedux,
//   SiTypescript,
//   SiMysql,
// } from "react-icons/si";

// import { RiTailwindCssFill } from "react-icons/ri";

// const Skills = () => {
//   const skills = [
//     // Step 1 — Frontend Fundamentals
//     { name: "HTML", icon: <FaHtml5 />, classForEach: "html" },
//     { name: "CSS", icon: <FaCss3Alt />, classForEach: "css" },
//     { name: "JavaScript", icon: <FaJs />, classForEach: "js" },

//     // Step 2 — Project Workflow Tools
//     { name: "Git", icon: <FaGitAlt />, classForEach: "git" },
//     { name: "GitHub", icon: <FaGithub />, classForEach: "github" },

//     // Step 3 — Styling Frameworks
//     { name: "Bootstrap", icon: <FaBootstrap />, classForEach: "bootstrap" },

//     {
//       name: "Tailwind CSS",
//       icon: <RiTailwindCssFill />,
//       classForEach: "tailwind",
//     },

//     // Step 4 — Frontend Framework
//     { name: "React", icon: <FaReact />, classForEach: "react" },
//     { name: "Redux", icon: <SiRedux />, classForEach: "redux" },
//     { name: "TypeScript", icon: <SiTypescript />, classForEach: "typescript" },

//     // Step 5 — Backend Development
//     { name: "Node.js", icon: <FaNode />, classForEach: "node" },
//     { name: "Express.js", icon: <SiExpress />, classForEach: "express" },

//     // Step 6 — Databases
//     { name: "MongoDB", icon: <SiMongodb />, classForEach: "mongodb" },
//     { name: "MySQL", icon: <SiMysql />, classForEach: "mysql" },

//     // Step 7 — Package Management
//     { name: "NPM", icon: <FaNpm />, classForEach: "npm" },
//   ];

//   return (
//     <>
//       <h3 className="pt-5 display-5 fw-bold text-center">
//         My <span className="gradient-text">Skills</span>
//       </h3>

//       <div className="container-fluid mt-5">
//         <div className="container-skills d-flex flex-wrap gap-3 row-gap-4 container px-lg-5">
//           {skills.map((skill, idx) => (
//             <div
//               key={idx}
//               className={` ${skill.classForEach} item d-flex justify-content-center align-items-center flex-column text-center rounded-4`}
//               style={{ height: "200px" }}
//               data-aos="fade"
//               data-aos-delay={skill.delay}
//               data-aos-duration="1000"
//               data-aos-once="true"
//             >
//               <div className="display-1">{skill.icon}</div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Skills;
import React from "react";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
  FaNode,
  FaNpm,
} from "react-icons/fa";

import {
  SiRedux,
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiMysql,
} from "react-icons/si";

import { RiTailwindCssFill } from "react-icons/ri";

const Skills = () => {
  const frontend = [
    { name: "HTML", icon: <FaHtml5 className="html" /> },
    { name: "CSS", icon: <FaCss3Alt className="css" /> },
    { name: "JavaScript", icon: <FaJs className="js" /> },
    { name: "Bootstrap", icon: <FaBootstrap className="bootstrap" /> },
    { name: "Tailwind", icon: <RiTailwindCssFill className="tailwind" /> },
    { name: "React", icon: <FaReact className="react" /> },
    { name: "Redux", icon: <SiRedux className="redux" /> },
    { name: "TypeScript", icon: <SiTypescript className="typescript" /> },
  ];

  const backend = [
    { name: "Node.js", icon: <FaNode className="node" /> },
    { name: "Express.js", icon: <SiExpress className="express" /> },
    { name: "Git", icon: <FaGitAlt className="git" /> },
    { name: "GitHub", icon: <FaGithub className="github" /> },
    { name: "NPM", icon: <FaNpm className="npm" /> },
  ];

  const database = [
    { name: "MongoDB", icon: <SiMongodb className="mongodb" /> },
    { name: "MySQL", icon: <SiMysql className="mysql" /> },
  ];

  const renderSkills = (skills) =>
    skills.map((skill, i) => (
      <div key={i} className="col-6 col-md-3 col-lg-2">
        <div className="p-2 rounded-4 text-center">
          <div className="display-5 pb-2">{skill.icon}</div>
          <p className="mb-0 lead fw-semibold">{skill.name}</p>
        </div>
      </div>
    ));

  return (
    <section id="skills" className="pt-4 skill-section">
      <div className="container px-lg-5">
        {/* Title */}
        <h3 className="pt-5 mb-4 display-5 fw-bold text-center">
          My <span className="gradient-text">Skills</span>
        </h3>

        {/* Scroll Container */}
        <div className="skills-box rounded-4 shadow">
          <div className="skills-scroll rounded-4">
            {/* FRONTEND */}
            <div className="skills-page p-4">
              <h4 className="fs-2 fw-bold text-center mb-4">Frontend</h4>

              <div className="row g-4 justify-content-center">
                {renderSkills(frontend)}
              </div>
            </div>

            {/* BACKEND */}
            <div className="skills-page p-4">
              <h4 className="fs-2 fw-bold text-center mb-4">Backend </h4>

              <div className="row g-4 justify-content-center">
                {renderSkills(backend)}
              </div>
            </div>

            {/* DATABASE */}
            <div className="skills-page p-4">
              <h4 className="fs-2 fw-bold text-center mb-4">Database</h4>

              <div className="row g-4 justify-content-center">
                {renderSkills(database)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
