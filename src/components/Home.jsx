import React, { useState, useEffect } from "react";

const Home = () => {
  const words = ["Front-end Developer", "React Developer", "Web Developer"];
  const [text, setText] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIdx];
    const fullText = currentWord;
    const typingSpeed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting && text.length < fullText.length) {
        setText(fullText.substring(0, text.length + 1));
      } else if (isDeleting && text.length) {
        setText(fullText.substring(0, text.length - 1));
      } else {
        if (!isDeleting) {
          setTimeout(() => setIsDeleting(true), 1000);
        } else {
          setIsDeleting(false);
          setWordIdx((prev) => (prev + 1) % words.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIdx]);

  return (
    <div className="container text-center mt-5 px-3">
      <p
        className="fw-bold fs-1 m-0"
        data-aos="fade-down"
        data-aos-delay="0"
        data-aos-duration="1000">
        Welcome to my world
      </p>
      <h1
        className="fw-bold display-4"
        data-aos="fade-right"
        data-aos-delay="300"
        data-aos-duration="1000">
        <span className="gradient">Obaid </span>Ansari
      </h1>
      <h2
        className="fs-2 fw-bold"
        data-aos="fade-up"
        data-aos-delay="600"
        data-aos-duration="1000">
        <span>I'm a </span>
        <span className="gradient">{text}</span>
        <span className="blink">|</span>
      </h2>

      <div
        className="row justify-content-center"
        data-aos="fade-up"
        data-aos-delay="900"
        data-aos-duration="1000">
        <div className="col-12 col-lg-6">
          <p className="fw-semibold mt-2 px-2">
            BSc IT student specializing in web development. Skilled in HTML,
            CSS, JavaScript, React.js, and Bootstrap. I build responsive,
            functional websites optimized for users and businesses.
          </p>
        </div>
      </div>

      <div
        className="social text-center my-3"
        data-aos="fade-right"
        data-aos-delay="1200"
        data-aos-duration="1000">
        <a
          href="https://www.linkedin.com/in/obaid-ansari-a37b60278/"
          target="_blank"
          className="icon-circle fs-4 linkedin">
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a
          href="https://github.com/obaid-ansari"
          target="_blank"
          className="icon-circle fs-4"
          id="github">
          <i className="fa-brands fa-github"></i>
        </a>
        <a
          href="https://www.facebook.com/"
          target="_blank"
          className="icon-circle fs-4 facebook">
          <i className="fa-brands fa-facebook"></i>
        </a>
        <a
          href="https://www.instagram.com/_ansari_obaid_?igsh=MTdoNWt2dTg5MGx4bg=="
          target="_blank"
          className="icon-circle fs-4 instagram">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a
          href="mailto:ansari.ubaid.1020@gmail.com"
          target="_blank"
          className="icon-circle fs-4 email">
          <i className="fa-solid fa-envelope"></i>
        </a>
      </div>

      <a
        download
        href="#"
        target="_blank"
        class="cv-btn btn my-4 px-3 py-2 rounded-3 bg-light text-white rounded-5 fw-bold text-decoration-none"
        data-aos="fade-up"
        data-aos-delay="1400"
        data-aos-duration="1000">
        Download CV
      </a>

      {/* Scroll Mouse Animation */}
      <div
        className="realistic-mouse-scroll"
        data-aos="fade-up"
        data-aos-delay="1600"
        data-aos-duration="1000">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
