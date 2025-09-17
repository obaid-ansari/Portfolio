import { useState, useEffect } from "react";
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

  useEffect(() => {
    if (submitMessage) {
      const timer = setTimeout(() => {
        setSubmitMessage("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [submitMessage]);

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    const formDataObj = new FormData(e.target);
    formDataObj.append("access_key", import.meta.env.VITE_WEB3FORM_KEY); // put your access key in .env

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataObj,
      });

      const result = await response.json();

      if (result.success) {
        setSubmitMessage("Form submitted successfully ✅");
        e.target.reset();
      } else {
        setSubmitMessage("Form submission failed ❌");
      }
    } catch (error) {
      setSubmitMessage("Something went wrong. Try again later ❌");
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/obaid-ansari/",
      icon: <FaLinkedin size={28} />,
      label: "LinkedIn",
    },
    {
      href: "https://github.com/obaid-ansari",
      icon: <FaGithub size={28} />,
      label: "GitHub",
    },
    {
      href: "https://www.facebook.com/obaidansari01/",
      icon: <FaFacebookSquare size={28} />,
      label: "Facebook",
    },
    {
      href: "https://www.instagram.com/_ansari_obaid_?igsh=MTdoNWt2dTg5MGx4bg==",
      icon: <FaInstagram size={28} />,
      label: "Instagram",
    },
    {
      href: "mailto:ansari.ubaid.1020@gmail.com",
      icon: <SiGmail size={28} />,
      label: "Email",
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
                  className={`text-decoration-none fs-5 fw-bold btn btn-light rounded-4 px-3 m-3 d-flex justify-content-center align-items-center gap-1`}
                  style={{ color: "#101011" }}
                  aria-label={link.label}>
                  {link.icon}
                  {link.label}
                </a>
              ))}
            </div>
            {/* Contact form */}
            <div className="col-lg-8 mt-4 mt-lg-0">
              <form
                onSubmit={onSubmit}
                className="ps-lg-4"
                style={{ color: "#f5f4ed" }}>
                <p className="fs-3 fw-bold gradient">Get in touch</p>

                {/* Hidden fields for Web3Forms customization */}
                <input
                  type="hidden"
                  name="subject"
                  value="New Portfolio Message"
                />
                <input type="hidden" name="replyto" value="%email%" />

                <label htmlFor="name" className="fw-semibold fs-6">
                  Name:
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="form-control bg-light fw-semibold my-2"
                />

                <label htmlFor="email" className="fw-semibold fs-6">
                  Email:
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email Address"
                  required
                  className="form-control bg-light fw-semibold my-2"
                />

                <label htmlFor="message" className="fw-semibold fs-6">
                  Message:
                </label>
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Write your message..."
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
