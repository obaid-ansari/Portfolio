import React, { useState } from "react";
import { toast } from "react-toastify";
import {
  FaFacebookSquare,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);

    try {
      const formData = new FormData(event.target);

      formData.append("access_key", import.meta.env.VITE_WEB3FORM_KEY);

      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const res = await response.json();

      if (res.success) {
        toast.success("Message sent Successfully!");
        event.target.reset();
      } else {
        toast.error(res.message || "Message not sent");
      }
    } catch (error) {
      toast.error("Network error. Please try again.");
    }

    setLoading(false);
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
      <section className="pt-4" id="contact">
        <h3 className="pt-5 display-5 fw-bold text-center">
          Contact <span className="gradient-text">Me</span>
        </h3>

        <div
          className="container px-4 py-5 d-flex justify-content-center"
          data-aos="zoom-out-up"
          data-aos-offset="100"
        >
          <div
            className="row shadow col-lg-10 align-items-stretch p-2 rounded-4"
            style={{ background: "#9772fd66" }}
          >
            <div className="col-lg-4 col-12 form text-center rounded-4 p-3 d-flex justify-content-center flex-column">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none fs-5 fw-bold btn btn-light rounded-4 px-3 m-3 d-flex justify-content-center align-items-center gap-1"
                  aria-label={link.label}
                >
                  {link.icon}
                  {link.label}
                </a>
              ))}
            </div>

            {/* Contact form */}
            <div className="col-lg-8 mt-4 mt-lg-0">
              <form onSubmit={onSubmit} className="ps-lg-4">
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
                  id="name"
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
                  id="email"
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
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Write your message..."
                  required
                  className="form-control bg-light fw-semibold my-2"
                ></textarea>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn form text-white fs-5 fw-bold my-2 w-100"
                >
                  {loading ? "Sending..." : "Submit"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
