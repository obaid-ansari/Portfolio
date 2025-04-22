import { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://porffolio-backend.onrender.com/send", formData);
      alert("Email sent successfully!✅");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      alert("Failed to send email.❌");
    }
  };
  return (
    <>
      <h3 className="pt-5 display-5 fw-bold text-center">
        Contact <span className="gradient">Me</span>
      </h3>
      <div className="container py-5 px-4">
        <div className="row">
          <div className="col-md-12 col-lg-6 col-xl-5 text-center mb-5">
            <a
              href="https://www.linkedin.com/in/obaid-ansari-a37b60278/"
              target="_blank"
              className="text-decoration-none fs-5 fw-bold btn btn-linkedin rounded-4 px-3 m-3 ">
              <i className="fa-brands fa-linkedin fs-3 pe-2"></i>LinkedIn
            </a>
            <a
              href="https://github.com/obaid-ansari"
              target="_blank"
              className="text-decoration-none fs-5 fw-bold btn btn-github rounded-4 px-3 m-3">
              <i className="fa-brands fa-github fs-3 pe-2"></i>Github
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              className="text-decoration-none fs-5 fw-bold btn btn-facebook  rounded-4 px-3 m-3">
              <i className="fa-brands fa-facebook fs-3 pe-2"></i> Facebook
            </a>
            <a
              href="https://www.instagram.com/_ansari_obaid_?igsh=MTdoNWt2dTg5MGx4bg=="
              target="_blank"
              className="text-decoration-none fs-5 fw-bold btn btn-instagram rounded-4 px-3 m-3">
              <i className="fa-brands fa-instagram fs-3 pe-2"></i>Instagram
            </a>
            <a
              href="mailto:ansari.ubaid.1020@gmail.com"
              target="_blank"
              className="text-decoration-none fs-5 fw-bold btn btn-email rounded-4 px-3 m-3">
              <i className="fa-solid fa-envelope fs-3 pe-2"></i>Email
            </a>
          </div>
          <div className="col-md-10 col-lg-6 col-xl-5 form rounded-4 shadow">
            <form className="py-4 px-3" onSubmit={handleSubmit}>
              <p className="fs-2 fw-bold text-center text-white">Contact Me</p>
              <label className="fw-semibold text-white  fs-5" htmlFor="name">
                Name:
              </label>
              <input
                className="form-control fw-semibold my-2"
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
              />

              <label className="fw-semibold text-white fs-5" htmlFor="email">
                Email:
              </label>
              <input
                className="form-control fw-semibold my-2"
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email Address"
                required
              />

              <label className="fw-semibold text-white fs-5" htmlFor="message">
                Message:
              </label>
              <textarea
                className="form-control fw-semibold my-2"
                id="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                required></textarea>

              <button
                type="submit"
                className="btn bg-white text-secondary fs-5 fw-bold mt-2 w-100">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
