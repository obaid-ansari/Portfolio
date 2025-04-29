import { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [submitMessage, setSubmitMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      await axios.post("https://porffolio-backend.onrender.com/send", formData);
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
      icon: "linkedin",
      label: "LinkedIn",
      className: "btn-linkedin",
      type: "brand",
    },
    {
      href: "https://github.com/obaid-ansari",
      icon: "github",
      label: "GitHub",
      className: "btn-github",
      type: "brand",
    },
    {
      href: "https://www.facebook.com/",
      icon: "facebook",
      label: "Facebook",
      className: "btn-facebook",
      type: "brand",
    },
    {
      href: "https://www.instagram.com/_ansari_obaid_?igsh=MTdoNWt2dTg5MGx4bg==",
      icon: "instagram",
      label: "Instagram",
      className: "btn-instagram",
      type: "brand",
    },
    {
      href: "mailto:ansari.ubaid.1020@gmail.com",
      icon: "envelope",
      label: "Email",
      className: "btn-email",
      type: "solid",
    },
  ];

  return (
    <>
      <h3 className="pt-5 display-5 fw-bold text-center">
        Contact <span className="gradient">Me</span>
      </h3>

      <div className="container py-5 px-4">
        <div className="row">
          <div className="col-md-12 col-lg-6 col-xl-5 text-center mb-5">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-decoration-none fs-5 fw-bold btn ${link.className} rounded-4 px-3 m-3`}
                aria-label={link.label}>
                <i
                  className={`fa-${
                    link.type === "solid" ? "solid" : "brands"
                  } fa-${link.icon} fs-3 pe-2`}></i>
                {link.label}
              </a>
            ))}
          </div>

          <div className="col-md-10 col-lg-6 col-xl-5 form rounded-4 shadow">
            <form className="py-4 px-3" onSubmit={handleSubmit}>
              <p className="fs-2 fw-bold text-center text-white">Contact Me</p>

              <label htmlFor="name" className="fw-semibold text-white fs-5">
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
                className="form-control fw-semibold my-2"
              />

              <label htmlFor="email" className="fw-semibold text-white fs-5">
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
                className="form-control fw-semibold my-2"
              />

              <label htmlFor="message" className="fw-semibold text-white fs-5">
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
                className="form-control fw-semibold my-2"></textarea>

              <button
                type="submit"
                className="btn bg-white text-secondary fs-5 fw-bold my-2 w-100"
                disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>

              {isSubmitting && (
                <div className="text-center">
                  <div className="spinner-border text-light my-2" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              )}

              {submitMessage && (
                <p className="text-center fw-semibold mt-2 m-0 text-white">
                  {submitMessage}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
