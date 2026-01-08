import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaPhp, FaLaravel } from 'react-icons/fa';
import { SiBootstrap, SiCodeigniter, SiYii } from 'react-icons/si';
import React, { useState } from "react";
import { apiPost } from '../../../../utils/api';
import Swal from 'sweetalert2';

function ContactSection() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const data = await apiPost('main/createlead', formData);
      console.log("API response:", data);

      Swal.fire({
        title: 'Thank you!',
        text: 'Your message has been sent successfully.',
        icon: 'success',
        confirmButtonText: 'OK'
      });

      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      console.error("Submission error:", err);

      Swal.fire({
        title: 'Oops!',
        text: 'Something went wrong. Please try again later.',
        icon: 'error',
        confirmButtonText: 'OK'
      });

      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <section id="contact" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">Contact Us</h2>
        <div className="row g-4 align-items-start">
          
          {/* LEFT: Intro & skills */}
          <div className="col-md-6">
            <div className="mb-3">
              <p className="lead">
                We’re a creative team of web developers and designers led by <strong>WebDevCreatrs Developrs</strong>, ready to help you bring your ideas to life.
              </p>
              <p>
                Whether you need a landing page, e-commerce site, or a full-scale dashboard, we build modern, responsive, and scalable solutions tailored to your vision.
              </p>
            </div>
            <div>
              <h5 className="mb-3">Technologies We Use</h5>
              <div className="d-flex flex-wrap gap-3 fs-3">
                <FaHtml5 title="HTML5" className="text-danger" />
                <FaCss3Alt title="CSS3" className="text-primary" />
                <SiBootstrap title="Bootstrap" className="text-purple" />
                <FaReact title="React" className="text-info" />
                <FaNodeJs title="Node.js" className="text-success" />
                <FaPhp title="PHP" className="text-dark" />
                <FaLaravel title="Laravel" className="text-danger" />
                <SiCodeigniter title="CodeIgniter" className="text-warning" />
                <SiYii title="Yii" className="text-success" />
              </div>
              <p className="mt-2">
                We combine these tools to deliver products that are fast, secure, and user-friendly.
              </p>
            </div>
          </div>

          {/* RIGHT: Contact form */}
          <div className="col-md-6">
            <div className="card shadow-sm p-4">
              <h5 className="mb-2">Get in Touch</h5>
              <p className="text-muted mb-3">
                Let’s discuss your project or answer your questions. We’d love to hear from you!
              </p>
              <form onSubmit={handleSubmit}>
                <div className="form-floating mb-2">
                  <input type="text" className="form-control" placeholder="Your Name"
                    name="name" value={formData.name} onChange={handleChange} required />
                  <label>Your Name</label>
                </div>
                <div className="form-floating mb-2">
                  <input type="email" className="form-control" placeholder="Email"
                    name="email" value={formData.email} onChange={handleChange} required />
                  <label>Email Address</label>
                </div>
                <div className="form-floating mb-2">
                  <input type="tel" className="form-control" placeholder="Phone"
                    name="phone" value={formData.phone} onChange={handleChange} />
                  <label>Phone Number (Optional)</label>
                </div>
                <div className="form-floating mb-2">
                  <textarea className="form-control" placeholder="Your message..."
                    style={{ height: "100px" }}
                    name="message" value={formData.message} onChange={handleChange} required></textarea>
                  <label>Your Message</label>
                </div>
                <button type="submit" className="btn btn-primary w-100" disabled={loading}>
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>

              {error && <div className="alert alert-danger mt-2">❌ {error}</div>}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default ContactSection;
