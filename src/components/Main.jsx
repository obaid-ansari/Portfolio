import React from "react";
import "../css/Main.css";
import Home from "../components/Home";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const Main = () => {
  return (
    <main>
      <section id="home">
        <Home />
      </section>
      <section id="about" className="py-5">
        <About />
      </section>
      <section id="skills" loading="lazy" className="pt-5 bg-white">
        <Skills />
      </section>
      <section id="projects" loading="lazy" className="py-5 bg-white">
        <Projects />
      </section>
      <section id="contact" loading="lazy" className="pt-5 bg-white">
        <Contact />
      </section>
    </main>
  );
};

export default Main;
