import { useState, useEffect } from "react";
import axios from "axios";
import {
  FaFacebookSquare,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  const [submitMessage, setSubmitMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    if (submitMessage) {
      const timer = setTimeout(() => {
        setSubmitMessage("");
      }, 3000); // auto-dismiss after 4 seconds
      return () => clearTimeout(timer);
    }
  }, [submitMessage]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      await axios.post("/send", formData);
      setSubmitMessage("Form submitted successfully. ✅");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setSubmitMessage("Form submission failed. Please try later! ❌");
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/obaid-ansari-a37b60278/",
      icon: <FaLinkedin size={32} className="pe-2" />,
      label: "LinkedIn",
      type: "brand",
    },
    {
      href: "https://github.com/obaid-ansari",
      icon: <FaGithub size={32} className="pe-2" />,
      label: "GitHub",
      type: "brand",
    },
    {
      href: "https://www.facebook.com/obaidansari01//",
      icon: <FaFacebookSquare size={32} className="pe-2" />,
      label: "Facebook",
      type: "brand",
    },
    {
      href: "https://www.instagram.com/_ansari_obaid_?igsh=MTdoNWt2dTg5MGx4bg==",
      icon: <FaInstagram size={32} className="pe-2" />,
      label: "Instagram",
      type: "brand",
    },
    {
      href: "mailto:ansari.ubaid.1020@gmail.com",
      icon: <SiGmail size={32} className="pe-2" />,
      label: "Email",
      type: "solid",
    },
  ];
  return (
    <>
      {/* Fixed Alert at Top-Right */}
      {submitMessage && (
        <div
          style={{
            position: "fixed",
            top: "80px",
            right: "20px",
            zIndex: 999900,
            maxWidth: "400px",
          }}>
          <div
            className={`alert ${
              submitMessage.includes("successfully")
                ? "alert-success"
                : "alert-danger"
            } `}
            role="alert">
            {submitMessage}
          </div>
        </div>
      )}

      <div className="pb-2">
        <h3
          className="pt-5 display-5 fw-bold text-center"
          style={{ color: "#f5f4ed" }}>
          Contact <span className="gradient">Me</span>
        </h3>
        <div
          className="container px-4 py-5 d-flex justify-content-center"
          data-aos="fade"
          data-aos-delay="0"
          data-aos-duration="1000"
          data-aos-once="ture">
          <div
            className="row shadow col-lg-10 align-items-stretch p-2 rounded-4"
            style={{ background: "#ba9df159" }}>
            <div className="col-lg-4 col-12 form text-center rounded-4 p-3 d-flex justify-content-center flex-column">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-decoration-none fs-5 fw-bold btn btn-light rounded-4 px-3 m-3 d-flex justify-content-center align-items-center`}
                  style={{ color: "#101011" }}
                  aria-label={link.label}>
                  {link.icon}
                  {link.label}
                </a>
              ))}
            </div>
            <div className="col-lg-8 m-lg-0 mt-4 col-12 rounded-4">
              <form
                className="ps-lg-4"
                style={{ color: "#f5f4ed" }}
                onSubmit={handleSubmit}>
                <p className="fs-2 fw-bold gradient">Get in touch</p>

                <label htmlFor="name" className="fw-semibold fs-5">
                  Name:
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="form-control bg-light fw-semibold my-2"
                />

                <label htmlFor="email" className="fw-semibold fs-5">
                  Email:
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email Address"
                  required
                  className="form-control bg-light fw-semibold my-2"
                />

                <label htmlFor="message" className="fw-semibold fs-5">
                  Message:
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  required
                  className="form-control bg-light fw-semibold my-2"></textarea>

                <button
                  type="submit"
                  className="btn form text-white fs-5 fw-bold my-2 w-100"
                  disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
