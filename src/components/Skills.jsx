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
import { SiMongodb, SiExpress } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";

const Skills = () => {
  const skills = [
    { name: "HTML", icon: <FaHtml5 />, delay: 0, classForEach: "html" },
    { name: "CSS", icon: <FaCss3Alt />, delay: 100, classForEach: "css" },
    { name: "Javascript", icon: <FaJs />, delay: 200, classForEach: "js" },
    {
      name: "Bootstrap",
      icon: <FaBootstrap />,
      delay: 0,
      classForEach: "bootstrap",
    },
    { name: "Git", icon: <FaGitAlt />, delay: 100, classForEach: "git" },
    { name: "Github", icon: <FaGithub />, delay: 200, classForEach: "github" },
    { name: "React", icon: <FaReact />, delay: 0, classForEach: "react" },
    {
      name: "MongoDB",
      icon: <SiMongodb />,
      delay: 100,
      classForEach: "mongodb",
    },
    { name: "Npm/Yarn", icon: <FaNpm />, delay: 200, classForEach: "npm" },
    {
      name: "Tailwind CSS",
      icon: <RiTailwindCssFill />,
      delay: 0,
      classForEach: "tailwind",
    },
    { name: "Node js", icon: <FaNode />, delay: 0, classForEach: "node" },
    {
      name: "Express js",
      icon: <SiExpress />,
      delay: 100,
      classForEach: "express",
    },
  ];

  const getBoxStyle = (idx) => {
    const growStyle = { flexGrow: 1, minWidth: "18%" };
    const fixedStyle = (width) => ({ width });

    // Special: make only 4th box (idx === 3) flex-grow
    if (idx === 3) return growStyle;

    switch (idx + 1) {
      case 1:
      case 6:
      case 7:
      case 12:
        return fixedStyle("40%");
      case 2:
      case 5:
      case 8:
      case 11:
        return fixedStyle("30%");
      case 3:
      case 9:
      case 10:
        return growStyle;
      case 4:
        return fixedStyle("25%");
      default:
        return fixedStyle("20%");
    }
  };

  return (
    <>
      <h3
        className="pt-5 display-5 fw-bold text-center"
        style={{ color: "#f5f4ed" }}>
        My <span className="gradient">Skills</span>
      </h3>

      <div className="container-fluid mt-5">
        <div className="d-flex flex-wrap gap-3 row-gap-4 container px-lg-5">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className={` ${skill.classForEach} d-flex justify-content-center align-items-center text-center rounded-4`}
              style={{ height: "200px", ...getBoxStyle(idx) }}
              data-aos="fade"
              data-aos-delay={skill.delay}
              data-aos-duration="1000"
              data-aos-once="true">
              <div className="display-1 pb-3">{skill.icon}</div>
              {/* <div className="fs-5">{skill.name}</div> */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
