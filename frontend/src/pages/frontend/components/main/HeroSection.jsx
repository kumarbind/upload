import React, { useState } from "react";
import { apiPost } from '../../../../utils/api';
import Swal from 'sweetalert2';
import { motion } from "framer-motion";
import { FaMobileAlt, FaShoppingCart, FaChartLine, FaUsers, FaTools, FaCogs } from "react-icons/fa";
import GrowImage from "./assets/4737369_45241.jpg"; // adjust path if needed

function HeroSection() {
  const services = [
    { title: "App Campaigning", icon: <FaMobileAlt />, desc: "Mobile apps and promotions", link: "/portfolio" },
    { title: "Booking System", icon: <FaUsers />, desc: "Custom booking & calendar", link: "/portfolio" },
    { title: "LSM/ERP", icon: <FaCogs />, desc: "Manage resources & workflow", link: "/portfolio" },
    { title: "CRM/Lead Gen", icon: <FaChartLine />, desc: "Generate & manage leads", link: "/portfolio" },
    { title: "Admin Panel", icon: <FaTools />, desc: "Custom dashboards", link: "/portfolio" },
    { title: "E-commerce", icon: <FaShoppingCart />, desc: "Online stores & payments", link: "/portfolio" },
  ];

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
    <motion.header
      className="text-white position-relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      style={{
        backgroundImage: `url(${GrowImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <div className="position-absolute top-0 start-0 w-100 h-100"
        style={{ backgroundColor: "rgba(32, 30, 30, 0.75)", zIndex: 0 }}></div>

      <div className="container position-relative z-1 py-4">
        <div className="row g-5 align-items-center">

          {/* LEFT SIDE */}
          <div className="col-md-6">
            <motion.h1 className="display-4 fw-bold mb-2"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}>
              Grow Your Business with a Custom Website
            </motion.h1>
            <p className="lead mb-3">Modern solutions built with React, Laravel & PHP</p>
            <a href="#contact" className="btn btn-light btn-lg mb-3">Get a Free Consultation 🚀</a>

            <ul className="text-start small mb-3">
              <li>✅ Mobile-friendly & fast websites</li>
              <li>✅ SEO-optimized blogs & content</li>
              <li>✅ Secure login & admin panels</li>
              <li>✅ Fast delivery & ongoing support</li>
            </ul>

            <div className="row g-2">
              {services.map((service, idx) => (
                <motion.div className="col-6 col-sm-4" key={idx} whileHover={{ scale: 1.05 }}>
                  <a href={service.link} className="text-decoration-none text-center d-block bg-primary rounded-3 p-2 text-white shadow-sm">
                    <div className="mb-1" style={{ fontSize: "1.5rem" }}>{service.icon}</div>
                    <div style={{ fontSize: "0.9rem" }}>{service.title}</div>
                  </a>
                </motion.div>
              ))}
            </div>

            <div className="d-flex gap-3 mt-4">
              <div><strong>50+</strong><br /><small>Projects</small></div>
              <div><strong>7 yrs</strong><br /><small>Experience</small></div>
              <div><strong>100%</strong><br /><small>Satisfaction</small></div>
            </div>

            <div className="bg-light text-dark p-2 rounded-3 mt-3 small">
              <em>“Webdevcreates team built our custom CRM in record time — it changed our business!”</em> — Happy Client
            </div>
          </div>

          {/* RIGHT SIDE: CONTACT FORM */}
          <motion.div className="col-md-6" id="contact"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}>
            <div className="bg-light text-dark p-2 rounded-3 mb-3 small">
              <em>“Webdevcreates team built our custom CRM in record time — it changed our business!”</em> — Happy Client
              <em>“Webdevcreates team built our custom CRM in record time — it changed our business!”</em> — Happy Client
              <em>“Webdevcreates team built our custom CRM in record time — it changed our business!”</em> — Happy Client
            </div>
            <div className="card bg-light text-dark shadow-lg p-3">
              <h4 className="card-title mb-3">Contact Me</h4>
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

              <small className="mt-2 text-muted d-block">I'll never share your data. 👍</small>
            </div>
            <div className="bg-light text-dark p-2 rounded-3 mt-3 small">
              <em>“Webdevcreates team built our custom CRM in record time — it changed our business!”</em> — Happy Client
            </div>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
}

export default HeroSection;
