import React, { useEffect } from "react";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";

import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 900, // animation speed
      once: true, // animate only once
      easing: "ease",
      once: "true",
    });
  }, []);

  return (
    <>
      <Header />
      <Home />
      <Footer loading="lazy" />
    </>
  );
};

export default App;
