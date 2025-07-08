import React from "react";
import "../css/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div
        className="text-center border-top border-secondary"
        style={{ backgroundColor: "#fff" }}>
        <p className="fw-semibold m-0 py-3" style={{ color: "#1f2937" }}>
          &copy; 2025 Obaid Ansari. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
