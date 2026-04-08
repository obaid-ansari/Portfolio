import React from "react";

const Footer = () => {
  return (
    <footer className="border-top py-4">
      <div className="container text-center">
        <p className="small m-0">
          © {new Date().getFullYear()} Built with focus on quality and
          scalability.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
