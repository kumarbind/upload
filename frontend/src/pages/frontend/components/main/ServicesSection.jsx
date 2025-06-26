import React from "react";
import { motion } from "framer-motion";

const services = [
  { title: "LMS Development", description: "Online course platforms with quizzes & login." },
  { title: "E-Commerce", description: "Online stores, cart, Razorpay/PayPal integration." },
  { title: "Blog Systems", description: "SEO-ready blog sites with WYSIWYG editors." },
  { title: "Admin Panels", description: "React + Laravel dashboards, secure & scalable." },
  { title: "Portfolio Sites", description: "Clean resume websites with download option." },
];

const ServicesSection = () => {
  return (
    <motion.div
      className="container py-5 bg-light"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <h2 className="text-center mb-4">Our Services</h2>
      <div className="row g-4">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="col-sm-6 col-md-4"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{service.title}</h5>
                <p className="card-text">{service.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ServicesSection;