import React from "react";
import { motion } from "framer-motion";
import GrowImage from "./assets/4737369_45241.jpg"; // Ensure path is correct

function HeroSection() {
  const cards = [
    {
      title: "View Portfolio",
      desc: "Explore my design and development work built for real clients.",
      link: "/portfolio", // ✅ Update to your actual portfolio route
    },
    {
      title: "View Blogs",
      desc: "Read tutorials, project stories, and tips for growing online.",
      link: "/blogs", // ✅ Update to your actual blog route
    },
  ];

  return (
    <motion.header
      className="text-white position-relative"
      style={{
        backgroundImage: `url(${GrowImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      {/* Dark overlay */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.75)",
          zIndex: 0,
        }}
      ></div>

      <div className="container position-relative z-1 py-5">
        <div className="row g-5 align-items-center">
          {/* LEFT: Text and Cards */}
          <div className="col-md-6">
            <h1 className="display-4 fw-bold mb-3">
              Grow Your Business with a Custom Website
            </h1>
            <a href="#contact" className="btn btn-light btn-lg mb-3">
              Get a Free Consultation 🚀
            </a>

            <ul className="text-start small">
              <li>✅ Mobile-friendly and fast websites</li>
              <li>✅ SEO-optimized blog & content systems</li>
              <li>✅ Secure login and admin panels</li>
              <li>✅ Fast delivery & ongoing support</li>
            </ul>

            <div className="row mt-4">
              {cards.map((card, idx) => (
                <div className="col-6 mb-4" key={idx}>
                  <a href={card.link} className="text-decoration-none">
                    <div className="card text-dark h-100 shadow-sm hover-shadow">
                      <div className="card-body">
                        <h5 className="card-title">{card.title}</h5>
                        <p className="card-text small">{card.desc}</p>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Contact Form */}
          <div className="col-md-6" id="contact">
            <div className="card bg-light text-dark shadow-lg p-4">
              <h4 className="card-title mb-3">Contact Me</h4>
              <form>
                <div className="mb-3">
                  <label className="form-label">Your Name</label>
                  <input type="text" className="form-control" required />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email Address</label>
                  <input type="email" className="form-control" required />
                </div>
                <div className="mb-3">
                  <label className="form-label">Phone Number (Optional)</label>
                  <input type="tel" className="form-control" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Your Message</label>
                  <textarea
                    className="form-control"
                    rows="4"
                    placeholder="Tell me about your project..."
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
}

export default HeroSection;
