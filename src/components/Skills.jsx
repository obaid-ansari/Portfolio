import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
  FaReact,
  FaNpm,
  FaNode,
} from "react-icons/fa";
import { SiMongodb } from "react-icons/si";

const Skills = () => {
  const skills = [
    {
      name: "HTML",
      className: "html",
      icon: <FaHtml5 />,
      delay: 0,
    },
    {
      name: "CSS",
      className: "css",
      icon: <FaCss3Alt />,
      delay: 100,
    },
    {
      name: "Javascript",
      className: "js",
      icon: <FaJs />,
      delay: 200,
    },
    {
      name: "Bootstrap",
      className: "bootstrap",
      icon: <FaBootstrap />,
      delay: 0,
    },
    {
      name: "Git",
      className: "git",
      icon: <FaGitAlt />,
      delay: 100,
    },
    {
      name: "Github",
      className: "github",
      icon: <FaGithub />,
      delay: 200,
    },
    {
      name: "React",
      className: "react",
      icon: <FaReact />,
      delay: 0,
    },
    // {
    //   name: "MongoDB",
    //   className: "mongodb",
    //   icon: <SiMongodb />,
    //   delay: 100,
    // },
    {
      name: "Npm/Yarn",
      className: "npm",
      icon: <FaNpm />,
      delay: 200,
    },
    // {
    //   name: "Node js",
    //   className: "node",
    //   icon: <FaNode />,
    //   delay: 0,
    // },
  ];

  return (
    <>
      <h3 className="pt-5 display-5 fw-bold text-center">
        My <span className="gradient">Skills</span>
      </h3>
      <div className="mt-4 container-fluid text-center">
        <div className="row px-5">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className={`box ${skill.className} col-sm-12 col-md-5 col-lg-3 shadow rounded-4 m-3 p-3`}
              data-aos="fade-down"
              data-aos-delay={skill.delay}
              data-aos-duration="1000">
              <p className="display-1">{skill.icon}</p>
              <p className="fs-3 fw-bold">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
